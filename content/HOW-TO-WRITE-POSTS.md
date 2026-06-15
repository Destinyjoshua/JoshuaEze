# How to manage your blog (no coding required)

Everything on joshuaeze.com is managed by editing files on GitHub.com. When you save a change, Vercel automatically rebuilds your site in about 1–2 minutes.

**Your repo:** https://github.com/Destinyjoshua/JoshuaEze

---

## Your simple workflow: X first, then your site

1. **Post your thread on X** (@mrjoshuaeze) — this is where you get reach and conversation.
2. **Copy the thread URL** — click the first tweet in the thread → Share → Copy link.
3. **Create a blog post** on GitHub (steps below).
4. **Paste or polish the content** — rewrite it, or convert the thread to text (see below).
5. **Add `xThreadUrl`** in the frontmatter — the site automatically shows a gold "Read the full interactive thread on X →" button.
6. **Commit** — your site updates automatically.

---

## How to add a new blog post

### Step 1: Open the blog folder on GitHub

1. Go to https://github.com/Destinyjoshua/JoshuaEze
2. Click `content` → `blog`
3. Click **Add file** → **Create new file**

### Step 2: Name your file

Use lowercase words separated by hyphens, ending in `.md`:

```
my-new-strategy-post.md
```

The filename becomes the URL: `joshuaeze.com/blog/my-new-strategy-post`

### Step 3: Copy the template

Open `content/blog/TEMPLATE-new-x-thread-post.md` in the repo, copy everything, and paste it into your new file.

### Step 4: Fill in the top section (frontmatter)

```yaml
---
title: "Your Post Title Here"
date: "2026-06-15"
excerpt: "Short summary shown on the blog page."
category: "Business Strategy"
readTime: "5 min"
xThreadUrl: "https://x.com/mrjoshuaeze/status/1234567890"
---
```

| Field | What to put |
|-------|-------------|
| `title` | The headline |
| `date` | Format: `"2026-06-15"` (year-month-day) |
| `excerpt` | 1–2 sentence summary |
| `category` | e.g. `Business Strategy`, `Nigerian / African Context`, `Personal Journey`, `Policy & Big Thinking` |
| `readTime` | e.g. `"5 min"` or `"8 min"` |
| `xThreadUrl` | **Optional.** The X thread link. If you add this, the gold CTA button appears automatically. |

### Step 5: Write your content below the `---` line

Write normally. Use `##` for section headings.

### Step 6: Commit

1. Scroll down to **Commit changes**
2. Write a short message like `Add new post: My Strategy Post`
3. Click **Commit changes**

Wait 1–2 minutes, then visit `joshuaeze.com/blog` to see your post.

---

## Converting an X thread to blog text (fast method)

### Option A: Thread Reader App (recommended)

1. Post your thread on X and copy the **first tweet's URL**
2. Go to https://threadreaderapp.com
3. Paste the URL and click **Unroll**
4. Copy the unrolled text
5. Paste into your `.md` file below the frontmatter
6. Clean up formatting: add `##` headings, fix spacing, polish wording

### Option B: HTML-to-Markdown converter (if you want cleaner formatting)

1. Unroll with Thread Reader App (step above)
2. Go to https://codebeautify.org/html-to-markdown-converter
3. Paste the thread text, convert, copy the Markdown
4. Paste into your post file and edit

### Option C: Don't rewrite — embed the thread

If you want the post to be mostly the live X thread:

1. Write a short intro (2–3 paragraphs) below the frontmatter
2. Paste this embed block (replace the URL):

```html
<blockquote class="twitter-tweet" data-theme="dark">
  <a href="https://x.com/mrjoshuaeze/status/YOUR_THREAD_ID"></a>
</blockquote>
```

3. Make sure `xThreadUrl` is set in frontmatter for the CTA button

---

## How to add threads to the "Thinking on X" page

1. Go to `content/on-x/threads.json` on GitHub
2. Click the pencil icon (Edit)
3. Add a new entry inside the `threads` array:

```json
{
  "url": "https://x.com/mrjoshuaeze/status/YOUR_THREAD_ID",
  "title": "Short title for the thread",
  "date": "2026-06-15",
  "note": "Optional one-line description."
}
```

4. Commit changes
5. Visit `joshuaeze.com/on-x`

---

## Category options (use exactly one)

- `Business Strategy`
- `Nigerian / African Context`
- `Personal Journey`
- `Policy & Big Thinking`
- `Engagement`

---

## Quick checklist for every X → blog post

- [ ] Thread posted on X
- [ ] Thread URL copied
- [ ] New `.md` file created in `content/blog/`
- [ ] Frontmatter filled in (especially `xThreadUrl`)
- [ ] Content written or pasted
- [ ] Committed on GitHub
- [ ] Checked `joshuaeze.com/blog/your-post-slug` after 2 minutes

---

## What you never need to do

- No Sanity, no CMS, no extra services
- No local coding tools (unless you want them)
- No Vercel dashboard changes for new posts
- No button/HTML to add for the X CTA — just set `xThreadUrl`

---

## Need help?

If something doesn't appear after 5 minutes, check:

1. The filename ends in `.md` (not `.txt`)
2. The date is in quotes: `"2026-06-15"`
3. You committed to the `main` branch
4. The file is in `content/blog/` (not a subfolder)