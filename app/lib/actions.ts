'use server';
import { z } from 'zod';

export async function createInvoice(formData: FormData) {
	const rawFormData = Object.fromEntries(formData.entries());
	// const rawFormData = {
	// 	customerId: formData.get('customerId'),
	// 	amount: formData.get('amount'),
	// 	status: formData.get('status'),
	// };
	// Test it out:
	console.log(rawFormData);
	console.log(typeof rawFormData.amount);
}
