const fs = require('fs');
const path = require('path');

const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-39MBNBLCY1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-39MBNBLCY1');
</script>`;

const MEASUREMENT_ID = 'G-39MBNBLCY1';

function insertGaTag(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already inserted
    if (content.includes(MEASUREMENT_ID)) {
      console.log(`Skipped (already contains ID): ${filePath}`);
      return false;
    }

    // Search for <head> tag
    const match = content.match(/(<head\b[^>]*>)/i);
    if (!match) {
      console.log(`Skipped (no <head> tag found): ${filePath}`);
      return false;
    }

    const headTag = match[1];
    // Insert GA_TAG right after <head> tag
    const newContent = content.replace(headTag, `${headTag}\n${GA_TAG}`);

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully injected: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walkDir(filePath, callback);
      }
    } else if (file.endsWith('.html')) {
      callback(filePath);
    }
  }
}

function main() {
  const workspaceDir = path.dirname(__dirname);
  console.log(`Scanning workspace: ${workspaceDir}`);

  let totalFiles = 0;
  let modifiedCount = 0;

  walkDir(workspaceDir, (filePath) => {
    totalFiles++;
    if (insertGaTag(filePath)) {
      modifiedCount++;
    }
  });

  console.log(`Done. Modified ${modifiedCount} out of ${totalFiles} files.`);
}

main();
