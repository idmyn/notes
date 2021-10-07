---
title: SQLite
---

# SQLite

- https://antonz.org/sqlite-is-not-a-toy-database/
- https://datasette.io/
- https://github.com/dbcli/litecli
- https://sqlime.org/
- https://github.com/TaKO8Ki/gobang

# Backups

- https://mtlynch.io/litestream/

## Tips

- start SQLite with `sqlite3 -box` to get pretty ascii box output from your
  queries (or run `.mode box` at the sqlite3 prompt)
- you can check schema with `.schema <table-name>`
- you can import csv with `.import --csv <filename.csv> <table-name>` (I think in older
  versions of sqlite3 you need to do `.mode csv` and then `.import
  <filename.csv> <table-name>`)
