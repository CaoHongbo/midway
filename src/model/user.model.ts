import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { UserEntity } from "../entity/user.entity";
import { Repository } from 'typeorm';

@Provide()
export class UserModel {

    @InjectEntityModel(UserEntity)
    userRepo: Repository<UserEntity>

    async getUserByUsernameAndPassword(username,password): Promise<UserEntity> {
        return  await this.userRepo.findOne({
            where:{username,password}
        });
    }
}

