import os
from PIL import Image

# The absolute path to the media/cars directory
CARS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'media', 'cars')

def optimize_images():
    """Optimizes all images in the media/cars directory."""
    for root, _, files in os.walk(CARS_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                try:
                    img = Image.open(filepath)
                    img.save(filepath, optimize=True, quality=85)
                    print(f'Optimized {filepath}')
                except Exception as e:
                    print(f'Error optimizing {filepath}: {e}')

if __name__ == '__main__':
    optimize_images()
