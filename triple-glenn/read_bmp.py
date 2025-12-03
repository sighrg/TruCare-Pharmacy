import sys

def get_bmp_color(filepath):
    with open(filepath, 'rb') as f:
        # BMP Header is 14 bytes
        # DIB Header is usually 40 bytes
        f.seek(10)
        pixel_offset = int.from_bytes(f.read(4), 'little')
        
        f.seek(pixel_offset)
        # Read 3 bytes (BGR)
        b = int.from_bytes(f.read(1), 'little')
        g = int.from_bytes(f.read(1), 'little')
        r = int.from_bytes(f.read(1), 'little')
        
        print(f"Hex: #{r:02x}{g:02x}{b:02x}")

if __name__ == "__main__":
    get_bmp_color("logo.bmp")
