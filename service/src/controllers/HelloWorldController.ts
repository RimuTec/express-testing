import { Controller, Get, Route } from 'tsoa';

@Route('/hello-world')
export class HelloWorldController extends Controller {
   @Get('')
   public async get(): Promise<string> {
      return 'Hello, world! 1258 hrs';
   }
}
