<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  comments: Array
});
</script>

<template>
  <dl>
    <div v-for="comment in comments" :key="comment.id">
      <dt>{{ comment.author }}</dt>
      <dd>posted {{ comment.timestamp }}</dd>
      <dd>{{ comment.content }}</dd>
    </div>
  </dl>
</template>

<style>
dl {
  >div {
    background: gainsboro;
    padding: 1rem;
  }

  >div+div {
    margin-block-start: 1rem;
  }

  dt {
    font-weight: 900;
  }

  dd {
    padding: 0;
    margin: 0;
  }
}
</style>