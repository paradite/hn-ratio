#!/usr/local/bin/python3
from hackernews import HackerNews
import json
import datetime
import os.path
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

if __name__ == "__main__":
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
    
    current_date = datetime.datetime.now().strftime("%Y-%b-%d_%H-%M-%S")
    fn_json = os.path.join(os.path.dirname(__file__), "results", "{0}.json".format(current_date).lower())
    fn_txt = os.path.join(os.path.dirname(__file__), "results", "{0}-visual.txt".format(current_date).lower())
    with open(fn_json, "w+") as f:
        f.write(json.dumps([story_serializer(story) for story in stories], indent=4, sort_keys=True))
    with open(fn_txt, "w+") as f:
        for story in stories:
            f.write(story.title + "\n")
            f.write("https://news.ycombinator.com/item?id=" + str(story.item_id) + "\n")
            
            f.write("|")
            if story.blocks <= WIDTH:
                for i in range(story.blocks):
                    f.write("#")
                for i in range(WIDTH - story.blocks):
                    f.write(" ")
                f.write("|")
            else:
                for i in range(WIDTH):
                    f.write("#")
                f.write("|")
                for i in range(story.blocks - WIDTH):
                    f.write("#")

            f.write(" S: {0} C: {1} R: {2:.3f}\n\n".format(
                story.score, story.descendants, story.ratio))
