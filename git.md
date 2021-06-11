---
title: Git
---

# Git

see also: [[Git Spelunking]]

- decentralised git-powered code collaboration platform: https://radicle.xyz/
  - see also: [Scuttlebutt](https://scuttlebutt.nz/)
- [by default, git looks for a global .gitignore file at
  `~/.config/git/ignore`](https://stackoverflow.com/a/22885996/10314380)
- big repo? `git clone --filter=blob:none <url>`

## Master/Main

- https://aj.codes/post/branch-agnostic-git-aliases/

## Rebase

### Fixup

- to fixup a commit based on message:  `git commit --fixup :/PreviousMessageStart`
- to fixup most recent commit: `git commit --fixup @`

## Design quirks

- https://stevelosh.com/blog/2013/04/git-koans/

## Forks

### Updating a fork

```sh
# Add the remote, call it "upstream":

git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches

git fetch upstream

# Make sure that you're on your master branch:

git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master
```

https://stackoverflow.com/a/7244456
