<template>
  <div class="about">
    <h1>This is an about page!!!!</h1>
    <img alt="dao logo" src="../assets/dao500.png">
    <div>
      <h2>route 정보로 분기 처리</h2>
      <div>
        {{ routeInfo }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed :{
    routeInfo(){
      return this.$route;
    }
  },
  created(){
    console.log(this.$route);
  }
}
</script>

