<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img src="/images/profile.jpg" alt="Yourin" class="w-10 h-10 rounded-full object-cover flex-shrink-0 group-hover:shadow-lg transition-shadow border border-primary-200" />
          <span class="font-bold text-2xl text-primary-500">Yourin</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            href="#home"
            :class="['text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium relative group/nav', activeSection === 'home' ? 'text-primary-500' : '']"
          >
            Home
            <span v-if="activeSection === 'home'" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
          </a>
          <a 
            href="#about"
            :class="['text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium relative group/nav', activeSection === 'about' ? 'text-primary-500' : '']"
          >
            About
            <span v-if="activeSection === 'about'" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
          </a>
          <a 
            href="#projects"
            :class="['text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium relative group/nav', activeSection === 'projects' ? 'text-primary-500' : '']"
          >
            Projects
            <span v-if="activeSection === 'projects'" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
          </a>
          <a 
            href="#skills"
            :class="['text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium relative group/nav', activeSection === 'skills' ? 'text-primary-500' : '']"
          >
            Skills
            <span v-if="activeSection === 'skills'" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
          </a>
          <a 
            href="#contact" 
            :class="['btn-primary text-sm', activeSection === 'contact' ? 'ring-2 ring-primary-500' : '']"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-dark-700 py-4 space-y-3"
      >
        <a 
          href="#home"
          :class="['block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium rounded-lg', activeSection === 'home' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : '']"
          @click="isMobileMenuOpen = false"
        >
          Home
        </a>
        <a 
          href="#about"
          :class="['block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium rounded-lg', activeSection === 'about' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : '']"
          @click="isMobileMenuOpen = false"
        >
          About
        </a>
        <a 
          href="#projects"
          :class="['block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium rounded-lg', activeSection === 'projects' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : '']"
          @click="isMobileMenuOpen = false"
        >
          Projects
        </a>
        <a 
          href="#skills"
          :class="['block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium rounded-lg', activeSection === 'skills' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' : '']"
          @click="isMobileMenuOpen = false"
        >
          Skills
        </a>
        <div class="px-4">
          <a href="#contact" class="btn-primary w-full inline-block text-center">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'

const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

onMounted(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact']
    
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom > 100) {
          activeSection.value = section
          break
        }
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
