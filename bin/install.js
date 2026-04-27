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
  4) Codex
`);

rl.question('Select an option (1-4): ', (toolAnswer) => {
  const toolOption = toolAnswer.trim();

  if (!['1', '2', '3', '4'].includes(toolOption)) {
    console.log('\n❌ Invalid option. Installation aborted.');
    rl.close();
    return;
  }

  console.log(`
  Where should Tasky be installed?
  1) Globally (Available across all projects)
  2) Workspace (Only in the current directory)
  `);

  /**
 * Recursively copies a directory from src to dest.
 */
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

rl.question('Select installation scope (1-2): ', (scopeAnswer) => {
    const scopeOption = scopeAnswer.trim();

    if (!['1', '2'].includes(scopeOption)) {
      console.log('\n❌ Invalid option. Installation aborted.');
      rl.close();
      return;
    }

    try {
      // 1. Install Tool-Specific Configurations
      if (toolOption === '1') {
        const targetDir = scopeOption === '1' 
          ? path.join(os.homedir(), '.gemini', 'commands')
          : path.join(process.cwd(), '.gemini', 'commands');
          
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        const filesToCopy = ['tasky-implement.toml', 'tasky-auto-implement.toml', 'tasky-synthesize.toml', 'tasky-review.toml'];
        for (const file of filesToCopy) {
          fs.copyFileSync(path.join(ROOT_DIR, file), path.join(targetDir, file));
        }
        
        console.log(`\n✅ Successfully installed Gemini configurations to ${targetDir}`);
        
      } else if (toolOption === '2') {
        if (scopeOption === '1') {
          console.log('\n⚠️  Cursor does not support global .cursorrules. Falling back to workspace installation.');
        }
        const targetFile = path.join(process.cwd(), '.cursorrules');
        fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
        
        console.log(`\n✅ Successfully installed .cursorrules to ${targetFile}`);
        
      } else if (toolOption === '3') {
        if (scopeOption === '1') {
          console.log('\n⚠️  Claude Code does not support global CLAUDE.md. Falling back to workspace installation.');
        }
        const targetFile = path.join(process.cwd(), 'CLAUDE.md');
        fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
        
        console.log(`\n✅ Successfully installed Tasky instructions to ${targetFile}`);
      } else if (toolOption === '4') {
        if (scopeOption === '1') {
          console.log('\n⚠️  Codex does not support global AGENTS.md. Falling back to workspace installation.');
        }
        const targetFile = path.join(process.cwd(), 'AGENTS.md');
        fs.copyFileSync(path.join(ROOT_DIR, 'prompts', '.cursorrules'), targetFile);
        
        console.log(`\n✅ Successfully installed Tasky instructions to ${targetFile}`);
      }

      // 2. Install Specific Tasky Agents
      const taskyAgents = ['execution-agent.md', 'ideation-agent.md', 'review-agent.md'];
      const agentsDestDir = path.join(process.cwd(), '.ai', 'agents');
      if (!fs.existsSync(agentsDestDir)) {
        fs.mkdirSync(agentsDestDir, { recursive: true });
      }
      taskyAgents.forEach(agent => {
        const srcFile = path.join(ROOT_DIR, '.ai', 'agents', agent);
        const destFile = path.join(agentsDestDir, agent);
        if (fs.existsSync(srcFile)) {
          fs.copyFileSync(srcFile, destFile);
        }
      });

      // 3. Install Specific Tasky Skills
      const taskySkills = ['tasky-auto-implement', 'tasky-implement', 'tasky-review', 'tasky-synthesize'];
      const skillsDestDir = path.join(process.cwd(), '.ai', 'skills');
      if (!fs.existsSync(skillsDestDir)) {
        fs.mkdirSync(skillsDestDir, { recursive: true });
      }
      taskySkills.forEach(skill => {
        const srcDir = path.join(ROOT_DIR, '.ai', 'skills', skill);
        const destDir = path.join(skillsDestDir, skill);
        if (fs.existsSync(srcDir)) {
          copyRecursiveSync(srcDir, destDir);
        }
      });

      console.log(`✅ Successfully installed Tasky agents and skills to ${path.join(process.cwd(), '.ai')}`);

      console.log('\n🚀 Tasky AI is now fully equipped for this project!');
      console.log('Just type `/tasky-synthesize` or `/tasky-implement <task>` to start.');

    } catch (err) {
      console.error('\n❌ An error occurred during installation:', err.message);
    } finally {
      rl.close();
    }
  });
});
