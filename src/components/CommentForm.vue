<script setup>
import { ref } from 'vue';

const props = defineProps({
  slug: String
});

const formElement = ref(null);
const formData = ref(null);
const submitLoading = ref(false);

const handlePostRequest = async (data) => {
  const response = await fetch(window.location.origin + '/api/comments/submit', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });

  if (!response.ok) throw new Error('No Response from server.');

  return response.json();
}
const handleSubmit = async () => {
  submitLoading.value = true;

  const { author, content } = formElement.value;

  const payload = {
    author: author.value,
    content: content.value,
    slug: props.slug
  }

  try {
    await handlePostRequest(payload)
      .then((res) => {
        if (res?.data?.length) location.reload();
        return
      })
      .catch(error => {
        throw new Error('There was an issue submitting this comment.');
      });
  }
  catch (error) {
    throw new Error('There was an issue submitting this comment.');
  }
}
</script>

<template>
  <form ref="formElement"
        id="comment-form"
        @submit.prevent="handleSubmit">
    <h2>Leave a comment</h2>
    <label for="author">
      Your Name
      <input type="text"
             name="author"
             id="author" />
    </label>

    <label for="slug">
      <input type="hidden"
             name="slug"
             id="slug"
             value={slug} />
    </label>

    <label for="content">
      Comment
      <textarea cols="10"
                rows="10"
                name="content"
                id="content"></textarea>
    </label>
    <input type="submit"
           value="Post Comment" />
  </form>
</template>

<style>
form {
  display: grid;

  label {
    display: grid;
    grid-template-rows: '1fr';
  }

  >label+label {
    margin-block-start: 1rem;
  }

  input {
    padding: 0.65rem;
  }

  [type='submit'] {
    margin-block-start: 1rem;
    width: fit-content;
  }
}
</style>