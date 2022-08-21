<template>
 MyCompoment <br/>
  <slot :age="26" :firstName="person.name"></slot>
</template>

<script setup>
import {reactive} from "vue";
const person = reactive({name: 'James', age: '26'})
</script>

<style scoped>

</style>
