import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tabs from '@/Components/Tabs.jsx';
import { Head } from '@inertiajs/react';
import Encuesta from "@/Components/Encuesta.jsx";
import FormularioEncuesta from "@/Components/FormularioEncuesta.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Dashboard({encuestas}) {
    const [listadoEncuestas, setListadoEncuestas] = useState(encuestas);
    const [nuevaEncuesta, setNuevaEncuesta] = useState(null);
    const handleNewEncuesta = (newEncuesta) => {
        setNuevaEncuesta(newEncuesta);
    };

    useEffect(() => { try {
            axios.post("/dashboard/encuestas/fetch-all")
                .then((response) => {
                    setListadoEncuestas(response.data);
                })
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema desconocido, recarga la página si es necesario.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    }, [nuevaEncuesta]);

    const tabs = [
        {
            label: "Encuestas",
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Listado de Encuestas</h2>
                    {listadoEncuestas.length > 0 ? (
                        listadoEncuestas.map((encuesta) => (
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
                    <h2 className="text-xl font-semibold">Rellenar encuesta</h2>
                    <FormularioEncuesta onNewEncuesta={handleNewEncuesta} />
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
