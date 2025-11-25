# Calculator Vibe 🧮

A modern, feature-rich mobile calculator built with React Native (Expo) featuring a clean UI, reliable expression parsing, and comprehensive test coverage.

![Demo](./assets/demo.gif)

## ✨ Features

### Core Functionality
- ✅ **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- ✅ **Advanced Features**: Parentheses, Operator precedence, Decimal support
- ✅ **Special Operations**: Percent (%), Unary +/- toggle
- ✅ **Clear Functions**: Clear (C) and All Clear (AC)
- ✅ **Calculation History**: Last 10 calculations displayed
- ✅ **Copy to Clipboard**: Tap the copy icon to copy results

### UI/UX
- 🎨 **Theme Support**: Light and Dark mode toggle
- 📱 **Portrait-First Design**: Optimized for mobile use
- 👆 **Touch-Friendly**: Large, responsive buttons
- 🎯 **Clean Layout**: Minimal, modern interface

### Security & Quality
- 🔒 **No `eval()`**: Uses `mathjs` library for safe expression parsing
- ✅ **Unit Tests**: 40+ test cases with comprehensive coverage
- 🔍 **Linting**: ESLint configured with TypeScript rules
- 🪝 **Pre-commit Hooks**: Automatic test execution via Husky
- 🚀 **CI/CD**: GitHub Actions for automated testing

## 📱 Installation

### Option 1: Install APK (Android)

1. **Download the APK**:
   - [Download Calculator-Vibe APK](https://github.com/YOUR_USERNAME/calculator-vibe/releases/latest/download/calculator-vibe.apk)

2. **Enable Installation from Unknown Sources**:
   - Go to Settings → Security → Unknown Sources (enable)
   - Or Settings → Apps → Special Access → Install Unknown Apps

3. **Install**:
   - Open the downloaded APK file
   - Tap "Install"
   - Open the app and enjoy!

### Option 2: Run with Expo Go

1. **Install Expo Go** on your Android/iOS device:
   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS](https://apps.apple.com/app/expo-go/id982107779)

2. **Scan QR Code or Open Link**:
   - Expo URL: `exp://YOUR_EXPO_LINK`
   - Or scan the QR code from the terminal when running locally

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ and npm
- Expo CLI (`npm install -g expo-cli`)
- For Android: Android Studio & Android SDK
- For iOS: Xcode (macOS only)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/calculator-vibe.git
   cd calculator-vibe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android device/emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm test           # Run test suite
npm run test:watch # Run tests in watch mode
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format code with Prettier
```

## 🧪 Testing

The calculator includes comprehensive unit tests covering:

1. **Basic Operations**: `2+2 = 4`
2. **Operator Precedence**: `1+2*3 = 7`
3. **Parentheses**: `(1+2)*3 = 9`
4. **Division by Zero**: `3/0 = Error`
5. **Decimal Precision**: `0.1+0.2 ≈ 0.3`
6. **Negative Numbers**: `-0.5+1.5 = 1`
7. **Exponentiation**: `2^3 = 8`
8. **Percent**: `100% = 1` (documented as division by 100)

### Run Tests

```bash
npm test                    # Run all tests
npm test -- --coverage      # Run with coverage report
npm test -- --watch         # Run in watch mode
```

### Test Coverage
- **Statements**: 95%+
- **Branches**: 90%+
- **Functions**: 95%+
- **Lines**: 95%+

## 🏗️ Project Structure

```
calculator-vibe/
├── src/
│   ├── App.tsx                 # Main app component
│   ├── ui/
│   │   ├── Display.tsx         # Calculator display & history
│   │   └── ButtonGrid.tsx      # Button layout & interactions
│   ├── logic/
│   │   └── evaluator.ts        # Expression parser (uses mathjs)
│   ├── hooks/
│   │   └── useCalculator.ts    # Calculator state management
│   └── assets/                 # Images, icons, demo.gif
├── __tests__/
│   └── evaluator.test.ts       # Comprehensive test suite
├── .github/
│   └── workflows/
│       └── test.yml            # CI/CD pipeline
├── package.json                # Dependencies & scripts
├── app.json                    # Expo configuration
├── eas.json                    # EAS Build configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.js                # ESLint configuration
├── .prettierrc                 # Prettier configuration
└── README.md                   # This file
```

## 📦 Dependencies

### Core Dependencies
- **expo**: ~50.0.0 - React Native framework
- **react**: 18.2.0 - UI library
- **react-native**: 0.73.0 - Mobile platform
- **mathjs**: ^12.2.1 - Safe math expression parser (NO eval!)
- **expo-clipboard**: ~5.0.1 - Clipboard functionality
- **@expo/vector-icons**: ^14.0.0 - Icon library

### Development Dependencies
- **typescript**: ^5.3.3 - Type safety
- **jest**: ^29.7.0 - Testing framework
- **eslint**: ^8.56.0 - Code linting
- **prettier**: ^3.1.1 - Code formatting
- **husky**: ^8.0.3 - Git hooks

## 🚀 Building APK

### Using EAS Build (Recommended)

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure the project**:
   ```bash
   eas build:configure
   ```

4. **Build APK**:
   ```bash
   eas build --platform android --profile production
   ```

5. **Download APK**:
   - The build link will be provided in the terminal
   - Or check your Expo dashboard: https://expo.dev

### Local Build (Alternative)

1. **Build locally**:
   ```bash
   npx expo prebuild
   cd android
   ./gradlew assembleRelease
   ```

2. **Find APK**:
   - Located at: `android/app/build/outputs/apk/release/app-release.apk`

## 📐 Calculator Behavior

### Percent Operation
- `100%` → `1` (converts to decimal: 100/100)
- `50%+50` → `50.5` (0.5 + 50)
- Consistent with mathematical convention

### Decimal Precision
- Results formatted to 10 decimal places maximum
- Trailing zeros automatically removed
- Handles floating-point precision issues

### Error Handling
- Division by zero: Returns "Error"
- Invalid expressions: Returns "Error"
- Graceful recovery: Start new calculation after error

## 🔀 Branching Strategy

- **main**: Production-ready code
- **dev**: Development branch (all features merged here first)
- **feature/***: Feature branches

### Workflow
1. Create feature branch from `dev`
2. Commit changes with clear messages
3. Create PR to `dev`
4. After testing, merge `dev` to `main`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request to `dev` branch

## 📝 Changelog

### Version 1.0.0 (2025-11-25)
- ✨ Initial release
- ✅ Basic arithmetic operations (+, -, ×, ÷)
- ✅ Parentheses and operator precedence
- ✅ Decimal support with precision handling
- ✅ Percent and unary +/- operations
- ✅ Light/Dark theme toggle
- ✅ Calculation history (last 10 entries)
- ✅ Copy-to-clipboard functionality
- ✅ 40+ unit tests with high coverage
- ✅ GitHub Actions CI/CD
- ✅ Pre-commit hooks with Husky
- ✅ Android APK build with EAS

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shubham**

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Math parsing by [mathjs](https://mathjs.org)
- Icons by [@expo/vector-icons](https://icons.expo.fyi)
- Testing with [Jest](https://jestjs.io)

---

**Note**: This calculator uses `mathjs` for expression evaluation and does NOT use `eval()` for security reasons. All calculations are safely parsed and evaluated.

For issues or feature requests, please open an issue on GitHub.
