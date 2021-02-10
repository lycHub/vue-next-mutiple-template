import {parallel, series} from "gulp";
import {copyPublic, image, script, style, template} from "./tasks/common";


/*
* parallel 并行地执行任务
* series 按顺序执行
* */
const start = parallel(template, script, style, copyPublic, image);

const build = () => {

}



export { start, build };
