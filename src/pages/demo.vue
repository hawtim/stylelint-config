<template>
  <span class="text">This is a demo for stylelint</span>
</template>
<script>
export default {
  data() {
    return {
      msg: 'This is a demo for stylelint'
    }
  }
}
</script>
<style lang="less">
  .text {
    // You see this is a mess css code
    padding-right: 10px;
    display: block;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding-left: 10px;
    border: 1px solid #ccc;
    background-color: red;
    position: relative;
    text-align: center;
  }
</style>

