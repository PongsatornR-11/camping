module.exports = {
  apps: [{
    name: 'Camping-Next-app',
    script: 'npm',
    args: 'start',
    cwd: '/srv/dev-disk-by-uuid-168E23328E2309B7/code/project/camping',
    env: {
      PORT: 3002,
      NODE_ENV: 'production',
    },
  }],
};