export class UsersObject {
    public id: string = '0';
    public enabled: boolean = false;
    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
    public username: string = '';
    public createdTimestamp: Date = new Date(Date.now());
    public teamid: number = 0;
    public city: string = '';
    public state: string = '';
    public instandid: string = '';

    public static factory(data: UsersObject): UsersObject {
        let tm: UsersObject = Object.assign(new UsersObject(), data);
        return tm;
    }
}