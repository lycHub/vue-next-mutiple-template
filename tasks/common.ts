import { src, dest } from "gulp";
import {watchFilePaths} from "./config";
import sass from 'gulp-sass';
import gts from 'gulp-typescript';

function script() {
  return src(watchFilePaths.scripts, { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest('dist'))
}


function template() {
  return src(watchFilePaths.templates, { base: 'src' })
    .pipe(dest('dist'))
}


function style() {
  return src(watchFilePaths.styles, { base: 'src' })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
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


export { template, script, style, copyPublic, image }
