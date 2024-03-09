<template>
  <div class="app-footer">
    <form>
      <div>
        <label>name</label>
        <input type="text">
      </div>
       <div>
         <label>email</label>
         <input type="email">
       </div>
      <div>
        <label>phone</label>
        <input type="number">
      </div>
      <div>
        <label>message</label>
        <textarea></textarea>
      </div>
    </form>

    <div>
      <p>Address <i class="fa-solid fa-location-dot"></i> Russia Moscow</p>
      <p>Phone <i class="fa-solid fa-mobile-screen-button"></i>+7 44444444444</p>
      <p>Email <i class="fa-regular fa-envelope"></i> moscow@.ru</p>
    </div>
  </div>
</template>

<script  lang="ts">
export default  {
  name: 'app-footer'
}
</script>

<style >
.app-footer{
  border: 1px solid;
  background: fuchsia;
}
</style>