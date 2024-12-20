# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:percent
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %%
import requests
import frontmatter

from dateutil import parser

# %%
source = 'https://write.apreslanu.it/api/collections/weeknotes/posts'
destination = '../content/write.apreslanu.it/weeknotes'

# %%
total = requests.get(source).json()['data']['total_posts']

total


# %%
def get_posts():

    p = []
    page = 1

    while (len(p) < total):
        p += requests.get(source, { 'page': page }).json()['data']['posts']
        page += 1
    
    return p

posts = get_posts()

len(posts)

# %%
posts[0]


# %%
def write_posts(posts):

    for p in posts:
        filename = p['title'] # parser.parse(p['created']).strftime('%s')
        url = source.replace('/api/collections', '').replace('posts', p['slug'])
        
        post = frontmatter.Post(
            p['body'],
            date = p['created'],
            title = p['title'],
            source = url,
        )

        print(filename)
        print(post['title'])
        print(post['source'])

        frontmatter.dump(post, f'{destination}/{filename}.md')
    
    return True

write_posts(posts)

# %%
