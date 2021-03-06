---
title: Emacs
---

# Emacs

- https://emacs.love/tales/

## Code formatting

- https://github.com/raxod502/apheleia

## .dir-locals.el

Putting a .dir-locals.el file in a directory allows you to specify values for
elisp variables within that directory. For example, if you wanted to specify
that the deno lsp should be used in a specific project you can add a
.dir-locals.el file with these contents:

```lisp
;; deno project - lifted from https://github.com/hyakt/mysite/blob/3c79aa1ed136c462dc29046e980cb1328393168a/.dir-locals.el
((nil . ((lsp-enabled-clients . (deno-ls))
         (eval . (deno-fmt-mode))
         )))
```

or if you wanted to set a specific formatter:

```lisp
((typescript-mode . ((+format-with . prettier)))
 (typescript-tsx-mode . ((eval . (prettier-js-mode)))))
```

You'll also need to allowlist those local variables under
`safe-local-variable-values`. I do that in [my custom.el config
file](https://github.com/idmyn/dotfiles/blob/641e1eecae04866e9597573dbdde2c470e3232df/dotfiles/doom/bits/custom.el).
