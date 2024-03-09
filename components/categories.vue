<template>
  <div class="categories">
<!--    <pre>{{items}}</pre>-->

    <div class="categories-item" @click="changeCategory(null)">
      <p class="categories-item-text">pokazat vse</p>
    </div>
    <div v-for="item in items" class="categories-item" @click="changeCategory(item)">
      <p class="categories-item-text">{{ item.title }}</p>
    </div>


  </div>
</template>

<script  lang="ts">
export default {
  name:'categories',
  props: ['items'],
  emits: ['change'],
  setup (props: any, {emit}: any) {
    const items = ref<any>([])

    fetch('http://127.0.0.1:3000/categories.json')
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((data) => {
          items.value = data
        })
        .catch()
        .finally()

    const changeCategory = (item: any) => {
      console.log('ddd')
      emit('change', item)
    }

    return{
      items,
      changeCategory,
    }
  }
}

</script>

<style scoped>
.categories {
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

}
.categories-item {
  //border: 1px solid red;

}
.categories-item-text{
  font-size: 17px;
  color: black;
  font-weight: 600;
  background: burlywood;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.categories-item-text:hover {
  color: white;
  box-shadow: rgb(222, 184, 135) 0px 30px 60px -12px inset, rgb(0, 0, 0) 0px 18px 36px -18px inset;
}
</style>