---
name: tasky-implement
description: Implement a task with a rigorous workflow, ideation sub-agents, and dedicated code review.
---

# Tasky Implement

This skill provides a structured, multi-step workflow for implementing technical tasks. It ensures architectural alignment, user involvement, and high code quality.

## Objective

Implement a given task while following a rigorous process, guided by `.ai/CODE_REFERENCE.md`.

## Workflow

### Step 1: Context Gathering
- Read the task description.
- Read `.ai/CODE_REFERENCE.md` to understand patterns, rules, and constraints.
- Explore existing files related to the task to identify implementation points.

### Step 2: Ideation (Sub-agent)
- Spawn an **Ideation Agent** (`.ai/agents/ideation-agent.md`) to research and compare implementation options.
- The sub-agent must return a comparison table and conditional recommendations.

### Step 3: User Discussion
- Present the options to the user and ask for a decision or refinement.
- **STOP AND WAIT FOR USER INPUT**. Ensure the plan is fully understood and agreed upon.

### Step 4: Execution (Sub-agent)
- Once the plan is confirmed, spawn an **Execution Agent** (`.ai/agents/execution-agent.md`) to implement it.
- The agent must handle deviations (Rule 1-4) and commit each task atomically.

### Step 5: Review (Sub-agent)
- After execution, spawn a **Review Agent** (`.ai/agents/review-agent.md`) to analyze the new code.
- Check for bugs, security, and quality issues.
- The agent must return a severity-classified review table.

### Step 6: Final Summary
- Summarize the work done.
- Address any issues found in the review (decide whether to fix now or defer).
- Provide a step-by-step testing guide for the user.

## Rules
- **NEVER** skip a step.
- **NEVER** proceed to execution without user confirmation in Step 3.
- **ALWAYS** perform a code review.
- **ALWAYS** adhere to `.ai/CODE_REFERENCE.md`.
