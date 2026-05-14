import os
import re

assets = set()
with open('available_assets.txt', 'r') as f:
    for line in f:
        assets.add(line.strip())

missing = []

with open('references.txt', 'r') as f:
    for line in f:
        match = re.match(r'^(.*?):(\d+):(.*)$', line)
        if not match: continue
        filepath, lineno, text = match.groups()
        
        # Look for things like src="./img.png" or import img from "./img.png"
        matches = re.findall(r'["\']([^"\']+\.(?:png|jpg|jpeg|gif|webp|svg|avif|ico|bmp))["\']', text)
        for path in matches:
            if path.startswith(('http', 'data:', 'blob:')): continue
            
            # Try workspace root
            root_path = path.lstrip('/')
            # Try relative to file
            rel_path = os.path.normpath(os.path.join(os.path.dirname(filepath), path)).replace('\\', '/')
            if rel_path.startswith('./'): rel_path = rel_path[2:]
            
            if root_path not in assets and rel_path not in assets:
                missing.append(f"{filepath}:{lineno} -> {path}")

missing = sorted(list(set(missing)))
print("--- Missing Image References ---")
if not missing:
    print("None")
else:
    for m in missing:
        print(m)
