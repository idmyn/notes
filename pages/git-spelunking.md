---
title: Git Spelunking
---

# [[Git]] Spelunking

- https://tekin.co.uk/2020/11/patterns-for-searching-git-revision-histories

Find all commits containing a particular piece of code

```
git log -S "method_name"
```

See the diffs alongside the commit messages

```
git log -S "method_name" -p
```

Find the commit that first added some code

```
git log -S "method_name" -p --reverse
```

Limit the scope of the search

```
git log -S "some code" -p app/models/user.rb
```

Search the commit messages themselves

```
git log --grep "commit message search" -i
```
