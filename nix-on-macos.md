---
title: Nix on macOS
---

# Nix on macOS

## nix-darwin

I'm currently using [nix-darwin](https://github.com/LnL7/nix-darwin) to
install/configure nix-specific stuff, like
[lorri](https://github.com/target/lorri).

- The installer asks a bunch of questions. When in doubt, I answered yes.
- In the future, I'll say no to `Would you like to load darwin configuration in
  /etc/zshrc?`
  - I think it just enables tab-completions, and it does weird stuff to my
    prompt so I'll try going without it
- this line from the default config is for multi-user support (among other
  things) but it's caused complications for me, so you probably don't want it:
  `services.nix-daemon.enable = true;`

## Steps to uninstall Nix on macOS

1. Remove the entry from fstab using 'sudo vifs'
2. Destroy the data volume using 'diskutil apfs deleteVolume'
3. Remove the 'nix' line from /etc/synthetic.conf or the file
