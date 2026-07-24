---
title: "CS-D-41GPU — 8 Critical Vulnerabilities in ISP-Grade Router Firmware"
date: "2026-07-23"
excerpt: "Full disclosure of 8 vulnerabilities discovered in the CS-D-41GPU (BXG-400) ONU/router during a comprehensive firmware security audit, including backdoor accounts, hardcoded credentials, and unauthenticated root shell access."
tags: ["Security Research", "IoT", "Firmware", "Vulnerability Disclosure", "Critical"]
---

# CS-D-41GPU — Firmware Security Audit

**Device:** CS-D-41GPU ONU/Router (BXG-400) — ISP-issued customer premises equipment  
**Hardware:** ARMv7 Cortex-A7, Broadcom BCM6878 SoC  
**Kernel:** Linux 4.19.235  
**Severity:** Critical  

---

## Executive Summary

A comprehensive firmware security assessment of an ISP-grade ONU/router uncovered **8 distinct vulnerabilities**, ranging from hardcoded backdoor accounts granting unauthenticated root shell access to persistent configuration issues that survive factory resets. The findings collectively enable full device compromise from the local network without any authentication.

> ⚠️ Specific credentials, firmware hashes, and exploitation payloads have been redacted from this public disclosure pending vendor remediation.

---

## Vulnerability Summary

| # | Title | Severity | Vector |
|---|-------|----------|--------|
| V-01 | Hardcoded Backdoor Account | Critical | LAN |
| V-02 | Unauthenticated Root Shell via Telnet | Critical | LAN |
| V-03 | Hardcoded Wi-Fi Default Credentials | High | RF |
| V-04 | Unencrypted Credential Storage in Flash | High | Physical |
| V-05 | Web Admin Panel Authentication Bypass | High | LAN |
| V-06 | Unauthenticated CWMP/TR-069 Exposure | Medium | WAN |
| V-07 | Firmware Integrity Not Verified on Boot | Medium | Physical |
| V-08 | Persistent Debug Interface Enabled | Low | LAN |

---

## Key Findings

### V-01 — Hardcoded Backdoor Account (Critical)

A manufacturer-level account with a static, hardcoded credential is present across all firmware versions analyzed. This account has full root-level access to the device shell and web management interface.

**Impact:** Complete device takeover from the local network without user interaction.

**Remediation:** Remove hardcoded accounts; implement per-device credential generation and rotation during manufacturing.

---

### V-02 — Unauthenticated Root Shell via Telnet (Critical)

The Telnet daemon is enabled by default and accessible on the LAN interface. Combined with V-01, this provides immediate unauthenticated root shell access to any attacker on the same network segment.

**Impact:** Full OS-level access — attacker can read/write flash, pivot to ISP management network, or install persistent backdoors.

---

### V-03 — Hardcoded Default Wi-Fi Credentials (High)

The factory-default Wi-Fi passphrase follows a deterministic pattern derivable from publicly available device identifiers. An attacker within RF range can compute the default passphrase without device interaction.

---

### V-04 — Unencrypted Credential Storage in Flash (High)

Device credentials are stored in plaintext in a data MTD partition. Physical or local-network access to the device exposes these secrets directly.

---

### V-05 — Web Admin Panel Authentication Bypass (High)

The embedded web management interface contains an authentication middleware bypass. Specific API endpoints are reachable without a valid session, returning sensitive configuration data.

---

### V-06 — Unauthenticated CWMP / TR-069 Exposure (Medium)

The TR-069 management interface does not require mutual TLS or per-device authentication tokens, exposing remote management capabilities to unauthenticated parties on the WAN.

---

## Responsible Disclosure

- Findings reported to the OEM and ISP responsible for device provisioning.
- Public disclosure follows a 90-day coordinated disclosure policy.
- Critical technical details (payloads, exact firmware offsets, credentials) withheld pending patch availability.

---

## Methodology

- Firmware extraction via UART + TFTP
- Static analysis using Binwalk, Ghidra, and custom scripts
- Dynamic testing on physical device
- Scope limited to customer-premises equipment only
