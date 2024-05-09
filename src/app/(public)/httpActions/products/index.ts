import { http } from '..';
import { IProductResponse, ProductValidation } from '@/app/(public)/types';
type TProduct = ProductValidation & IProductResponse;
export const fetchProducts = async (): Promise<TProduct | null> => {
    try {
        const res = (await http.get('/products', 60)) as TProduct;
        return res;
    } catch (error) {
        return null;
    }
};
