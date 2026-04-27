---
name: tasky-synthesize
description: Analyzes the entire codebase and produces structured reference documents in the .ai/ directory. Use when the user asks to initialize, synthesize, or update the project's reference documentation.
---

# Tasky Synthesize

This skill analyzes a codebase to understand its tech stack, architecture, coding conventions, design patterns, testing strategies, product requirements, and code quality standards. It synthesizes these findings into a set of structured, purpose-specific reference documents.

## Objective

Create or update **six** markdown files in the workspace root `.ai/` directory that serve as the definitive source of truth for the project's architecture, patterns, quality standards, and product vision. If these files already exist, you MUST update them to incorporate new patterns or template formatting while strictly preserving the essence of the existing content, rather than blindly overwriting them.

## Output Files

| File | Purpose | Template |
|------|---------|----------|
| `.ai/CODE_REFERENCE.md` | Tech stack, architecture, project structure overview | Built-in (see below) |
| `.ai/TEST_PATTERNS.md` | Testing framework, naming, folder structure, mocks/stubs | `reference/test-patterns-template.md` (relative to this skill) |
| `.ai/PROJECT_PATTERNS.md` | Design patterns with examples, locations, and extension guidance | `reference/project-patterns-template.md` (relative to this skill) |
| `.ai/CODE_REVIEW_GUIDELINES.md` | Review checklist and severity classifications for the Review Agent | `reference/code-review-guidelines-template.md` (relative to this skill) |
| `.ai/PRODUCT_REQUIREMENTS.md` | Product vision, UX requirements, feature alignment principles | `reference/product-requirements-template.md` (relative to this skill) |
| `.ai/CODE_QUALITY_GUIDELINES.md` | Naming conventions, readability, maintainability, security standards | `reference/code-quality-guidelines-template.md` (relative to this skill) |

## Process

Copy this checklist and check off items as you complete them:

```
Task Progress:
- [ ] Step 1: Discovery
- [ ] Step 2: Analysis
- [ ] Step 3: Synthesis — Code Reference
- [ ] Step 4: Synthesis — Test Patterns
- [ ] Step 5: Synthesis — Project Patterns
- [ ] Step 6: Synthesis — Code Review Guidelines
- [ ] Step 7: Synthesis — Product Requirements
- [ ] Step 8: Synthesis — Code Quality Guidelines
- [ ] Step 9: Finalization
```

**Step 1: Discovery**
- Explore the project structure, language, framework, and dependencies.

**Step 2: Analysis**
- Deep dive into core business logic, API patterns, state management, design patterns, and testing strategies.

**Step 3: Synthesis — Code Reference**
- Combine architectural findings into the workspace root file `.ai/CODE_REFERENCE.md` using the template below.

