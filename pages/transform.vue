<script lang="ts" setup>
const { data: post } = await useFetch('/api/post')
</script>

<template>
    <div class="post">
      <h1>{{ post?.title }}</h1>
      <p>{{ post?.body }}</p>
    </div>
    <AppCommentsTransform />
</template>