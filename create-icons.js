const sharp = require('sharp');
const fs = require('fs');

// Create assets directory if it doesn't exist
if (!fs.existsSync('./assets')) {
  fs.mkdirSync('./assets');
}

// Create icon (1024x1024)
sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 74, g: 144, b: 226, alpha: 1 }
  }
})
  .png()
  .toFile('./assets/icon.png')
  .then(() => console.log('✓ Created icon.png'));

// Create adaptive icon (1024x1024)
sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 74, g: 144, b: 226, alpha: 1 }
  }
})
  .png()
  .toFile('./assets/adaptive-icon.png')
  .then(() => console.log('✓ Created adaptive-icon.png'));

// Create splash (1242x2436)
sharp({
  create: {
    width: 1242,
    height: 2436,
    channels: 4,
    background: { r: 74, g: 144, b: 226, alpha: 1 }
  }
})
  .png()
  .toFile('./assets/splash.png')
  .then(() => console.log('✓ Created splash.png'));

// Create favicon (48x48)
sharp({
  create: {
    width: 48,
    height: 48,
    channels: 4,
    background: { r: 74, g: 144, b: 226, alpha: 1 }
  }
})
  .png()
  .toFile('./assets/favicon.png')
  .then(() => console.log('✓ Created favicon.png'));

console.log('Creating placeholder icons...');
