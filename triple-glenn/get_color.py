from PIL import Image
import sys

def get_bg_color(image_path):
    try:
        img = Image.open(image_path)
        # Get the color of the top-left pixel
        bg_color = img.getpixel((0, 0))
        # Convert to hex
        hex_color = '#{:02x}{:02x}{:02x}'.format(bg_color[0], bg_color[1], bg_color[2])
        print(f"Background Color: {hex_color}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_bg_color("/Users/sai/.gemini/antigravity/playground/triple-glenn/logo.jpg")
