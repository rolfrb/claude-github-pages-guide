# Claude + GitHub Pages Guide

Source for the step-by-step guide site on building and hosting a website with Claude and GitHub Pages. Built with [Jekyll](https://jekyllrb.com/) and deployed via [GitHub Pages](https://pages.github.com/).

## Running locally

### Prerequisites

- **Homebrew Ruby** (not macOS's built-in system Ruby, which is outdated and incompatible).

  Install via Homebrew if you don't have it:
  ```bash
  brew install ruby
  ```

  Then make sure Homebrew's Ruby takes priority over the system one by adding this to your `~/.zshrc`:
  ```bash
  export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
  ```
  Reload your shell (`source ~/.zshrc` or open a new terminal) and verify:
  ```bash
  which ruby   # should print /opt/homebrew/opt/ruby/bin/ruby
  which bundle # should print /opt/homebrew/opt/ruby/bin/bundle
  ```

### Install & serve

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000). The site rebuilds automatically on file changes. Press `Ctrl+C` to stop the server.

### Notes

- This project uses the standalone `jekyll` gem (not GitHub's `github-pages` gem), since `github-pages` pins old Jekyll/Liquid versions incompatible with modern Ruby. The site uses no custom plugins, so the output matches what GitHub Pages renders.
- `Gemfile.lock` is committed for reproducible installs — run `bundle install` (not `bundle update`) unless you intend to bump dependency versions.
