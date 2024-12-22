import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tabs from '@/Components/Tabs.jsx';
import { Head } from '@inertiajs/react';
import Encuesta from "@/Components/Encuesta.jsx";

export default function Dashboard({encuestas}) {
    const tabs = [
        {
            label: "Encuestas",
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Listado de Encuestas</h2>
                    {encuestas.length > 0 ? (
                        encuestas.map((encuesta) => (
                            <Encuesta key={encuesta.id} encuesta={encuesta}/>
                        ))
                    ) : (
                        <p>No hay encuestas disponibles.</p>
                    )}
                </div>
            ),
        },
        {
            label: "Rellenar encuesta",
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
