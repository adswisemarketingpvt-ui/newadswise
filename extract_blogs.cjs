const fs = require('fs');

const content = fs.readFileSync('src/pages/BlogPage.tsx', 'utf-8');

const typeMatch = content.match(/type Blog = \{[\s\S]*?\};/);
let blogType = typeMatch[0].replace('type Blog = {', 'export type Blog = {\n  slug: string;');

const arrayMatch = content.match(/const blogs: Blog\[\] = \[[\s\S]*?\n  \];/);
let blogsArray = arrayMatch[0].replace('const blogs: Blog[] = [', 'export const blogs: Blog[] = [');

blogsArray = blogsArray.replace(/\{([\s\S]*?title:\s*"(.*?)",[\s\S]*?content:\s*`[\s\S]*?`,\s*)\}/g, (match, p1, p2) => {
    const slug = p2.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return match.replace('id:', `slug: "${slug}",\n      id:`);
});

const newFileContent = `${blogType}\n\n${blogsArray}\n`;
fs.writeFileSync('src/data/blogs.ts', newFileContent, 'utf-8');
console.log('Successfully extracted blogs to src/data/blogs.ts');
