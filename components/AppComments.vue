<script lang="ts" setup>
const { data: comments } = await useFetch('/api/comments')
</script>

<template>
  <div>
    <div class="comments">
      <h1>Comments</h1>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <h2>{{ comment.user.username }}</h2>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>