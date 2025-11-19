<template>
  <div class="card group cursor-pointer overflow-hidden">
    <div class="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-600">
      <div class="w-full h-full flex items-center justify-center">
        <svg class="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300"></div>
    </div>

    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
      {{ title }}
    </h3>

    <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span 
        v-for="(tag, index) in tags" 
        :key="index"
        class="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex gap-3">
      <a 
        href="#" 
        class="flex-1 inline-flex items-center justify-center gap-2 text-primary-500 hover:text-primary-600 font-semibold text-sm"
      >
        View Project
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>
