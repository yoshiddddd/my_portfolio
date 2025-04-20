// This script sets the NEXT_PUBLIC_BASE_PATH environment variable
// based on the GitHub repository name for GitHub Pages deployment

const fs = require('fs');
const path = require('path');

// Get the repository name from GitHub environment variables
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

// Only set the base path if we're in a GitHub repository
if (repoName && process.env.GITHUB_ACTIONS) {
  console.log(`Setting NEXT_PUBLIC_BASE_PATH to /${repoName}`);
  
  // Set the environment variable for the current process
  process.env.NEXT_PUBLIC_BASE_PATH = `/${repoName}`;
  
  // Also write it to the GitHub environment file for subsequent steps
  const envFile = process.env.GITHUB_ENV || '';
  if (envFile) {
    fs.appendFileSync(envFile, `NEXT_PUBLIC_BASE_PATH=/${repoName}\n`);
  }
} else {
  console.log('Not setting NEXT_PUBLIC_BASE_PATH (not in GitHub Actions or repository name not found)');
}
