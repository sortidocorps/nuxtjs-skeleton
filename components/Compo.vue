<template>
  <div>
    <v-skeleton-loader
      v-if="skeltonLoading"
      class="mx-auto my-2"
      type="card-heading, list-item-three-line"
    ></v-skeleton-loader>
    <div v-if="!skeltonLoading">// PUT YOUR CONTENT HERE</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Compo',
  computed: {
    ...mapState('ui', {
      skeltonLoading: (state) => state.skeltonLoading,
    }),
  },
  created() {
    this.$store.commit('ui/changeSkletonLoading', {
      skeltonLoading: false,
    })
  },
}
</script>
