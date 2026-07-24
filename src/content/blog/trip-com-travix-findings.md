---
title: "Trip.com Group — Internal AWS IP Disclosure & CORS Misconfiguration"
date: "2026-07-23"
excerpt: "Three findings on Trip.com/Travix infrastructure: internal AWS backend IP addresses leaked via response headers, wildcard CORS with credentialed requests on production API, and IDOR on Trustpilot order data via predictable MongoDB ObjectIds."
tags: ["Security Research", "API Security", "High", "Vulnerability Disclosure", "Pentesting"]
published: true
---

## Summary

Security assessment against Trip.com Group / Travix bug bounty program covering `*.travix.com` and `*.cheaptickets.nl`. Three findings across infrastructure disclosure, CORS misconfiguration, and authorization bypass.

---

## Findings

### Report 1: Internal Network Topology Disclosure via Response Headers
**Severity**: High | **CWE**: CWE-200

`meta-api.travix.com` leaks internal RFC1918 IP addresses (`10.14.x.x` range) in `x-service-hostip` and `soa20-service-hostip` headers. 50+ requests revealed rotating IPs across a large microservices mesh. Prometheus `/metrics` endpoint also exposed without authentication.

### Report 2: Wildcard CORS with Credentialed Requests
**Severity**: High | **CWE**: CWE-942

`rest.cheaptickets.nl` serves public SOA APIs with wildcard CORS and reflected origin + `credentials: true`. Frontend SDK hardcoded to send user actions to this host.

### Report 3: IDOR on Trustpilot Order Data
**Severity**: Medium | **CWE**: CWE-639

`order_trustpilot` endpoint exposes order-tied review data via guessable MongoDB ObjectId `integrationId`. Adjacent IDs return 500 errors, confirming per-record lookups without authorization.

---

*Assessment conducted via HackerOne program. Findings submitted for triage.*
