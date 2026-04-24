# Tasky: Simplified Agent Workflow

Tasky is a streamlined multi-agent implementation framework inspired by GSD (Get Shit Done). It is designed to remove the overhead of managing dozens of context markdown files, focusing instead on rapid execution, user collaboration, and strict requirements tracking—all powered by an AI agent.

## How It Works

Tasky operates through a simple, two-step process:

### 1. `/synthesize`
Run this command once (or whenever major architectural changes occur) to map your entire codebase. 
- **What it does:** It analyzes your project structure, design patterns, business logic, testing conventions, and product requirements.
- **Output:** It creates a set of structured reference documents in the `.ai/` directory:
  - **`CODE_REFERENCE.md`** — Tech stack, architecture, and project structure overview.
  - **`TEST_PATTERNS.md`** — Testing conventions, naming, folder structure, mocks, and coverage expectations.
  - **`PROJECT_PATTERNS.md`** — Design patterns with concrete examples, file locations, and extension guidance.
  - **`CODE_REVIEW_GUIDELINES.md`** — Review checklist used by the Review Agent to ensure code quality.
  - **`PRODUCT_REQUIREMENTS.md`** — Product vision, UX requirements, and feature alignment principles.
  - **`CODE_QUALITY_GUIDELINES.md`** — Naming conventions, readability, maintainability, and best practices.

### 2. `/implement <task description>`
Run this command whenever you want to add a new feature or fix a bug. Give it a clear task description.
- **What it does:** It kicks off a structured, multi-agent pipeline:
  1. **Context & Ideation:** Determines multiple valid paths to solve the problem, complete with drawbacks.
  2. **Discussion:** Forces a discussion with you, asking for input and confirming the best approach before writing a single line of code.
  3. **Execution:** Actually writes the code based on the mutually agreed-upon plan.
  4. **Review:** A review sub-agent checks the new code against your requirements to spot any errors.
  5. **Summary:** Hands you a step-by-step guide on how to test the newly implemented code.

### 3. `/auto-implement <task description>`
Similar to `/implement`, but works entirely autonomously. 
- **What it does:** It skips the user discussion step. It researches the best approach, creates an implementation plan, and executes it immediately without asking for your approval. Use this when you trust the agent to make the right design choices.

---

## Installation

The easiest way to install Tasky for **any** AI runtime (Local Agent, Cursor, Claude Code, etc.) is through the interactive CLI installer directly from GitHub.

Run the following command in your terminal (replace `<username>` and `<repository>` with where you hosted this repository) and select your desired AI tool:
```bash
npx github:VitorPatrezze/tasky-ai
```

This simple command will automatically copy the correct files (like `.toml` or `.cursorrules`) to the appropriate place for you.

---

### Manual Installation

#### Option A: Local Agent (Gemini)
Copy the `.toml` files from this folder directly into your `.gemini/commands` folder:
- **Windows:** `C:\Users\<YourUsername>\.gemini\commands\`
- **macOS / Linux:** `~/.gemini/commands/`

#### Option B: Other AI Tools (Cursor, Claude Code)
1. **Cursor (`.cursorrules`)**: Copy the `prompts/.cursorrules` file to the root of your project.
2. **Claude Code (`CLAUDE.md`)**: Copy the `prompts/.cursorrules` file to the root of your project and rename it to `CLAUDE.md`.

## Getting Started
Once installed, open any coding project in your IDE and tell your agent:
> `/synthesize`

Let the agent finish mapping. Then, challenge it with a task!
> `/implement Add a dark mode toggle to the navigation bar`

Or, if you want it to just do the work without asking questions:
> `/auto-implement Add a dark mode toggle to the navigation bar`
