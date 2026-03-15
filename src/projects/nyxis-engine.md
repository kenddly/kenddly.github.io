---
layout: layouts/project.njk
description: A Vulkan-based game engine from scratch.
title: Nyxis Engine
projectId: "0x04"
status: archived
stack: [Vulkan, C++20, ImGui, ECS]
platforms: [Windows, Linux, macOS]
heroImage: /assets/images/nyxis-hero.png
github: https://github.com/kenddly/Nyxis-Engine
---

## The Problem Space

Building a Vulkan-based game engine from scratch means wrestling with the API directly. No abstractions, no helpers—just raw memory management, synchronization, and pipeline barriers.

### The Pipeline Challenge

The transition from transfer layouts to shader layouts required careful barrier management. This is where most tutorials stop, but I needed hot-reloading without restarting the engine.

### Architecture Decisions

Implemented a sparse-set ECS rather than archetype-based (like EnTT) to maintain readability while learning. The trade-off was cache locality vs. code clarity—chose clarity for a solo learning project.

## Key Features

- **Hot-reloading**: Shader and pipeline recompilation on file change
- **Cross-platform**: Windows/Linux/macOS via CMake and MoltenVK
- **Editor**: Full ImGui-based editor with docking and scene hierarchy

## Outcome

Nyxis achieved its primary goal: teaching me graphics programming at the API level. The engine runs, edits scenes, hot-reloads assets, and exports builds. Archived as the learning curve shifts from "understanding Vulkan" to "writing a production renderer"—a different project entirely.
