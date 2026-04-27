---
name: tasky-auto-implement
description: Implements a task autonomously with ideation sub-agents and dedicated code review. Use when the user asks to implement a feature or fix a bug autonomously without further input.
---

# Tasky Auto-Implement

This skill provides a structured, autonomous workflow for implementing technical tasks. It is optimized for speed and reliability, making independent technical decisions.

## Objective

Implement a given task autonomously while following a rigorous process, guided by the project's reference documents in the workspace root `.ai/` directory.

## Workflow

Copy this checklist and check off items as you complete them:

```
Task Progress:
- [ ] Step 1: Context Gathering
- [ ] Step 2: Ideation & Planning
- [ ] Step 3: Execution
- [ ] Step 4: Review and Feedback Loop
- [ ] Step 5: Final Summary
- [ ] Step 6: Update Reference Documents (Optional)
```

**Step 1: Context Gathering**
- Read the task description. If the task mentions a pre-existing plan (e.g., `.ai/REVIEW_PLAN.md`), read that file immediately to serve as the baseline implementation plan.
- Read the workspace root file `.ai/CODE_REFERENCE.md` to understand architecture, tech stack, and project structure.
- Read the workspace root file `.ai/PROJECT_PATTERNS.md` to understand established design patterns and how to extend them.
- Read the workspace root file `.ai/CODE_QUALITY_GUIDELINES.md` to understand naming conventions and quality standards.
- Read the workspace root file `.ai/PRODUCT_REQUIREMENTS.md` to understand the product vision and ensure the task aligns with it.
- Explore existing files related to the task to identify implementation points.

**Step 2: Ideation & Planning (Sub-agent)**
- Invoke a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/ideation-agent.md` as the system prompt or instructions, to research and compare implementation options.
- The sub-agent must autonomously select the best approach and formulate a plan.
- **Exception**: If a concrete plan (like `.ai/REVIEW_PLAN.md`) was provided in Step 1, instruct the sub-agent to strictly convert it into an execution checklist without researching new approaches.

**Step 3: Execution (Sub-agent)**
- Execute the selected plan by invoking a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/execution-agent.md` as the system prompt or instructions.
- The agent must follow `.ai/CODE_QUALITY_GUIDELINES.md` for all code written.
- The agent must follow `.ai/TEST_PATTERNS.md` when writing or modifying tests.
- The agent must handle deviations (Rule 1-4) and commit each task atomically.

**Step 4: Review and Feedback Loop**
- After execution, invoke a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/review-agent.md` as the system prompt or instructions, to analyze the new code.
- The review must follow the checklist defined in the workspace root file `.ai/CODE_REVIEW_GUIDELINES.md`.
- The review must verify test coverage using the workspace root file `.ai/TEST_PATTERNS.md` as reference.
- **Feedback Loop**: If the review identifies issues, fix the issues and run the review sub-agent again until it passes.

**Step 5: Final Summary**
- Summarize the work done.
- Provide a step-by-step testing guide for the user.
- **Cleanup Prompt**: If a concrete plan like `.ai/REVIEW_PLAN.md` was provided and fully implemented, explicitly ask the user if you should remove/delete this file to keep the workspace clean.

**Step 6: (Optional) Update Reference Documents**
- If the changes impact the project's architecture, patterns, or guidelines, update the relevant `.ai/` reference files at the workspace root.
- Use the `tasky-synthesize` skill to ensure consistency.
- Let the user know if you made changes to any reference documents and what was changed.

## Rules
- **NEVER** skip a step.
- **NEVER** ask for user confirmation in Step 2.
- **ALWAYS** perform a code review and respect the feedback loop.
- **ALWAYS** adhere to the `.ai/` reference documents.
