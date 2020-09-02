export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
}

export class User implements IUser {

    constructor(
        public firstname:string,
        public lastname:string,
        public email:string,
        public username:string,
        public password:string) {
    }
}