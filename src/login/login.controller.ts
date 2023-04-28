import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {LoginService} from './login.service';
import { LoginDto } from './login.dto';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) {}

    @Get()
    getUser(){
        return this.loginService.getUsers();
    }

    // @Post()
    // createUser(@Body() user: LoginDto) {
    //     console.log(user);
    //     return user;
    // }

}
