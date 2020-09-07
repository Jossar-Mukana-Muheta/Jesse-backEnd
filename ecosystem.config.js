module.exports = {
  apps : [{
    script: 'server.js',
    watch: '.'
  },],

  deploy : {
    production : {
      key: './sh/jessekey.pem',
      user : 'bitnami',
      host : '52.47.80.181',
      ref  : 'origin/master',
      repo : 'https://github.com/Jossar-Mukana-Muheta/jesse-backend.git',
      path : '/home/bitnami/jesse',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
