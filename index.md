---
layout: default
title: Build & Host a Website with Claude + GitHub Pages
description: A step-by-step guide to designing a webpage with Claude and publishing it for free on GitHub Pages, with a custom domain.
---

## Get Claude
{: #claude .step}

Sign up for a free account at [claude.ai](https://claude.ai). That's it — you'll work with Claude right in the browser or the Claude app, with nothing to install.

(Prefer working in a terminal or the desktop Code tab? [Claude Code](https://code.claude.com/docs/en/quickstart) works too, but it needs a paid plan — Pro, Max, Team or Enterprise.)

## Get GitHub
{: #github .step .alt}

1. Sign up for a free account at [github.com/signup](https://github.com/signup).
2. Create a new repo at [github.com/new](https://github.com/new). Name it anything (e.g. `my-site`), set it to **Public** (GitHub Pages is free for public repos), and tick **Add a README file** so it starts with a `main` branch.

Claude can't create the repo for you, so do this part yourself — it takes about 30 seconds.

## Connect Claude to GitHub
{: #gh-cli .step}

1. In Claude, open **Settings → Connectors** and connect **GitHub**. When GitHub asks, install the Claude GitHub App on your account and give it access to your new repo — without this, Claude can read the repo but can't push to it.
2. Start a chat, paste your repo's URL, and tell Claude what to build:

```
Use https://github.com/github-username/my-site.
Build me a [describe your site] as static HTML/CSS/JS,
then commit and push it to the main branch.
```

3. On GitHub, open your repo → **Settings → Pages**. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.

Give it a minute or two and your site is live at `https://github-username.github.io/my-site/`.

## Add your custom domain
{: #domain .step .alt}

1. On GitHub, open your repo → **Settings → Pages**.
2. Under **Custom domain**, type your domain (e.g. `www.yourdomain.com`) and save.
3. Log in to your domain registrar and open its DNS settings.
4. Add the record below.

| Use case | Type | Host | Value |
|---|---|---|---|
| www subdomain | CNAME | www | github-username.github.io |

> **Then:** back in Settings → Pages, wait for the green check, tick **Enforce HTTPS**. Done — your domain is live. Can take up to 24h to propagate.
{: .callout}

## Good to know
{: #faq .alt .faq}

### Is this really free?

Yes — GitHub Pages hosting is free for public repositories, including HTTPS. You only pay for the domain name itself if you want one.

### Can I use a framework like React?

Yes, as long as the final build output is static files. Ask Claude to set up a build step (e.g. Vite) and publish the compiled `dist/` folder, or use a GitHub Action to build automatically on push.

### Can I keep editing with Claude later?

Absolutely. Start a new chat, paste your repo's URL, describe the change, and ask Claude to push it — your site updates within a minute or two.

### What if my site doesn't show up?

Check: repo is public, Pages source points to the right branch/folder, and there's an `index.html` at the root (or the folder you selected). Hard-refresh your browser — Pages can cache briefly.
