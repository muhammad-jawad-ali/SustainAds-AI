# Media Directory

This directory stores media assets for the SustainAds AI application.

## Contents

- **videos/**: Generated video advertisements
- **audio/**: Voiceover audio files
- **images/**: Stock images and business photos
- **templates/**: Video templates and presets
- **music/**: Background music tracks

## Structure

```
media/
├── videos/             # Generated video ads
│   ├── outputs/       # Final rendered videos
│   └── temp/          # Temporary working files
├── audio/             # Audio assets
│   ├── voiceovers/   # TTS and recorded voices
│   └── effects/      # Sound effects
├── images/            # Image assets
│   ├── logos/        # Business logos
│   ├── stock/        # Stock photos
│   └── backgrounds/  # Background images
├── templates/         # Video templates
└── music/            # Background music
    ├── royalty-free/ # Free music tracks
    └── licensed/     # Licensed music
```

## File Formats

### Videos
- **Output**: MP4 (H.264 codec)
- **Working**: MOV, AVI (as needed)
- **Resolution**: 1920x1080 (1080p)

### Audio
- **Voiceover**: WAV, MP3 (320kbps)
- **Music**: MP3, WAV
- **Effects**: WAV

### Images
- **Photos**: JPG, PNG
- **Graphics**: PNG (with transparency)
- **Logos**: SVG, PNG

## Storage Guidelines

- Videos are automatically cleaned up after 30 days (configurable)
- Keep working files in `temp/` subdirectories
- Archive completed projects separately
- Use external storage for large media libraries

## License Information

- Ensure all media has proper licensing
- Stock footage sources documented
- Music tracks must be royalty-free or licensed
- See `docs/licensing.md` for details

## Adding Custom Media

1. Place files in appropriate subdirectory
2. Use descriptive filenames
3. Include metadata/attribution if required
4. Update inventory if tracking assets

## Best Practices

- Compress large files before storage
- Organize by project or business
- Regular cleanup of temporary files
- Backup important assets
- Version control for templates
