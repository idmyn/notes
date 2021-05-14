---
title: Istio
---

# Istio

## Debugging

### RBAC

enable rbac debugging:

```
kubectl exec <pod-name> -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug'
```

then make requests and check the logs!

