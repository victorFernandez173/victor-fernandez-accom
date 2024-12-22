import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const FormularioEncuesta = () => {
    const [dni, setDni] = useState("");
    const [producto, setProducto] = useState("");
    const [subproducto, setSubproducto] = useState("");
    const [subproductoGas, setSubproductoGas] = useState("");
    const [mantenimiento, setMantenimiento] = useState("");
    const [mantenimientoGas, setMantenimientoGas] = useState("");
    const [estatus, setEstatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [subproductos, setSubproductos] = useState([]);
    const [subproductosGas, setSubproductosGas] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (producto === "LUZ") {
            setSubproductos(["TARIFA PLANA", "TARIFA POR USO"]);
        } else if (producto === "GAS") {
            setSubproductos(["PLENA", "TOTAL"]);
        } else if (producto === "DUAL") {
            setSubproductos(["TARIFA PLANA", "TARIFA POR USO"]);
            setSubproductosGas(["PLENA", "TOTAL"]);
        }
    }, [producto]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            await axios.post("/dashboard/encuestas/create", {
                user_id: 1,
                cliente_dni: dni,
                producto,
                subproducto: subproducto || null,
                subproducto_gas: producto === "DUAL" ? subproductoGas : null,
                mantenimiento,
                mantenimiento_gas: producto === "DUAL" ? mantenimientoGas : null,
                estatus,
            });

            Swal.fire({
                title: "¡Éxito!",
                text: "La encuesta ha sido guardada correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar",
            });

            setDni("");
            setProducto("");
            setSubproducto("");
            setSubproductoGas("");
            setMantenimiento("");
            setMantenimientoGas("");
            setEstatus("");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Hubo un problema al guardar la encuesta. Por favor, inténtalo nuevamente.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* DNI Field */}
                <div>
                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                        DNI/NIE del Cliente
                    </label>
                    <input
                        id="dni"
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.cliente_dni && <p className="text-red-500 text-sm">{errors.cliente_dni[0]}</p>}
                </div>
            </div>
            {/* Producto Field */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="producto" className="block text-sm font-medium text-gray-700">
                        Producto
                    </label>
                    <select
                        id="producto"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Selecciona Producto</option>
                        <option value="LUZ">LUZ</option>
                        <option value="GAS">GAS</option>
                        <option value="DUAL">DUAL</option>
                    </select>
                    {errors.producto && <p className="text-red-500 text-sm">{errors.producto[0]}</p>}
                </div>
            </div>
            {/* Subproductos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Subproducto Luz Field */}
                {(producto === "LUZ" || producto === "GAS" || producto === "DUAL") && (
                    <div>
                        <label htmlFor="subproducto" className="block text-sm font-medium text-gray-700">
                            Subproducto
                        </label>
                        <select
                            id="subproducto"
                            value={subproducto}
                            onChange={(e) => setSubproducto(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Selecciona Subproducto</option>
                            {subproductos.map((sub, index) => (
                                <option key={index} value={sub}>
                                    {sub}
                                </option>
                            ))}
                        </select>
                        {errors.subproducto_luz && <p className="text-red-500 text-sm">{errors.subproducto_luz[0]}</p>}
                    </div>
                )}
                {/* Subproducto Gas Field */}
                {(producto === "DUAL") && (
                    <div>
                        <label htmlFor="subproductoGas" className="block text-sm font-medium text-gray-700">
                            Subproducto Gas
                        </label>
                        <select
                            id="subproductoGas"
                            value={subproductoGas}
                            onChange={(e) => setSubproductoGas(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Selecciona Subproducto Gas</option>
                            {subproductosGas.map((sub, index) => (
                                <option key={index} value={sub}>
                                    {sub}
                                </option>
                            ))}
                        </select>
                        {errors.subproducto_gas && <p className="text-red-500 text-sm">{errors.subproducto_gas[0]}</p>}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Mantenimiento Luz Field */}
                {(producto === "LUZ" || producto === "GAS" || producto === "DUAL") && (
                    <div>
                        <label htmlFor="mantenimiento" className="block text-sm font-medium text-gray-700">
                            Mantenimiento
                        </label>
                        <select
                            id="mantenimiento"
                            value={mantenimiento}
                            onChange={(e) => setMantenimiento(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Selecciona Mantenimiento</option>
                            <option value="SI">SI</option>
                            <option value="NO">NO</option>
                        </select>
                        {errors.mantenimiento && (
                            <p className="text-red-500 text-sm">{errors.mantenimiento[0]}</p>
                        )}
                    </div>
                )}
                {/* Mantenimiento Gas Field */}
                {(producto === "DUAL") && (
                    <div>
                        <label htmlFor="mantenimientoGas" className="block text-sm font-medium text-gray-700">
                            Mantenimiento Gas
                        </label>
                        <select
                            id="mantenimientoGas"
                            value={mantenimientoGas}
                            onChange={(e) => setMantenimientoGas(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Selecciona Mantenimiento Gas</option>
                            <option value="SI">SI</option>
                            <option value="NO">NO</option>
                        </select>
                        {errors.mantenimiento_gas && (
                            <p className="text-red-500 text-sm">{errors.mantenimiento_gas[0]}</p>
                        )}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="estatus" className="block text-sm font-medium text-gray-700">
                        Estado
                    </label>
                    <select
                        id="estatus"
                        value={estatus}
                        onChange={(e) => setEstatus(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Selecciona Estado</option>
                        <option value="VENDIDO">VENDIDO</option>
                        <option value="EN PROCESO">EN PROCESO</option>
                        <option value="NO VENDIDO">NO VENDIDO</option>
                        <option value="NO VALIDO">NO VALIDO</option>
                    </select>
                    {errors.estatus && <p className="text-red-500 text-sm">{errors.estatus[0]}</p>}
                </div>
            </div>





            <div className="flex justify-end">
                <PrimaryButton type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar Encuesta"}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default FormularioEncuesta;
