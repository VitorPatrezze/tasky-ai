---
name: tasky-auto-implement
description: Implement a task autonomously with ideation sub-agents and dedicated code review.
---

# Tasky Auto-Implement

This skill provides a structured, autonomous workflow for implementing technical tasks. It is optimized for speed and reliability, making independent technical decisions.

## Objective

Implement a given task autonomously while following a rigorous process, guided by `.ai/CODE_REFERENCE.md`.

## Workflow

### Step 1: Context Gathering
- Read the task description.
- Read `.ai/CODE_REFERENCE.md` to understand patterns, rules, and constraints.
- Explore existing files related to the task to identify implementation points.

### Step 2: Ideation & Planning (Sub-agent)
- Spawn an **Ideation Agent** (`.ai/agents/ideation-agent.md`) to research and compare implementation options.
- The sub-agent must autonomously select the best approach and formulate a plan.

### Step 3: Execution (Sub-agent)
- Execute the selected plan using an **Execution Agent** (`.ai/agents/execution-agent.md`).
- The agent must handle deviations (Rule 1-4) and commit each task atomically.

### Step 4: Review (Sub-agent)
- After execution, spawn a **Review Agent** (`.ai/agents/review-agent.md`) to analyze the new code.
- Check for bugs, security, and quality issues.

### Step 5: Final Summary
- Summarize the work done.
- Address any issues found in the review.
- Provide a step-by-step testing guide for the user.

## Rules
- **NEVER** skip a step.
- **NEVER** ask for user confirmation in Step 2.
- **ALWAYS** perform a code review.
- **ALWAYS** adhere to `.ai/CODE_REFERENCE.md`.
