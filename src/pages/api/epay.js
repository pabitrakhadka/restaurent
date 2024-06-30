import createSignature from "./validate/createSignature";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { total_amount, transaction_uuid, product_code } = req.body;

            const signature = createSignature(`${total_amount},${transaction_uuid},${product_code}`);
            console.log('signature: ', signature);

            const formData = {
                amount: total_amount,
                failure_url: 'http://localhost:3000/',
                product_delivery_charge: '0',
                product_service_charge: '0',
                signature: signature, // No need for template string here
                product_code: product_code,
                signed_field_names: 'total_amount,transaction_uuid,product_code',
                success_url: 'http://localhost:3000/Test',
                tax_amount: '0',
                total_amount: total_amount,
                transaction_uuid: transaction_uuid,
            };
            console.log("Form data=", formData);
            const response = await fetch('https://rc-epay.esewa.com.np/api/epay/main/v2/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            // Handle the response status
            if (response.ok) {
                res.status(response.status).json(data);
            } else {
                res.status(response.status).json({ error: data });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data from eSewa API' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}