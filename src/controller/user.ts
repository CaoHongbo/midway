import { Controller, Post, Body, Inject  } from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate';
import { UserModel } from "../model/user.model";
import { JwtService} from '@midwayjs/jwt';


import { UserLoginDTO } from "../dto/user.dto"




@Controller('/api/user')
export class userController {
    @Inject()
    User: UserModel

    @Inject()
    jwtService: JwtService

    @Post('/login')
    @Validate()
    async login(@Body() user: UserLoginDTO){

        let a = await this.User.getUserByUsernameAndPassword(user.username,user.password)
        if(a!==null){
            let token = this.jwtService.signSync({ username: user.username, password: user.password })
            return JSON.stringify({
                code: 200,
                result: "success",
                message: "登录成功",
                data:{token}
            })
        } else {
            return JSON.stringify({
                code: 400,
                result: "error",
                message: "账号或密码不正确",
                data: null
            })
        }
    }
}




