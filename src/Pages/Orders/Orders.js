
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Order from './Order';

const Orders = () => {
    const { orderId } = useParams();



    return (
        <>
            <Navigation />
            <Order id={orderId}></Order>
            <Footer />

        </>
    );
};

export default Orders;