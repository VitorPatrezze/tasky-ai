---
name: tasky-synthesize
description: Analyze the entire codebase and produce structured reference documents in the .ai/ directory covering architecture, patterns, testing, code quality, review guidelines, and product requirements.
---

# Tasky Synthesize

This skill analyzes a codebase to understand its tech stack, architecture, coding conventions, design patterns, testing strategies, product requirements, and code quality standards. It synthesizes these findings into a set of structured, purpose-specific reference documents.

## Objective

Create **six** markdown files in the `.ai/` directory that serve as the definitive source of truth for the project's architecture, patterns, quality standards, and product vision.

## Output Files

| File | Purpose | Template |
|------|---------|----------|
| `.ai/CODE_REFERENCE.md` | Tech stack, architecture, project structure overview | Built-in (see below) |
| `.ai/TEST_PATTERNS.md` | Testing framework, naming, folder structure, mocks/stubs | `reference/test-patterns-template.md` |
| `.ai/PROJECT_PATTERNS.md` | Design patterns with examples, locations, and extension guidance | `reference/project-patterns-template.md` |
| `.ai/CODE_REVIEW_GUIDELINES.md` | Review checklist and severity classifications for the Review Agent | `reference/code-review-guidelines-template.md` |
| `.ai/PRODUCT_REQUIREMENTS.md` | Product vision, UX requirements, feature alignment principles | `reference/product-requirements-template.md` |
| `.ai/CODE_QUALITY_GUIDELINES.md` | Naming conventions, readability, maintainability, security standards | `reference/code-quality-guidelines-template.md` |

## Process

1. **Discovery**: Explore the project structure, language, framework, and dependencies.
2. **Analysis**: Deep dive into core business logic, API patterns, state management, design patterns, and testing strategies.
3. **Synthesis — Code Reference**: Combine architectural findings into `.ai/CODE_REFERENCE.md` using the template below.
4. **Synthesis — Test Patterns**: Read `reference/test-patterns-template.md` and fill it with project-specific testing conventions, writing the result to `.ai/TEST_PATTERNS.md`.
5. **Synthesis — Project Patterns**: Read `reference/project-patterns-template.md` and catalog every design pattern found in the project with concrete examples and file paths, writing the result to `.ai/PROJECT_PATTERNS.md`.
6. **Synthesis — Code Review Guidelines**: Read `reference/code-review-guidelines-template.md` and tailor the review checklist to the project's specific patterns and conventions, writing the result to `.ai/CODE_REVIEW_GUIDELINES.md`.
7. **Synthesis — Product Requirements**: Read `reference/product-requirements-template.md` and capture the product vision, UX requirements, and feature alignment principles, writing the result to `.ai/PRODUCT_REQUIREMENTS.md`.
8. **Synthesis — Code Quality Guidelines**: Read `reference/code-quality-guidelines-template.md` and document the project's naming conventions, quality standards, and best practices, writing the result to `.ai/CODE_QUALITY_GUIDELINES.md`.
9. **Finalization**: Verify all six files are written to the `.ai/` directory with project-specific content (no unfilled placeholders).

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

Each template file in `reference/` contains:
- **Section headers** defining what information to capture
- **Placeholder text in brackets** `[like this]` that MUST be replaced with project-specific content
- **Code block placeholders** that MUST be filled with actual code examples from the project
- **Example patterns** prefixed with `e.g.,` to illustrate the expected level of detail

When filling a template:
1. Read the template file from `reference/`
2. Analyze the relevant aspect of the codebase
3. Replace ALL placeholders with concrete, project-specific content
4. Include real file paths, real code examples, and real patterns from the project
5. Remove any sections that are not applicable (e.g., API Patterns if there is no API)
6. Write the filled document to the `.ai/` directory

## Success Criteria
- [ ] All six `.ai/` documents are created with project-specific content.
- [ ] No unfilled placeholder brackets `[...]` remain in any document.
- [ ] Every document includes concrete file paths and code examples from the project.
- [ ] `.ai/CODE_REFERENCE.md` covers tech stack, architecture, and project structure.
- [ ] `.ai/TEST_PATTERNS.md` covers test naming, folder structure, mocks, and coverage expectations.
- [ ] `.ai/PROJECT_PATTERNS.md` catalogs all design patterns with examples and extension guidance.
- [ ] `.ai/CODE_REVIEW_GUIDELINES.md` defines a review checklist tailored to the project.
- [ ] `.ai/PRODUCT_REQUIREMENTS.md` captures the product vision and UX requirements.
- [ ] `.ai/CODE_QUALITY_GUIDELINES.md` documents naming conventions, quality standards, and best practices.
