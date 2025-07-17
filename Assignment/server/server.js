import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import blogRouter from './router/BlogRouter.js';
import connectDB from './config/db.js';

// config
const app = express();
const PORT = process.env.PORT;
await connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API working');
});

app.use('/api', blogRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})