import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome back didier' });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
