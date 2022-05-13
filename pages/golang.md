---
title: Golang
---

# Go

## Beginner resources

- https://yourbasic.org/golang/

## Style

- https://github.com/uber-go/guide/blob/master/style.md

## Project structure

- ["How I write HTTP services after eight
  years"](https://pace.dev/blog/2018/05/09/how-I-write-http-services-after-eight-years.html) -
  I really like this
- ["Standard Package
  Layout"](https://medium.com/@benbjohnson/standard-package-layout-7cdbc8391fc1) -
  some cool ideas here
- for CLIs: ["The Within Go Repo Layout"](https://christine.website/blog/within-go-repo-layout-2020-09-07)

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

## Context

- https://www.calhoun.io/pitfalls-of-context-values-and-how-to-avoid-or-mitigate-them/

## HTTP frameworks?

- compatible with net/http: https://github.com/go-chi/chi
