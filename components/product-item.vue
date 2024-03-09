<template>
  <div class="product-item">
    <img :src="item?.img">
    <h2> {{ item.title }} </h2>
    <div class="product-item-flex">
      <p> {{ item.price }} </p>
      <p> {{ item.weight }} </p>
    </div>
    <p> {{ item.description }} </p>

<!--    <pre> {{ item }} </pre>-->

  </div>
</template>

<script lang="ts">
export default {
  name: 'product-item',
  props: ['item'],
  setup (props: any, {emit}: any) {
    const item = props.item
    return {
      item,
    }
  }
}
</script>


<style scoped>
.product-item {
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img  {
    width: 100%;
    border-radius: 10px;
  }
}
.product-item-flex{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>