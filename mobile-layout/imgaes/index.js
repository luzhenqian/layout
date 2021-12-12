function setCSSGlobalVariable(key, value) {
  document.documentElement.style.setProperty([`--${key}`], value);
}

const columns = 3;
const gutter = 12;

setCSSGlobalVariable("columns", columns);
setCSSGlobalVariable("gutter", `${gutter}px`);

const containerEl = document.querySelector(".container");
const children = containerEl.children;

/** @type {Element[]} */
const columnEls = [];
for (let i = 0; i < columns; i++) {
  const columnEl = document.createElement("div");
  columnEl.classList.add("column");
  columnEls.push(columnEl);
}

let currentColumnIdx = 0
Array.from(children).forEach((child) => {
  if(currentColumnIdx === columns) currentColumnIdx = 0
  child.classList.add("item");
  columnEls[currentColumnIdx++].append(child);
});

containerEl.innerHTML = "";

containerEl.append(...columnEls);
