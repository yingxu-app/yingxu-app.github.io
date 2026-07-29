/* v42 is the single public release-link authority. Older visual pages remain
   available as rollback copies. v1.0.31 is the verified public macOS release. */
(() => {
  const stableVersion = '1.0.31';
  const stableSha256 = '6ba459330c5537498bd77300ad983d3cf2de6d844b2add752a90a0e357a18707';
  const releaseUrl = `https://github.com/luguanlin20050927/smart-media-backup/releases/download/v${stableVersion}/YINGXU-macOS-v${stableVersion}.dmg`;

  document.querySelectorAll('a[href]').forEach((link) => {
    const raw = link.getAttribute('href') || '';
    if (raw.startsWith('releases/') || raw.includes('/releases/download/')) {
      link.href = releaseUrl;
      return;
    }
    if (/-v(?:19|21|22|23|24|26|27|28|29|31|32|33|34|35|36|37|38|39)\.html/.test(raw)) {
      link.setAttribute('href', raw.replace(/-v(?:19|21|22|23|24|26|27|28|29|31|32|33|34|35|36|37|38|39)\.html/g, '-v42.html'));
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
