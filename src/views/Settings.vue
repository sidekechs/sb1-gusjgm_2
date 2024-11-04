<template>
  <div class="card">
    <h2 class="text-lg font-medium text-gray-900 mb-6">Dashboard Settings</h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Dashboard Name</label>
        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Theme</label>
        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option>Light</option>
          <option>Dark</option>
          <option>System</option>
        </select>
      </div>
      <div>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          <span class="text-sm text-gray-700">Enable notifications</span>
        </label>
      </div>
      <button class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Save Changes
      </button>
    </div>
  </div>
</template>