<template>
<span class="text">This is a demo for stylelint</span>
</template>

<style lang="less">
// After
.text {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;
  padding-right: 10px;
  // You see this is a mess css code
  padding-left: 10px;
  border: 1px solid #CCC;
  text-align: center;
  background-color: red;
}

// Before
// .text {
//   // You see this is a mess css code
//   padding-right: 10px;
//   display: block;
//   top: 0;
//   left: 0;
//   margin: 0 auto;
//   padding-left: 10px;
//   border: 1px solid #ccc;
//   background-color: red;
//   position: relative;
//   text-align: center;
// }
</style>
