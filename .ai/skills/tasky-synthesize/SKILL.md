---
name: tasky-synthesize
description: Analyze the entire codebase and produce a single .ai/CODE_REFERENCE.md document with patterns, architecture, and tech stack.
---

# Tasky Synthesize

This skill analyzes a codebase to understand its tech stack, architecture, coding conventions, and common concerns. It synthesizes these findings into a single, comprehensive reference document.

## Objective

Create a SINGLE markdown file called `.ai/CODE_REFERENCE.md` that serves as the definitive source of truth for the project's patterns, rules, and architecture.

## Process

1. **Discovery**: Explore the project structure, language, framework, and dependencies.
2. **Analysis**: Deep dive into core business logic, API patterns, state management, and testing strategies.
3. **Synthesis**: Combine all findings into the structured template below.
4. **Finalization**: Write to `.ai/CODE_REFERENCE.md`. This MUST be the only file created.

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
- **Naming**: [Patterns for files, functions, variables, types]
- **Formatting/Linting**: [Tools and key rules]
- **Imports**: [Organization rules and path aliases]
- **Error Handling**: [Standard patterns used across the project]

## 🧪 Testing Patterns
- **Framework**: [e.g., Jest, Pytest]
- **Organization**: [Where tests live and how they are named]
- **Mocking**: [Standard approach and tools]

## ⚠️ Known Concerns & Patterns to Avoid
- **Tech Debt**: [Key areas needing refactoring]
- **Bugs/Limitations**: [Documented fragile areas]
- **Prohibited Patterns**: [Specific ways of writing code that are discouraged]

---
*Last Updated: [YYYY-MM-DD]*
```

## Success Criteria
- [ ] Comprehensive understanding of the codebase is documented.
- [ ] All sections of the template are addressed with specific file paths.
- [ ] `.ai/CODE_REFERENCE.md` is the ONLY file created.
