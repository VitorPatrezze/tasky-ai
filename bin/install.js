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

rl.question('Select an option (1-3): ', (toolAnswer) => {
  const toolOption = toolAnswer.trim();

  if (!['1', '2', '3'].includes(toolOption)) {
    console.log('\n❌ Invalid option. Installation aborted.');
    rl.close();
    return;
  }

  console.log(`
  Where should Tasky be installed?
  1) Globally (Available across all projects)
  2) Workspace (Only in the current directory)
  `);

  rl.question('Select installation scope (1-2): ', (scopeAnswer) => {
    const scopeOption = scopeAnswer.trim();

    if (!['1', '2'].includes(scopeOption)) {
      console.log('\n❌ Invalid option. Installation aborted.');
      rl.close();
      return;
    }

    try {
      if (toolOption === '1') {
        const targetDir = scopeOption === '1' 
          ? path.join(os.homedir(), '.gemini', 'commands')
          : path.join(process.cwd(), '.gemini', 'commands');
          
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        const filesToCopy = ['tasky-implement.toml', 'tasky-auto-implement.toml', 'tasky-synthesize.toml'];
        for (const file of filesToCopy) {
          fs.copyFileSync(path.join(ROOT_DIR, file), path.join(targetDir, file));
        }
        
        console.log(`\n✅ Successfully installed Gemini configurations to ${targetDir}`);
        console.log('You can now run `/tasky-synthesize` and `/tasky-implement` in your local agent!');
        
      } else if (toolOption === '2') {
        if (scopeOption === '1') {
          console.log('\n⚠️  Cursor does not support global .cursorrules. Falling back to workspace installation.');
        }
        const targetFile = path.join(process.cwd(), '.cursorrules');
        fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
        
        console.log(`\n✅ Successfully installed .cursorrules to ${targetFile}`);
        console.log('Cursor is now equipped with the Tasky workflow for this project.');
        console.log('Just type `/tasky-synthesize` or `/tasky-implement <task>` to start.');
        
      } else if (toolOption === '3') {
        if (scopeOption === '1') {
          console.log('\n⚠️  Claude Code does not support global CLAUDE.md. Falling back to workspace installation.');
        }
        const targetFile = path.join(process.cwd(), 'CLAUDE.md');
        fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
        
        console.log(`\n✅ Successfully installed Tasky instructions to ${targetFile}`);
        console.log('Claude Code is now equipped with the Tasky workflow for this project.');
        console.log('The standard `.cursorrules` file works natively as a `CLAUDE.md` context file.');
        
      }
    } catch (err) {
      console.error('\n❌ An error occurred during installation:', err.message);
    } finally {
      rl.close();
    }
  });
});
