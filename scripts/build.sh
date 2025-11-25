#!/bin/bash

# Build Script for Calculator Vibe
# This script helps automate the build process

echo "🧮 Calculator Vibe - Build Script"
echo "=================================="
echo ""

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null
then
    echo "❌ EAS CLI not found. Installing..."
    npm install -g eas-cli
fi

# Check if logged in to Expo
echo "📝 Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    echo "🔐 Please login to Expo:"
    eas login
fi

echo ""
echo "Select build type:"
echo "1) Production APK (signed)"
echo "2) Preview APK"
echo "3) Development build"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo "🏗️  Building production APK..."
        eas build --platform android --profile production
        ;;
    2)
        echo "🏗️  Building preview APK..."
        eas build --platform android --profile preview
        ;;
    3)
        echo "🏗️  Building development version..."
        eas build --platform android --profile development
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Build submitted!"
echo "📱 Check your build status at: https://expo.dev"
echo ""
echo "When build completes:"
echo "1. Download the APK from the Expo dashboard"
echo "2. Test on a real device"
echo "3. Upload to GitHub Releases"
