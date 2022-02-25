import path, {dirname} from 'path';
import dotenv from 'dotenv';

const __dirname = dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '.env'),
});