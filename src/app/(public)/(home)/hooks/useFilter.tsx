import { IProductResponse } from '@/app/(public)/types';
import { ISubCategory } from '@/app/api/(routes)/sub-categories/types';
import { useState, ChangeEvent, useMemo, useCallback } from 'react';
interface IFilter {
    category: string;
    brand: string;
    subCategory: string;
    minPrice: string;
    maxPrice: string;
}

const useFilter = (data: IProductResponse[], subCat: ISubCategory[]) => {
    const [filter, setFilter] = useState<IFilter>({
        category: '',
        brand: '',
        subCategory: '',
        minPrice: '',
        maxPrice: ''
    });
    const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFilter((prevFilter) => ({
                ...prevFilter,
                [name]: checked ? value : ''
            }));
        }
    }, []);

    const filteredData = useMemo(() => {
        let filteredProducts = data;

        if (filter.category) {
            filteredProducts = filteredProducts.filter((item) =>
                item.category?._id.includes(filter.category)
            );
        }

        if (filter.brand) {
            filteredProducts = filteredProducts.filter((item) =>
                item.brand?._id.includes(filter.brand)
            );
        }

        if (filter.subCategory) {
            // @ts-expect-error next-line
            filteredProducts = subCat.filter(
                (item) => item?._id ?? ''.includes(filter.subCategory)
            );
        }

        if (filter.minPrice && filter.maxPrice) {
            filteredProducts = filteredProducts.filter((item) => {
                const minPrice = parseInt(filter.minPrice);
                const maxPrice = parseInt(filter.maxPrice);
                return (
                    item.sellingPrice >= minPrice &&
                    item.sellingPrice <= maxPrice
                );
            });
        }

        return filteredProducts;
    }, [data, subCat, filter]);

    return { filter, handleFilter, filteredData };
};
export default useFilter;
