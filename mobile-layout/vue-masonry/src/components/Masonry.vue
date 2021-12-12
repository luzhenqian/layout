<script setup>
import {
  useSlots,
  defineProps,
  createVNode,
  onBeforeMount,
  onMounted,
  onUpdated,
  ref,
  reactive,
  watch,
  nextTick,
} from "vue";

function setCSSGlobalVariable(key, value) {
  document.documentElement.style.setProperty([`--${key}`], value);
}

const props = defineProps({ columns: Number, gutter: Number });
const { columns, gutter } = props;
const slots = useSlots();
const children = slots.default();

const columnVNodes = [];

for (let i = 0; i < columns; i++) {
  const columnVNode = createVNode("div", { className: "column" }, []);
  columnVNodes.push(columnVNode);
}

onBeforeMount(() => {
  setCSSGlobalVariable("columns", columns);
  setCSSGlobalVariable("gutter", `${gutter}px`);
});

onMounted(() => {
  console.log(",mm", columnVNodes);
});

onUpdated(() => {
  if (currentChildIdx.value === children.length) return;
  renderNext();
});

let currentChildIdx = ref(0);
let renderRound = ref(0);

watch([currentChildIdx], () => {
  console.log(currentChildIdx.value);
  if(currentChildIdx.value>=columns){
    nextTick(()=>{
      // console.log(columnVNodes[0].el.clientHeight);
      renderNext()
      renderRound.value++;
    })
  }
});

function renderNext() {
  try {
    if (currentChildIdx.value === children.length) return;
    let shortestColumn = columnVNodes[0];
    for (let i = 0; i < columnVNodes.length; i++) {
      if (
        shortestColumn.el.getBoundingClientRect().height >
        columnVNodes[i].el.getBoundingClientRect().height
      ) {
        shortestColumn = columnVNodes[i];
      }
    }
    const child = children[currentChildIdx.value++];
    child.props.className = "item";
    console.log(child);
    // shortestColumn.el.append(child.el);
    shortestColumn.children.push(child);
    // for (let i = 0; i < columns; i++) {
    //   console.log(columnVNodes, columns, i, currentChildIdx.value);
    //   if (currentChildIdx.value === children.length) return;
    //   const child = children[currentChildIdx.value++];
    //   child.props.className = "item";
    //   columnVNodes[i].children.push(child);
    // }
  } finally {
    // if (currentChildIdx.value === children.length) return;
    // nextTick(() => {
    //   renderRound.value++;
    // });
  }
}

function render() {
  for (let i = 0; i < columns; i++) {
    console.log(columnVNodes, columns, i, currentChildIdx.value);
    if (currentChildIdx.value === children.length) return;
    const child = children[currentChildIdx.value++];
    child.props.className = "item";
    columnVNodes[i].children.push(child);
  }
  // nextTick(() => {
  //   renderRound.value++;
  // });
}

if (false) {
  let currentIdx = 0;
  children.forEach((child) => {
    child.props.className = "item";
    if (currentIdx === columnVNodes.length) {
      currentIdx = 0;
    }
    columnVNodes[currentIdx++].children.push(child);
  });
} else {
  render();
  // for (let i = 0; i < props.columns; i++) {
  //   const child = children[currentChildIdx++];
  //   child.props.className = "item";
  //   columnVNodes[currentColumnIdx++].children.push(child);
  // }
}

const RenderVNode = createVNode(
  "div",
  { className: "container" },
  columnVNodes
);
</script>

<template>
  <RenderVNode :renderRound="renderRound" />
</template>

<style>
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
</style>
