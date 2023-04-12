<template>
  <div class="home">
    <div v-for="(data, idx) in backData" v-bind:key="data.no">
      <span>No.{{idx}}_</span>
      <template v-if="idx=== 5">
        <div>5번 인덱스 if절 test >>> {{data.contents}}</div>

      </template>
      <span v-html="data.contents"></span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed : {
    backData(){
      return this.$store.state.backData;
    }
  },
  components: {
  },
  created(){
    this.$store.dispatch('getDummy');
  }
}
</script>
