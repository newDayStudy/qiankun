
const prod = process.env.NODE_ENV == 'development'
const child_process = require('child_process')

child_process.exec('yarn ' + (prod ? 'serve' : 'build'))

child_process.exec('cd micro-app-vue && yarn ' + ((prod ? 'serve' : 'build')))

child_process.exec('cd micro-app-react && yarn ' + (prod ? 'start' : 'build'))
