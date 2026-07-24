---
title: "23andMe — Internal Infrastructure Disclosure via HTML Comments"
date: "2026-07-18"
excerpt: "Internal AWS EC2 hostnames and build metadata exposed in HTML comments on api.23andme.com, revealing production auto-scaling group topology across 9 unique instances in us-west-2."
tags: ["Security Research", "API Security", "Low", "Vulnerability Disclosure"]
published: true
---

## Summary

Two submissions against 23andMe HackerOne program covering infrastructure information disclosure and WordPress plugin enumeration.

---

## Submission 1: Internal AWS Infrastructure Disclosure
**Severity**: Low | **CWE**: CWE-200

HTML comments on `api.23andme.com` expose internal EC2 hostnames, git commit SHA, and release candidate tags. 15 requests revealed 9 unique internal hostnames behind a load balancer in `us-west-2`.

**Exposed data:**
- EC2 hostnames rotating per request (ALB-backed pool)
- Git commit SHA: `34a4bce3ec595a9829d5988e03fb35d4ac50cfbc`
- Release tag: `rc-215805`

The `/status/` endpoint also returns build metadata without authentication.

## Submission 2: WordPress Plugin Enumeration
**Severity**: Informational

`www.23andme.org/education` exposes active WordPress plugins via REST API root: WP Super Cache, MailerLite, GetResponse, FluentCRM.

---

*Submitted to HackerOne — 23andMe program.*
