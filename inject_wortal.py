import glob
import os

SCRIPT_TAG = '<script src="../../wortal-mock.js"></script>'
files = glob.glob("*/src/index.html")
updated = 0

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "wortal-mock.js" in content:
        print(f"Skipped (already present): {file_path}")
        continue

    if "<head>" in content:
        new_content = content.replace("<head>", f"<head>\n  {SCRIPT_TAG}", 1)
    elif "<head " in content:
        head_end = content.find(">", content.find("<head ")) + 1
        new_content = content[:head_end] + f"\n  {SCRIPT_TAG}" + content[head_end:]
    else:
        new_content = f"{SCRIPT_TAG}\n" + content

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    updated += 1
    print(f"Injected into: {file_path}")

print(f"\nDone! Updated {updated} of {len(files)} files.")
