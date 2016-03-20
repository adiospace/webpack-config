/* eslint strict:0 */
'use strict'

/**
 * Load webpack config based on NODE_ENV values:
 *
 * - development (default)
 * - production
 */

const ENVS = ['development', 'production']
const NODE_ENV = process.env.NODE_ENV
const filename = ~ENVS.indexOf(NODE_ENV) ? NODE_ENV : ENVS[0]
const path = require('path')
module.exports = require(path.join(__dirname, 'webpack', `webpack.${filename}`))
