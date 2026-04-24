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

  1) Gemini
  2) Cursor
  3) Claude Code
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
      
    } else if (option === '3') {
      const targetFile = path.join(process.cwd(), 'CLAUDE.md');
      fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
      
      console.log(`\n✅ Successfully installed Tasky instructions to ${targetFile}`);
      console.log('Claude Code is now equipped with the Tasky workflow for this project.');
      console.log('The standard `.cursorrules` file works natively as a `CLAUDE.md` context file.');
      
    } else {
      console.log('\n❌ Invalid option. Installation aborted.');
    }
  } catch (err) {
    console.error('\n❌ An error occurred during installation:', err.message);
  } finally {
    rl.close();
  }
});
