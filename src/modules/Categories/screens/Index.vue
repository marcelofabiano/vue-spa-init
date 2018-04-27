<template>
  <div>
    <h1>Categories Index</h1>
    {{ categories }}
  </div>
</template>

<script>
  export default {
    name: 'Categories',
    created () {
      this.$store.dispatch('CategoriesFindAll')
    },
    computed: {
      categories () {
        console.log(this.$store.state.categories)
      }
    }
  }
</script>
