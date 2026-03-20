list const fs = require('fs');

const files = [
  'src/pages/industry/ManufacturingPage.tsx',
  'src/pages/industry/InteriorDesignPage.tsx',
  'src/pages/industry/HealthcarePage.tsx',
  'src/pages/industry/EducationPage.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  content = content
    // Background colors
    .replace(/bg-\[#C0C0C0\]/g, 'bg-[#D3D3D3]')
    .replace(/bg-slate-\d00/g, 'bg-[#D3D3D3]')
    .replace(/bg-zinc-\d00/g, 'bg-[#D3D3D3]')
    .replace(/bg-white/g, 'bg-[#D3D3D3]')
    .replace(/bg-\[#0A192F\]/g, 'bg-[#D3D3D3]')
    .replace(/bg-black/g, 'bg-[#D3D3D3]');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated', file);
});
