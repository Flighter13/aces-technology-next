---
title: PURiK Modular Sensor System
summary: A modular embedded sensing testbed designed to shorten the path from newly connected hardware to useful, networked data.
status: In development
year: 2026
featured: true
disciplines:
  - Embedded systems
  - Sensor fusion
  - MOSA
  - Human-machine interfaces
order: 1
---

## Project brief

PURiK explores a practical question: how can heterogeneous sensors be integrated, identified, and presented through a common interface without rebuilding the entire system for each payload?

The project applies modular open-systems ideas at prototype scale. Its architecture separates sensing, transport, processing, and presentation so each layer can evolve independently.

## Iteration 1

The first working prototype used an Arduino UNO R4 WiFi with ultrasonic ranging, time-of-flight LiDAR, and environmental sensing. The controller hosted a local access point and delivered measurements to a browser-based dashboard.

### Demonstrated capabilities

- Simultaneous acquisition from multiple sensor types
- Local wireless access without external network infrastructure
- Browser-based data presentation
- A foundation for common sensor metadata and discovery

## Iteration 2 architecture

The current research direction separates the mobile sensor node from the ground station. An Arduino UNO Q serves as the higher-capability ground interface while TI IWRL6432 mmWave radar, Slamtec 2D LiDAR, GNSS, and radio links extend the sensing architecture.

## Engineering focus

The value of PURiK is not a single sensor combination. It is the repeatable integration method: define the device, normalize its output, publish its capabilities, and allow the user interface to adapt to the connected payload.

## Current status

Iteration 1 is operational. Iteration 2 integration has demonstrated GNSS acquisition and communication with the TI radar development board. Work is temporarily focused on documentation, verification, and portfolio presentation before further hardware expansion.
