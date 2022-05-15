import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
const port = 3333;

app.use(cors({origin: '*'}));
app.use(express.json({limit: "50MB"}));
app.use(routes);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})