---
title: "KEAM Helpdesk — API Security Assessment"
date: "2026-07-20"
excerpt: "Black-box security assessment of KEAM admission helpdesk identifying missing rate limiting, absent input validation, wildcard CORS, and missing security headers on a single-endpoint Next.js application."
tags: ["Security Research", "Pentesting", "High", "Vulnerability Disclosure"]
published: true
---

## Summary

Black-box API security review of `admissionhelpdeskgect.vercel.app` — a Next.js app with a single `/api/feedback` endpoint. **2 High, 1 Medium, 2 Low** findings.

---

## Findings

### 3.1 No Rate Limiting (HIGH | CWE-770)
15/15 rapid anonymous POST requests accepted with no throttling. Enables spam flooding and cost amplification on Vercel serverless.

### 3.2 No Input Validation (HIGH | CWE-20)
`<script>` tags, CRLF sequences, and 120KB payloads all accepted. Stored XSS potential and email header injection risk.

### 3.3 Wildcard CORS (MEDIUM | CWE-942)
`Access-Control-Allow-Origin: *` allows third-party sites to script mass submissions from visitors' browsers.

### 3.4 robots.txt Route Exposure (LOW)
Lists `/api/` prefix and full sitemap structure.

### 3.5 Missing Security Headers (LOW)
No CSP, X-Frame-Options, X-Content-Type-Options, or Referrer-Policy.

---

*Black-box, unauthenticated testing — July 20, 2026.*
