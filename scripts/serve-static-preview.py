"""Serve Next.js static export with clean URLs, loopback only, no write methods."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path("out").resolve()

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_POST(self):
        self.send_error(405, "Read-only preview")

    def do_PUT(self):
        self.send_error(405, "Read-only preview")

    def do_DELETE(self):
        self.send_error(405, "Read-only preview")

    def translate_path(self, path):
        clean = unquote(urlsplit(path).path).strip("/")
        target = (ROOT / clean).resolve()
        try:
            target.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "404.html")
        if target.is_file():
            return str(target)
        html_path = target.with_suffix(".html")
        if html_path.is_file():
            return str(html_path)
        if (target / "index.html").is_file():
            return str(target / "index.html")
        return str(target)

if __name__ == "__main__":
    print("Read-only preview on http://127.0.0.1:4173", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 4173), Handler).serve_forever()
