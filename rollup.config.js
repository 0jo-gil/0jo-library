import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

import path from 'path';
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        extract: 'index.css',
      }),
      typescript()
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.ts', format: 'cjs' }],

    plugins: [
      dts,
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      postcss({
        extract: true,
        extract: 'index.css',
      }),
      typescript(),
      resolve(),

    ],
  },
];