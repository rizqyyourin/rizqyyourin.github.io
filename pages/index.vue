<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6 animate-fade-in">
            <!-- Badge -->
            <a href="https://www.upwork.com/freelancers/~01103c6049d69f345f?mp_source=share" target="_blank" rel="noopener noreferrer" class="w-fit">
              <span class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 dark:text-primary-300 dark:bg-primary-900/30 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-all">
                <span>Hire Me</span>
                <svg class="w-4 h-4" stroke="currentColor" stroke-width="2" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
              </span>
            </a>
            
            <!-- Heading -->
            <div>
              <h1 class="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">Ahmad Rizqy Yourin</span>.
              </h1>
            </div>

            <!-- Subtitle -->
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              A Fullstack Laravel Developer
            </p>

            <!-- Description -->
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Crafting robust, scalable web applications with expertise in backend development, Livewire, and modern best practices.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4 pt-4 max-w-xs">
              <a href="#projects" class="inline-flex items-center px-6 py-3 font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all shadow-lg hover:shadow-xl">
                View Projects
              </a>
            </div>
          </div>

          <!-- Right Image -->
          <div class="hidden md:flex justify-center items-center">
            <div class="relative w-full max-w-sm h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl group">
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Animated Laravel Element -->
              <div class="relative w-48 h-48 flex items-center justify-center">
                <!-- Outer rotating ring -->
                <div class="absolute inset-0 border-4 border-transparent border-t-white border-r-white rounded-full animate-spin" style="animation-duration: 8s;"></div>
                
                <!-- Middle pulsing ring -->
                <div class="absolute inset-6 border-2 border-white/30 rounded-full animate-pulse"></div>
                
                <!-- White background circle for logo -->
                <div class="absolute w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"></div>
                
                <!-- Laravel Logo -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="Laravel Framework Logo - Ahmad Rizqy Yourin specializes in Laravel development" class="w-20 h-20 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TALL Stack Section -->
    <section id="tall-stack" class="py-24 md:py-32 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">I Use <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">TALL</span> Stack for Development</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A powerful combination of Tailwind CSS, Alpine.js, Laravel, and Livewire. This modern stack allows me to build responsive, interactive, and maintainable web applications with exceptional speed and efficiency.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <!-- Tailwind CSS -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 md:p-8 border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all">
            <div class="flex flex-col items-center text-center h-full justify-between">
              <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" class="w-10 md:w-12 h-10 md:h-12 object-contain" />
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <!-- Alpine.js -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg p-4 md:p-8 border border-green-200 dark:border-green-700 hover:shadow-xl transition-all">
            <div class="flex flex-col items-center text-center h-full justify-between">
              <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvNQyIyR6GOd1wFUk_UM5PScxQvwL0SSpsQ&s" alt="Alpine.js" class="w-10 md:w-12 h-10 md:h-12 object-contain" />
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Alpine.js</h3>
              </div>
            </div>
          </div>

          <!-- Laravel -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-lg p-4 md:p-8 border border-red-200 dark:border-red-700 hover:shadow-xl transition-all">
            <div class="flex flex-col items-center text-center h-full justify-between">
              <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="Laravel" class="w-10 md:w-12 h-10 md:h-12 object-contain" />
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Laravel</h3>
              </div>
            </div>
          </div>

          <!-- Livewire -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg p-4 md:p-8 border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all">
            <div class="flex flex-col items-center text-center h-full justify-between">
              <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                <img src="https://logo.svgcdn.com/devicon/livewire-original-wordmark.png" alt="Livewire" class="w-10 md:w-12 h-10 md:h-12 object-contain" />
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Livewire</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Showcase of Laravel applications demonstrating expertise in backend development, API design, and best practices.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project 1 -->
          <a href="https://e-voting.yourin.my.id/" target="_blank" rel="noopener noreferrer" class="group">
            <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col group-hover:border-primary-500 dark:group-hover:border-primary-500">
              <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 overflow-hidden relative">
                <img src="/images/e-vote.png" alt="E-Voting Platform - Secure electronic voting system by Ahmad Rizqy Yourin" class="w-full h-full object-cover" />
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">E-Voting Platform</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">Secure and transparent electronic voting platform with real-time result tracking, voter authentication, and comprehensive audit trails for trustworthy elections.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Livewire</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">SQLite</span>
                </div>
              </div>
            </article>
          </a>

          <!-- Project 2 -->
          <a href="https://erp.yourin.my.id/" target="_blank" rel="noopener noreferrer" class="group">
            <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col group-hover:border-primary-500 dark:group-hover:border-primary-500">
              <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 overflow-hidden relative">
                <img src="/images/erp.png" alt="ERP Minimal - Enterprise resource planning system by Ahmad Rizqy Yourin" class="w-full h-full object-cover" />
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">ERP Minimal</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">Lightweight enterprise resource planning system with inventory management, sales tracking, and financial reporting for small businesses.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Livewire</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">SQLite</span>
                </div>
              </div>
            </article>
          </a>

          <!-- Project 3 -->
          <a href="https://qpay.yourin.my.id/" target="_blank" rel="noopener noreferrer" class="group">
            <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col group-hover:border-primary-500 dark:group-hover:border-primary-500">
              <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 overflow-hidden relative">
                <img src="/images/qpay.png" alt="QPay" class="w-full h-full object-cover" />
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">QPay - QR Code Payment Platform</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">SaaS platform that enables merchants to generate QR codes for products. Customers scan the QR code to view product details and checkout seamlessly at the cashier with an easy payment experience.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Livewire</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">DaisyUI</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">SQLite</span>
                </div>
              </div>
            </article>
          </a>

          <!-- Project 4 -->
          <a href="https://jualin.yourin.my.id/" target="_blank" rel="noopener noreferrer" class="group">
            <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col group-hover:border-primary-500 dark:group-hover:border-primary-500">
              <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 overflow-hidden relative">
                <img src="/images/Jualin.png" alt="Jualin - E-commerce with AI Chatbot" class="w-full h-full object-cover" />
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Jualin</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">E-commerce website with integrated AI chatbot features. Built with Laravel as backend and Next as frontend.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Next.js</span>
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Chatbot</span>
                </div>
              </div>
            </article>
          </a>

          <!-- Project 5 -->
          <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col">
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
              <div class="text-center">
                <svg class="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"/></svg>
                <p class="text-xs text-gray-500 dark:text-gray-400">Project Image</p>
              </div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Real-time Chat Application</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">Real-time messaging system with WebSockets for instant notifications and live updates.</p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">WebSocket</span>
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Pusher</span>
              </div>
            </div>
          </article>

          <!-- Project 6 -->
          <article class="h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col">
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
              <div class="text-center">
                <svg class="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"/></svg>
                <p class="text-xs text-gray-500 dark:text-gray-400">Project Image</p>
              </div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Task Management System</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">Collaborative project management tool with teams, boards, and real-time collaboration features.</p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Laravel</span>
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">Livewire</span>
                <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">PostgreSQL</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 md:py-32 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            Comprehensive toolkit spanning Laravel ecosystem, modern backend development, and DevOps practices.
          </p>
        </div>

        <!-- Tabs Navigation -->
        <div class="space-y-8">
          <!-- Tab Buttons -->
          <div class="flex flex-wrap gap-4 justify-center mb-12">
            <button @click="activeSkillsTab = 'laravel'" :class="activeSkillsTab === 'laravel' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'" class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Laravel Ecosystem
            </button>
            <button @click="activeSkillsTab = 'databases'" :class="activeSkillsTab === 'databases' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'" class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Databases
            </button>
            <button @click="activeSkillsTab = 'devops'" :class="activeSkillsTab === 'devops' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'" class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              DevOps & Tools
            </button>
          </div>

          <!-- Tab Content -->
          <!-- Laravel Ecosystem Tab -->
          <div v-show="activeSkillsTab === 'laravel'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
            <!-- Laravel -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <svg class="w-8 h-8 text-primary-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.2 13.6c0-.7-.4-1.4-1.1-1.8L20.9 2.1c-.7-.4-1.5-.4-2.2 0L3 11.8c-.7.4-1.1 1.1-1.1 1.8v13c0 .7.4 1.4 1.1 1.8l16.2 9.7c.4.2.8.3 1.1.3s.8-.1 1.1-.3l16.2-9.7c.7-.4 1.1-1.1 1.1-1.8v-13zm-17.6 20L6.5 25.6v-11l14.1-8.4 14.1 8.4v11l-14.1 8.4z" fill="#ef4444"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Laravel</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Core Framework</p>
            </div>

            <!-- Livewire -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <svg class="w-8 h-8 text-primary-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="#ef4444" stroke-width="2"/>
                  <path d="M20 8v24M8 20h24" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="20" cy="20" r="4" fill="#ef4444"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Livewire</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Reactive Components</p>
            </div>

            <!-- Filament -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <svg class="w-8 h-8 text-primary-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="24" height="24" rx="2" stroke="#ef4444" stroke-width="2"/>
                  <path d="M14 14h12M14 20h12M14 26h8" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Filament</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Admin Panels</p>
            </div>

            <!-- Lumen -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <svg class="w-8 h-8 text-primary-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="12" stroke="#ef4444" stroke-width="2"/>
                  <circle cx="20" cy="20" r="8" fill="none" stroke="#ef4444" stroke-width="1.5"/>
                  <circle cx="20" cy="20" r="4" fill="#ef4444"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Lumen</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Micro Framework</p>
            </div>

            <!-- Nova -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                <svg class="w-8 h-8 text-primary-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2L38 10v20L20 38L2 30V10L20 2z" stroke="#ef4444" stroke-width="2"/>
                  <circle cx="20" cy="20" r="4" fill="#ef4444"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Nova</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Admin Interface</p>
            </div>
          </div>

          <!-- Databases Tab -->
          <div v-show="activeSkillsTab === 'databases'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
            <!-- MySQL -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <svg class="w-8 h-8 text-blue-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="28" height="24" rx="2" stroke="#0051ba" stroke-width="2"/>
                  <path d="M10 14h20M10 20h20M10 26h14" stroke="#0051ba" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="8" cy="14" r="1.5" fill="#0051ba"/>
                  <circle cx="8" cy="20" r="1.5" fill="#0051ba"/>
                  <circle cx="8" cy="26" r="1.5" fill="#0051ba"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">MySQL</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Relational DB</p>
            </div>

            <!-- SQLite -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <svg class="w-8 h-8 text-blue-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="12" r="5" stroke="#003b57" stroke-width="2"/>
                  <path d="M15 17h10c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H15c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4z" stroke="#003b57" stroke-width="2"/>
                  <path d="M18 22h4M18 27h4" stroke="#003b57" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">SQLite</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Lightweight DB</p>
            </div>
          </div>

          <!-- DevOps & Tools Tab -->
          <div v-show="activeSkillsTab === 'devops'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
            <!-- Docker -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <svg class="w-8 h-8 text-blue-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 10h-3V8h-2v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2H8v2h-2v-2H4v2h2v2H4v2h2v2H4v2h4v-2h3v2h2v-2h3v2h2v-2h3v2h2v-2h3v2h2v-2h2v-2h2V10z" fill="#2496ed" stroke="#2496ed" stroke-width="0.5"/>
                  <rect x="8" y="12" width="4" height="4" fill="#2496ed"/>
                  <rect x="14" y="12" width="4" height="4" fill="#2496ed"/>
                  <rect x="20" y="12" width="4" height="4" fill="#2496ed"/>
                  <rect x="8" y="18" width="4" height="4" fill="#2496ed"/>
                  <rect x="14" y="18" width="4" height="4" fill="#2496ed"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Docker</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Containerization</p>
            </div>

            <!-- Git -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                <svg class="w-8 h-8 text-orange-600 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="11" r="4" stroke="#f1502f" stroke-width="2"/>
                  <circle cx="28" cy="28" r="4" stroke="#f1502f" stroke-width="2"/>
                  <circle cx="12" cy="28" r="4" stroke="#f1502f" stroke-width="2"/>
                  <path d="M23 14v8c0 1.6-1.3 3-3 3h0c-1.6 0-3-1.3-3-3v-8M23 21h3M14 25v-3c0-1.6 1.3-3 3-3" stroke="#f1502f" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">Git</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Version Control</p>
            </div>

            <!-- GitHub Actions -->
            <div class="group p-5 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-center cursor-pointer">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3 bg-white dark:bg-gray-600 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <svg class="w-8 h-8 text-gray-800 dark:text-gray-200 group-hover:scale-125 transition-transform" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6C12.3 6 6 12.3 6 20s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 2c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" fill="#1f2937"/>
                  <path d="M19 12v8l6 4" stroke="#1f2937" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="20" cy="20" r="8" stroke="#1f2937" stroke-width="1.5" fill="none" opacity="0.3"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">GitHub Actions</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 md:py-32 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 md:mb-4">Get In Touch</h2>
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next Laravel project. Reach out through any of these channels.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Email -->
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rizqyyourin6@gmail.com&su=Halo%20Rizqy&body=Halo%20Rizqy%2C%0A%0ASaya%20ingin%20bertanya%20tentang...%0A%0ATerima%20kasih." target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <svg class="w-8 md:w-10 h-8 md:h-10 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">rizqyyourin6@gmail.com</p>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/6285774414941" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <svg class="w-8 md:w-10 h-8 md:h-10 text-green-600 dark:text-green-400" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"/><path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/></svg>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">+62 857 7441 4941</p>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/rizqyyourin" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <svg class="w-8 md:w-10 h-8 md:h-10 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">GitHub</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">@rizqyyourin</p>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/rizqyyourin" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <svg class="w-8 md:w-10 h-8 md:h-10 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Rizqy Yourin</p>
          </a>

          <!-- Instagram -->
          <a href="https://instagram.com/rizqyyourin" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <svg class="w-8 md:w-10 h-8 md:h-10 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7m0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m5.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">Instagram</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">@rizqyyourin</p>
          </a>

          <!-- Threads -->
          <a href="https://www.threads.com/@rizqyyourin" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md dark:hover:bg-gray-700/30 transition-all duration-300">
            <div class="w-16 md:w-20 h-16 md:h-20 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <span class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">@</span>
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">Threads</h3>
            <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">@rizqyyourin</p>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'
