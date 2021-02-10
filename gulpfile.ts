import {parallel, series} from "gulp";
import {clean, compile, copyPublic, image, script, style, template} from "./tasks/common";
import {server, watchSrc} from "./tasks/server";

/*
* parallel 并行地执行任务
* series 按顺序执行
* */
const start = series(clean, compile, parallel(watchSrc, server));

const build = series(clean, parallel(template, script, style, copyPublic, image));



export { start, build };
