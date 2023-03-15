# Nuxt Data fetching

This repo demonstrates how to fetch data from an API in Nuxt.

## Caching

Due to caching, a page reload is important to witness the different features behavior

## Suspense

Nuxt implements Vue 3's Suspense API and waits for all asynchronous operations to finish before page rendering and transitions.

## Lazy

The `lazy` option doesn't wait for async calls to finish before page rendering and transitions on client-side.

## Pick / Transform

`pick` and `transform` are useful to reduce the payload size.