import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}
    
    
    // lấy tất cả users
    async findall(): Promise<UserEntity[]> {
        return await this.usersRepository.find();
    }
    // lấy user theo id 
    async findOne(id : number): Promise<UserEntity> {
        return await this.usersRepository.findOne( {where: { id } } );
    }
    //Tạo user 
    async create(user: UserEntity): Promise<UserEntity> {
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }
    // cap nhat user
    async update(id: number , user: UserEntity): Promise<UserEntity> {
        await this.usersRepository.update( id, user );
        return await this.usersRepository.findOne({where: { id } });
    }

    // xoa user
    async delete(id: number , user: UserEntity): Promise<void> {
        await this.usersRepository.delete(id);
    }
    
}
