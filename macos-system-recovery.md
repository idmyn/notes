---
title: macOS System Recovery
---

# macOS System Recovery

## My experience

In mid-September 2020 I installed the macOS Big Sur beta. I thought it would be
fun! And it was, but I was also niggled by annoying quirks in some of the
software I interact with most often. For example:
[Phoenix](https://github.com/kasper/phoenix), which I use to quickly switch
between applications with different keyboard shortcuts, consistently needed two
presses of a shortcut to trigger the application switch. Eventually I decided to
rollback to macOS Catalina for a more stability. This is where I ran into
problems.

When I booted into recovery mode (restart and hold cmd+R) it was macOS Big Sur,
the version I didn't want, that I was offered to reinstall. _Fine_, I thought,
_I'll create a bootable USB drive with macOS Catalina and rollback using that_.
I booted into my USB stick, ran the installer, and rebooted back into macOS Big
Sur with a distored login prompt for my existing user account. This is where it
started to get very hairy. I booted back into recovery mode and tried without
success to erase my hard drive using Disk Utility. Eventually, I opened up the
terminal in recovery mode and deleted my main partition using `diskutil`. A word
of advice from the other side of this system recovery story: **don't delete your
main partition using `diskutil` if you can avoid it**.

What followed was a whole day of booting into recovery mode, running the macOS
installer, landing back in recovery mode, fiddling around with `diskutil` in the
terminal, reformatting partitions into different configurations using Disk
Utility, and generally lots of waiting around and error message research. In the
end, the successful formula was booting into macOS internet recovery using
cmd+opt+R, formatting my disk as Mac OS Extended (Journaled), running the
Catalina installer, **and [resetting
NVRAM](https://support.apple.com/en-us/HT204063)** with cmd+opt+P+R.

Lesson learned: I don't care enough about macOS to risk the instability of
running the beta. I won't be trying it again any time soon.

## Tips

- **Don’t erase your main drive using `diskutil` in the terminal if you can avoid
  it!** From my experience, and the experiences of others that I've read, it can
  lead to all kinds of corruptions/complications in the recovery process
- If you’ve got a firmware password enabled, it’s worth disabling it for your
  recovery process because it can pause the install process when your Mac needs
  to reboot
- If an OS install from recovery mode appears to have succeeded but you boot
  back into recovery at the end, try resetting NVRAM
- If you get ‘failed to create APFS preboot volume’ errors, then you might need
  to go into the install process with your disk formatted as Mac OS Extended
  (Journaled)
- If the cmd+R recovery menu fails you, try the cmd+opt+R menu and vice versa
- You might not need a USB with install media, but you’ll sure be glad to have
  it just in case
