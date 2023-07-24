import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { error } from 'console';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    async findAll(): Promise<UserEntity[]>{
        return await this.usersService.findall();
    }
    
    @Get(":id")
    async findOne(@Param('id') id : number): Promise<UserEntity>{
       const user = await this.usersService.findOne(id);
       if(!user){
        throw new Error(' Khong tim thay user')

       }else{
        return user;
       }
    }

    @Post()
    async create (@Body() user: UserEntity): Promise<UserEntity>{
        return await this.usersService.create(user)
    }

    @Put(': id ')
    async update(@Param('id') id: number , @Body() user: UserEntity): Promise<UserEntity>{
        return this.usersService.update(id,user);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        const user = await this.usersService.findOne(id);
        if(!user){
            throw new error (' Khong tim thay user');
        }
        return this.usersService.delete(id,user);
    }
}
