import PatternLogo from "./PatternLogo";

export default function CallToAct() {
    return (
        <div className="w-full ">
            <div className="bg-black relative">
                <div className="absolute w-full z-10 gap-3 flex-col h-full flex items-center justify-center">

                    <span className="text-white">Transforme sua Barbearia</span>
                    <strong>

                        <h1 className=" text-3xl  text-white z-10">Adote a Inovação e Ofereça Experiências Personalizadas!</h1>
                    </strong>
                    <button type="button" className="bg-[#FAC20F] z-10 px-6 py-1 text-white rounded hover:drop-shadow-sm hover:scale-125 shadow-2xl shadow-[#FAC20F] transition-all ">Contrate Agora</button>

                </div>
                <div className="flex opacity-40">

                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                </div>
                <div className="flex opacity-40">

                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                    <div>
                        <PatternLogo />
                        <PatternLogo />
                    </div>
                </div>
            </div>
        </div>
    )
}