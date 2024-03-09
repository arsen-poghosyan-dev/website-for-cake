<template>
  <div class="app-header">
    <div class="app-header-around">
      <img src="/logo.png" style="height: 70px">
      <div>
        <nav>
          <ul>
            <li><a href="">Mer Masin</a></li>
            <li><a href="">Torter</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="app-header-icons">
        <i class="fa-solid fa-house app-header-icons1"></i>
        <i class="fa-brands fa-facebook app-header-icons1"></i>
        <i class="fa-brands fa-instagram app-header-icons1"></i>
        <i class="fa-brands fa-tiktok app-header-icons1"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default  {
  name: 'app-header'
}
</script>

<style >
.app-header{
  border-bottom: 3px solid burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-header-around{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
nav ul{
  width: 400px;
  display: flex;
  justify-content: space-between;
}
nav ul li{
  list-style: none;
}
nav ul li a{
  font-weight: 600;
  font-size: 19px;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid black;
}
nav ul li a:hover{
  font-weight: 600;
  color: burlywood;
  border-bottom: 2px solid burlywood;
}
.app-header-icons{
  color: burlywood;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 9%;
}
.app-header-icons1:hover{
  color: black;
}
</style>