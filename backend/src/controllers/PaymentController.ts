import type { Request, Response } from 'express';

// Mock function for Mercado Pago integration (will be replaced with SDK later)
const MercadoPago = {
    createPreference: async (data: any) => {
        console.log('Creating MP Preference:', data);
        return { id: 'mock_pref_id', init_point: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=mock' };
    }
};

export const PaymentController = {
    /**
     * Returns available payment methods based on country/currency.
     * Logic: "Chameleon" - Adapts to the market.
     */
    getPaymentConfig: async (req: Request, res: Response) => {
        const { country, currency } = req.query;

        // Default to BRL/Brazil if not specified
        const targetCountry = (country as string)?.toUpperCase() || 'BR';
        const targetCurrency = (currency as string)?.toUpperCase() || 'BRL';

        console.log(`Fetching payment config for: ${targetCountry} (${targetCurrency})`);

        let paymentMethods: any[] = [];

        if (targetCountry === 'BR' || targetCurrency === 'BRL') {
            // Brazil: Focus on PIX and Credit Card
            paymentMethods = [
                { id: 'PIX', name: 'Pix (Instantâneo)', icon: 'pix' },
                { id: 'CREDIT_CARD', name: 'Cartão de Crédito', icon: 'credit_card' }
            ];
        } else if (targetCountry === 'AR' || targetCurrency === 'ARS') {
            // Argentina: Focus on Mercado Pago QR and Cash (Efectivo)
            // PIX is hidden here.
            paymentMethods = [
                { id: 'MERCADO_PAGO_QR', name: 'Mercado Pago (QR/Wallet)', icon: 'qr_code' },
                { id: 'EFECTIVO', name: 'Efectivo (Al conductor)', icon: 'payments' }
            ];
        } else {
            // Fallback
            paymentMethods = [
                { id: 'CASH', name: 'Dinheiro', icon: 'payments' }
            ];
        }

        return res.json({
            country: targetCountry,
            currency: targetCurrency,
            methods: paymentMethods
        });
    },

    /**
     * Creates a payment preference in Mercado Pago.
     * Handles both BRL and ARS currencies.
     */
    createPreference: async (req: Request, res: Response) => {
        const { title, price, quantity, currency } = req.body;

        try {
            const preference = await MercadoPago.createPreference({
                items: [
                    {
                        title,
                        unit_price: Number(price),
                        quantity: Number(quantity),
                        currency_id: currency // 'BRL' or 'ARS'
                    }
                ],
                back_urls: {
                    success: `${process.env.API_URL}/payments/success`,
                    failure: `${process.env.API_URL}/payments/failure`,
                    pending: `${process.env.API_URL}/payments/pending`
                },
                auto_return: 'approved'
            });

            return res.json({ preferenceId: preference.id, initPoint: preference.init_point });
        } catch (error) {
            console.error('Error creating payment preference:', error);
            return res.status(500).json({ error: 'Failed to create payment preference' });
        }
    },

    /**
     * Webhook handler for Mercado Pago notifications.
     */
    handleWebhook: async (req: Request, res: Response) => {
        const { type, data } = req.body;

        console.log('Received Webhook:', type, data);

        if (type === 'payment') {
            // TODO: Verify payment status with Mercado Pago API using data.id
            console.log(`Processing payment ${data.id}...`);
        }

        return res.status(200).send('OK');
    }
};
