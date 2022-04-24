import del from 'del';

// Конфигурация
import path from '../config/path.js';


// Удаление директории
export default () => {
  return del(path.root);
}