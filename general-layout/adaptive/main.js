function adaptive() {
  const width = document.documentElement.clientWidth;
  console.log(width, 'width');
  if (width <= 400) {
    if (
      location.href ===
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/h5/index.htm"
    )
      return;
    // 切换到 h5
    location.href =
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/h5/index.htm";
  }
  if (400 < width && width <= 1000) {
    if (
      location.href ===
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/hd/index.htm"
    )
      return;
    // 切换到 hd
    location.href =
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/hd/index.htm";
  }
  if (1000 < width) {
    if (
      location.href ===
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/pc/index.htm"
    )
      return;
    // 切换到 pc
    location.href =
      "file:///Users/luzhenqian/Documents/projects/live-demo/general-layout/adaptive/pc/index.htm";
  }
}

adaptive();

window.addEventListener("resize", adaptive);
