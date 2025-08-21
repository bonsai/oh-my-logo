
  /**
 * Oh My Logo for Google Apps Script
 * Create colorful ASCII art logos in GAS environment
 * 
 * Based on: https://github.com/shinshin86/oh-my-logo
 */

// Color palettes
const PALETTES = {
  'grad-blue': ['#4ea8ff', '#7f88ff'],
  'sunset': ['#ff9966', '#ff5e62', '#ffa34e'],
  'dawn': ['#00c6ff', '#0072ff'],
  'nebula': ['#654ea3', '#eaafc8'],
  'ocean': ['#667eea', '#764ba2'],
  'fire': ['#ff0844', '#ffb199'],
  'forest': ['#134e5e', '#71b280'],
  'gold': ['#f7971e', '#ffd200'],
  'purple': ['#667db6', '#0082c8', '#0078ff'],
  'mint': ['#00d2ff', '#3a7bd5'],
  'coral': ['#ff9a9e', '#fecfef'],
  'matrix': ['#00ff41', '#008f11'],
  'mono': ['#f07178']
};

// Simple ASCII font (similar to Figlet's Standard font)
const ASCII_FONT = {
  'A': [
    '  ██  ',
    ' ████ ',
    '██  ██',
    '██████',
    '██  ██',
    '██  ██'
  ],
  'B': [
    '██████',
    '██  ██',
    '██████',
    '██████',
    '██  ██',
    '██████'
  ],
  'C': [
    ' █████',
    '██    ',
    '██    ',
    '██    ',
    '██    ',
    ' █████'
  ],
  'D': [
    '██████',
    '██  ██',
    '██  ██',
    '██  ██',
    '██  ██',
    '██████'
  ],
  'E': [
    '██████',
    '██    ',
    '██████',
    '██████',
    '██    ',
    '██████'
  ],
  'F': [
    '██████',
    '██    ',
    '██████',
    '██████',
    '██    ',
    '██    '
  ],
  'G': [
    ' █████',
    '██    ',
    '██ ███',
    '██  ██',
    '██  ██',
    ' █████'
  ],
  'H': [
    '██  ██',
    '██  ██',
    '██████',
    '██████',
    '██  ██',
    '██  ██'
  ],
  'I': [
    '██████',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '██████'
  ],
  'J': [
    '██████',
    '    ██',
    '    ██',
    '    ██',
    '██  ██',
    ' █████'
  ],
  'K': [
    '██  ██',
    '██ ██ ',
    '████  ',
    '████  ',
    '██ ██ ',
    '██  ██'
  ],
  'L': [
    '██    ',
    '██    ',
    '██    ',
    '██    ',
    '██    ',
    '██████'
  ],
  'M': [
    '██  ██',
    '██████',
    '██████',
    '██  ██',
    '██  ██',
    '██  ██'
  ],
  'N': [
    '██  ██',
    '███ ██',
    '██████',
    '██ ███',
    '██  ██',
    '██  ██'
  ],
  'O': [
    ' █████',
    '██  ██',
    '██  ██',
    '██  ██',
    '██  ██',
    ' █████'
  ],
  'P': [
    '██████',
    '██  ██',
    '██████',
    '██    ',
    '██    ',
    '██    '
  ],
  'Q': [
    ' █████',
    '██  ██',
    '██  ██',
    '██ ███',
    '██  ██',
    ' ██████'
  ],
  'R': [
    '██████',
    '██  ██',
    '██████',
    '██ ██ ',
    '██  ██',
    '██  ██'
  ],
  'S': [
    ' █████',
    '██    ',
    ' █████',
    '    ██',
    '    ██',
    '█████ '
  ],
  'T': [
    '██████',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '  ██  '
  ],
  'U': [
    '██  ██',
    '██  ██',
    '██  ██',
    '██  ██',
    '██  ██',
    ' █████'
  ],
  'V': [
    '██  ██',
    '██  ██',
    '██  ██',
    '██  ██',
    ' ████ ',
    '  ██  '
  ],
  'W': [
    '██  ██',
    '██  ██',
    '██  ██',
    '██████',
    '██████',
    '██  ██'
  ],
  'X': [
    '██  ██',
    ' ████ ',
    '  ██  ',
    '  ██  ',
    ' ████ ',
    '██  ██'
  ],
  'Y': [
    '██  ██',
    '██  ██',
    ' ████ ',
    '  ██  ',
    '  ██  ',
    '  ██  '
  ],
  'Z': [
    '██████',
    '   ██ ',
    '  ██  ',
    ' ██   ',
    '██    ',
    '██████'
  ],
  '0': [
    ' █████',
    '██  ██',
    '██ ███',
    '███ ██',
    '██  ██',
    ' █████'
  ],
  '1': [
    '  ██  ',
    ' ███  ',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '██████'
  ],
  '2': [
    ' █████',
    '██  ██',
    '   ██ ',
    ' ████ ',
    '██    ',
    '██████'
  ],
  '3': [
    ' █████',
    '██  ██',
    '  ████',
    '   ███',
    '██  ██',
    ' █████'
  ],
  '4': [
    '██  ██',
    '██  ██',
    '██████',
    '   ██ ',
    '   ██ ',
    '   ██ '
  ],
  '5': [
    '██████',
    '██    ',
    '██████',
    '    ██',
    '██  ██',
    ' █████'
  ],
  '6': [
    ' █████',
    '██    ',
    '██████',
    '██  ██',
    '██  ██',
    ' █████'
  ],
  '7': [
    '██████',
    '    ██',
    '   ██ ',
    '  ██  ',
    ' ██   ',
    ' ██   '
  ],
  '8': [
    ' █████',
    '██  ██',
    ' █████',
    ' █████',
    '██  ██',
    ' █████'
  ],
  '9': [
    ' █████',
    '██  ██',
    ' █████',
    '    ██',
    '    ██',
    ' █████'
  ],
  ' ': [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      '
  ],
  '!': [
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '  ██  ',
    '      ',
    '  ██  '
  ]
};

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Interpolate between two colors
 */
