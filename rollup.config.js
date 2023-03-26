import pkg from './package.json'

import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'

const baseConfig = {
  input: 'src/index.ts',

  plugins: [
    eslint(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
}

export default [
  {
    ...baseConfig,
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      },
      {
        name: 'dateJS',
        file: pkg.browser,
        format: 'umd'
      }
    ]
  },
  {
    ...baseConfig,
    output: [
      {
        file: 'dist/dateJS.cjs.min.js',
        format: 'cjs',
        plugins: [uglify()]
      },
      {
        file: 'dist/dateJS.esm.min.js',
        format: 'es',
        plugins: [uglify()]
      },
      {
        name: 'dateJS',
        file: 'dist/dateJS.umd.min.js',
        format: 'umd',
        plugins: [uglify()]
      }
    ]
  }
]
