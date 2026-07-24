---
title: "Attack Surface Mapping — From Domain to Vulnerability"
date: "2026-07-10"
excerpt: "A systematic methodology for mapping attack surfaces during penetration tests, covering subdomain enumeration, technology fingerprinting, endpoint discovery, and asset organization."
tags: ["Security Research", "Pentesting", "Recon", "Methodology", "High"]
published: true
---

## Overview

Effective penetration testing begins with comprehensive attack surface mapping. Without a complete picture of the target's digital footprint, critical vulnerabilities will be missed. This post outlines my methodology for systematic reconnaissance.

---

## Phase 1: Passive Reconnaissance

Gather information without touching the target's infrastructure.

**Sources:**
- Certificate Transparency logs (crt.sh)
- DNS records (ANY, AXFR attempts)
- WHOIS data
- Shodan/Censys
- Google dorking
- GitHub dorking (hardcoded keys, configs)
- Wayback Machine for historical endpoints

**Tooling:**
- `amass intel` for ASN and domain discovery
- `subfinder` for passive subdomain enumeration
- `gau` for URL gathering from multiple sources

---

## Phase 2: Active Reconnaissance

Once passive recon is complete, move to active probing.

### Subdomain Enumeration

```
# DNS brute-force
puredns bruteforce subdomains.txt target.com

# Resolve and validate
puredns resolve subs.txt -r resolvers.txt

# Permutation scanning
alterate --subs subs.txt --perm perms.txt
```

### Technology Fingerprinting

```
# HTTP probe
httpx -l subs.txt -status-code -title -tech-detect -o tech.txt

# Screenshot for visual analysis
gowitness file -f subs.txt
```

---

## Phase 3: Endpoint Discovery

Map the application surface:

- Crawl discovered web applications
- Parse JavaScript files for hidden endpoints
- API documentation analysis
- Mobile app deeplink extraction
- GraphQL introspection queries

```
# Directory brute-force
ffuf -u https://target.com/FUZZ -w wordlist.txt

# Parameter discovery
ffuf -u https://target.com/page?FUZZ=test -w params.txt

# JavaScript analysis
katana -u https://target.com -jc -o endpoints.txt
```

---

## Phase 4: Asset Organization

Structure findings for vulnerability analysis:

| Category | Examples |
|----------|----------|
| Authentication | Login, SSO, OAuth, SAML |
| API Endpoints | REST, GraphQL, SOAP |
| File Upload | Profile pics, attachments |
| Admin Panels | /admin, /dashboard, /console |
| Third-Party | CDNs, analytics, payment |

---

## Phase 5: Prioritization

Not all assets have equal value. Prioritize based on:

1. **Data sensitivity** — Does it handle PII, tokens, or payment data?
2. **Authentication required** — Public vs authenticated endpoints
3. **Technology age** — Old frameworks, unpatched libraries
4. **Attack complexity** — Simple misconfigurations vs complex exploits
5. **Business impact** — What happens if this is compromised?

---

## Automation Pipeline

Most of this workflow is automated using a Docker-based pipeline:

```
docker-compose run --rm recon target.com
```

Output feeds directly into the vulnerability analysis phase, reducing manual effort while maintaining researcher oversight.

---

*This methodology is continuously refined through active bug bounty hunting and penetration testing engagements.*
