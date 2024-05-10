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

export const fetchProduct = async (id: string): Promise<TProduct | null> => {
    console.log('🚀 > fetchProduct > id:', id);
    try {
        const res = (await http.get(`/products/${id}`, 60)) as TProduct;
        return res;
    } catch (error) {
        return null;
    }
};
