import { FallBackData } from '@/components/core';
import { fetchProducts } from '../httpActions';
import { Wrapper } from './components';

const HomePage = async () => {
    const data = await fetchProducts();
    if (!data) {
        return <FallBackData />;
    }
    return (
        <>
            <Wrapper data={data} />
        </>
    );
};

export default HomePage;
