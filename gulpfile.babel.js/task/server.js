import browserSync from 'browser-sync';

// Конфигурация
import path from '../config/path.js';


// Статический сервер
export default () => {
  browserSync.create().init({
    server: {
      baseDir: path.root
    }
  });
}