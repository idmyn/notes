---
title: Gif
---

# Gif

see also: [[ffmpeg]]

- https://www.braytonstafford.com/creating-a-gif-from-quicktime-screen-recording/

```
ffmpeg -i screen-recording.mov -s 600x400 -pix_fmt rgb8 -r 10 -f gif - | gifsicle --optimize=3 --delay=10 > coolest.gif
```
