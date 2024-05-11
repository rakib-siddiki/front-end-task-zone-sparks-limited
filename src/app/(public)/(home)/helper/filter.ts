import { IProductResponse } from '../../types';
export function filterBrand(data: IProductResponse[], query: string) {
    const context = query;
    const uniquerys = Array.from(
        new Set(
            data
                .filter(
                    (item) =>
                        item[context] &&
                        (item[context] as { name: string }).name
                )
                .map((item) => ({
                    id: (item[context] as { _id: string })._id,
                    name: (item[context] as { name: string }).name
                }))
                .map((item) => JSON.stringify(item)) // Convert objects to strings for Set comparison
        )
    ).map((item) => JSON.parse(item) as { id: string; name: string }); // Convert back to objects after Set
    return uniquerys;
}
