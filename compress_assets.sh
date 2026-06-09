#!/bin/bash

# Compression script for Portfolio assets
echo "Starting asset compression process..."

# 1. Backup
echo "Creating backups..."
cd "/Users/notslimboy/Portfolio Webiste Bento Grid"
mkdir -p public/_originals_backup/gallery
mkdir -p public/_originals_backup/projects
mkdir -p public/_originals_backup/games
cp -r public/gallery/* public/_originals_backup/gallery/
cp -r public/projects/* public/_originals_backup/projects/
cp -r public/games/* public/_originals_backup/games/
cp public/*.png public/_originals_backup/ 2>/dev/null

echo "Backups created at public/_originals_backup/"

# 2. Compress PNGs
echo "Compressing PNGs..."
find public -type f -name "*.png" -not -path "*/_originals_backup/*" | while read -r file; do
    echo "Compressing PNG: $file"
    pngquant --quality=70-85 --force --ext .png "$file"
done

# 3. Compress MP4s
echo "Compressing MP4s..."
find public -type f -name "*.mp4" -not -path "*/_originals_backup/*" | while read -r file; do
    echo "Compressing MP4: $file"
    mv "$file" "${file}.tmp.mp4"
    # Using </dev/null to prevent ffmpeg from reading stdin
    ffmpeg -i "${file}.tmp.mp4" -vcodec libx264 -crf 28 -vf "scale='min(1280,iw)':-2" -preset fast -y "$file" </dev/null
    rm "${file}.tmp.mp4"
done

# 4. Compress GLB
echo "Compressing GLB..."
find public -type f -name "*.glb" -not -path "*/_originals_backup/*" | while read -r file; do
    echo "Compressing GLB: $file"
    mv "$file" "${file}.tmp.glb"
    npx -y gltf-pipeline -i "${file}.tmp.glb" -o "$file" --draco.compressionLevel 7
    rm "${file}.tmp.glb"
done

echo "Compression complete! Checking new file sizes..."
find public -type f \( -name "*.mp4" -o -name "*.png" -o -name "*.glb" \) -not -path "*/_originals_backup/*" -exec du -sh {} \; | sort -rh
