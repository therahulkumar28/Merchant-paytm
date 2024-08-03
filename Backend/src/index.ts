import express, { Request, Response } from 'express';
import cors from 'cors'
import { userRoutes } from './routes/userRoutes';
import { merchantRoutes } from './routes/merchantRoutes';

const app = express();
app.use(express.json())
app.use(cors())


app.use('/api/v1/user',userRoutes)
app.use('/api/v1/merchant',merchantRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
