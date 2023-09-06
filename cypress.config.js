const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, //sinalizando que não utilizaremos a pasta fixtures
  video: false, //sinalizando que não queremos que sejam gerados vídeos dos testes quando rodamos em modo headless
})
