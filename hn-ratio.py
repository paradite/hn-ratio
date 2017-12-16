#!/usr/local/bin/python3
from hackernews import HackerNews
import json
import datetime
import os.path
from pathlib import Path
hn = HackerNews()

ITEM_LIMIT = 50
WIDTH = 50

def story_serializer(story):
    story_attrs = {
        "item_id": story.item_id,
        "title": story.title,
        "by": story.by,
        "submission_time": story.submission_time.isoformat(),
        "score": story.score,
        "comments": story.descendants,
        "ratio": story.ratio,
        "blocks": story.blocks,
        "url": story.url,
        "hn_url": story.hn_url
    }
    return story_attrs

def execute(date):
    fn_json = os.path.join(os.path.dirname(__file__), "results", "{0}.json".format(date).lower())
    json_file = Path(fn_json)
    if json_file.is_file():
        print("Data already exist for today, exiting.")
        return
    stories = []
    for story_id in hn.top_stories(limit=ITEM_LIMIT):
        story = hn.get_item(story_id)
        if story.score < 10:
            # we filter out low score posts that are "promoted" by HN temporily but not really "top"
            # as well as job posts
            continue
        story.ratio = 0
        if story.descendants is not None:
            story.ratio = story.descendants / story.score
        story.blocks = int(WIDTH * story.ratio)
        stories.append(story)
        story.hn_url = "https://news.ycombinator.com/item?id=" + str(story.item_id)
    stories.sort(key=lambda s:s.ratio, reverse=True)
    with open(fn_json, "w+") as f:
        f.write(json.dumps([story_serializer(story) for story in stories], indent=4, sort_keys=True))

if __name__ == "__main__":
    current_date = datetime.datetime.now().strftime("%Y-%b-%d")
    execute(current_date)
