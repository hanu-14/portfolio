---
title: "Firmware Reverse Engineering — Getting Started with Router Security Research"
date: "2026-06-28"
excerpt: "A practical introduction to firmware reverse engineering for IoT and router devices, covering extraction techniques, static analysis, emulation, and vulnerability discovery."
tags: ["Security Research", "Firmware", "IoT", "Reverse Engineering", "Medium"]
published: true
---

## Overview

Router and IoT firmware presents a rich attack surface often overlooked in standard web application security assessments. This guide covers the essential techniques for getting started with firmware security research.

---

## Step 1: Firmware Acquisition

**Sources:**
- Vendor support pages (official firmware downloads)
- OEM/ODM shared repositories
- OTA update interception
- SPI flash dumping via clip/programmer
- Serial console boot log extraction

**Hardware tools (for physical extraction):**
- CH341A programmer with SOP8/SOP16 clip
- Bus Pirate
- Saleae logic analyzer
- FT232RL USB-to-TTL adapter

---

## Step 2: Firmware Extraction

Most router firmware is distributed as compressed or encrypted images.

```bash
# Check file type
file firmware.bin

# Binwalk automatic extraction
binwalk -Me firmware.bin

# Manual extraction
dd if=firmware.bin bs=1 skip=$OFFSET count=$SIZE of=rootfs.squashfs
unsquashfs rootfs.squashfs

# uImage/U-Boot extraction
dumpimage -i firmware.bin -p 0 kernel.bin
```

**Common filesystems encountered:**
- SquashFS (read-only rootfs)
- UBIFS (writable data partitions)
- JFFS2 (flash filesystems)
- CPIO archives (initramfs)

---

## Step 3: Static Analysis

Once extracted, analyze the filesystem:

```bash
# List all binaries
find . -type f -executable -o -name "*.so" | sort

# Check binary architecture
file ./usr/sbin/httpd

# Search for credentials
grep -r "password" --include="*.cfg" --include="*.conf" --include="*.xml"
grep -r "admin" ./etc/

# Look for backdoors
grep -r "telnetd" .
grep -r "debug" ./bin/

# Check for hardcoded keys
strings ./usr/sbin/httpd | grep -i "key\|secret\|token\|passwd"
```

**Key files to examine:**
- `/etc/passwd`, `/etc/shadow` — user accounts
- `/etc/inittab` — init configuration
- `/etc/config/` — device-specific configuration
- `/usr/sbin/httpd` — web server binary
- `init scripts` — boot process

---

## Step 4: Firmware Emulation

Emulate the firmware for dynamic analysis:

```bash
# Using Firmadyne
sudo python3 scripts/makeimage.py -f firmware.bin -a mipsel
sudo ./scratch/run.sh

# Using FAT (Firmware Analysis Toolkit)
python3 fat.py firmware.bin
```

Or manually with QEMU:

```bash
# Extract and prepare rootfs
cp rootfs.squashfs ./image/
cd image && unsquashfs rootfs.squashfs

# Run with QEMU
sudo qemu-system-mipsel -M malta -kernel vmlinux \
  -drive file=rootfs.squashfs,format=raw \
  -append "root=/dev/sda console=ttyS0" \
  -nographic
```

---

## Step 5: Vulnerability Discovery

Common firmware vulnerabilities:

1. **Hardcoded credentials** in configuration files or binary strings
2. **Backdoor accounts** (shared UID 0 across multiple users)
3. **Telnet/SSH enabled** by default on WAN interfaces
4. **Unpatched services** (old versions of BusyBox, httpd, etc.)
5. **Command injection** in web UI forms or ping/traceroute
6. **Buffer overflows** in HTTP parsing or UPnP
7. **Insecure update mechanisms** (unsigned/unencrypted firmware)
8. **Information disclosure** via debug interfaces

---

## Tools Summary

| Tool | Purpose |
|------|---------|
| `binwalk` | Firmware extraction and analysis |
| `firmwalker` | Automated firmware file system analysis |
| `Firmadyne` | Full system emulation |
| `Ghidra` | Binary reverse engineering |
| `GDB` | Dynamic debugging |
| `QEMU` | Cross-architecture emulation |
| `strings` | Binary string extraction |
| `firmware-mod-kit` | Firmware modification toolkit |

---

## Responsible Disclosure

When vulnerabilities are found:

1. Document all findings with proof of concept
2. Attempt to contact vendor through security channels
3. Allow reasonable timeline for remediation (typically 90 days)
4. Publish only after vendor confirmation or timeline expiry

---

*This guide reflects techniques used in active firmware security research across multiple ISP-grade and consumer router devices.*
