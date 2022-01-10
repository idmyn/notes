---
title: DevOps
---

# DevOps

## Docker/Kubernetes

### Criticism

- [A Pipeline Made of Airbags](https://ferd.ca/a-pipeline-made-of-airbags.html)
  - "To me, abandoning live upgrades [with their custom monitoring and
    granularly controlled gradual rollouts] to have only k8s is like someone is
    asking me to just get rid of all error and exceptions handling and reboot
    the computer each time a small thing goes wrong. There's a definite useful
    aspect to being able to do that, but losing the ability to work on things at
    a finer granularity is a huge loss."
  - "The thing that stateless containers and kubernetes do is handle that base
    case of "when a thing is wrong, replace it and get back to a good state."
    The thing it does not easily let you do is "and then start iterating to get
    better and better at not losing all your state and recuperating fast"."
