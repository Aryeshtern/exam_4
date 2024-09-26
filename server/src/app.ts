import express, { Application} from "express";

const app: Application = express();

const port = process.env.PORT || 3000;

import postRouter from "./Routers/postRouter";

import getRouter from "./Routers/getRouter"

import deleteRouter from "./Routers/deleteRouter";

import putRouter from "./Routers/putRouter";

app.use(express.json());

app.use('/api/beepers', postRouter);

app.use('/api/beepers', getRouter);

app.use('/api/beepers', getRouter);

app.use('/api/beepers', getRouter);

app.use('/api/beepers', putRouter);

app.use('/api/beepers', deleteRouter);

// app.use('/api/beepers/status/:status', getRouter);

app.listen(port, 
    () => console.log(`Server is running on port ${port}`)
)
