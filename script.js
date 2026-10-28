document.querySelectorAll('.code-block[data-copy]').forEach((block) => {
  const btn = block.querySelector('.copy-btn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const code = block.querySelector('code');
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
