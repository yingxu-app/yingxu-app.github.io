/* v37 is the single public release-link authority. Older visual pages remain
   available as rollback copies, while every current navigation/download link
   resolves to the verified v1.0.24 macOS build. */
(() => {
  const version = '1.0.24';
  const sha256 = 'eee70ab2d26e1317c6cca48d9652be0ca03508650b253f1ea043ac2869e8b6ce';
  const releaseUrl = `https://github.com/luguanlin20050927/smart-media-backup/releases/download/v${version}/YINGXU-macOS-v${version}.dmg`;

  document.querySelectorAll('a[href]').forEach((link) => {
    const raw = link.getAttribute('href') || '';
    if (raw.startsWith('releases/') || raw.includes('/releases/download/')) {
      link.href = releaseUrl;
      return;
    }
    if (raw.includes('-v36.html')) link.setAttribute('href', raw.replace(/-v36\.html/g, '-v37.html'));
  });
  document.querySelectorAll('[data-release-sha]').forEach((el) => { el.textContent = sha256; });

  const rewriteText = (node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const value = node.nodeValue;
    if (!value || !/v1\.0\.(7|9|10|11|12)/.test(value)) return;
    node.nodeValue = value
      .replace(/v1\.0\.(7|9|10|11|12)/g, `v${version}`)
      .replace(/[a-f0-9]{64}/g, sha256)
      .replace(/\.dmg\s*\/\s*(24|34)\s*MB/g, '.dmg / 24 MB');
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) rewriteText(node);
})();
