#!/bin/bash

# GitHub Repository Setup Script for Calculator Vibe
# This script will create the repository and push the code

echo "🚀 Calculator Vibe - GitHub Setup"
echo "=================================="
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Check if git remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Git remote 'origin' already exists"
    read -p "Do you want to remove it and add a new one? (y/n): " REPLACE
    if [ "$REPLACE" = "y" ]; then
        git remote remove origin
    else
        echo "❌ Aborted"
        exit 1
    fi
fi

# Add GitHub remote
REPO_URL="https://github.com/${GITHUB_USERNAME}/calculator-vibe.git"
echo "📝 Adding remote: $REPO_URL"
git remote add origin "$REPO_URL"

echo ""
echo "Now you need to create the repository on GitHub:"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: calculator-vibe"
echo "3. Description: Modern mobile calculator with React Native (Expo)"
echo "4. Make it PUBLIC"
echo "5. Do NOT initialize with README"
echo "6. Click 'Create repository'"
echo ""
read -p "Press Enter once you've created the repository..."

# Push to GitHub
echo ""
echo "📤 Pushing code to GitHub..."

# Push main branch
git checkout main
git push -u origin main

# Push dev branch
git checkout dev
git push -u origin dev

# Set dev as default branch
echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/${GITHUB_USERNAME}/calculator-vibe/settings"
echo "2. Click 'Branches' in the left sidebar"
echo "3. Change default branch to 'dev'"
echo ""
echo "🔗 Your repository: https://github.com/${GITHUB_USERNAME}/calculator-vibe"
echo ""
echo "🏗️  Next: Build the APK with './scripts/build-and-release.sh'"
