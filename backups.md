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

Pretty much everything else is backed up from time to time via [this
script](https://git.sr.ht/~idmyn/dotfiles/tree/main/item/scripts/backup) which
uses [restic](https://restic.net/).

## Restoring

To restore a specific path:

```
restic --include /Users/david/src --target ./restored restore latest
```
