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
        name: 'datejs',
        file: pkg.browser,
        format: 'umd'
      }
    ]
  },
  {
    ...baseConfig,
    output: [
      {
        file: 'dist/datejs.cjs.min.js',
        format: 'cjs',
        plugins: [uglify()]
      },
      {
        file: 'dist/datejs.esm.min.js',
        format: 'es',
        plugins: [uglify()]
      },
      {
        name: 'datejs',
        file: 'dist/datejs.umd.min.js',
        format: 'umd',
        plugins: [uglify()]
      }
    ]
  }
]
