import { IUserCreatePayload } from '@/app/api/(routes)/auth/types/User';
import { http } from '..';

export const createUser = async (body: unknown) => {
    try {
        const res = (await http.post(
            '/auth/users',
            body
        )) as IUserCreatePayload;
        return res;
    } catch (error) {
        return;
    }
};
