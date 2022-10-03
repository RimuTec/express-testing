import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../tsoa-generated/swagger.json' assert { type: 'json' };
import { Router } from 'express';
import { RegisterRoutes } from '../tsoa-generated/routes';

export async function configureApp(app: Router) {
   app.use('/docs/swagger.json', (_req, res) => res.json(swaggerDocument));
   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
      explorer: true
   }));

   RegisterRoutes(app);

   app.use('/', (req, res) => {
      res.send('Hello, world! 1136 hrs');
   })
}
