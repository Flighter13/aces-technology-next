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

The project applies modular open-systems ideas at prototype scale. Its architecture separates sensing, transport, processing, presentation, and power management so each layer can evolve independently.

## Iteration 1

The first working prototype used an Arduino UNO R4 WiFi with ultrasonic ranging, time-of-flight LiDAR, and environmental sensing. The controller hosted a local access point and delivered measurements to a browser-based dashboard.

### Demonstrated capabilities

- Simultaneous acquisition from multiple sensor types
- Local wireless access without external network infrastructure
- Browser-based data presentation
- A foundation for common sensor metadata and discovery

## Iteration 2 objective

Iteration 2 expands PURiK from a single connected demonstration into a distributed research platform. The architecture separates mobile sensor nodes from a ground station and gives sensing, transport, processing, presentation, and power management explicit responsibilities.

## Reference architecture

| Layer | Current or planned implementation | Responsibility |
| --- | --- | --- |
| Ground compute | Arduino UNO Q | Linux/Python processing, device adapters, analysis, and operator interface |
| Embedded nodes | Arduino UNO R4 WiFi | Deterministic sensor drivers, local acquisition, and radio/Wi-Fi transport |
| Radar | TI IWRL6432BOOST | mmWave presence and target-data research through USB CDC interfaces |
| Ranging | Slamtec RPLIDAR A1M8 | 360-degree 2D environmental ranging |
| Navigation | SparkFun MAX-M10S | GNSS position, altitude, speed, heading, and fix-quality data over Qwiic/I²C |
| Motion | GY-521, planned | Local inertial measurements for platform-state context |
| Communications | NRF24L01+PA+LNA and Wi-Fi, planned integration | Separation of mobile nodes and the ground station |
| Power instrumentation | INA260, planned integration | Bus voltage, current, and power telemetry |

## Verified Iteration 2 progress

- The UNO Q application builds and runs on the Arduino Zephyr platform.
- The MAX-M10S has produced valid GNSS fixes, including satellite count, altitude, speed, and heading fields.
- The UNO Q Linux environment enumerates both XDS110 USB CDC interfaces exposed by the TI development board.
- Communication with the TI mmWave CLI has been established and the connected platform and software versions identified.
- The radar configuration flow includes controlled sensor stop, configuration, and start stages.
- The architecture distinguishes ground-station compute from mobile embedded sensor nodes.

These statements describe integration milestones. They do not yet claim fused radar/LiDAR tracking, automatic discovery of every payload, or a completed wireless multi-node demonstration.

## Device recognition concept

The intended plug-and-play workflow takes inspiration from stores-management and mission-system architectures without claiming equivalence to an aircraft-qualified implementation. Each payload will expose a device identity, supported measurements, units, update rate, interface requirements, power needs, and driver version. A registry and adapter layer can then select a compatible driver and publish normalized data to the rest of the system.

## Power architecture

Iteration 2 treats power as its own subsystem. The design direction supports either regulated USB-C input or an RC-style LiPo source through appropriate protection and conversion. Separate power domains, common grounding, current capacity, transient behavior, connector control, and graceful shutdown must be verified before mobile operation. An INA260 monitor is intended to provide current, voltage, and power evidence at a selected distribution point; it is instrumentation, not the regulator or protection device.

## Open-systems focus

The value of PURiK is not a single sensor combination. It is the repeatable integration method: define the device, separate it behind an adapter, normalize its output, publish its capabilities, and allow the user interface to adapt to the connected payload.

MOSA provides the governing design direction. OMS, FACE, and SOSA are studied as reference architectures for interface discipline, portable software, module profiles, and conformance evidence. PURiK is an independent educational research platform and is not represented as certified or compliant with those standards.

## Current status

Iteration 1 is operational. Iteration 2 integration has demonstrated GNSS acquisition and communication with the TI radar development board. Current work emphasizes a stable power subsystem, driver and payload-adapter definitions, common data contracts, interface documentation, verification procedures, and a more capable ground-station dashboard before broader hardware expansion.

## Next verification gates

1. Establish and document the protected power-distribution baseline.
2. Capture repeatable GNSS and radar interface tests with configuration records.
3. Define the first versioned sensor identity and normalized message schema.
4. Demonstrate one UNO R4 mobile node exchanging structured data with the UNO Q ground station.
5. Integrate additional sensing only after interfaces and evidence are stable.
