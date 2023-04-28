import { Injectable } from '@nestjs/common';


@Injectable()
export class LoginService {

    private users = [
        {
            username: 'testuser',
            password: 'password'
        },
        {
            username: 'spaghetti',
            password: 'meatballs'
        }
    ];

    getUsers() {
        return this.users;
    }

}
