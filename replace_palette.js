const fs = require("fs");
const file = "./src/pages/services/EmailWhatsAppMarketing.tsx";
let content = fs.readFileSync(file, "utf8");

content = content.replace(/accentColor = ".*?"/g, 'accentColor = "#536186"');
content = content.replace(
  /secondaryColor = ".*?"/g,
  'secondaryColor = "#B0C4DE"',
);
content = content.replace(
  /directGradient = ".*?"/g,
  'directGradient = "from-[#536186] via-[#363636] to-[#B0C4DE]"',
);
content = content.replace(/#0A192F/g, "#363636");
content = content.replace(/bg-slate-900/g, "bg-[#536186]");
content = content.replace(/bg-slate-800/g, "bg-[#363636]");
content = content.replace(/bg-slate-50/g, "bg-[#D3D3D3]/30");
content = content.replace(/border-slate-800/g, "border-[#C0C0C0]/30");
content = content.replace(/border-slate-700/g, "border-[#C0C0C0]/50");
content = content.replace(/border-slate-600/g, "border-[#C0C0C0]");
content = content.replace(/border-slate-200/g, "border-[#C0C0C0]/80");
content = content.replace(/text-slate-600/g, "text-[#536186]");
content = content.replace(/text-slate-500/g, "text-[#536186]/80");
content = content.replace(/text-slate-400/g, "text-[#D3D3D3]");
content = content.replace(/text-slate-300/g, "text-[#D3D3D3]");
content = content.replace(/text-blue-500/g, "text-[#536186]");
content = content.replace(/text-green-500/g, "text-[#536186]");
content = content.replace(/text-blue-400/g, "text-[#B0C4DE]");
content = content.replace(/text-green-400/g, "text-[#B0C4DE]");
content = content.replace(/bg-blue-600[^\/]/g, "bg-[#536186] ");
content = content.replace(/bg-blue-600\/10/g, "bg-[#536186]");
content = content.replace(/bg-green-600/g, "bg-[#536186]");
content = content.replace(/bg-green-500/g, "bg-[#536186]");
content = content.replace(/bg-blue-50/g, "bg-[#B0C4DE]/20");
content = content.replace(/bg-red-600/g, "bg-[#C0C0C0]");
content = content.replace(/border-blue-500/g, "border-[#536186]");
fs.writeFileSync(file, content);
console.log("Palette updated successfully.");
