from hackernews import HackerNews
hn = HackerNews()

ITEM_LIMIT = 20
WIDTH = 50

if __name__ == "__main__":
    stories = []
    for story_id in hn.top_stories(limit=ITEM_LIMIT):
        story = hn.get_item(story_id)
        story.ratio = 0
        if story.descendants is not None:
            story.ratio = story.descendants / story.score
        story.blocks = int(WIDTH * story.ratio)
        stories.append(story)
    
    stories.sort(key=lambda s:s.ratio, reverse=True)
    
    for story in stories:
        print(story.title)
        print("https://news.ycombinator.com/item?id=" + str(story.item_id) + "\n")
        
        print("|", end='', flush=True)
        if story.blocks <= WIDTH:
            for i in range(story.blocks):
                print("#", end='', flush=True)
            for i in range(WIDTH - story.blocks):
                print(" ", end='', flush=True)
            print("|", end='', flush=True)
        else:
            for i in range(WIDTH):
                print("#", end='', flush=True)
            print("|", end='', flush=True)
            for i in range(story.blocks - WIDTH):
                print("#", end='', flush=True)

        print(" S: {0} C: {1} R: {2:.3f}\n\n".format(
            story.score, story.descendants, story.ratio))