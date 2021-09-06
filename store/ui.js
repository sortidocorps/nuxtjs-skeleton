export const state = () => ({
  skeltonLoading: false,
})

export const mutations = {
  changeSkletonLoading(state, payload) {
    state.skeltonLoading = payload.skeltonLoading
  },
}
