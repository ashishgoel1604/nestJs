import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('hello')
  getRootToute() {
    return 'Hello Nest Js, Hiiiii!';
  }

  @Get('bye')
  getRootToute1() {
    return 'Bye Nest Js, Bye!';
  }
}
