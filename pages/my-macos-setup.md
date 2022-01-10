---
title: My macOS Setup
---

# My MacOS Setup

* [[backups]]
* [[my file system]]
* [[macOS system recovery]]

## Fresh install

Having run into "storage almost full" messages for quite some time, I decided
last month (August 2020) to clean things with a fresh macOS install. I tried to
keep track of the steps I took immediately after the install (settings I
changed, applications I installed) for future reference, so here you go!

* Change some macOS settings
  * Increase key repeat (slow key repeat really hurts in terminal)
  * Show sound in menu bar, show bluetooth in menu bar
* Install some key applications
  * [1Password](https://1password.com)
  * [Firefox](https://www.mozilla.org/en-US/firefox/new/) (log in, change search
    engine to [DuckDuckGo](https://duckduckgo.com))
  * [Spotify](https://www.spotify.com/)
  * [Tresorit](https://tresorit.com)
  * [NextDNS](https://nextdns.io)
* Install [GPG Suite](https://gpgtools.org) and [import keys from
  backup](https://msol.io/blog/tech/back-up-your-pgp-keys-with-gpg/)
* Restore `~/.ssh` from backup
* Install [Homebrew](https://brew.sh/)
* Clone [dotfiles repo](https://git.sr.ht/~idmyn/dotfiles) (install developer
  command line tools for git when prompted)
* Install Emacs with
  [homebrew-emacs-plus](https://github.com/d12frosted/homebrew-emacs-plus) and
  [Doom](https://github.com/hlissner/doom-emacs)
* Kick-off dotfiles install with `./install` (this creates symlinks and installs
  more applications)
* Unlock [git-crypt](https://www.agwa.name/projects/git-crypt/) in dotfiles to
  decrypt secrets
* Manual steps to enable applications installed by dotfiles
  * Start [karabiner](https://karabiner-elements.pqrs.org/), grant security
    permissions, and run [goku](https://github.com/yqrashawn/GokuRakuJoudo)
  * Start [Phoenix](https://github.com/kasper/phoenix)
  * Start [Finicky](https://github.com/johnste/finicky) and set it as default
    browser
  * Start [Itsycal](https://www.mowglii.com/itsycal/) with date format `E d MMM
    h:mm`
  * Start [Alfred](https://www.alfredapp.com/) and link it to cloud-synced
    config
  * Start [Rocket](https://matthewpalmer.net/rocket/), set trigger key to ']'
  and add kitty + Emacs to exclusion list
  * Start [SensibleSideButtons](https://sensible-side-buttons.archagon.net) to
    get back/forward mouse buttons working!
* On my personal machine:
  * Install [Standard Notes](https://standardnotes.org) for private notes
  * Install [Telegram](https://telegram.org)
  * Install [IINA](https://iina.io) media player
  * Configure [Fastmail](https://www.fastmail.com/) with [their install
    script](https://www.fastmail.com/help/clients/mac.html)
  * Customise Mail.app to make it as minimalist as possible
    ([guide](https://manuelmoreale.com/emails))
