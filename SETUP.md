# Calculator Vibe - Setup Instructions

## Quick Start Guide

### For Shubham (End User)

#### Installing the APK on Android

1. **Download the APK**:
   - Option A: Direct download from GitHub Releases
   - Option B: Download from Expo build link (provided after build)

2. **Allow Installation**:
   - When you try to install, Android will ask for permission
   - Go to Settings → Security → Enable "Install Unknown Apps" for your browser/file manager
   - On newer Android versions: Settings → Apps → Special Access → Install Unknown Apps

3. **Install the App**:
   - Tap on the downloaded APK file
   - Tap "Install"
   - Wait for installation to complete
   - Tap "Open" to launch Calculator Vibe

4. **Using the App**:
   - Perform calculations by tapping buttons
   - Toggle Dark/Light mode using the switch at top
   - View history of last 10 calculations
   - Tap the copy icon to copy results
   - Use AC (All Clear) to reset everything
   - Use C (Clear) to clear current expression

#### Using with Expo Go (Alternative)

1. **Install Expo Go**:
   - Download from Google Play Store or Apple App Store
   - Open Expo Go app

2. **Scan QR Code**:
   - When provided with a QR code or link
   - Scan it with Expo Go
   - The app will load and run

3. **Direct Link**:
   - Or open the expo.dev link in your browser
   - Choose "Open in Expo Go"

### For Developers

#### Initial Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/calculator-vibe.git
cd calculator-vibe

# Install dependencies
npm install

# Install Expo CLI globally (if not already installed)
npm install -g expo-cli eas-cli
```

#### Running Locally

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run in web browser
npm run web
```

#### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

#### Building APK

##### Option 1: EAS Build (Cloud Build)

```bash
# Login to Expo
eas login

# Configure EAS (first time only)
eas build:configure

# Build production APK
eas build --platform android --profile production

# Build preview APK
eas build --platform android --profile preview
```

After the build completes:
- You'll receive a download link
- Or check Expo dashboard: https://expo.dev
- Download the APK and share it

##### Option 2: Local Build

```bash
# Generate native Android project
npx expo prebuild --platform android

# Navigate to Android directory
cd android

# Build release APK
./gradlew assembleRelease

# Find APK at:
# android/app/build/outputs/apk/release/app-release.apk
```

#### Git Workflow

```bash
# Create and switch to dev branch
git checkout -b dev

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin dev

# Create feature branches
git checkout -b feature/new-feature dev

# After testing, merge to main
git checkout main
git merge dev
git push origin main

# Create a release tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

#### GitHub Setup

1. **Create Repository**:
   ```bash
   # Initialize git (if not done)
   git init
   
   # Add remote
   git remote add origin https://github.com/YOUR_USERNAME/calculator-vibe.git
   
   # Push to GitHub
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   
   # Create and push dev branch
   git checkout -b dev
   git push -u origin dev
   ```

2. **Setup GitHub Actions**:
   - Actions will run automatically on push to dev/main
   - Check the "Actions" tab in GitHub to see test results

3. **Create Release**:
   - Go to GitHub → Releases → Create a new release
   - Tag version: v1.0.0
   - Upload the APK file
   - Add release notes

#### Environment Variables

For EAS build, you may need to set up:

```bash
# Set owner (Expo username)
EXPO_OWNER=your-username

# Set project ID (from app.json)
EXPO_PROJECT_ID=your-project-id
```

#### Troubleshooting

**Common Issues**:

1. **Dependencies not installing**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Metro bundler issues**:
   ```bash
   npx expo start --clear
   ```

3. **Android build fails**:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx expo prebuild --clean
   ```

4. **Tests failing**:
   - Ensure all dependencies are installed
   - Check Node.js version (18+ required)
   - Clear jest cache: `npx jest --clearCache`

5. **EAS build authentication**:
   ```bash
   eas logout
   eas login
   eas whoami
   ```

#### Husky Pre-commit Hooks

Setup Husky after npm install:

```bash
# Install husky
npx husky install

# Make hook executable (Unix/macOS)
chmod +x .husky/pre-commit
```

The pre-commit hook will automatically run tests before each commit.

#### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Expo SDK
npx expo install --fix

# Update specific package
npm install mathjs@latest
```

## Next Steps

1. **Customize**:
   - Update app.json with your bundle identifier
   - Add your own icon and splash screen
   - Modify colors and themes in components

2. **Deploy**:
   - Build APK using EAS
   - Test on real devices
   - Publish to GitHub releases
   - Share download link

3. **Maintain**:
   - Monitor GitHub Actions for CI status
   - Keep dependencies updated
   - Add more features as needed
   - Collect user feedback

## Support

For issues or questions:
- Open an issue on GitHub
- Check documentation in README.md
- Review test files for usage examples

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username throughout this guide.
