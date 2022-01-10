---
title: ffmpeg
---

# handy ffmpeg commands

```
ffmpeg -i with-sound.mov -c copy -an silent.mov
ffmpeg -i big.mov -vcodec h264 -acodec mp2 small.mp4
ffmpeg -i input.mp4 -vf scale=640x480:flags=lanczos -c:v libx264 -preset slow -crf 21 output_compress_480p.mp4
```

common aspect ratios: 1280x720 640x480 480x360 426x240

- https://write.corbpie.com/upscaling-and-downscaling-video-with-ffmpeg/
