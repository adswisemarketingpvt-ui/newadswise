const fs = require('fs');

const file = 'src/pages/industry/HealthcarePage.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content
  // General Backgrounds
  .replace(/bg-slate-950/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-900/g, 'bg-[#C0C0C0]')
  .replace(/bg-slate-800/g, 'bg-[#D3D3D3]')
  .replace(/bg-slate-50/g, 'bg-[#D3D3D3]')
  
  // Gradients
  .replace(/from-slate-950/g, 'from-[#D3D3D3]')
  .replace(/via-slate-950/g, 'via-[#D3D3D3]')
  .replace(/to-slate-900/g, 'to-[#C0C0C0]')
  .replace(/from-slate-900/g, 'from-[#D3D3D3]')
  .replace(/to-white/g, 'to-[#363636]')
  
  // Borders
  .replace(/border-slate-[0-9]{3}/g, 'border-[#B0C4DE]')
  .replace(/ring-sky-[0-9]{3}/g, 'ring-[#536186]')
  .replace(/border-sky-[0-9]{3}/g, 'border-[#536186]')
  .replace(/border-teal-[0-9]{3}/g, 'border-[#536186]')
  
  // Text Colors
  .replace(/text-slate-[0-9]{3}/g, 'text-[#536186]')
  .replace(/text-sky-500/g, 'text-[#536186]')
  .replace(/text-sky-400/g, 'text-[#536186]')
  .replace(/text-sky-200/g, 'text-[#B0C4DE]')
  .replace(/text-teal-400/g, 'text-[#536186]')
  .replace(/text-teal-500/g, 'text-[#536186]')
  .replace(/text-green-[0-9]{3}/g, 'text-[#536186]')
  .replace(/text-yellow-[0-9]{3}/g, 'text-[#536186]')
  
  // Background Colors (Accents)
  .replace(/bg-sky-500/g, 'bg-[#536186]')
  .replace(/bg-sky-600/g, 'bg-[#536186]')
  .replace(/bg-teal-500/g, 'bg-[#536186]')
  .replace(/bg-green-500/g, 'bg-[#536186]')
  
  // Shadows
  .replace(/shadow-sky-[0-9]{3}/g, 'shadow-[#536186]')
  
  // Hovers
  .replace(/hover:bg-slate-[0-9]{3}/g, 'hover:bg-[#C0C0C0]')
  .replace(/hover:border-sky-[0-9]{3}/g, 'hover:border-[#536186]')
  .replace(/group-hover:bg-sky-[0-9]{3}/g, 'group-hover:bg-[#536186]')
  .replace(/group-hover:text-sky-[0-9]{3}/g, 'group-hover:text-[#363636]')
  .replace(/group-hover:border-sky-[0-9]{3}/g, 'group-hover:border-[#536186]')
  .replace(/hover:bg-sky-[0-9]{3}/g, 'hover:bg-[#363636]')
  .replace(/hover:border-\[#0A192F\]/g, 'hover:border-[#363636]')
  
  // Gradients inside specific buttons or parts
  .replace(/from-sky-[0-9]{3}/g, 'from-[#536186]')
  .replace(/to-sky-400/g, 'to-[#363636]')
  .replace(/via-sky-[0-9]{3}/g, 'via-[#536186]')
  .replace(/to-sky-900/g, 'to-[#536186]')
  .replace(/to-teal-600/g, 'to-[#363636]')

  // Specific stroke colors
  .replace(/stroke-sky-500/g, 'stroke-[#536186]')
  
  // Selection
  .replace(/selection:bg-\[#536186\]/g, 'selection:bg-[#B0C4DE]')
  .replace(/selection:text-\[#363636\]/g, 'selection:text-[#363636]');

fs.writeFileSync(file, content, 'utf8');
console.log('Done mapping healthcare colors.');
