import re
import base64
import os

with open("doc.html", "r", encoding="utf-8") as f:
    html_content = f.read()

matches = re.finditer(r'src="data:image/([^;]+);base64,([^"]+)"', html_content)

os.makedirs("public/images/case-studies/footwear", exist_ok=True)
count = 1
for match in matches:
    img_type = match.group(1)
    img_data = match.group(2)
    filename = f"public/images/case-studies/footwear/image{count}.{img_type}"
    with open(filename, "wb") as f:
        f.write(base64.b64decode(img_data))
    print(f"Saved {filename}")
    count += 1
