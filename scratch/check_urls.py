import os
import re
import urllib.request
import urllib.error
import ssl
import json
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls_with_files = []
pattern = re.compile(r'https?://[^\s\)\"\'>\]]+')

for root, dirs, files in os.walk('.'):
    if any(p in root for p in ['.git', 'node_modules', 'dist', '.gemini', 'scratch', 'public', 'assets']):
        continue
    for f in files:
        if f in ['package-lock.json', 'package.json']:
            continue
        if f.endswith(('.md', '.js', '.jsx', '.json', '.py', '.html')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                for m in pattern.findall(content):
                    u = m.rstrip('.,;:')
                    if any(x in u for x in ['w3.org', 'vite.dev', 'github.com', 'oxc.rs', 'swc.rs', 'react.dev', 'fonts.googleapis.com', 'localhost', 'schema.org']):
                        continue
                    urls_with_files.append((u, path))

unique_urls = sorted(list(set(u for u, f in urls_with_files)))
print(f"Total unique reference URLs found: {len(unique_urls)}", flush=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

results = []

for u in unique_urls:
    status = None
    error_msg = None
    redirect_url = None
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=7) as response:
            status = response.getcode()
            redirect_url = response.geturl()
    except urllib.error.HTTPError as e:
        status = e.code
        error_msg = str(e)
    except urllib.error.URLError as e:
        status = 'URLError'
        error_msg = str(e.reason)
    except Exception as e:
        status = 'Error'
        error_msg = str(e)
    
    files_containing = sorted(list(set(f for url, f in urls_with_files if url == u)))
    r = {
        'url': u,
        'status': status,
        'redirect_url': redirect_url,
        'error': error_msg,
        'files': files_containing
    }
    results.append(r)
    print(f"[{status}] {u} -> Files: {files_containing}", flush=True)

os.makedirs('scratch', exist_ok=True)
with open("scratch/url_check_results.json", "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print("\nDONE RESULTS SAVED", flush=True)
