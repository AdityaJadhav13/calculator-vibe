# 🚀 Get Your Calculator APK Download Link - QUICK GUIDE

## What You'll Get
A direct download link like this:
```
https://github.com/YOUR_USERNAME/calculator-vibe/releases/download/v1.0.0/calculator-vibe-v1.0.0.apk
```

Anyone who clicks this link will download your calculator APK directly!

---

## Step-by-Step Instructions (30 minutes total)

### STEP 1: Create GitHub Repository (3 minutes)

1. **Go to**: https://github.com/new

2. **Fill in**:
   - Repository name: `calculator-vibe`
   - Description: `Modern mobile calculator with React Native (Expo)`
   - ✅ Make it **PUBLIC**
   - ❌ **Do NOT** check "Initialize with README"

3. **Click** "Create repository"

4. **Keep that page open** (you'll need the URL)

---

### STEP 2: Push Code to GitHub (2 minutes)

Run this command (I'll ask for your GitHub username):

```bash
cd "/Users/adityajadhav/Engineering/Development /My Projects/Calculator"
./scripts/github-setup.sh
```

**What it does:**
- Asks for your GitHub username
- Adds GitHub remote
- Pushes both `main` and `dev` branches

---

### STEP 3: Build Android APK (20 minutes)

Run this command:

```bash
cd "/Users/adityajadhav/Engineering/Development /My Projects/Calculator"
./scripts/build-and-release.sh
```

**What it does:**
1. Asks for your Expo credentials (create account at https://expo.dev if needed)
2. Builds the APK (takes 10-20 minutes)
3. Gives you instructions for next steps

**While waiting:**
- The build happens in the cloud
- Check progress at: https://expo.dev
- You'll get an email when it's done

---

### STEP 4: Download APK (2 minutes)

1. **Go to**: https://expo.dev
2. **Click** on your "calculator-vibe" project
3. **Click** "Builds" tab
4. **Download** the completed APK
5. **Rename** it to: `calculator-vibe-v1.0.0.apk`

---

### STEP 5: Create GitHub Release (3 minutes)

1. **Go to**: `https://github.com/YOUR_USERNAME/calculator-vibe/releases/new`

2. **Fill in**:
   - Tag: `v1.0.0`
   - Release title: `Calculator Vibe v1.0.0 - Initial Release`
   - Description: Copy from below 👇

```markdown
# Calculator Vibe v1.0.0 🧮

Modern mobile calculator built with React Native (Expo).

## ✨ Features
- ➕ Basic operations: +, -, ×, ÷
- 🔢 Parentheses and operator precedence
- 🔸 Decimal support with precision
- 📊 Percent and +/- toggle
- 📜 Calculation history (last 10)
- 🌓 Light/Dark theme
- 📋 Copy to clipboard
- 🔒 Safe parsing (no eval!)

## 📱 Installation
1. Download the APK below
2. Enable "Unknown Sources" in Android settings
3. Install and enjoy!

## 🧪 Quality
✅ 34 unit tests passing
✅ 91%+ code coverage
✅ CI/CD with GitHub Actions

## 📥 Download
Click the APK file below to download.
```

3. **Drag & Drop** the `calculator-vibe-v1.0.0.apk` file into the assets area

4. **Click** "Publish release"

---

### STEP 6: Get Your Download Link! 🎉

Your direct download link is:
```
https://github.com/YOUR_USERNAME/calculator-vibe/releases/download/v1.0.0/calculator-vibe-v1.0.0.apk
```

**Replace** `YOUR_USERNAME` with your actual GitHub username.

**Share this link** and anyone can download your calculator! 📱

---

## Quick Commands Summary

```bash
# 1. Setup GitHub
cd "/Users/adityajadhav/Engineering/Development /My Projects/Calculator"
./scripts/github-setup.sh

# 2. Build APK
./scripts/build-and-release.sh

# 3. After downloading APK, create release at:
# https://github.com/YOUR_USERNAME/calculator-vibe/releases/new
```

---

## Alternative: Quick Manual Method

If the scripts don't work, here's the manual way:

```bash
# 1. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/calculator-vibe.git

# 2. Push code
git checkout main && git push -u origin main
git checkout dev && git push -u origin dev

# 3. Build APK
npm install -g eas-cli
eas login
eas build --platform android --profile production

# 4. Create release manually on GitHub
```

---

## Need Help?

**GitHub account setup:** https://github.com/join  
**Expo account setup:** https://expo.dev/signup  
**Issues?** Check the DEPLOYMENT.md file for detailed troubleshooting

---

## Example Final Link

When done, your link will look like:
```
https://github.com/adityajadhav/calculator-vibe/releases/download/v1.0.0/calculator-vibe-v1.0.0.apk
```

Share this anywhere - WhatsApp, email, website - and people can download your calculator! 🚀
