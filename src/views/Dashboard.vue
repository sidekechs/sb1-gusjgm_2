<script setup lang="ts">
import { ref } from 'vue';
import { Line, Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [30, 45, 38, 52, 48, 60],
    borderColor: '#1a56db',
    tension: 0.4
  }]
};

const trafficSourceData = {
  labels: ['Direct', 'Organic', 'Referral', 'Social'],
  datasets: [{
    data: [35, 25, 20, 20],
    backgroundColor: ['#1a56db', '#7e3af2', '#0694a2', '#ff5a1f'],
    borderWidth: 0
  }]
};

const deviceData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [{
    data: [55, 35, 10],
    backgroundColor: ['#1a56db', '#7e3af2', '#0694a2'],
    borderWidth: 0
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

const pieOptions = {
  ...chartOptions,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  }
};

const stats = ref([
  { name: 'Total Revenue', value: '$45,231', change: '+20.1%' },
  { name: 'Active Users', value: '2,345', change: '+15.3%' },
  { name: 'Conversion Rate', value: '3.6%', change: '+2.4%' },
]);
</script>

<template>
  <div class="space-y-6">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="stat in stats" :key="stat.name" class="card">
        <h3 class="text-sm font-medium text-gray-500">{{ stat.name }}</h3>
        <div class="mt-2 flex items-baseline justify-between">
          <p class="text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
          <span class="text-sm font-medium text-green-600">{{ stat.change }}</span>
        </div>
      </div>
    </div>

    <!-- Line Chart -->
    <div class="card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h3>
      <div class="h-80">
        <Line :data="lineChartData" :options="chartOptions" />
      </div>
    </div>

    <!-- Pie Charts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Traffic Sources -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
        <div class="h-64">
          <Pie :data="trafficSourceData" :options="pieOptions" />
        </div>
      </div>

      <!-- Device Distribution -->
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Device Distribution</h3>
        <div class="h-64">
          <Pie :data="deviceData" :options="pieOptions" />
        </div>
      </div>
    </div>
  </div>
</template>