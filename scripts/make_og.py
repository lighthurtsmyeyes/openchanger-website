import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
W, H = 1200, 630
GREEN = (159, 202, 43)
BG = (6, 6, 6)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# App icon with rounded corners
icon = Image.open(os.path.join(ROOT, "icon-512.png")).convert("RGB").resize((256, 256), Image.LANCZOS)
mask = Image.new("L", (256, 256), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, 256, 256), radius=52, fill=255)
img.paste(icon, (110, (H - 256) // 2), mask)

def font(name, size):
    return ImageFont.truetype(os.path.join(os.environ["WINDIR"], "Fonts", name), size)

title = font("arialbd.ttf", 88)
sub = font("arial.ttf", 44)

draw.text((430, 195), "OpenChanger", font=title, fill=(255, 255, 255))
draw.text((435, 330), "Бесплатный скинченжер Dota 2", font=sub, fill=GREEN)

out = os.path.join(ROOT, "og-image.png")
img.save(out, optimize=True)
print("ok", out, os.path.getsize(out), "bytes")
