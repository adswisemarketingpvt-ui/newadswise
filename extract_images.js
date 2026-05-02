const fs = require('fs');

try {
  fs.mkdirSync('public/casestudy', { recursive: true });
  const html = fs.readFileSync('public/doc_export.html', 'utf8');
  const regex = /src="data:image\/([^;]+);base64,([^"]+)"/g;

  let match;
  let i = 1;
  while ((match = regex.exec(html)) !== null) {
    const ext = match[1];
    const base64Data = match[2];
    const fileName = `public/casestudy/realestate-${i}.${ext}`;
    fs.writeFileSync(fileName, base64Data, 'base64');
    console.log(`Saved ${fileName}`);
    i++;
  }
} catch (e) {
  console.error("ERROR:", e);
}
