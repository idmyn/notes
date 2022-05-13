---
title: Nix on macOS
---

# Nix on macOS

see also: [[nix-dotfiles]]

Although I've experienced some turbulence installing/using Nix on macOS in the past,
the experience seems much smoother these days (though that might just be because
I've got more experience with it), and [the future looks
bright](https://opencollective.com/nix-macos)...

## Steps to uninstall Nix on macOS

1. Delete /nix with `sudo rm -rf /nix`
2. Reboot
3. Remove the entry from fstab using 'sudo vifs'
4. Destroy the data volume using 'diskutil apfs deleteVolume'
5. Remove the 'nix' line from /etc/synthetic.conf or the file

## Set up linux-based Nix builder daemon via docker

- https://medium.com/@zw3rk/provisioning-a-nixos-server-from-macos-d36055afc4ad
- https://github.com/LnL7/nix-docker

## Detractors

- https://github.com/mjlbach/nix-dotfiles/blob/dce02f266b30d3b311e0f91b0707540ae9275e7a/README.md
