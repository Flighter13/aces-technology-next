---
title: Purik Sensor System
description: An open-architecture, modular multi-sensor demonstrator for
  embedded aviation systems education and prototyping.
date: 2025-01-15
tags:
  - embedded-systems
  - sensors
  - modularity
  - prototyping
draft: false
featured: true
image: /images/purik-header-bg.jpg
status: Active
partner: ACES Technology
---

## Purik Sensor System: Design, Development, and Demonstration

The Purik Sensor System is a compact, modular technology demonstrator that models core features of combat-aircraft sensor suites. It combines real-time sensor acquisition, embedded computing, and wireless data transmission in an open-architecture framework.

## Design and Architecture

Built on the Arduino Uno R4 WiFi platform, the system integrates components such as:

- HC-SR04 ultrasonic sensing in a servo-driven scan configuration
- IR proximity sensing for short-range analog distance estimation
- DHT11 environmental sensing for temperature and humidity telemetry
- Modular interfaces that support rapid plug-and-play sensor expansion

## Development Framework

The implementation uses dedicated firmware modules for system configuration, telemetry handling, networking, and dashboard output. This structure supports scalable development and real-time HTTP communication for demonstrations and testing.

Data can be visualized through lightweight web or Python dashboards that emulate key concepts from modern aircraft mission interfaces.

## Applications and Demonstrations

Purik is used for engineering education, public demonstrations, and modular sensor prototyping. It serves as a low-risk analog to advanced embedded avionics workflows, enabling teams to explore:

- Sensor fusion fundamentals
- Real-time telemetry pipelines
- Modular subsystem design patterns
- Rapid iterative integration and test methods

## Future Vision

Planned iterations include:

- LiDAR integration for expanded ranging and mapping use cases
- RF communication modules for distributed sensing experiments
- Machine learning analysis pipelines for telemetry classification

These enhancements are intended to increase the platform's value as a next-generation systems demonstrator for collaborative air battlespace concepts.
