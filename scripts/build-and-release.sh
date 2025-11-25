#!/bin/bash

# Complete Build and Release Script
# This builds the APK and creates a GitHub release

echo "🏗️  Calculator Vibe - Build & Release"
echo "====================================="
echo ""

# Get version
VERSION="v1.0.0"
read -p "Enter version (default: v1.0.0): " INPUT_VERSION
if [ ! -z "$INPUT_VERSION" ]; then
    VERSION="$INPUT_VERSION"
fi

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

echo ""
echo "Building APK for version: $VERSION"
echo ""

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "📦 Installing EAS CLI..."
    npm install -g eas-cli
fi

# Check if logged in
echo "🔐 Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    echo "Please login to Expo:"
    eas login
fi

# Build APK
echo ""
echo "🏗️  Building production APK..."
echo "This will take 10-20 minutes..."
eas build --platform android --profile production --non-interactive

echo ""
echo "✅ Build submitted!"
echo ""
echo "📥 Next steps:"
echo "1. Wait for build to complete (check: https://expo.dev)"
echo "2. Download the APK from Expo dashboard"
echo "3. Rename it to: calculator-vibe-${VERSION}.apk"
echo "4. Go to: https://github.com/${GITHUB_USERNAME}/calculator-vibe/releases/new"
echo "5. Fill in:"
echo "   - Tag: ${VERSION}"
echo "   - Title: Calculator Vibe ${VERSION}"
echo "   - Upload the APK file"
echo "6. Publish the release"
echo ""
echo "📱 Direct download link will be:"
echo "https://github.com/${GITHUB_USERNAME}/calculator-vibe/releases/download/${VERSION}/calculator-vibe-${VERSION}.apk"
