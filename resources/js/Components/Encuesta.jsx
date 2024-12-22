export default function Encuesta({ encuesta }) {
    const { cliente_dni, estatus, producto, subproducto_luz, subproducto_gas, mantenimiento_luz, mantenimiento_gas } = encuesta;

    return (
        <div className="border border-gray-300 bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Encuesta #{encuesta.id}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                <p><span className="font-semibold">Cliente DNI:</span> {cliente_dni}</p>
                <p><span className="font-semibold">Estatus:</span> {estatus}</p>
            </div>
            <p><span className="font-semibold">Producto:</span> {producto}</p>

            {producto === "DUAL" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                    <div>
                        <p><span className="font-semibold">Subproducto Luz:</span> {subproducto_luz || 'N/A'}</p>
                        <p><span className="font-semibold">Subproducto Gas:</span> {subproducto_gas || 'N/A'}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">Mantenimiento Luz:</span> {mantenimiento_luz || 'N/A'}</p>
                        <p><span className="font-semibold">Mantenimiento Gas:</span> {mantenimiento_gas || 'N/A'}</p>
                    </div>
                </div>
            )}

            {producto === "LUZ" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                    <p><span className="font-semibold">Subproducto Luz:</span> {subproducto_luz || 'N/A'}</p>
                    <p><span className="font-semibold">Mantenimiento Luz:</span> {mantenimiento_luz || 'N/A'}</p>
                </div>
            )}

            {producto === "GAS" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                    <p><span className="font-semibold">Subproducto Gas:</span> {subproducto_gas || 'N/A'}</p>
                    <p><span className="font-semibold">Mantenimiento Gas:</span> {mantenimiento_gas || 'N/A'}</p>
                </div>
            )}
        </div>
    );
}