function interpolateColor(color1, color2, factor) {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  
  if (!c1 || !c2) return color1;
  
  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);
  
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Generate gradient colors
 */
function generateGradient(colors, steps) {
  if (colors.length === 1) {
    return Array(steps).fill(colors[0]);
  }
  
  const gradient = [];
  const segmentSize = (steps - 1) / (colors.length - 1);
  
  for (let i = 0; i < steps; i++) {
    const segmentIndex = Math.floor(i / segmentSize);
    const localT = (i % segmentSize) / segmentSize;
    
    const color1 = colors[Math.min(segmentIndex, colors.length - 1)];
    const color2 = colors[Math.min(segmentIndex + 1, colors.length - 1)];
    
    gradient.push(interpolateColor(color1, color2, localT));
  }
  
  return gradient;
}

/**
 * Convert text to ASCII art
 */
function textToAscii(text) {
  const lines = text.split('\n');
  const asciiLines = [];
  
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex].toUpperCase();
    const letterRows = Array(6).fill('');
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const charAscii = ASCII_FONT[char] || ASCII_FONT[' '];
      
      for (let row = 0; row < 6; row++) {
        letterRows[row] += charAscii[row] + (i < line.length - 1 ? ' ' : '');
      }
    }
    
    asciiLines.push(...letterRows);
    
    // Add spacing between lines
    if (lineIndex < lines.length - 1) {
      asciiLines.push('');
    }
  }
  
  return asciiLines;
}

/**
 * Apply gradient to ASCII art
 */
function applyGradient(asciiLines, colors, direction = 'vertical') {
  const result = [];
  
  switch (direction) {
    case 'horizontal':
      for (let i = 0; i < asciiLines.length; i++) {
        const line = asciiLines[i];
        const gradient = generateGradient(colors, line.length);
        let coloredLine = '';
        
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          const color = gradient[j] || gradient[gradient.length - 1];
          if (char !== ' ') {
            coloredLine += char; // In GAS, we can't apply actual colors, so just return the character
          } else {
            coloredLine += char;
          }
        }
        result.push(coloredLine);
      }
      break;
      
    case 'diagonal':
      const totalChars = Math.max(...asciiLines.map(line => line.length));
      const diagonalGradient = generateGradient(colors, asciiLines.length + totalChars);
      
      for (let i = 0; i < asciiLines.length; i++) {
        const line = asciiLines[i];
        let coloredLine = '';
        
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          const colorIndex = Math.min(i + j, diagonalGradient.length - 1);
          const color = diagonalGradient[colorIndex];
          coloredLine += char;
        }
        result.push(coloredLine);
      }
      break;
      
    default: // vertical
      const verticalGradient = generateGradient(colors, asciiLines.length);
      for (let i = 0; i < asciiLines.length; i++) {
        const color = verticalGradient[i] || verticalGradient[verticalGradient.length - 1];
        result.push(asciiLines[i]);
      }
      break;
  }
  
  return result;
}

/**
 * Main render function for ASCII art
 */
