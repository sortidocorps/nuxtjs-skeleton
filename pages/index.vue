<template>
  <div class="m-4 flex flex-col items-center">
    <skeleton v-if="loading" circle> </skeleton>
    <skeleton v-if="loading" square> </skeleton>

    <Profile v-if="!loading" />
    <Card v-if="!loading" />
  </div>
</template>

<script>
import Skeleton from '~/components/Skeleton.vue'

export default {
  components: { Skeleton },
  data() {
    return {
      loading: true,
    }
  },

  created() {
    this.$nextTick(() => {
      this.loading = false
    })
  },
}
</script>
