# 🚀 Deployment Guide - Calculator Vibe

This guide walks through deploying Calculator Vibe from development to production.

## Prerequisites Checklist

- [x] All tests passing (`npm test`)
- [x] Linter passes (`npm run lint`)
- [x] Code committed to `dev` branch
- [ ] GitHub repository created
- [ ] Expo account created (https://expo.dev)
- [ ] EAS CLI installed (`npm install -g eas-cli`)

## Step 1: GitHub Repository Setup

### Create GitHub Repository

1. **Go to GitHub** (https://github.com/new)

2. **Create new repository**:
   - Name: `calculator-vibe`
   - Description: "A modern mobile calculator with React Native (Expo)"
   - Visibility: Public
   - Do NOT initialize with README (we already have one)

3. **Add remote and push**:
   ```bash
   cd "/path/to/Calculator"
   git remote add origin https://github.com/YOUR_USERNAME/calculator-vibe.git
   
   # Push main branch
   git checkout main
   git push -u origin main
   
   # Push dev branch
   git checkout dev
   git push -u origin dev
   ```

4. **Set default branch to dev**:
   - Go to Settings → Branches
   - Change default branch to `dev`

## Step 2: Expo Setup

### Create Expo Account

1. **Sign up at https://expo.dev** (if you don't have an account)

2. **Login via CLI**:
   ```bash
   eas login
   ```

3. **Verify login**:
   ```bash
   eas whoami
   ```

### Configure Project

1. **Initialize EAS**:
   ```bash
   cd "/path/to/Calculator"
   eas build:configure
   ```
   
   This will:
   - Create/update `eas.json`
   - Link to your Expo account
   - Set up project ID

2. **Update app.json** with your details:
   ```json
   {
     "expo": {
       "owner": "your-expo-username",
       "slug": "calculator-vibe",
       "name": "Calculator Vibe"
     }
   }
   ```

## Step 3: Build Android APK

### Option A: Using EAS Build (Recommended)

1. **Start production build**:
   ```bash
   eas build --platform android --profile production
   ```
   
   Or use the build script:
   ```bash
   ./scripts/build.sh
   # Select option 1 for production
   ```

2. **Wait for build** (usually 10-20 minutes)
   - You'll receive a link to the build dashboard
   - Or check: https://expo.dev/accounts/YOUR_USERNAME/projects/calculator-vibe/builds

3. **Download APK**:
   - Once complete, download the APK from the build page
   - Save it as `calculator-vibe-v1.0.0.apk`

### Option B: Local Build (Alternative)

1. **Install Android Studio** and configure Android SDK

2. **Pre-build native code**:
   ```bash
   npx expo prebuild --platform android
   ```

3. **Build APK**:
   ```bash
   cd android
   ./gradlew assembleRelease
   cd ..
   ```

4. **Find APK**:
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

## Step 4: Test the APK

### On Physical Device

1. **Transfer APK** to your Android device:
   - Via USB: Copy to device storage
   - Via cloud: Upload to Google Drive/Dropbox
   - Via email: Send to yourself

2. **Install**:
   - Enable "Install from Unknown Sources" in Settings
   - Tap the APK file
   - Tap "Install"

3. **Test thoroughly**:
   - [ ] Basic operations (+, -, ×, ÷)
   - [ ] Operator precedence (1+2*3 = 7)
   - [ ] Parentheses ((1+2)*3 = 9)
   - [ ] Decimals (0.1+0.2)
   - [ ] Percent (100% = 1)
   - [ ] Toggle sign (±)
   - [ ] History (last 10 calculations)
   - [ ] Copy to clipboard
   - [ ] Theme toggle (light/dark)
   - [ ] Clear (C) and All Clear (AC)
   - [ ] Error handling (division by zero)

### On Emulator

1. **Start Android Emulator** (via Android Studio)

2. **Install APK**:
   ```bash
   adb install calculator-vibe-v1.0.0.apk
   ```

3. **Run tests** as above

## Step 5: Create GitHub Release

1. **Go to your GitHub repository**:
   ```
   https://github.com/YOUR_USERNAME/calculator-vibe/releases/new
   ```

2. **Create new release**:
   - Tag: `v1.0.0`
   - Target: `main` branch
   - Release title: `Calculator Vibe v1.0.0 - Initial Release`
   
3. **Release notes** (example):
   ```markdown
   # Calculator Vibe v1.0.0 🧮
   
   Initial release of Calculator Vibe - A modern, feature-rich mobile calculator.
   
   ## ✨ Features
   - Basic operations: +, -, ×, ÷
   - Parentheses and operator precedence
   - Decimal support with precision handling
   - Percent and unary +/- operations
   - Light/Dark theme toggle
   - Calculation history (last 10)
   - Copy-to-clipboard functionality
   - Safe expression parsing (no eval!)
   
   ## 📱 Installation
   1. Download the APK below
   2. Enable "Install from Unknown Sources" on your Android device
   3. Install and enjoy!
   
   ## 🧪 Quality
   - 34 unit tests (100% passing)
   - 95%+ code coverage
   - ESLint + Prettier
   - CI/CD with GitHub Actions
   
   ## 📦 Downloads
   - Android APK: [calculator-vibe-v1.0.0.apk]
   
   ## 🔗 Links
   - [Source Code](https://github.com/YOUR_USERNAME/calculator-vibe)
   - [Documentation](https://github.com/YOUR_USERNAME/calculator-vibe#readme)
   - [Report Issues](https://github.com/YOUR_USERNAME/calculator-vibe/issues)
   ```

4. **Upload APK**:
   - Drag and drop `calculator-vibe-v1.0.0.apk` to the assets section

5. **Publish release**

## Step 6: Share with Shubham

### Create a shareable link

1. **Direct APK Download**:
   ```
   https://github.com/YOUR_USERNAME/calculator-vibe/releases/download/v1.0.0/calculator-vibe-v1.0.0.apk
   ```

2. **Expo Go Link** (if using Expo Go):
   ```bash
   # Publish to Expo
   npx expo publish
   
   # Share the expo.dev link
   exp://exp.host/@your-username/calculator-vibe
   ```

### Send to Shubham

Create a message with:

```
Hi Shubham! 👋

Your Calculator Vibe app is ready! 🧮

📱 Install APK (Recommended):
https://github.com/YOUR_USERNAME/calculator-vibe/releases/download/v1.0.0/calculator-vibe-v1.0.0.apk

🔗 GitHub Repository:
https://github.com/YOUR_USERNAME/calculator-vibe

📖 Documentation:
See README.md for features and usage instructions

✅ Tested Features:
- All basic operations
- 34 unit tests passing
- Light/Dark theme
- Calculation history
- Copy to clipboard

📝 To Install:
1. Download APK from link above
2. Enable "Unknown Sources" in Settings
3. Tap APK and install
4. Enjoy calculating! 🎉

Let me know if you have any questions!
```

## Step 7: Continuous Integration

### GitHub Actions

The CI/CD pipeline is already configured:
- Runs on push to `dev` and `main`
- Executes linter and tests
- Reports coverage

To view:
1. Go to your GitHub repo
2. Click "Actions" tab
3. See test results for each push

### Future Updates

To release updates:

1. **Make changes on `dev` branch**:
   ```bash
   git checkout dev
   # Make changes
   git add .
   git commit -m "feat: add new feature"
   git push origin dev
   ```

2. **Test changes**:
   ```bash
   npm test
   npm run lint
   ```

3. **Merge to main**:
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

4. **Build new version**:
   ```bash
   # Update version in package.json and app.json
   # Then build
   eas build --platform android --profile production
   ```

5. **Create new release**:
   - Tag: `v1.1.0`, `v1.2.0`, etc.
   - Upload new APK
   - Add changelog

## Step 8: Optional Enhancements

### Add Demo GIF

1. **Record app usage**:
   - Use Android screen recorder
   - Show key features in 8-10 seconds
   - Portrait mode, clear operations

2. **Convert to GIF**:
   - Use https://ezgif.com/video-to-gif
   - Or https://cloudconvert.com/mp4-to-gif
   - Max 5MB file size

3. **Add to repo**:
   ```bash
   # Save as assets/demo.gif
   git add assets/demo.gif
   git commit -m "docs: add demo gif"
   git push
   ```

4. **Update README**:
   - The demo.gif is already referenced in README.md
   - Just replace the placeholder

### Setup App Distribution

For easier testing/distribution:

1. **Firebase App Distribution**:
   - Create Firebase project
   - Enable App Distribution
   - Upload APK for beta testing

2. **TestFlight** (for iOS when ready):
   - Enroll in Apple Developer Program
   - Build iOS version with EAS
   - Upload to TestFlight

### Analytics (Optional)

Add usage analytics:
```bash
npx expo install expo-analytics-segment
# Or Google Analytics, Amplitude, etc.
```

## Troubleshooting

### Build Fails

1. **Check app.json configuration**
2. **Verify EAS authentication**: `eas whoami`
3. **Clear cache**: `rm -rf node_modules package-lock.json && npm install`
4. **Check build logs** on Expo dashboard

### Tests Fail

1. **Clear Jest cache**: `npx jest --clearCache`
2. **Reinstall dependencies**: `npm ci`
3. **Check Node version**: `node --version` (should be 18+)

### Husky Hooks Not Working

```bash
npx husky install
chmod +x .husky/pre-commit
git config core.hooksPath .husky
```

### APK Won't Install

1. **Check "Unknown Sources"** is enabled
2. **Verify APK isn't corrupted**: Re-download
3. **Check Android version**: Requires Android 5.0+ (API 21+)
4. **Try uninstalling** old version first

## Success Checklist

- [ ] GitHub repository created and pushed
- [ ] All tests passing on CI/CD
- [ ] Android APK built successfully
- [ ] APK tested on real device
- [ ] GitHub release created with APK
- [ ] README has correct links
- [ ] Demo GIF added (optional)
- [ ] Shared with Shubham
- [ ] Documentation complete

## Next Steps

After successful deployment:

1. **Gather feedback** from Shubham
2. **Monitor issues** on GitHub
3. **Plan next features**:
   - Scientific calculator mode?
   - Unit conversions?
   - Memory functions (M+, M-, MR, MC)?
   - Expression history save/export?

4. **Consider publishing**:
   - Google Play Store
   - Alternative app stores (F-Droid, Amazon Appstore)

---

**Congratulations! 🎉** You've successfully deployed Calculator Vibe!

For questions or issues, refer to:
- README.md - Main documentation
- SETUP.md - Development setup
- GitHub Issues - Report bugs/features
