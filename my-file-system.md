---
title: My File System
---

# My File System

```
~
├── .config
│   └── cloud
├── desk
├── file
│   ├── documents
│   ├── photos
│   └── videos
└── src
    ├── clones
    ├── orgs
    └── personal
```

## macOS setup

- inspo: http://karolis.koncevicius.lt/posts/cleaning_home_on_macos/

```bash
cd ~

mkdir desk

rm -rf Desktop
ln -s desk Desktop

rm -rf Downloads
ln -s desk Downloads

chflags -h hidden ~/Desktop ~/Downloads
chflags hidden ~/Documents ~/Library ~/Movies ~/Music ~/Pictures ~/Public
```

I've also aliased `ls` to [exa](https://github.com/ogham/exa) because the
builtin `ls` command doesn't support the necessary `-I` flag to hide unwanted
directories.
