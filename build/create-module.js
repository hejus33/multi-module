const path = require('path')
const fs = require('fs')
const readlineSync = require('readline-sync')

// new module name
let moduleName = readlineSync.question('enter your module name: ')

// module path
const modulePath = path.resolve(__dirname, '../src/modules', moduleName)

// template path
const templatePath = path.resolve(__dirname, '../template')

// check module path if exists
if (fs.existsSync(modulePath)) {
  console.log(`${moduleName} module is exists`)
  process.exit()
}

// create mock directory structure
fs.mkdirSync(path.resolve(__dirname, '../mock', moduleName))
fs.mkdirSync(path.resolve(__dirname, '../mock', moduleName, 'test'))

// create module directory structure
fs.mkdirSync(modulePath)
fs.mkdirSync(path.resolve(__dirname, 'assets'))
fs.mkdirSync(path.resolve(__dirname, 'assets/data'))
fs.mkdirSync(path.resolve(__dirname, 'assets/img'))
fs.mkdirSync(path.resolve(__dirname, 'router'))
fs.mkdirSync(path.resolve(__dirname, 'static'))
fs.mkdirSync(path.resolve(__dirname, 'views'))

// need copy files
const copyFiles = [
  'index.html',
  'index.js',
  'index.vue',
  'views/index.vue',
  'router/index.js'
]

// copy method
const copy = source => {
  for (const item of source) {
    let fileContent = fs.readFileSync(path.join(templatePath, item))

    fs.writeFileSync(path.join(modul))
  }
}