<script setup>
import { ref } from 'vue'

const props = defineProps({
  url: String
});

const comments = ref([]);

console.log({ url: props.url });
if (props.url) {
  const { url } = props;
  try {
    let response = await fetch(url);
    if (response.ok) {
      comments.value = await response.json();
    }
  }
  catch (error) {
    throw new Error('There was a problem fetching the comments:' + error);
  }
}
</script>

<template>
  <div>
    <dl v-if="comments">
      <div v-for="comment in comments.results"
           :key="comment.id">
        <dt>{{ comment.author }}</dt>
        <dd>posted {{ comment.timestamp }}</dd>
        <dd>{{ comment.content }}</dd>
      </div>
    </dl>
    <div v-else>
      <p>There are no comments to display.</p>
    </div>
  </div>
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