function render(text, options = {}) {
  const {
    palette = 'grad-blue',
    direction = 'vertical',
    font = 'Standard'
  } = options;
  
  // Get colors from palette
  let colors;
  if (Array.isArray(palette)) {
    colors = palette;
  } else if (PALETTES[palette]) {
    colors = PALETTES[palette];
  } else {
    colors = PALETTES['grad-blue'];
  }
  
  // Convert text to ASCII
  const asciiLines = textToAscii(text);
  
  // Apply gradient
  const coloredLines = applyGradient(asciiLines, colors, direction);
  
  return coloredLines.join('\n');
}

/**
 * Render filled block characters (simplified for GAS)
 */
function renderFilled(text, options = {}) {
  const {
    palette = 'grad-blue'
  } = options;
  
  // Get colors from palette
  let colors;
  if (Array.isArray(palette)) {
    colors = palette;
  } else if (PALETTES[palette]) {
    colors = PALETTES[palette];
  } else {
    colors = PALETTES['grad-blue'];
  }
  
  // Simple filled version - replace ASCII art with solid blocks
  const lines = text.split('\n');
  const result = [];
  
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    const blockRows = Array(4).fill('');
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === ' ') {
        for (let row = 0; row < 4; row++) {
          blockRows[row] += '      ';
        }
      } else {
        for (let row = 0; row < 4; row++) {
          blockRows[row] += '██████';
        }
      }
    }
    
    result.push(...blockRows);
    
    if (lineIndex < lines.length - 1) {
      result.push('');
    }
  }
  
  return result.join('\n');
}

/**
 * Get all available palette names
 */
function getPaletteNames() {
  return Object.keys(PALETTES);
}

/**
 * Get default palette
 */
function getDefaultPalette() {
  return PALETTES['grad-blue'];
}

/**
 * Resolve palette by name
 */
function resolvePalette(name) {
  return PALETTES[name] || PALETTES['grad-blue'];
}

/**
 * Get palette preview (for GAS, just return color list)
 */
function getPalettePreview(name) {
  const colors = PALETTES[name];
  if (!colors) return 'Unknown palette';
  
  return `${name}: ${colors.join(' → ')}`;
}

// Example usage functions for Google Apps Script

/**
 * Example: Generate a simple logo
 */
function exampleSimpleLogo() {
  const logo = render('HELLO');
  Logger.log(logo);
  return logo;
}

/**
 * Example: Generate logo with custom palette
 */
function exampleCustomLogo() {
  const logo = render('GAS LOGO', {
    palette: 'sunset',
    direction: 'horizontal'
  });
  Logger.log(logo);
  return logo;
}

/**
 * Example: Generate filled logo
 */
function exampleFilledLogo() {
  const logo = renderFilled('FILLED', {
    palette: 'matrix'
  });
  Logger.log(logo);
  return logo;
}

/**
 * Example: List all available palettes
 */
function exampleListPalettes() {
  const palettes = getPaletteNames();
  Logger.log('Available palettes:');
  
  palettes.forEach(palette => {
    const preview = getPalettePreview(palette);
    Logger.log(preview);
  });
  
  return palettes;
}

/**
 * Example: Generate HTML output with styling
 */
function exampleHtmlOutput() {
  const text = 'WEB LOGO';
  const asciiLines = textToAscii(text);
  const colors = PALETTES['sunset'];
  const htmlGradient = generateGradient(colors, asciiLines.length);
  
  let html = '<div style="font-family: monospace; font-weight: bold; line-height: 1;">\n';
  
  for (let i = 0; i < asciiLines.length; i++) {
    const color = htmlGradient[i] || htmlGradient[htmlGradient.length - 1];
    html += `<div style="color: ${color}">${asciiLines[i]}</div>\n`;
  }
  
  html += '</div>';
  
  Logger.log(html);
  return html;
}

/**
 * Create an HTML file with the logo for web apps
 */
function createHtmlLogo(text, paletteName = 'grad-blue') {
  const asciiLines = textToAscii(text);
  const colors = PALETTES[paletteName] || PALETTES['grad-blue'];
  const logoGradient = generateGradient(colors, asciiLines.length);
  
  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${text} Logo</title>
  <style>
    body {
      background-color: #000;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: 'Courier New', monospace;
    }
    .logo {
      font-weight: bold;
      line-height: 1;
      text-align: center;
      white-space: pre;
    }
  </style>
</head>
<body>
  <div class="logo">`;
  
  for (let i = 0; i < asciiLines.length; i++) {
    const color = logoGradient[i] || logoGradient[logoGradient.length - 1];
    html += `<div style="color: ${color}">${asciiLines[i]}</div>`;
  }
  
  html += `  </div>
</body>
</html>`;
  
  return html;
}

