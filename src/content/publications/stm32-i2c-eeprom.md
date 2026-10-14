---
title: I²C EEPROM Communication on STM32 Nucleo-G071RB
summary: Embedded-systems course work implementing byte read/write operations on M24-series EEPROM devices with different addressing conventions.
year: 2025
category: academic
status: Course technical report — public summary
origin: UVA ECE 3430 Embedded Computing
authors: Joshua Parr
order: 2
disclaimer: Source report contains a student identifier, so only a derived factual summary is published pending a properly reviewed redacted edition.
---
## Technical objective
Develop and test byte-read and byte-write functions between an STM32 Nucleo-G071RB microcontroller and M24C02, M24256, and M24M01 EEPROMs.

## Design approach
The report addresses one- and two-byte memory address formats and page selection for the larger M24M01 device. Logic-analyzer and debugger observations were used to inspect I²C start/stop signals, memory addressing, and data exchanges.

## Publication status
Summary based on original coursework, not a claim of an independent peer-reviewed experiment.