import { ref } from 'vue'

// Skills tabs state
const activeSkillsTab = ref('laravel')

// Structured data for projects
const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ahmad Rizqy Yourin - Featured Projects',
  description: 'Portfolio of Laravel projects by Ahmad Rizqy Yourin',
  mainEntity: [
    {
      '@type': 'SoftwareApplication',
      name: 'E-Voting Platform',
      url: 'https://e-voting.yourin.my.id/',
      description: 'Secure and transparent electronic voting platform with real-time result tracking, voter authentication, and comprehensive audit trails',
      applicationCategory: 'Utility',
      operatingSystem: 'Web'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ERP Minimal',
      url: 'https://erp.yourin.my.id/',
      description: 'Lightweight enterprise resource planning system with inventory management, sales tracking, and financial reporting',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'QPay - QR Code Payment Platform',
      url: 'https://qpay.yourin.my.id/',
      description: 'SaaS platform for generating QR codes for products with seamless checkout experience',
      applicationCategory: 'Utility',
      operatingSystem: 'Web'
    }
  ]
}

// Breadcrumb schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://yourin.my.id'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tech Stack',
      item: 'https://yourin.my.id#tall-stack'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Projects',
      item: 'https://yourin.my.id#projects'
    }
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(projectsSchema),
      key: 'schema-projects'
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema),
      key: 'schema-breadcrumb'
    }
  ]
})

// No component imports needed - using pure Flowbite/Tailwind
</script>
