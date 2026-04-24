---
name: tasky-auto-implement
description: Implement a task autonomously with ideation sub-agents and dedicated code review.
---

# Tasky Auto-Implement

This skill provides a structured, autonomous workflow for implementing technical tasks. It is optimized for speed and reliability, making independent technical decisions.

## Objective

Implement a given task autonomously while following a rigorous process, guided by the project's reference documents in the `.ai/` directory.

## Workflow

### Step 1: Context Gathering
- Read the task description.
- Read `.ai/CODE_REFERENCE.md` to understand architecture, tech stack, and project structure.
- Read `.ai/PROJECT_PATTERNS.md` to understand established design patterns and how to extend them.
- Read `.ai/CODE_QUALITY_GUIDELINES.md` to understand naming conventions and quality standards.
- Read `.ai/PRODUCT_REQUIREMENTS.md` to understand the product vision and ensure the task aligns with it.
- Explore existing files related to the task to identify implementation points.

### Step 2: Ideation & Planning (Sub-agent)
- Spawn an **Ideation Agent** (`.ai/agents/ideation-agent.md`) to research and compare implementation options.
- The sub-agent must autonomously select the best approach and formulate a plan.

### Step 3: Execution (Sub-agent)
- Execute the selected plan using an **Execution Agent** (`.ai/agents/execution-agent.md`).
- The agent must follow `.ai/CODE_QUALITY_GUIDELINES.md` for all code written.
- The agent must follow `.ai/TEST_PATTERNS.md` when writing or modifying tests.
- The agent must handle deviations (Rule 1-4) and commit each task atomically.

### Step 4: Review (Sub-agent)
- After execution, spawn a **Review Agent** (`.ai/agents/review-agent.md`) to analyze the new code.
- The review must follow the checklist defined in `.ai/CODE_REVIEW_GUIDELINES.md`.
- The review must verify test coverage using `.ai/TEST_PATTERNS.md` as reference.

### Step 5: Final Summary
- Summarize the work done.
- Address any issues found in the review.
- Provide a step-by-step testing guide for the user.

### Step 6: (Optional) Update Reference Documents
- If the changes impact the project's architecture, patterns, or guidelines, update the relevant `.ai/` reference files.
- Use the `tasky-synthesize` skill to ensure consistency.
- Let the user know if you made changes to any reference documents and what was changed.

## Rules
- **NEVER** skip a step.
- **NEVER** ask for user confirmation in Step 2.
- **ALWAYS** perform a code review.
- **ALWAYS** adhere to the `.ai/` reference documents.
