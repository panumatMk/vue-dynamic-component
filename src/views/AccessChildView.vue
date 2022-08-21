<template>
AccessChild
<Hello ref="hello">
  Yo!! <br/>
  <button @click="onClick"> click </button>
  <button @click="hello.sayHi()"> Say hi! </button>
</Hello>
</template>

<script setup lang="ts">
import Hello from "@/components/slots/Hello.vue";
import {ref} from "vue";
const hello = ref();

function onClick() {
  console.log('onClick');
  hello.value.sayHi();
}
</script>

<style scoped>

</style>
