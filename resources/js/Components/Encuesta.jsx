import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";
import {router, usePage} from "@inertiajs/react";

export default function Encuesta({ encuesta }) {
    const { id, cliente_dni, estatus, producto, subproducto, subproducto_gas, mantenimiento_luz, mantenimiento_gas } = encuesta;
    const [loading, setLoading] = useState(false);
    const { auth } = usePage().props;

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: '¿Estás segur@?',
            text: 'No podrás recuperar la información!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: 'Cancelar',
        });

        if (result.isConfirmed) {
            setLoading(true);
            try {
                router.delete(`/dashboard/encuestas/${id}`)

                await Swal.fire('Borrado!', 'La encuesta ha sido borrada.', 'success');
            } catch (error) {
                await Swal.fire('Error!', 'Hubo un problema al borrar la encuesta.', 'error');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="border border-gray-300 bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Encuesta #{id}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <p><span className="font-semibold">Cliente DNI:</span> {cliente_dni}</p>
                <p><span className="font-semibold">Estatus:</span> {estatus}</p>
            </div>
            <p className="mb-4"><span className="font-semibold">Producto:</span> {producto}</p>

            {producto === "DUAL" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                    <div>
                        <p><span className="font-semibold">Subproducto:</span> {subproducto || 'N/A'}</p>
                        <p><span className="font-semibold">Subproducto Gas:</span> {subproducto_gas || 'N/A'}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">Mantenimiento Luz:</span> {mantenimiento_luz || 'N/A'}</p>
                        <p><span className="font-semibold">Mantenimiento Gas:</span> {mantenimiento_gas || 'N/A'}</p>
                    </div>
                </div>
            )}

            {producto === "LUZ" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                    <p><span className="font-semibold">Subproducto:</span> {subproducto || 'N/A'}</p>
                    <p><span className="font-semibold">Mantenimiento Luz:</span> {mantenimiento_luz || 'N/A'}</p>
                </div>
            )}

            {producto === "GAS" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                    <p><span className="font-semibold">Subproducto Gas:</span> {subproducto_gas || 'N/A'}</p>
                    <p><span className="font-semibold">Mantenimiento Gas:</span> {mantenimiento_gas || 'N/A'}</p>
                </div>
            )}

            {auth.is_admin && (
                <div className="mt-4 flex justify-end">
                    <PrimaryButton onClick={handleDelete} disabled={loading}>
                        {loading ? 'Borrando...' : 'Borrar Encuesta'}
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
}
