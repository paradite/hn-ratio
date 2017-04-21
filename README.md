# HN Ratio

Hacker News top 20 stories ranked by Comment/Score ratio.

See stories that attract a lot of attention and comments, and stories that attract a lot of attention but few comments.

## Sample output

```
Naked mole rats can survive 18 minutes without oxygen
https://news.ycombinator.com/item?id=14163054

|############################################      | S: 59 C: 53 R: 0.898


Billionaire Mike Novogratz says 10% of his money is in Bitcoin and Ether
https://news.ycombinator.com/item?id=14164523

|############################################      | S: 86 C: 77 R: 0.895


Louisiana’s Governor Declares State Of Emergency Over Disappearing Coastline
https://news.ycombinator.com/item?id=14164541

|########################################          | S: 105 C: 86 R: 0.819


Caddy 0.10 Released
https://news.ycombinator.com/item?id=14164712

|###########################                       | S: 93 C: 51 R: 0.548


The Evolution of Container Usage at Netflix
https://news.ycombinator.com/item?id=14163526

|###########################                       | S: 112 C: 61 R: 0.545


Mozilla and Microsoft are rebuilding their browsers’ foundations
https://news.ycombinator.com/item?id=14164454

|#########################                         | S: 74 C: 38 R: 0.514


Me and SVG
https://news.ycombinator.com/item?id=14155393

|######################                            | S: 448 C: 199 R: 0.444


Robots.txt meant for search engines don’t work well for web archives
https://news.ycombinator.com/item?id=14163216

|#####################                             | S: 227 C: 96 R: 0.423


The First-Ever Banner Ad on the Web
https://news.ycombinator.com/item?id=14165719

|#####################                             | S: 19 C: 8 R: 0.421


Ask HN: Which companies have the best blogs written by their engineering team?
https://news.ycombinator.com/item?id=14163905

|####################                              | S: 250 C: 100 R: 0.400


Mice treated with a protein from umbilical cord plasma showed improved memory
https://news.ycombinator.com/item?id=14163395

|###################                               | S: 116 C: 46 R: 0.397


Introducing Token
https://news.ycombinator.com/item?id=14164018

|##############                                    | S: 273 C: 80 R: 0.293


Calculus Made Easy (1914) [pdf]
https://news.ycombinator.com/item?id=14161876

|#########                                         | S: 747 C: 137 R: 0.183


Scalable, Lie-Detecting Timeserving with Roughtime
https://news.ycombinator.com/item?id=14164662

|#######                                           | S: 13 C: 2 R: 0.154


Raw Linux Threads via System Calls (2015)
https://news.ycombinator.com/item?id=14162423

|###                                               | S: 158 C: 12 R: 0.076


Automatic compilation of partially available C source code
https://news.ycombinator.com/item?id=14164495

|###                                               | S: 73 C: 5 R: 0.068


Metaprogramming is less fun in D
https://news.ycombinator.com/item?id=14165198

|###                                               | S: 15 C: 1 R: 0.067


'Fight Inequality' Is a Poor Rallying Cry
https://news.ycombinator.com/item?id=14166239

|                                                  | S: 4 C: 0 R: 0.000


Drunken crayfish show that loneliness raises alcohol tolerance
https://news.ycombinator.com/item?id=14166127

|                                                  | S: 6 C: 0 R: 0.000


Gigster (on-demand developer teams) is hiring in engineering and success
https://news.ycombinator.com/item?id=14164925

|                                                  | S: 1 C: None R: 0.000

```

## How to see result

Go to `results/result-xxx.txt` to see the result of a certain day

## How to run the script

`$ pip install -r requirements.txt`

Then

`$ python hn-ratio.py > results/result-xxx.txt`