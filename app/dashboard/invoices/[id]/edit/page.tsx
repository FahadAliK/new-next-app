import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

interface EditInvoicePageProps {
	params: Promise<{ id: string }>;
}

export default async function Page(props: EditInvoicePageProps) {
	const { id } = await props.params;
	const [customers, invoice] = await Promise.all([
		fetchCustomers(),
		fetchInvoiceById(id),
	]);
	if (!invoice) {
		notFound();
	}
	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: 'Invoices', href: '/dashboard/invoices' },
					{
						label: 'Edit Invoice',
						href: `/dashboard/invoices/${id}/edit`,
						active: true,
					},
				]}
			/>
			<Form invoice={invoice} customers={customers} />
		</main>
	);
}
