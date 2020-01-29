<template>
  <div>test</div>
</template>

<script>

export default {
  name: 'test-comp',
  mounted() {
    this.$_sendTestData({
      msg: 'data from client',
      name: 'shawn'
    })
  }
}
</script>

<style></style>
