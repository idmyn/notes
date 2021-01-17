---
title: Python
---

# Python

## Dependency management

Poetry seems great. I also saw good things about pipx in [this hacker news
thread](https://news.ycombinator.com/item?id=25647034). My impression is that
poetry is the go-to for installing project-specific python deps, and pipx is the
go-to for installing python programs globally.

```
python3 -m pip install pipx
pipx install poetry
```

I don't know what the best solution managing different python versions is... I
usually reach for [asdf](https://asdf-vm.com) but I think with Python it could
make a real mess. The answer is probably
[nix](https://nixos.org/guides/how-nix-works.html).
