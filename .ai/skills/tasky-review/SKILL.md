---
name: tasky-review
description: Reviews all branch changes compared to the main branch, checking alignment with reference files and suggesting a plan for improvements or reference updates. Use when the user wants to review their current branch work before merging or finalizing.
---

# Tasky Review

This skill provides a structured workflow for reviewing code changes in a branch before merging, ensuring adherence to project standards and proposing improvements.

## Objective

Review all commits and changes in the current branch compared to the `main` branch. Check alignment with `.ai/` reference files and provide a comprehensive plan for fixes, quality improvements, and potential updates to the reference documents.

## Workflow

Copy this checklist and check off items as you complete them:

```
Task Progress:
- [ ] Step 1: Context Gathering
- [ ] Step 2: Change Analysis
- [ ] Step 3: Code Review
- [ ] Step 4: Web Research
- [ ] Step 5: Improvement Plan Formulation
- [ ] Step 6: Reference Update Suggestion
```

**Step 1: Context Gathering**
- Read the workspace root file `.ai/CODE_REFERENCE.md` to understand architecture and tech stack.
- Read the workspace root file `.ai/PROJECT_PATTERNS.md` to understand established design patterns.
- Read the workspace root file `.ai/CODE_QUALITY_GUIDELINES.md` to understand naming and quality standards.
- Read the workspace root file `.ai/CODE_REVIEW_GUIDELINES.md` for specific review checklists.
- Read the workspace root file `.ai/TEST_PATTERNS.md` for testing expectations.

**Step 2: Change Analysis**
- Execute shell commands (e.g., `git fetch`, `git diff main...HEAD`, `git log main..HEAD`) to analyze all commits and code changes made in the current branch compared to the `main` branch.
- Identify all modified, added, or deleted files.

**Step 3: Code Review**
- Invoke a sub-agent using your available delegation or agent tool, using the workspace root file `.ai/agents/review-agent.md` as the system prompt or instructions, to analyze the code changes. The sub-agent will verify alignment with the project patterns and test guidelines.

**Step 4: Web Research**
- Invoke a sub-agent using your available delegation or agent tool to search the web for industry best practices related to the frameworks and design patterns used in the changes to verify alignment with broader standards.

**Step 5: Improvement Plan Formulation**
- Based on the review sub-agent's findings and the web research, provide a detailed plan of fixes or improvements.
- Suggest code quality changes.
- Suggest design pattern adoptions based on the specific changes made.
- Propose variable and method naming improvements.
- Identify and suggest scalability and maintainability improvements.
- If everything is perfectly aligned, state this clearly.

**Step 6: Reference Update Suggestion**
- Analyze if the branch introduces any *new* valid design patterns, or meaningful modifications to existing patterns that are not yet documented in the `.ai/` reference files.
- If new/modified patterns are found, **PROMPT THE USER** with a suggestion to update the reference files (e.g., `.ai/PROJECT_PATTERNS.md` or others) with the new pattern using the `tasky-synthesize` skill or manual updates.
- If no new patterns are introduced, explicitly state that no reference updates are necessary.

## Rules
- **ALWAYS** base the review on the diff between the current branch and `main`.
- **ALWAYS** cross-reference changes with the `.ai/` reference documents.
- **MUST** explicitly prompt the user about updating reference files if any new patterns or structural modifications are detected in the branch changes.
