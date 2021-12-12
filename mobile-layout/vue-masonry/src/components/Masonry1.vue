<script>
import { defineComponent, useSlots, createVNode } from "vue";

export default defineComponent({
  props: { columns: Number, gutter: Number },
  render(createElement, _, props) {
    const slots = useSlots();
    const children = slots.default();

    const columnVNodes = [];
    for (let i = 0; i < props.columns; i++) {
      const columnVNode = createVNode("div", { className: "column" });
      columnVNodes.push(columnVNode);
    }
    
    let currentIdx = 0;
    children.forEach((child) => {
      columnVNodes.push(child)
    });

    return createVNode("div", { className: "container" }, columnVNodes);
  },
});
</script>

<style scoped>
.container {
  color: red;
}
</style>
