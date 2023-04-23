import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    private users = [
        {
            username: 'testuser',
            password: 'ilovechatmap'
        }
    ];

    getUsers() {
        return this.users;
    }

}
