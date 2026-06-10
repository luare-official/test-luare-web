import os
import re

GA_TAG = """<script async src="https://www.googletagmanager.com/gtag/js?id=G-39MBNBLCY1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-39MBNBLCY1');
</script>"""

MEASUREMENT_ID = "G-39MBNBLCY1"

def insert_ga_tag(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Could not read {file_path}: {e}")
        return False

    # Check if already inserted
    if MEASUREMENT_ID in content:
        print(f"Skipped (already contains ID): {file_path}")
        return False

    # Search for <head> tag
    match = re.search(r'(<head\b[^>]*>)', content, re.IGNORECASE)
    if not match:
        print(f"Skipped (no <head> tag found): {file_path}")
        return False

    head_tag = match.group(1)
    # Insert GA_TAG right after <head> tag
    new_content = content.replace(head_tag, f"{head_tag}\n{GA_TAG}")

    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected: {file_path}")
        return True
    except Exception as e:
        print(f"Could not write {file_path}: {e}")
        return False

def main():
    # Target directory is the workspace root (parent of the scripts folder)
    workspace_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Scanning workspace: {workspace_dir}")
    
    html_files = []
    exclude_dirs = {'.git', 'node_modules', '.next'}
    
    for root, dirs, files in os.walk(workspace_dir):
        # Prune excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    print(f"Found {len(html_files)} HTML files.")
    modified_count = 0
    for file_path in html_files:
        if insert_ga_tag(file_path):
            modified_count += 1
            
    print(f"Done. Modified {modified_count} out of {len(html_files)} files.")

if __name__ == '__main__':
    main()
