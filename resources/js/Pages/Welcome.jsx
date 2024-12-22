import { Head, Link } from '@inertiajs/react';
import Login from "@/Pages/Auth/Login.jsx";

export default function Welcome() {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main>
                            <div className="">
                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10">
                                        <div className="pt-3 sm:pt-5 lg:pt-0 w-full">
                                            <h2 className="text-xl font-semibold text-black text-center">
                                                Bienvenid@
                                            </h2>
                                            <p className="mt-4 text-sm/relaxed text-center">
                                                Bienvenid@ al sistema de encuestas Accom, por favor ingresa tus credendiales para acceder.
                                            </p>
                                        </div>
                                </div>
                                <div className="mt-0.5 flex flex-col items-center gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10">
                                        <Login />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
