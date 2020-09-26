---
title: VS Code
---

# Visual Studio Code

I've recently started using [VSCodium](https://vscodium.com/) for exploring
unfamiliar codebases and I can wholeheartedly recommend it for that purpose! The
little information window you get when you hover over a symbol is great
(I've found this especially useful for unfamiliar builtin methods in Rust) and
jump to definition and back/forward navigation is (almost) a breeze (see below).

## Remapping 'Forward' to Ctrl+=

On macOS the default binding for 'Back' is Ctrl+- and 'Forward' is Ctrl+Shift+=
which I didn't find super ergonomic (one modifier for 'Back' and two modifiers for
'Forward'). I couldn't see any reason not to remap 'Forward' to Ctrl+= so I did
it, and it's much nicer. Here's how I did it:

1. macOS system preferences > keyboard > shortcuts > app shortcuts
2. click the plus button to add a new shortcut, select VSCodium
3. set menu title to this: Forward [⌃⇧-]
4. set the new keybinding (hooray!)

Not sure why the menu title has the default keyboard binding in its name, but it
does, and you need to include it for the new keyboard binding to work.

## Extensions

- [GitHub
  Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
- GitHub Pull Requests and Issues is pretty cool, but was a pain to set up (I
  needed to [authenticate with a personal access
  token](https://github.com/microsoft/vscode-pull-request-github/issues/1778#issuecomment-625986692),
  and create an [alias
  for](https://github.com/microsoft/vscode-pull-request-github/issues/1411#issuecomment-548000306))
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
