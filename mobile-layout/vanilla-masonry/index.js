function setCSSGlobalVariable(key, value) {
  document.documentElement.style.setProperty([`--${key}`], value);
}

const css = `
.container {
  background-color: #f5f5f5;
  padding: var(--gutter);
  display: flex;
  align-items: flex-start;
}

.column {
  display: inline-block;
  width: calc((100% - var(--gutter) * (var(--columns) - 1)) / var(--columns));
  margin-left: var(--gutter);
}

.column:first-child {
  margin-left: 0;
}

.item {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 12px;
  margin-bottom: var(--gutter);
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-sizing: border-box;
}

.item:last-child {
  margin-bottom: 0;
}
`;

class MasonryOption {
  /** @type {string} */
  selector;
  /** @type {number} */
  columns;
  /** @type {number} */
  gutter;
}

class Masonry {
  /** @type {Element} */
  el;
  /** @type {number} */
  columns;
  /** @type {number} */
  gutter;
  /** @type {Element[]} */
  columnEls = [];
  /** @param {MasonryOption} option */
  constructor(option) {
    const { selector, columns, gutter } = option;
    this.el = document.querySelector(selector);
    this.columns = columns;
    this.gutter = gutter;
  }

  layout() {
    // 1. 设置 css 变量
    setCSSGlobalVariable("columns", this.columns);
    setCSSGlobalVariable("gutter", `${this.gutter}px`);

    // 2. 插入样式
    const styleEl = document.createElement("style");
    styleEl.textContent = css;
    document.head.append(styleEl);

    // 3. 创建与列数对等的 DOM 容器
    for (let i = 0; i < this.columns; i++) {
      const columnEl = document.createElement("div");
      columnEl.classList.add("column");
      this.columnEls.push(columnEl);
    }

    // 4.1. 按照高度进行分配
    const { children } = this.el.cloneNode(true);
    this.el.innerHTML = "";
    this.el.append(...this.columnEls);
    let targetColumn = this.columnEls[0];
    Array.from(children).forEach((child) => {
      this.columnEls.forEach((columnEl) => {
        const { height } = targetColumn.getBoundingClientRect();
        const { height: currentColumnHeight } =
          columnEl.getBoundingClientRect();
        if (height < currentColumnHeight) return;
        targetColumn = columnEl;
      });
      child.classList.add("item");
      targetColumn.append(child);
    });

    // 4. 均分子元素到列容器中
    // const { children } = this.el;

    // let currentColumnIdx = 0;
    // Array.from(children).forEach((child) => {
    //   child.classList.add("item");
    //   if (currentColumnIdx === this.columns) currentColumnIdx = 0;
    //   this.columnEls[currentColumnIdx++].append(child);
    // });
    // this.el.innerHTML = "";
    // // 5. 插入 DOM
    // this.el.append(...this.columnEls);
  }
}
