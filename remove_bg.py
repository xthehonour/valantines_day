from PIL import Image, ImageChops
import os

# Resmi aç
img_path = r"c:\Users\demir\Documents\GitHub\valantines_day\src\assets\fotolar\Gemini_Generated_Image_5rs1as5rs1as5rs1.png"
img = Image.open(img_path)

# RGBA'ya dönüştür
img = img.convert("RGBA")

# Arka plan rengini (white/light gray) bul ve kaldır
data = img.getdata()

new_data = []
for item in data:
    # Eğer pixel gri/beyaz ise transparan yap
    r, g, b = item[0], item[1], item[2]
    # Beyaz ve açık gri tonlarını kontrol et
    if r > 200 and g > 200 and b > 200:
        new_data.append((r, g, b, 0))  # Transparan yap
    else:
        new_data.append(item)

img.putdata(new_data)

# Farklı adla kaydet
output_path = r"c:\Users\demir\Documents\GitHub\valantines_day\src\assets\fotolar\Gemini_Generated_Image_5rs1as5rs1as5rs1.png"
img.save(output_path, "PNG")

print("Arka plan kaldırıldı!")
