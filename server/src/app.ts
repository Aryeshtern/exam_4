import express, { Application} from "express";

const app: Application = express();

const port = process.env.PORT || 3000;

import postRouter from "./Routers/postRouter";

import getRouter from "./Routers/getRouter"

app.use(express.json());

app.use('/api/beepers', postRouter);

app.use('/api/beepers', getRouter);

app.use('/api/beepers/:id', getRouter);

// app.use('/api/beepers/:id', );

// app.use('/api/beepers/:id/status',);

// app.use('/api/beepers/:id',);

// app.use('/api/beepers/status/:status', getRouter);

app.listen(port, 
    () => console.log(`Server is running on port ${port}`)
)
