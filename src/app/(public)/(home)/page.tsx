import { fetchProducts } from '../httpActions';
import { Wrapper } from './components';

const HomePage = async () => {
    const data = await fetchProducts();
    if (!data) {
        return <> Not Data Found</>;
    }
    return (
        <>
            <Wrapper data={data} />
        </>
    );
};

export default HomePage;
