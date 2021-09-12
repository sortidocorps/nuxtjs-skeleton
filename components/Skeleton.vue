<template>
  <div>
    <div v-if="circle" class="w-60 h-24 border-2 rounded-md mx-auto mt-20">
      <div
        class="
          flex
          animate-pulse
          flex-row
          items-center
          h-full
          justify-center
          space-x-5
        "
      >
        <div class="w-12 bg-gray-300 h-12 rounded-full"></div>
        <div class="flex flex-col space-y-3">
          <div class="w-36 bg-gray-300 h-6 rounded-md"></div>
          <div class="w-24 bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
    </div>
    <div v-if="square" class="w-96 border-2 rounded-md mx-auto my-4">
      <div class="flex animate-pulse flex-col h-full justify-center p-2">
        <div class="w-full bg-gray-300 h-72 rounded-md mb-4"></div>

        <div class="flex flex-col items-start">
          <div class="pt-2 bg-gray-300 w-6 h-4 rounded-md"></div>

          <div class="my-2 w-full bg-gray-300 h-6 rounded-md"></div>

          <div class="my-2 bg-gray-300 w-6 h-4 rounded-md"></div>

          <div class="my-2 w-full bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    circle: Boolean,
    square: Boolean,
  },
}
</script>

<style></style>
