// Transforms plain Markdown-generated HTML (h2, p, pre) into the original
// "step card" visual structure, then wires up copy buttons.
// This keeps index.md pure Markdown while preserving the custom design.

(function () {
  const container = document.querySelector('.content');
  if (!container) return;

  const children = Array.from(container.childNodes).filter(
    (n) => !(n.nodeType === 3 && !n.textContent.trim())
  );

  const sections = [];
  let current = null;

  children.forEach((node) => {
    if (node.nodeType === 1 && node.tagName === 'H2') {
      current = { h2: node, rest: [] };
      sections.push(current);
    } else if (current) {
      current.rest.push(node);
    }
  });

  let stepCount = 0;
  const built = document.createDocumentFragment();

  sections.forEach(({ h2, rest }) => {
    const section = document.createElement('section');
    section.id = h2.id;
    section.className = 'step';

    const head = document.createElement('div');
    head.className = 'step-head';
    const tag = document.createElement('span');
    tag.className = 'step-tag';
    stepCount += 1;
    tag.textContent = 'Step ' + stepCount;
    head.appendChild(tag);
    const h2Clone = document.createElement('h2');
    h2Clone.innerHTML = h2.innerHTML;
    head.appendChild(h2Clone);

    const body = document.createElement('div');
    body.className = 'step-body';

    rest.forEach((node) => body.appendChild(node));

    // Wrap whatever top-level element contains a <pre> (works whether
    // Jekyll/Rouge adds extra highlighter divs or not) in a code-block
    // with a copy button.
    body.querySelectorAll('pre').forEach((pre) => {
      let topLevel = pre;
      while (topLevel.parentElement && topLevel.parentElement !== body) {
        topLevel = topLevel.parentElement;
      }
      if (topLevel.closest('.code-block')) return;
      const wrap = document.createElement('div');
      wrap.className = 'code-block';
      wrap.setAttribute('data-copy', '');
      topLevel.replaceWith(wrap);
      wrap.appendChild(topLevel);
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.textContent = 'Copy';
      wrap.appendChild(btn);
    });

    section.appendChild(head);
    section.appendChild(body);
    built.appendChild(section);
  });

  container.replaceWith(built);

  // Wire up copy buttons
  document.querySelectorAll('.code-block[data-copy]').forEach((block) => {
    const btn = block.querySelector('.copy-btn');
    if (!btn) return;
    btn.addEventListener('click', async () => {
      const code = block.querySelector('code') || block.querySelector('pre');
      const text = code ? code.innerText : '';
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1500);
      } catch (err) {
        btn.textContent = 'Press ⌘/Ctrl+C';
      }
    });
  });
})();
