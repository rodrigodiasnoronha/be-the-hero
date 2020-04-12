import 'dotenv/config';
import api from './App';

const port = process.env.PORT || 3333;

api.listen(port, () => console.log(`Api running port ${port}`));
