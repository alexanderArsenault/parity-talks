const environment = process.env.NODE_ENV

module.exports = environment => {
  env = !!environment.prod ? 'production' : 'development'
  
  console.log(`🛠️  running ${env} Mode using ./webpack/webpack.${env}.config.js 🛠️`);
  return require(`./webpack/webpack.${env}.config.js`);
};