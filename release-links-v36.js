(() => {
  const releaseUrl = 'https://github.com/luguanlin20050927/smart-media-backup/releases/download/v1.0.11/YINGXU-macOS-v1.0.11.dmg';
  document.querySelectorAll('a[href^="releases/"]').forEach((link) => { link.href = releaseUrl; });
  document.querySelectorAll('a[href*="-v18.html"],a[href*="-v19.html"],a[href*="-v20.html"],a[href*="-v21.html"],a[href*="-v22.html"],a[href*="-v23.html"],a[href*="-v24.html"],a[href*="-v25.html"],a[href*="-v26.html"],a[href*="-v27.html"],a[href*="-v28.html"],a[href*="-v29.html"],a[href*="-v30.html"],a[href*="-v31.html"],a[href*="-v32.html"],a[href*="-v33.html"]').forEach((link) => {
    link.href = link.getAttribute('href').replace(/-v(?:18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35)\.html/g, '-v36.html');
  });
})();
