import { User } from '../user/user';

export interface LoginResponse {
    user: User;
    sessionToken: string;
}
