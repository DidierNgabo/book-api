import express from 'express';
import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Api',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/api/*.js'],
};

const openapiSpecification = swaggerJsDoc(options);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(routes);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome back didier' });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
