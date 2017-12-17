<template>
  <a :href="url" target="_blank" rel="noopener" class="club-cta">
    <!-- Attach title and alt tag to image -->
    <img :src="`/static/images/${image}`" :title="title" :alt="title">
  </a>
</template>

<script>
export default {
  props: ['image', 'title', 'url']
}
</script>

<style lang="scss" scoped>
.club-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  img {
    width: 100%;
    max-height: 100%;
    transform: scale(.9);
    transition: transform .3s ease-in-out;
  }

  &:focus,
  &:hover {
    img {
      transform: scale(1);
    }
  }
}
</style>