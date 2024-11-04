<script setup lang="ts">
import { ref } from 'vue';
import { BellIcon } from '@heroicons/vue/24/outline';

const notifications = ref(3);
</script>

<template>
  <header class="bg-white border-b px-6 py-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-800">{{ $route.name || 'Dashboard' }}</h2>
      <div class="flex items-center space-x-4">
        <button class="relative p-2 text-gray-600 hover:text-gray-900">
          <BellIcon class="w-6 h-6" />
          <span v-if="notifications" class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ notifications }}
          </span>
        </button>
        <div class="w-8 h-8 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </header>
</template>