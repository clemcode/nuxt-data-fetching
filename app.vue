<template>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/suspense">
            Suspense
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lazy">
            Lazy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pick">
            Pick
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/transform">
            Transform
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="app">
      <NuxtPage />
    </div>
</template>

<style scoped>
/* Two columns layout: a large one for the post and a sidebar for comments */

.app {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
}
</style>