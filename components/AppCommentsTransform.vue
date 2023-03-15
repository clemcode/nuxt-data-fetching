<script lang="ts" setup>
const { data: comments } = await useFetch('/api/comments', {
  transform: (comments) => comments.map((comment) => ({
    id: comment.id,
    body: comment.body,
    username: comment.user.username
  }))
})
</script>

<template>
  <div>
    <div class="comments">
      <h1>Comments</h1>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <h2>{{ comment.username }}</h2>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>