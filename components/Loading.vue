<template>
  <div v-if="loading">
    <skeleton v-if="loading" circle> </skeleton>
    <skeleton v-if="loading" square> </skeleton>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
