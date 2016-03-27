/* eslint strict: 0 */
'use strict'

const ENVS = ['development', 'production']
const NODE_ENV = process.env.NODE_ENV
const env = ~ENVS.indexOf(NODE_ENV) ? NODE_ENV : ENVS[0]
const path = require('path')
const filename = path.join(__dirname, 'webpack', `webpack.${env}`)
module.exports = require(filename)
