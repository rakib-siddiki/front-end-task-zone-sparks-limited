import { http } from '..';
import { ProductValidation } from '@/app/(public)/types';

export const fetchProducts = async (): Promise<ProductValidation | null> => {
    try {
        const res = (await http.get('/products')) as ProductValidation;
        return res;
    } catch (error) {
        return null;
    }
};
