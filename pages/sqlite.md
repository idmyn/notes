---
title: SQLite
---

see also: [[SQL]]

# SQLite

- https://antonz.org/sqlite-is-not-a-toy-database/
- https://christine.website/blog/sqlite-json-munge-2022-01-04
- https://datasette.io/
- https://github.com/dbcli/litecli
- https://sqlime.org/
- https://github.com/TaKO8Ki/gobang

# Backups

- https://mtlynch.io/litestream/
- https://fly.io/blog/all-in-on-sqlite-litestream/

## For JSON log spelunking

- https://github.com/simonw/sqlite-utils
- https://github.com/beekeeper-studio/beekeeper-studio

```
sqlite-utils insert logs.db logs logs_from_gcp.json --flatten
open -a 'Beekeeper Studio' logs.db
```

## Sample database

- https://www.sqlitetutorial.net/sqlite-sample-database/

## Tips

- start SQLite with `sqlite3 -box` to get pretty ascii box output from your
  queries (or run `.mode box` at the sqlite3 prompt)
- you can check schema with `.schema <table-name>`
- you can import csv with `.import --csv <filename.csv> <table-name>` (I think in older
  versions of sqlite3 you need to do `.mode csv` and then `.import
  <filename.csv> <table-name>`)
