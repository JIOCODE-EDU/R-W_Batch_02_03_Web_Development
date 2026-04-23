import { CreditCard } from '@/components/shared-assets/credit-card/credit-card';
import { Navbar } from '@/components/base/navbar/Navbar';

export const HomeScreen = () => {

    return (
        <>
            <Navbar />
            <CreditCard type="gray-light" />
        </>
    );
};
