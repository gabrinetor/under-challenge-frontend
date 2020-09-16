import React from 'react';
import Menu from '../../components/Menu';
import Form from '../../components/PaymentForm';

const Payment = () => {
    return (
        <div>
            <Menu />
            <br /><br />
            <h1 className="text-center">Formulário de Pagamento</h1>
            <hr />
            <Form />
        </div>
    );
}

export default Payment;