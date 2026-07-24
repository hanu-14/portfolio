---
title: "PIA Bug Bounty — Negative Amount Tax Calculation Flaw"
date: "2026-07-21"
excerpt: "Business logic vulnerability in Private Internet Access tax calculation API accepting negative total_amount values, propagating negative monetary values through order lines and summary fields without validation."
tags: ["Security Research", "API Security", "Medium", "Vulnerability Disclosure"]
published: true
---

## Summary

The `/api/tax` endpoint on `api.privateinternetaccess.com` accepts negative values for `total_amount` and processes them through the server-side tax calculation engine without validation.

---

## Vulnerability

**Severity**: Medium | **CVSS**: 5.3 | **CWE**: CWE-20

The tax calculation endpoint accepts user-controlled input for `total_amount` and passes it directly to the tax engine without verifying non-negative values.

### Evidence

Baseline request with `total_amount=100` returns correct calculation. Request with `total_amount=-1` returns HTTP 200 with negative monetary values propagated through all fields.

Extreme value `1e308` returns malformed empty error message, suggesting unhandled exception path.

---

## Impact

Negative amounts produce tax documents with negative monetary values. If output feeds into purchase/checkout flows, this could manipulate order totals or credits.

---

## Remediation

1. Add server-side validation to reject negative values with 422 response
2. Validate all monetary inputs against non-negative bounded range
3. Fix malformed error response for extreme values

---

*Submitted to YesWeHack — Private Internet Access program.*
