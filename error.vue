<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800 px-4">
    <div class="max-w-md text-center">
      <div class="mb-8">
        <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
      <p class="text-gray-600 dark:text-gray-400 mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn-primary inline-block">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
