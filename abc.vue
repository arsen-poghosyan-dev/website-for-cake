<template>
  <div>
    <button @click="click">{{ title }}</button>
    <button @click="click"> {{type}}</button>
  </div>
</template>

<script lang="ts">
export default {
  props: ['type', 'title'],
  emits: ['tank'],
  setup(props: any, { emit }: any) {
    const { type, title } = props;
    const click = () => {
      console.log('---tank---')
      emit('tank', {id: 123321})
    }
    return{
      type,
      title,
      click,
    }
  }
}

</script>

<style scoped>

</style>