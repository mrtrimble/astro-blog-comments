<script setup>
import { computed, ref } from 'vue';
import CommentForm from './CommentForm.vue';
import CommentList from './CommentList.vue';

const props = defineProps({
  slug: String,
  baseUrl: String,
});

const { baseUrl, slug } = props;
const commentsEndpoint = computed(() => [baseUrl, 'api/comments', slug].join('/'));
const comments = ref([]);
const error = ref(false);

try {
  let response = await fetch(commentsEndpoint.value, {
    method: 'GET',
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  if (response.ok) {
    comments.value = await response.json();
  }
}
catch (error) {
  error.value = error;
  throw new Error('There was a problem fetching the comments:' + error);
}
</script>

<template>
  <div class="container">
    <h2>Post Comments</h2>
    <CommentForm :slug="slug" />
    <template v-if="error">
      <p>There was a problem fetching this post's comments.</p>
      <p>{{ error }}</p>
    </template>
    <template v-else>
      <CommentList :comments="comments.results" />
    </template>
  </div>
</template>