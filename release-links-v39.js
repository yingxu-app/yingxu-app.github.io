/* v39 is the single public release-link authority. Older visual pages remain
   available as rollback copies. Keep the verified v1.0.24 DMG as the public
   download until the v1.0.29 DMG and GitHub Release are actually published. */
(() => {
  const stableVersion = '1.0.24';
  const stableSha256 = 'eee70ab2d26e1317c6cca48d9652be0ca03508650b253f1ea043ac2869e8b6ce';
  const releaseUrl = `https://github.com/luguanlin20050927/smart-media-backup/releases/download/v${stableVersion}/YINGXU-macOS-v${stableVersion}.dmg`;

  document.querySelectorAll('a[href]').forEach((link) => {
    const raw = link.getAttribute('href') || '';
    if (raw.startsWith('releases/') || raw.includes('/releases/download/')) {
      link.href = releaseUrl;
      return;
    }
    if (/-v(?:19|21|22|23|24|26|27|28|29|31|32|33|34|35|36|37|38)\.html/.test(raw)) {
      link.setAttribute('href', raw.replace(/-v(?:19|21|22|23|24|26|27|28|29|31|32|33|34|35|36|37|38)\.html/g, '-v39.html'));
    }
  });
  document.querySelectorAll('[data-release-sha]').forEach((el) => { el.textContent = stableSha256; });

  const rewriteText = (node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const value = node.nodeValue;
    if (!value || !/v1\.0\.(1|2|4|5|6|7|8|9|10|11|12)/.test(value)) return;
    node.nodeValue = value
      .replace(/v1\.0\.(1|2|4|5|6|7|8|9|10|11|12)/g, `v${stableVersion}`)
      .replace(/[a-f0-9]{64}/g, stableSha256)
      .replace(/\.(?:zip|dmg)\s*\/\s*(21|24|34)\s*MB/g, '.dmg / 24 MB');
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) rewriteText(node);
})();
