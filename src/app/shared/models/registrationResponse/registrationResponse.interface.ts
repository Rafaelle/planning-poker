import { User } from '../user/user';

export interface RegistrationResponse {
    user: User;
    sessionToken: string;
}
