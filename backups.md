---
title: Backups
---

# Backups

## Creating

Most of my files are backed up in one of two ways.

Files I might want to access on my phone or work laptop, or which I might want
to share with others, live in folders synced with
[Tresorit](https://tresorit.com/). I used [Dropbox](https://www.dropbox.com/)
for a long time before switching to Tresorit for its encryption and I recommend
both.

Pretty much everything else is backed up daily by [this
script](https://git.sr.ht/~idmyn/dotfiles/tree/main/backup.sh) using
[restic](https://restic.net/). I have it run every day at 8am with the following
entry in my [crontab](https://crontab.guru/#0_8_*_*_*).

```
0 8 * * * bash ~/.backup.sh
```

## Restoring

To restore a specific path:

```
restic --include /Users/david/src --target ./restored restore latest
```
