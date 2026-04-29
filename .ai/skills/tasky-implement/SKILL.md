---
name: tasky-implement
description: Implements a task with a rigorous workflow, ideation sub-agents, and dedicated code review. Use when the user asks to implement a task and wants to be consulted on the approach before execution.
---

# Tasky Implement

This skill provides a structured, multi-step workflow for implementing technical tasks. It ensures architectural alignment, user involvement, and high code quality.

## Objective

Implement a given task while following a rigorous process, guided by the project's reference documents in the workspace root `.ai/` directory.

## Workflow

Copy this checklist and check off items as you complete them:

```
Task Progress:
- [ ] Step 1: Context Gathering
- [ ] Step 2: Ideation
- [ ] Step 3: User Discussion
- [ ] Step 4: Execution
- [ ] Step 5: Review and Feedback Loop
- [ ] Step 6: Final Summary
- [ ] Step 7: Update Reference Documents (Optional)
```

**Step 1: Context Gathering**
- Read the task description. If the task mentions a pre-existing plan (e.g., `.ai/REVIEW_PLAN.md`), read that file immediately to serve as the baseline implementation plan.
- Read the workspace root file `.ai/tasky-code-reference.md` to understand architecture, tech stack, and project structure.
- Read the workspace root file `.ai/tasky-project-patterns.md` to understand established design patterns and how to extend them.
- Read the workspace root file `.ai/tasky-code-quality-guidelines.md` to understand naming conventions and quality standards.
- Read the workspace root file `.ai/tasky-product-requirements.md` to understand the product vision and ensure the task aligns with it.
- Explore existing files related to the task to identify implementation points.

**Step 2: Ideation (Sub-agent)**
- Invoke a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/ideation-agent.md` as the system prompt or instructions, to research and compare implementation options.
- ALWAYS instruct the sub-agent to generate AT LEAST two implementation plans: one complex approach that strictly follows rules for code scalability, and one simplistic approach designed for fast testing.
- **Exception**: If a concrete plan (like `.ai/REVIEW_PLAN.md`) was provided in Step 1, instruct the sub-agent to give more emphasis on the provided plan and how to approach it, but also suggest other plans.
- The sub-agent must return a comparison table and conditional recommendations.

**Step 3: User Discussion**
- Present the options to the user and ask for a decision or refinement.
- **STOP AND WAIT FOR USER INPUT**. Ensure the plan is fully understood and agreed upon. If your platform provides a user-prompting tool (like `ask_user`), use it. Otherwise, stop generating and wait for user input.

**Step 4: Execution (Sub-agent)**
- Once the plan is confirmed, execute it by invoking a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/execution-agent.md` as the system prompt or instructions.
- The agent must follow `.ai/tasky-code-quality-guidelines.md` for all code written.
- The agent must follow `.ai/tasky-test-patterns.md` when writing or modifying tests.
- The agent must handle deviations (Rule 1-4) and commit each task atomically.

**Step 5: Review and Feedback Loop**
- After execution, invoke a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/review-agent.md` as the system prompt or instructions, to analyze the new code.
- The review must follow the checklist defined in the workspace root file `.ai/tasky-code-review-guidelines.md`.
- The review must verify test coverage using the workspace root file `.ai/tasky-test-patterns.md` as reference.
- The agent must return a severity-classified review table.
- **Feedback Loop**: If the review identifies critical or high-severity issues, fix the issues and run the review sub-agent again until it passes.

**Step 6: Final Summary**
- Summarize the work done.
- Address any issues found in the review (decide whether to fix now or defer).
- Provide a step-by-step testing guide for the user.
- **Cleanup Prompt**: If a concrete plan like `.ai/REVIEW_PLAN.md` was provided and fully implemented, explicitly ask the user if you should remove/delete this file to keep the workspace clean.

**Step 7: (Optional) Update Reference Documents**
- If the changes impact the project's architecture, patterns, or guidelines, update the relevant `.ai/` reference files at the workspace root.
- Use the `tasky-synthesize` skill to ensure consistency.
- Let the user know if you made changes to any reference documents and what was changed.

## Rules
- **NEVER** skip a step.
- **NEVER** proceed to execution without user confirmation in Step 3.
- **ALWAYS** perform a code review and respect the feedback loop.
- **ALWAYS** adhere to the `.ai/` reference documents.
- **ALWAYS** suggest at least two implementation plans (one scalable/complex, one fast/simplistic).
