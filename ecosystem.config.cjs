module.exports = {
  apps: [
    {
      name: 'app',
      script: 'dist/main.js',
      watch: './dist',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      node_args: '--exprimental-specifier-resolution=node',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
    },
  ],
};
