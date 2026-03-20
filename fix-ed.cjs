const fs = require('fs');

const file = 'src/pages/industry/EducationPage.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content
  .replace(/bg-slate-950/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-50/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-900/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-800/g, 'bg-[#C0C0C0]')
  .replace(/bg-\[#0A192F\]/g, 'bg-[#C0C0C0]')
  
  .replace(/border-slate-800/g, 'border-[#B0C4DE]')
  .replace(/border-slate-600/g, 'border-[#B0C4DE]')
  .replace(/border-slate-200/g, 'border-[#B0C4DE]')
  .replace(/border-slate-100/g, 'border-[#B0C4DE]')
  .replace(/border-\[#0A192F\]/g, 'border-[#B0C4DE]')

  .replace(/text-slate-900/g, 'text-[#363636]')
  .replace(/text-slate-700/g, 'text-[#536186]')
  .replace(/text-slate-600/g, 'text-[#536186]')
  .replace(/text-slate-500/g, 'text-[#536186]')
  .replace(/text-slate-400/g, 'text-[#536186]')
  .replace(/text-\[#0A192F\]/g, 'text-[#363636]')
  
  .replace(/hover:border-\[#0A192F\]/g, 'hover:border-[#536186]')
  .replace(/hover:bg-slate-900/g, 'hover:bg-[#C0C0C0]')
  .replace(/hover:bg-slate-50/g, 'hover:bg-[#D3D3D3]')
  .replace(/hover:shadow-\[#0A192F\]/g, 'hover:shadow-[#363636]')
  
  // Specific fixes for buttons and selection
  .replace(/text-\[#536186\] bg-\[#536186\] hover:bg-\[#536186\]/g, 'text-[#D3D3D3] bg-[#536186] hover:bg-[#363636]')
  .replace(/bg-\[#536186\] hover:bg-\[#536186\] text-\[#536186\]/g, 'bg-[#536186] hover:bg-[#363636] text-[#D3D3D3]')
  .replace(/shadow-yellow-400\/20/g, 'shadow-[#536186]/20')
  .replace(/selection:text-\[#536186\]/g, 'selection:text-[#363636]')
  .replace(/focus:ring-yellow-400/g, 'focus:ring-[#536186]')
  
  // Specific gradients
  .replace(/to-white/g, 'to-[#363636]');

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
