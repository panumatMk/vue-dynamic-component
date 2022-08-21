<template>
  Content Child
  <hr/>
  <Hello>
    I'm YO!, I'm rich !!!
  </Hello>
  <hr/>
  <NamedSlots>
    <template #header>
      Header Slot
    </template>
    <template #content>
      Content Slot
    </template>
  </NamedSlots>
  <hr/>
  This is
  <MyCompoment v-slot="{firstName, age}">
    {{ firstName }} : {{ age }}
  </MyCompoment>
</template>

<script setup lang="ts">

import Hello from "@/components/slots/Hello.vue";
import NamedSlots from "@/components/slots/NamedSlots.vue";
import MyCompoment from "@/components/slots/MyCompoment.vue";</script>

<style scoped>

</style>
