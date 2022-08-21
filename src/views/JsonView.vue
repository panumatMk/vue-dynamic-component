<template>
  Json
  <div v-for="item in data">
    <label>{{ item.label }}</label>
    <template v-if="item.answerType === 'input'">
      <input v-model="item.value" :type="item.type" :placeholder="item.placeholder">
    </template>
    <template v-else-if="item.answerType === 'checkbox'">
      <div v-for="choice in item.choices">
        <input type="checkbox" id="choice" name="choice" :value="choice" v-model="item.value">
        <label for="choice">{{choice}}</label>
      </div>
    </template>
  </div>
  <hr>
  <button @click="submit">submit</button>
  <div>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const rawJson = [
  {
    label: 'input 1',
    answerType: 'input',
    type: 'text',
    placeholder: 'input 1',
    value: ref('input1')
  },
  {
    label: 'input 2',
    answerType: 'input',
    type: 'number',
    placeholder: 'input 2',
    value: 25
  },
  {
    label: 'input 3',
    answerType: 'input',
    type: 'password',
    placeholder: 'input 3',
    value: null
  },
  {
    label: 'input 4',
    answerType: 'checkbox',
    placeholder: 'input 4',
    value: [],
    choices: [
      'item1',
      'item2',
      'item3',
      'item4',
    ]
  }
]

const data = reactive(rawJson);
const result = ref();


function submit() {
  result.value = JSON.stringify(data);
}

</script>

<style scoped>

</style>
