import os
from PIL import Image

os.chdir(os.path.join(os.path.dirname(__file__), "..", "public"))
img = Image.open("icon.png").convert("RGB")
for size, name in [(512, "icon-512.png"), (192, "icon-192.png"), (32, "icon-32.png")]:
    img.resize((size, size), Image.LANCZOS).save(name, optimize=True)
    print(name, os.path.getsize(name), "bytes")
