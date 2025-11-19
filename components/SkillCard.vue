<template>
  <div class="card">
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
        <component :is="getIcon(skill.icon)" class="w-8 h-8" />
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {{ skill.name }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {{ skill.description }}
        </p>
        <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
          <div 
            class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
            :style="{ width: skill.proficiency + '%' }"
          ></div>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {{ skill.proficiency }}% Proficiency
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SparklesIcon, CogIcon } from '@heroicons/vue/24/outline'

const iconMap: any = {
  SparklesIcon: SparklesIcon,
  CogIcon: CogIcon,
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || SparklesIcon
}

defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>
