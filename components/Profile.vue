<template>
  <div
    class="
      card
      border
      w-96
      hover:shadow-none
      relative
      flex flex-col
      mx-auto
      shadow-lg
      m-5
    "
  >
    <img
      class="max-h-20 w-full opacity-80 absolute top-0 object-cover"
      style="z-index: -1"
      src="~/assets/nature.jpg"
      alt=""
    />
    <div class="profile w-full flex m-3 ml-4 text-white">
      <img
        class="w-28 h-28 p-1 bg-white rounded-full object-cover"
        src="~/assets/people.jpg"
        alt=""
      />
      <div class="title mt-11 ml-3 font-bold flex flex-col">
        <div class="name break-words">Barbus</div>
        <div class="add font-semibold text-sm italic dark">Dev</div>
      </div>
    </div>
    <div
      class="
        buttons
        flex
        absolute
        bottom-0
        font-bold
        right-0
        text-xs text-gray-500
        space-x-0
        my-3.5
        mr-3
      "
    >
      <div
        class="
          add
          border
          rounded-sm
          border-gray-300
          p-1
          px-4
          cursor-pointer
          hover:bg-gray-700 hover:text-white
        "
      >
        Profile
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
