import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the Vue application
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building Vue app: ${error}`);
    return;
  }

  // Create plugin directory if it doesn't exist
  const pluginDir = path.resolve('plugin-build');
  if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir);
  }

  // Copy necessary files to plugin directory
  fs.copyFileSync('vue-dashboard.php', path.join(pluginDir, 'vue-dashboard.php'));
  
  // Copy dist directory
  fs.cpSync('dist', path.join(pluginDir, 'dist'), { recursive: true });

  console.log('Plugin built successfully!');
});