<template>
 Hello !!!
  <div style="border: 1px solid black;">
    <slot></slot>
  </div>

</template>

<script setup>

function sayHi() {
  console.log('Hi all.');
}

defineExpose({
  sayHi,
});
</script>

<style scoped>

</style>
