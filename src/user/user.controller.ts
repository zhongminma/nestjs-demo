import { Controller, Get, Post, Query, Request, Body, Param } from '@nestjs/common';
import { request } from 'http';

@Controller('user')
export class UserController {
    // http://localhost:3000/user
    @Get()
    index(): string {
        return 'this is user';
    }
    // http://localhost:3000/user/edit?id=188&name=bob
    @Get('edit')
    editUser(@Query('id') id): string{
        console.log(id);  //Query.id
        return 'edit the user';
    }
    // http://localhost:3000/user/xyx
    @Get('x*x')
    getWildcardUser(): string{
        return 'wildcard user'
    }
    // http://localhost:3000/user/detail?name=bob
    @Get('detail')
    getUserDetail(@Request() request): any {
        console.log(request.query);
        return request.query;
    }
    // http://localhost:3000/user/detail?id=188&name=bob
    @Get('detail/:id')
    getUserById(@Param() param):string {
        console.log(param);
        return 'find user by id';
    }
    // http://localhost:3000/user/create
    @Post('create')
    create(@Body() body): string {
        console.log(body);
        return 'add a user';
    }
}
