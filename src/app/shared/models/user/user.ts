export class User {
    userName = '';
    owner = false;

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
