import express from 'express';
import { join } from 'path';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use('/', express.static(join(__dirname, '/dist')));

app.listen(PORT, () => console.log(`app up & running on port: ${PORT}`));
