---
layout: default
title: Build & Host a Website with Claude + GitHub Pages
description: A step-by-step guide to designing a webpage with Claude and publishing it for free on GitHub Pages, with a custom domain.
---

## Get Claude
{: #claude .step}

1. Sign up at [claude.ai](https://claude.ai).
2. [Claude Code Desktop](https://code.claude.com/docs/en/desktop-quickstart)

(You can also connect Claude web app to GitHub or install [Claude Code](https://code.claude.com/docs/en/quickstart) for the terminal and start it with `claude` in any folder to start.)

## Get GitHub
{: #github .step .alt}

Sign up for a free account at [github.com/signup](https://github.com/signup). That's the whole step — you won't touch the website again.

## Let Claude connect to GitHub
{: #gh-cli .step}

In your Claude Code terminal, ask it to set everything up:

```
Install the GitHub CLI (gh) and log me in with
gh auth login. Then build me a [describe your site]
as static HTML/CSS/JS, create a public GitHub repo
for it, push the code, and enable GitHub Pages.
```

Claude installs `gh`, walks you through browser login, then builds, creates the repo, pushes, and turns on Pages — all in one go. Your site is live at `https://github-username.github.io/repo-name/`.

## Add your custom domain
{: #domain .step .alt}

1. On GitHub, open your repo → **Settings → Pages**.
2. Under **Custom domain**, type your domain (e.g. `www.yourdomain.com`) and save.
3. GitHub shows the DNS records you need — copy them.
4. Log in to your domain registrar and paste those records into its DNS settings.

| Use case | Type | Host | Value |
|---|---|---|---|
| Root domain | A | @ | 185.199.108.153 |
|  | A | @ | 185.199.109.153 |
|  | A | @ | 185.199.110.153 |
|  | A | @ | 185.199.111.153 |
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

Absolutely. Paste your current HTML/CSS back to Claude, describe the change, get the updated file, commit, push — live again in under a minute.

### What if my site doesn't show up?

Check: repo is public, Pages source points to the right branch/folder, and there's an `index.html` at the root (or the folder you selected). Hard-refresh your browser — Pages can cache briefly.
