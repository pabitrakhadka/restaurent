import server from '@/axois/server';
import createSignature from './validate/createSignature';
import Cors from 'cors';
import prisma from '@/db/db.config';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { total_amount, transaction_uuid } = req.body;
      console.log(total_amount, transaction_uuid);
      const product_code = 'EPAYTEST';
      const signature = createSignature(`${total_amount},${transaction_uuid},${product_code}`);
      console.log('signature: ', signature);

      const formData = {
        amount: '100',
        failure_url: 'http://localhost:3000/',
        product_delivery_charge: '0',
        product_service_charge: '0',
        signature: signature, // No need for template string here
        product_code: product_code,
        signed_field_names: 'total_amount,transaction_uuid,product_code',
        success_url: 'http://localhost:3000/check',
        tax_amount: '10',
        total_amount: '110',
        transaction_uuid: 'test',
      };
      console.log("data", formData);
      const response = await server.post("https://rc-epay.esewa.com.np/api/epay/main/v2/form", formData);
      if (response.status === 200) {
        console.log("Success");
        // Send a success response if needed
        res.status(200).json({ message: 'Success' });
      } else {
        console.log("Error");
        // Send an error response if needed
        res.status(500).json({ message: 'Error' });
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

