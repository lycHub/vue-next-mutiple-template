import {parallel, series} from "gulp";
import {clean, compile, image} from "./tasks/common";
import {server, watchSrc} from "./tasks/server";

/*
* parallel 并行地执行任务
* series 按顺序执行
* */
const start = series(clean, compile, parallel(watchSrc, server));

const build = series(clean, parallel(compile, image));



export { start, build };
