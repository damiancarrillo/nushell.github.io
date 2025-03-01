# 関数型言語から Nu への対応表

このテーブルは Nu の組込みコマンドやプラグインと他の関数型言語との対応関係を理解することを助けるためのものです。ここでは全ての Nu コマンドとそのコマンドが他の言語でどう使われているかをマッピングしています。コントリビューション歓迎です。

注: Nu が 0.14.1 以降であることを想定しています。

| Nushell           | Clojure                      | Tablecloth (Ocaml / Elm)        | Haskell                  |
| ----------------- | ---------------------------- | ------------------------------- | ------------------------ | --- |
| alias             |                              |                                 |                          |     |
| append            | conj, into, concat           | append, (++), concat, concatMap | (++)                     |     |
| args              |                              |                                 |                          |     |
| autoview          |                              |                                 |                          |     |
| average(`*`)      |                              |                                 |                          |     |
| binaryview(`*`)   | Integer/toHexString          |                                 | showHex                  |     |
| calc, = math      | math operators               |                                 |                          |     |
| cd                |                              |                                 |                          |     |
| clear             |                              |                                 |                          |     |
| clip              |                              |                                 |                          |     |
| compact           |                              |                                 |                          |     |
| config            |                              |                                 |                          |     |
| count             | count                        | length, size                    | length, size             |     |
| cp                |                              |                                 |                          |     |
| date              | java.time.LocalDate/now      |                                 |                          |     |
| debug             |                              |                                 |                          |     |
| default           |                              |                                 |                          |     |
| drop              |                              |                                 |                          |     |
| du                |                              |                                 |                          |     |
| each              | map, mapv, iterate           | map, forEach                    | map                      |     |
| echo              | println                      |                                 | putStrLn, print          |     |
| enter             |                              |                                 |                          |     |
| evaluate_by       |                              |                                 |                          |     |
| exit              | System/exit                  |                                 |                          |     |
| first             | first                        | head                            | head                     |     |
| format            | format                       |                                 | Text.Printf.printf       |     |
| from              |                              |                                 |                          |     |
| get               |                              |                                 |                          |     |
| group_by          | group-by                     |                                 | group, groupBy           |     |
| headers           |                              |                                 |                          |     |
| help              | doc                          |                                 |                          |     |
| histogram         |                              |                                 |                          |     |
| history           |                              |                                 |                          |     |
| http(`*`)         |                              |                                 |                          |     |
| inc(`*`)          | inc                          |                                 | succ                     |     |
| insert            |                              |                                 |                          |     |
| is-empty          | empty?                       | isEmpty                         |                          |     |
| keep              | take, drop-last, pop         | take, init                      | take, init               |     |
| keep_until        |                              |                                 |                          |     |
| keep_while        | take-while                   | takeWhile                       | takeWhile                |     |
| kill              |                              |                                 |                          |     |
| last              | last, peek, take-last        | last                            | last                     |     |
| lines             |                              |                                 | lines, words, split-with |     |
| ls                |                              |                                 |                          |     |
| map_max_by        |                              |                                 |                          |     |
| match(`*`)        | re-matches, re-seq, re-find  |                                 |                          |     |
| merge             |                              |                                 |                          |     |
| mkdir             |                              |                                 |                          |     |
| mv                |                              |                                 |                          |     |
| next              |                              |                                 |                          |     |
| nth               | nth                          | Array.get                       | lookup                   |     |
| open              | with-open                    |                                 |                          |     |
| parse             |                              |                                 |                          |     |
| pivot, =transpose | (apply mapv vector matrix)   |                                 | transpose                |     |
| post(`*`)         |                              |                                 |                          |     |
| prepend           | cons                         | cons, ::                        | ::                       |     |
| prev              |                              |                                 |                          |     |
| ps(`*`)           |                              |                                 |                          |     |
| pwd               |                              |                                 |                          |     |
| range             | range                        | range                           | 1..10, 'a'..'f'          |     |
| reduce_by         | reduce, reduce-kv            | foldr                           | foldr                    |     |
| reject            |                              |                                 |                          |     |
| rename            |                              |                                 |                          |     |
| reverse           | reverse, rseq                | reverse, reverseInPlace         | reverse                  |     |
| rm                |                              |                                 |                          |     |
| save              |                              |                                 |                          |     |
| select(`***`)     | select-keys                  |                                 |                          |     |
| shells            |                              |                                 |                          |     |
| shuffle           | shuffle                      |                                 |                          |     |
| size              | count                        |                                 | size, length             |     |
| skip              | rest                         | tail                            | tail                     |     |
| skip_until        |                              |                                 |                          |     |
| skip_while        | drop-while                   | dropWhile                       | dropWhile, dropWhileEnd  |     |
| sort-by           | sort, sort-by, sorted-set-by | sort, sortBy, sortWith          | sort, sortBy             |     |
| split_by          | split, split-{at,with,lines} | split, words, lines             | split, words, lines      |     |
| split_column      |                              |                                 |                          |     |
| split_row         |                              |                                 |                          |     |
| str(`*`)          | clojure.string functions     | String functions                |                          |     |
| sum               | apply +                      | sum                             | sum                      |     |
| sys(`*`)          |                              |                                 |                          |     |
| table             |                              |                                 |                          |     |
| tags              |                              |                                 |                          |     |
| textview(`*`)     |                              |                                 |                          |     |
| tree(`*`)         |                              |                                 |                          |     |
| to                |                              |                                 |                          |     |
| touch             |                              |                                 |                          |     |
| trim              | trim, triml, trimr           | trim, trimLeft, trimRight       | strip                    |     |
| uniq              | set                          | Set.empty                       | Data.Set                 |     |
| update(`**`)      |                              |                                 |                          |     |
| version           |                              |                                 |                          |     |
| with_env          |                              |                                 |                          |     |
| what              |                              |                                 |                          |     |
| where             | filter, filterv, select      | filter, filterMap               | filter                   |     |
| which             |                              |                                 |                          |     |
| wrap              |                              |                                 |                          |     |

- `*` - these commands are part of the standard plugins
- `**` - renamed from `edit` to `update` in 0.13.1
- `***` - renamed from `pick` to `select` in 0.13.1
