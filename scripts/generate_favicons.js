const sharp = require('sharp');
const fs = require('fs');

async function generate() {
  const source = 'public/village coders favicon.png';
  
  // 1. Trim transparency to get the true logo bounds
  const trimmed = await sharp(source).trim().toBuffer();
  
  // 2. We want a 512x512 square where the logo occupies ~84% of width/height (~430px)
  // This leaves a clean 8% safe zone around edges so Google's circular search snippet won't clip it
  const logoResized = await sharp(trimmed)
    .resize(430, 430, { fit: 'inside' })
    .toBuffer();
  
  // 3. Composite onto a 512x512 transparent canvas
  const square512Png = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
    .composite([{ input: logoResized, gravity: 'center' }])
    .png()
    .toBuffer();

  // White-background version for JPEG fallback
  const square512Jpg = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{ input: logoResized, gravity: 'center' }])
    .jpeg({ quality: 95 })
    .toBuffer();

  // Save 512x512 square files
  fs.writeFileSync('public/icon-512.png', square512Png);
  fs.writeFileSync('public/favicon.jpg', square512Jpg);
  fs.writeFileSync('src/app/icon.png', square512Png);

  // Generate 192x192 (Google / Android Chrome standard multiple of 48px: 48 * 4 = 192)
  const square192Png = await sharp(square512Png).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192.png', square192Png);

  // Generate 48x48 (Google Search official 48px square requirement)
  const square48Png = await sharp(square512Png).resize(48, 48).png().toBuffer();
  fs.writeFileSync('public/icon-48.png', square48Png);

  // Generate 180x180 (Apple touch icon)
  const apple180Png = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{
      input: await sharp(trimmed).resize(144, 144, { fit: 'inside' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-touch-icon.png', apple180Png);
  fs.writeFileSync('src/app/apple-icon.png', apple180Png);

  // Generate 32x32 and 16x16
  const square32Png = await sharp(square512Png).resize(32, 32).png().toBuffer();
  const square16Png = await sharp(square512Png).resize(16, 16).png().toBuffer();

  // Build a true multi-resolution .ico containing 48, 32, 16
  const images = [
    { size: 48, buf: square48Png },
    { size: 32, buf: square32Png },
    { size: 16, buf: square16Png },
  ];

  const headerSize = 6;
  const entrySize = 16;
  const totalEntriesSize = images.length * entrySize;
  let offset = headerSize + totalEntriesSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(img.size, 0); // width
    entry.writeUInt8(img.size, 1); // height
    entry.writeUInt8(0, 2);        // colors
    entry.writeUInt8(0, 3);        // reserved
    entry.writeUInt16LE(1, 4);     // color planes
    entry.writeUInt16LE(32, 6);    // bpp
    entry.writeUInt32LE(img.buf.length, 8); // size
    entry.writeUInt32LE(offset, 12);        // offset
    offset += img.buf.length;
    entries.push(entry);
  }

  const icoBuf = Buffer.concat([header, ...entries, ...images.map(img => img.buf)]);
  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('src/app/favicon.ico', icoBuf);

  // Clean up any old jpg files in src/app that would conflict with icon.png
  try { fs.unlinkSync('src/app/icon.jpg'); } catch(e) {}
  try { fs.unlinkSync('src/app/apple-icon.jpg'); } catch(e) {}

  console.log('All favicons successfully generated according to Google Search specifications!');
}

generate().catch(console.error);
