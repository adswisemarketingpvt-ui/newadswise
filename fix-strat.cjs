const fs = require('fs');

const file = 'src/pages/services/strategy-consulting.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content
  // Remove accentColor variable usage to static monochromatic ones
  .replace(/const accentColor = '#FF6B35'; \/\/ Adswise Orange/g, 'const accentColor = \'#536186\'; // Stone Gray')

  // Background Colors
  .replace(/bg-slate-950/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-900/g, 'bg-[#C0C0C0]')
  .replace(/bg-slate-800/g, 'bg-[#C0C0C0]')
  .replace(/bg-white/g, 'bg-[#D3D3D3]')
  .replace(/bg-\[#FF4E45\]/g, 'bg-[#536186]')
  .replace(/bg-\[#0A192F\]/g, 'bg-[#363636]')
  
  // Opacity versions of backgrounds
  .replace(/bg-white\/[0-9]+/g, 'bg-[#D3D3D3]/40')

  // Text Colors
  .replace(/text-slate-100/g, 'text-[#363636]')
  .replace(/text-slate-200/g, 'text-[#536186]')
  .replace(/text-slate-300/g, 'text-[#536186]')
  .replace(/text-slate-400/g, 'text-[#536186]')
  .replace(/text-\[#FF4E45\]/g, 'text-[#536186]')
  .replace(/text-red-500/g, 'text-[#536186]')
  .replace(/text-green-[0-9]{3}/g, 'text-[#536186]')
  .replace(/text-\[#0A192F\]/g, 'text-[#363636]')
  
  // Gradients
  .replace(/from-\[#FF4E45\]/g, 'from-[#536186]')
  .replace(/to-red-500/g, 'to-[#363636]')

  // Borders
  .replace(/border-slate-[0-9]{3}/g, 'border-[#B0C4DE]')
  .replace(/border-\[#FF4E45\]/g, 'border-[#536186]')
  .replace(/hover:border-\[#FF4E45\]/g, 'hover:border-[#536186]')

  // Shadows
  .replace(/shadow-\[#FF4E45\]/g, 'shadow-[#536186]/30')
  .replace(/shadow-\[#0A192F\]/g, 'shadow-[#363636]/30')
  
  // Hovers
  .replace(/hover:bg-\[#FF4E45\]/g, 'hover:bg-[#363636]')
  .replace(/hover:bg-slate-[0-9]{3}/g, 'hover:bg-[#D3D3D3]')
  .replace(/hover:backgroundColor: '#1e293b'/g, 'hover:backgroundColor: \'#B0C4DE\'')
  
  // Specific inline overrides or problematic ones
  .replace(/accent-orange-500/g, 'accent-[#536186]')
  .replace(/\[#FF4E45\]\/10/g, '[#536186]/10')
  .replace(/bg-\[#FF4E45\]\/10/g, 'bg-[#536186]/10');

fs.writeFileSync(file, content, 'utf8');
console.log('Done Strategy Consulting Colors');
