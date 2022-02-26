<template>
  <div class="flex items-center justify-between border-b-2 border-gray-100">
    <div class="text-sm truncate overflow-ellipsis w-6/12">{{ file.name }}</div>
    <div class="-mr-3 flex items-center">
      <a href="" class="inline-block text-indigo-500 text-sm p-3 font-medium"
        >Get Link 
      </a>

      <a href="" class="inline-block text-pink-500 text-sm p-3 font-medium"
        >Delete
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    file: {
      required: true,
      type: Object,
    },
  },
};
</script>
