<template>
  <div>
    <app-header></app-header>


    <div style="width: 100%; margin-top: 50px">

    </div>
    <about-us></about-us>

    <categories @change="changeCategory"></categories>

    <div class="app-flex-grid">
      <div  v-for="val in result" class="app-flex-grid-item">
        <product-item :item="val" :key="val.id"></product-item>
      </div>
    </div>

<!--    <pre>{{ result }}</pre>-->


    <app-footer></app-footer>

  </div>
</template>

<script lang="ts">
import {ref} from "#imports";

export default {
  setup () {

    let items = ref<Array<any>>([]);
    const category = ref<any>(null)

    fetch('http://127.0.0.1:3000/products.json')
        .then((response) => {

          console.log(response)
          return response.json()
        })
        .then((data) => {

          items.value = data
          console.log(data)

          return 34567
        })
        .then((data) => {
          console.log(data)
        })
        .catch()
        .finally()

    let result = computed(() => {
      let result = items.value.filter(function (value, index, array) {
        if (!category.value) {
          return true
        }

        return value.category.id === category.value.id
      })

      return result;
    })

    const changeCategory = (cat: any) => {
      category.value = cat
    }

    return {
      items,
      result,
      changeCategory,
    }
  }
}

</script>

<style >
html, body {
  margin: 0;
  padding: 0;
}
.app-flex-grid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
}
.app-flex-grid-item {
  border: 1px solid red;
  width: 25%;
  padding: 15px;
  margin-bottom: 15px;
}


</style>