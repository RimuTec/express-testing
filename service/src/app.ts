import { Router } from 'express';

export async function configureApp(app: Router) {
   app.use('/', (req, res) => {
      res.send('Hello, world! 1136 hrs');
   })
}
