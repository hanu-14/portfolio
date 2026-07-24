---
title: "Bluehost AEM Content Fragment Exposure"
date: "2026-07-21"
excerpt: "Unauthenticated read access to internal AEM Content Fragments on www.bluehost.com exposing pricing model fragments, creator metadata, and a live test fragment in production."
tags: ["Security Research", "AEM", "Medium", "Vulnerability Disclosure"]
published: true
---

## Summary

The AEM Content Fragment API at `/api/assets/bluehost/` allows unauthenticated users to enumerate and retrieve internal content fragments not referenced by the public frontend.

---

## Findings

### Unauthenticated Content Fragment Access
**Severity**: Medium | **CVSS**: 5.3 | **CWE**: CWE-200

**Exposed content:**
- Internal pricing model content fragments (pre-storefront-rendering data)
- AEM content fragment model paths revealing implementation structure
- Creator/modifier metadata
- A live test fragment with developer placeholder data in production

### Write Operations Confirmed Non-Functional

PUT, POST, and DELETE all return HTTP 404 — read-only over-exposure issue, not authentication bypass.

---

## Impact

Meaningful reconnaissance value against the storefront/pricing pipeline. Exposed AEM pricing fragments are backend/internal-only content not meant for public consumption.

---

## Remediation

1. Restrict anonymous access to only required content fragments
2. Apply AEM permissions to internal/pricing folders
3. Remove test fragments from production
4. Strip creator/modifier metadata from public API responses

---

*Submitted to Bugcrowd — Web.com Bug Bounty.*