**Step 4: Synthesis — Test Patterns**
- Read `reference/test-patterns-template.md` (located inside this skill's directory) and fill it with project-specific testing conventions, writing the result to the workspace root file `.ai/TEST_PATTERNS.md`.

**Step 5: Synthesis — Project Patterns**
- Read `reference/project-patterns-template.md` (located inside this skill's directory) and catalog every design pattern found in the project with concrete examples and file paths, writing the result to the workspace root file `.ai/PROJECT_PATTERNS.md`.

**Step 6: Synthesis — Code Review Guidelines**
- Read `reference/code-review-guidelines-template.md` (located inside this skill's directory) and tailor the review checklist to the project's specific patterns and conventions, writing the result to the workspace root file `.ai/CODE_REVIEW_GUIDELINES.md`.

**Step 7: Synthesis — Product Requirements**
- Read `reference/product-requirements-template.md` (located inside this skill's directory) and capture the product vision, UX requirements, and feature alignment principles, writing the result to the workspace root file `.ai/PRODUCT_REQUIREMENTS.md`.

**Step 8: Synthesis — Code Quality Guidelines**
- Read `reference/code-quality-guidelines-template.md` (located inside this skill's directory) and document the project's naming conventions, quality standards, and best practices, writing the result to the workspace root file `.ai/CODE_QUALITY_GUIDELINES.md`.

**Step 9: Finalization**
- Verify all six files are written to the workspace root `.ai/` directory with project-specific content (no unfilled placeholders).

## Code Reference Template

The `.ai/CODE_REFERENCE.md` should follow this structure:

```markdown
# Project Reference: [Project Name]

## 🛠 Tech Stack
- **Primary Languages**: [e.g., TypeScript, Python]
- **Frameworks/Runtimes**: [e.g., Node.js, React, FastAPI]
- **Package Manager**: [e.g., npm, poetry]
- **Key Dependencies**: [List critical libraries and their purpose]

## 🏗 Architecture
- **Pattern**: [e.g., MVC, Hexagonal, Clean Architecture]
- **Layers**: [Describe key layers and their roles]
- **Data Flow**: [Describe how data moves through the system]
- **State Management**: [How state is handled across the application]

## 📁 Project Structure
- `src/`: [Description]
- `api/`: [Description]
- `components/`: [Description]
- ... (Include key files and directories)

## 🔧 Coding Conventions
- **Formatting/Linting**: [Tools and key rules]
- **Imports**: [Organization rules and path aliases]
- **Error Handling**: [Standard patterns used across the project]

## ⚠️ Known Concerns & Patterns to Avoid
- **Tech Debt**: [Key areas needing refactoring]
- **Bugs/Limitations**: [Documented fragile areas]
- **Prohibited Patterns**: [Specific ways of writing code that are discouraged]

---
*Last Updated: [YYYY-MM-DD]*
```

> **Note**: Naming conventions, testing patterns, and design patterns have been moved to their dedicated documents (`.ai/CODE_QUALITY_GUIDELINES.md`, `.ai/TEST_PATTERNS.md`, `.ai/PROJECT_PATTERNS.md`) to avoid duplication.

## Template Usage Instructions

Each template file in the `reference/` directory (relative to this skill) contains:
- **Section headers** defining what information to capture
- **Placeholder text in brackets** `[like this]` that MUST be replaced with project-specific content
- **Code block placeholders** that MUST be filled with actual code examples from the project
- **Example patterns** prefixed with `e.g.,` to illustrate the expected level of detail

When filling or updating a template:
1. Read the template file from this skill's `reference/` directory
2. Check if the target file (e.g., `.ai/TEST_PATTERNS.md`) already exists in the workspace root `.ai/` directory
3. Analyze the relevant aspect of the codebase
4. If the target file exists, UPDATE it by merging the new template structure and any newly discovered patterns, making sure to PRESERVE the essence and core content of the existing file. Do NOT blindly overwrite.
5. If the target file does not exist, replace ALL placeholders with concrete, project-specific content
6. Include real file paths, real code examples, and real patterns from the project
7. Remove any sections that are not applicable (e.g., API Patterns if there is no API)
8. Write or update the filled document in the workspace root `.ai/` directory

## Success Criteria
- [ ] All six `.ai/` documents are created or updated with project-specific content at the workspace root, preserving the essence of existing files if they were already present.
- [ ] No unfilled placeholder brackets `[...]` remain in any document.
- [ ] Every document includes concrete file paths and code examples from the project.
- [ ] `.ai/CODE_REFERENCE.md` covers tech stack, architecture, and project structure.
- [ ] `.ai/TEST_PATTERNS.md` covers test naming, folder structure, mocks, and coverage expectations.
- [ ] `.ai/PROJECT_PATTERNS.md` catalogs all design patterns with examples and extension guidance.
- [ ] `.ai/CODE_REVIEW_GUIDELINES.md` defines a review checklist tailored to the project.
- [ ] `.ai/PRODUCT_REQUIREMENTS.md` captures the product vision and UX requirements.
- [ ] `.ai/CODE_QUALITY_GUIDELINES.md` documents naming conventions, quality standards, and best practices.
