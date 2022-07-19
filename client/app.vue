<template>
  <div>
    <h1>Samphony</h1>
    <!-- <NuxtWelcome /> -->
    <div class="nav">
      <router-link to="/"></router-link>
      <router-link to="#"><h3>Home</h3></router-link>
      <router-link to="#"><h3>Levels</h3></router-link>
      <router-link to="#"><h3>Conservatory</h3></router-link>
      <router-link to="#"><h3>E-commerce</h3></router-link>
    </div>
  </div>
</template>

<script></script>
<style>
h1{
  color: yellowgreen;
text-align: center;
}
#nav{
  overflow: hidden; 
}
h3{
  text-align: center;
  float: left;
  color: #000000;
  text-decoration: none;
  font-size: 17px;
  position: relative;
  padding: 40px;
  margin-right: 10px;
}
</style>