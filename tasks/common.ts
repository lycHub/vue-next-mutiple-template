import { src, dest, parallel } from "gulp";
import {watchFilePaths} from "./config";
import sass from 'gulp-sass';
import del from 'del';
import webpack from 'webpack-stream';

function clean() {
  return del(['dist']);
}

function script() {
  return src(watchFilePaths.scripts, { base: 'src' })
    // .pipe(gts.createProject('tsconfig.json')())
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(dest('dist'))
}


function template() {
  return src(watchFilePaths.templates, { base: 'src' })
    .pipe(dest('dist'))
}


function style() {
  const outputStyle = process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed';
  return src(watchFilePaths.styles, { base: 'src' })
    .pipe(sass({ outputStyle }).on('error', sass.logError))
    .pipe(dest('dist'))
}

function copyPublic() {
  return src(watchFilePaths.public)
    .pipe(dest('dist/public'))
}


function image() {
  return src(watchFilePaths.images, { base: 'src' })
    .pipe(dest('dist'))
}

const compile = parallel(template, script, style, copyPublic);


export { clean, template, script, style, copyPublic, image, compile }
