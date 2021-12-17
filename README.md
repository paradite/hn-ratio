# HN Ratio

Hacker News top 50 stories ranked by Comment/Score ratio.

## Why

Being a long-time Hacker News reader, I realized that most interesting HN submissions for me are of two categories:

- stories that attract a lot of attention and comments, signaling active and extended debates
- stories that attract a lot of attention but few comments, signaling very insightful post that requires no further comments

Hence, I used the Comment/Score ratio to sort the top HN submissions and locate these stories at the top and the bottom of the list.

## Result

[Web App](https://paradite.github.io/hn-ratio/)

[Raw results by date](https://github.com/paradite/hn-ratio/tree/master/results)

Note that new "promoted" stories with low votes and HN-backed job listings are filtered.

## Why not use HN API in real time?

- It takes some time to get all the data from Hacker News
- HN API does not have archive for top stories in past, whereas I want an archive so that I can find what I missed

Currently I have a GitHub action job that runs daily at 20:00+8 to fetch the top stories. 

## How to run the script

`$ pip install -r requirements.txt`

Then

`$ python hn-ratio.py`

Result for the day will be generated in both json and plain text format (with basic visualization) in the `results` directory.
