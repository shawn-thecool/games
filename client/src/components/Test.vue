<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'test-comp',
  data() {
    return {
      msg: 'waiting...',
      name: 'waiting...'
    }
  },
  mounted() {
    this.$_join()
    this.$_battle()
    setTimeout(() => {
      this.$_test({ msg: 'hello', name: 'shawn' , id: Math.random()})
    }, 1000)
  }
}
</script>

<style></style>
