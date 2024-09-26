import express, { Application} from "express";

const app: Application = express();

const port = process.env.PORT || 3000;

import {postRouter} from "./Routers/postRouter";

app.use(express.json());

app.post('/api/beppers', postRouter);

app.get('/api/beppers',);

app.get('/api/beppers/:id',);

app.put('/api/beppers/:id',);

app.put('/api/beppers/:id/status',);

app.delete('/api/beppers/:id',);

app.get('/api/beppers/status/:status',);

app.listen(port, 
    () => console.log(`Server is running on port ${port}`)
)
