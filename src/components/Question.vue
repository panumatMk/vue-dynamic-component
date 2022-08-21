<template>
  <div v-for="q in props.questions">
    <label> {{ q.questionTitle }}</label><br/>
    <template v-if="q.answer.answerType === 'text'">
      <input
          :type="q.answer.answerType"
          :placeholder="q.answer.placeholder"
          v-model="q.answer.value"
      >
    </template>
    <template v-else-if="q.answer.answerType === 'checkbox'">
      <template v-for="choice in q.answer.choices">
        <input
            type="checkbox"
            id="choice"
            name="choice"
            :value="choice"
            v-model="q.answer.value">
        <label for="choice">{{ choice }}</label>
      </template>
    </template>
    <hr/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["questions"]);
</script>

<style scoped>

</style>
