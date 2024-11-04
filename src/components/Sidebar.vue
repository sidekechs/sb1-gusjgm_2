<script setup lang="ts">
import { ref } from 'vue';
import { HomeIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, route: '/' },
  { name: 'Analytics', icon: ChartBarIcon, route: '/analytics' },
  { name: 'Settings', icon: Cog6ToothIcon, route: '/settings' },
];
</script>

<template>
  <aside class="w-64 bg-white border-r">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
    </div>
    <nav class="mt-6">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.route"
        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        :class="{ 'bg-gray-50 text-gray-900': $route.path === item.route }"
      >
        <component :is="item.icon" class="w-5 h-5 mr-3" />
        {{ item.name }}
      </router-link>
    </nav>
  </aside>
</template>