#!/usr/bin/env node

const readline = require('readline');
const path = require('path');
const fs = require('fs');
const os = require('os');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ROOT_DIR = path.join(__dirname, '..');

console.log(`
=========================================
 🚀 Welcome to Tasky AI Installation 🚀  
=========================================

To install the Tasky workflow, please select your AI runtime:

  1) Gemini
  2) Cursor
  3) Claude Code
  4) OpenRouter
  5) Other
`);

rl.question('Select an option (1-5): ', (answer) => {
  const option = answer.trim();

  try {
    if (option === '1') {
      const targetDir = path.join(os.homedir(), '.gemini', 'commands');
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const filesToCopy = ['implement.toml', 'auto-implement.toml', 'synthesize.toml'];
      for (const file of filesToCopy) {
        fs.copyFileSync(path.join(ROOT_DIR, file), path.join(targetDir, file));
      }
      
      console.log(`\n✅ Successfully installed Gemini configurations to ${targetDir}`);
      console.log('You can now run `/synthesize` and `/implement` in your local agent!');
      
    } else if (option === '2') {
      const targetFile = path.join(process.cwd(), '.cursorrules');
      fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
      
      console.log(`\n✅ Successfully installed .cursorrules to ${targetFile}`);
      console.log('Cursor is now equipped with the Tasky workflow for this project.');
      console.log('Just type `/synthesize` or `/implement <task>` to start.');
      
    } else if (['3', '4', '5'].includes(option)) {
      const targetFile = path.join(process.cwd(), 'tasky-system-prompt.md');
      fs.copyFileSync(path.join(ROOT_DIR, 'prompts', 'system-prompt.md'), targetFile);
      
      console.log(`\n✅ Successfully copied system prompt to ${targetFile}`);
      console.log("Please copy the contents of this file into your tool's custom system prompt instructions.");
      if (option === '3') {
        console.log("For Claude Code, you can alternatively reference it in `.clauderc`.");
      } else {
        console.log("Alternatively, drop it manually into your tool's UI.");
      }
      
    } else {
      console.log('\n❌ Invalid option. Installation aborted.');
    }
  } catch (err) {
    console.error('\n❌ An error occurred during installation:', err.message);
  } finally {
    rl.close();
  }
});
