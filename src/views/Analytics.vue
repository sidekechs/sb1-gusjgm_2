<script setup lang="ts">
import { ref } from 'vue';

const metrics = ref([
  { name: 'Page Views', value: '125,242', change: '+12.3%' },
  { name: 'Bounce Rate', value: '24.5%', change: '-2.1%' },
  { name: 'Average Session', value: '2m 35s', change: '+0.5%' },
]);
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="metric in metrics" :key="metric.name" class="card">
        <h3 class="text-sm font-medium text-gray-500">{{ metric.name }}</h3>
        <div class="mt-2 flex items-baseline justify-between">
          <p class="text-2xl font-semibold text-gray-900">{{ metric.value }}</p>
          <span :class="[
            'text-sm font-medium',
            metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
          ]">{{ metric.change }}</span>
        </div>
      </div>
    </div>
  </div>
</template>