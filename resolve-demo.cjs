'use strict'

console.log()
console.group('# package resolution')
console.log(`require('pino')`, '\t', '  =>', require.resolve('pino'))
console.log(`require('standard')`, '\t', '  =>', require.resolve('standard'))
console.groupEnd('')
console.log()

console.group('# directory resolution')
console.log(`require('.')`, '\t\t', '  =>', require.resolve('.'))
console.log(`require('.')`, '=>', require.resolve('.'))
console.groupEnd()
console.log()

console.group('# file resolution')
console.log(`require('./format')`, '\t', '  =>', require.resolve('./format'))
console.log(`require('./format.js')`, '  =>', require.resolve('./format.js'))
console.groupEnd()
console.log()

console.group('# core APIs resolution')
console.log(`require('fs')`, '\t', '  =>', require.resolve('fs'))
console.log(`require('util')`, '\t', '  =>', require.resolve('util'))
console.groupEnd()
console.log()