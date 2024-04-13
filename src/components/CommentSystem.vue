<script setup>
import { computed, onMounted } from 'vue';
import CommentForm from './CommentForm.vue';
import CommentList from './CommentList.vue';

const props = defineProps({
  slug: String,
  baseUrl: String,
});
const { slug } = props;
console.log(slug);

</script>

<template>
  <div class="container">
    <h2>Post Comments</h2>
    <CommentForm :slug="slug" />
    <CommentList :url="`${baseUrl}/api/comments/${props.slug}`" />
  </div>
</template>

<style lang="scss" scoped></style>