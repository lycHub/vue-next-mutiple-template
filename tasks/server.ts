import { watch } from "gulp";
import {compile} from "./common";
import bs from 'browser-sync';
import {IncomingMessage, ServerResponse} from "http";

const browserSync = bs.create();

function watchSrc() {
  watch(['src/**'], { ignored: 'src/assets/images/**' }, compile);
}

function server() {
  browserSync.init({
    files: 'dist',
    open: false,
    notify: false,
    port: 4002,
    server: {
      baseDir: ['dist', 'src']
    }
  }, (err, bsInstance) => {
    // @ts-ignore
    bsInstance.addMiddleware('*', (req: IncomingMessage, res: ServerResponse) => {
      res.writeHead(301, {
        location: 'pages/home'
      });
      res.end();
    });
  });
}


export { watchSrc, server }