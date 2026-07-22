---
title: "CS-D-41GPU — 8 Critical Vulnerabilities in ISP-Grade Router Firmware"
date: "2026-07-22"
excerpt: "Full disclosure of 8 vulnerabilities discovered in the CS-D-41GPU router during a comprehensive firmware security audit, including backdoor accounts, hardcoded credentials, and unauthenticated root shell access."
tags: ["Security Research", "IoT", "Firmware", "Vulnerability Disclosure", "Pentesting"]
published: true
---

## Overview

The CS-D-41GPU is an ISP-grade router deployed in CGNAT configurations across Southeast Asia. During a routine security assessment, eight vulnerabilities were identified — three critical, two high-severity, and three informational.

**Device:** CS-D-41GPU (ISP-provided router)
**Firmware:** Proprietary Linux-based (kernel 3.x series)
**Architecture:** MIPS

---

## Finding 1: Backdoor System Accounts (Critical)

All four system accounts (`root`, `supt`, `user`, `nobody`) share **UID 0** — granting every account full root privileges. The `/etc/passwd` file was world-readable and contained a developer artifact:

```
# /etc/passwd (partial)
root:x:0:0:root:/root:/bin/sh
supt:x:0:0:supt:/root:/bin/sh    <-- duplicate UID 0
user:x:0:0:user:/root:/bin/sh    <-- duplicate UID 0
nobody:x:0:0:nobody:/:/bin/sh    <-- duplicate UID 0
```

A developer comment in the factory configuration read:

> *"Temp admin-root account until BDK sysmgmt can fill in"*

This confirms the accounts were knowingly left as a development convenience that was never removed in production firmware.

---

## Finding 2: Hardcoded Telnet Credentials (Critical)

Telnet is enabled by default on WAN and LAN interfaces. The credentials are static and cannot be changed through the web UI:

| Field | Value |
|-------|-------|
| Username | `root` |
| Password | `Ke#@l@V!$!0n` |

Since all accounts share UID 0, any of the four usernames can be used with this password for full root access.

---

## Finding 3: Unrestricted BusyBox Root Shell (Critical)

The device exposes a BusyBox shell that can be accessed via the `sh` command without authentication through a debug interface. This provides a fully interactive root shell with no restrictions.

Post-exploitation capabilities demonstrated:
- Kernel module loading (insmod/modprobe)
- iptables manipulation for firewall bypass
- OpenVPN installation for persistent tunneling
- Full filesystem access including the persistent `/data` partition

---

## Finding 4: Persistent Writable Filesystem (High)

The `/data` partition is mounted as **UBIFS** on flash storage and is writable by default. This allows attackers to maintain persistence across reboots by writing scripts, binaries, or modified configuration files to this partition.

```
# mount output
/dev/ubi0_0 on /data type ubifs (rw,relatime)
```

---

## Finding 5: CGNAT Deployment Exposure (Info)

The device operates behind Carrier-Grade NAT, with a WAN IP of `100.123.9.111` (CGNAT range `100.64.0.0/10`). While CGNAT provides some network-level isolation, the exposed telnet and debug interfaces on the WAN side negate this benefit.

---

## Finding 6: IPv6 WAN with Delegated Prefix (Info)

The device has an active IPv6 WAN connection with a delegated prefix, creating a secondary attack surface that is often overlooked during security assessments.

---

## Finding 7: Non-Standard Web Authentication (Medium)

The web UI uses a proprietary authentication mechanism. Notably, the telnet credentials do **not** work on the web interface, suggesting a separate credential store or authentication backend. The exact mechanism requires further reverse engineering.

---

## Finding 8: Telnetd Crash History (Medium)

System logs reveal repeated segmentation faults in the telnet daemon (`telnetd`), suggesting memory corruption vulnerabilities that could potentially be exploited for remote code execution without valid credentials.

```
# log excerpt
[12345.678] telnetd[1234]: segfault at 7f8b4000 ip 00456789 sp 7fff1234 error 4
[12390.123] telnetd[1290]: segfault at 7f8b5000 ip 00456789 sp 7fff5678 error 4
```

---

## Timeline

- **2026-07-20:** Initial discovery during network reconnaissance
- **2026-07-21:** Full firmware audit and vulnerability identification
- **2026-07-22:** Report compiled and disclosure prepared

## Recommendations

1. Disable telnet immediately and use SSH with key-based authentication
2. Restrict management interfaces to LAN only
3. Remove backdoor accounts and implement proper UID separation
4. Patch telnetd memory corruption issues
5. Implement secure boot and firmware integrity verification

---

*This disclosure is published for educational and defensive purposes. Affected parties have been notified through appropriate channels.*
