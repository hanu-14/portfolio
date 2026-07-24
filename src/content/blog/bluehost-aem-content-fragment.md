---
title: "Bluehost AEM — Unauthenticated Content Fragment API Exposure"
date: "2026-07-21"
excerpt: "Unauthenticated read access to internal AEM content fragments on www.bluehost.com exposing pricing models, internal metadata, and live test content via an unprotected asset API."
tags: ["Security Research", "AEM", "Web Security", "Vulnerability Disclosure", "Medium"]
---

# Bluehost — AEM Content Fragment API Over-Exposure

**Target:** www.bluehost.com  
**Platform:** Adobe Experience Manager (AEM)  
**Program:** Web.com Bug Bounty (Bugcrowd)  
**Severity:** Medium (CVSS 5.3)  
**Status:** Submitted — Under Review  

---

## Summary

The AEM Content Fragment API exposed on `www.bluehost.com` allows unauthenticated users to enumerate and retrieve internal content fragments and metadata that are not referenced by the public frontend. This is a **read-only over-exposure issue** — write operations (PUT/POST/DELETE) were confirmed non-functional, returning HTTP 404.

---

## What Was Exposed

- Internal pricing model content fragments feeding the storefront pipeline
- AEM content fragment model paths, revealing internal implementation structure
- Creator/modifier metadata (usernames of internal editors)
- A **live test fragment** with developer placeholder data published directly to production

> ⚠️ Specific endpoint paths and AEM fragment content redacted from public disclosure per program policy.

---

## Technical Context

The public storefront retrieves pricing via separate application endpoints — the exposed AEM fragments are backend/internal content that should not be directly reachable. The asset listing API returned approximately 37 entities across multiple internal folders including pricing, theme assets, and account management content.

---

## Impact

An unauthenticated attacker can:
1. Enumerate internal content structure and folder hierarchy
2. Retrieve pricing model fragments ahead of storefront rendering (competitive intelligence)
3. Identify internal AEM model paths — useful for further AEM-specific attack chaining
4. Confirm test content is live in production (developer hygiene indicator)

No credentials, PII, or session data were exposed. No write access was achieved.

---

## Remediation

1. Restrict anonymous access to only the content fragments required by the public frontend
2. Apply AEM permissions to internal/pricing folders so they require authentication
3. Remove the published test fragment from the production environment
4. Review Dispatcher rules to expose only minimum required AEM API surface
