---
title: Golang
---

# Go

## func main

- "[Why you shouldn't use func main in Go](https://pace.dev/blog/2020/02/12/why-you-shouldnt-use-func-main-in-golang-by-mat-ryer.html)"

```go
func main() {
  if err := run(os.Args, os.Stdout); err != nil {
    // ...
  }
}

func run(args []string, stdout io.Writer) error {
  // ...
}
```
