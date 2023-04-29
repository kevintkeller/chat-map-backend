import { Observable } from 'rxjs';
import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../models/user.interface';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    create(@Body()user: User): Observable<User> {
        return this.userService.create(user);
    }


    @Get(':id')
    findOneBy(@Param() params: any): Observable<User> {
        return this.userService.findOneBy(params.id);
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<User> {
        return this.userService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    }
}
