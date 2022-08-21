<template>
  <h2>{{value.pageName}}</h2>
  <Question :questions="value.questions"></Question>
  <button @click="submit"> Submit</button>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {rawData, type Page} from "@/assets/exampleData";
import Question from "@/components/Question.vue";

const value = reactive<Page>(rawData);

function submit() {
  console.log(JSON.stringify(value));
}
</script>

<style scoped>

</style>
