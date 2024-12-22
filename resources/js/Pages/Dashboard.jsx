import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tabs from '@/Components/Tabs.jsx';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    const tabs = [
        {
            label: "Profile",
            content: (
                <div>
                    <h2 className="text-xl font-semibold">User Profile</h2>
                    <p>Name: John Doe</p>
                    <p>Email: john.doe@example.com</p>
                </div>
            ),
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Gestión encuestas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Tabs tabs={tabs} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
