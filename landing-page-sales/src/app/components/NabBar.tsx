import Logo from "./Logo";

export default function NavBar() {
    return (
        <div>
            <div className="fixed z-10 w-full bg-white flex flex-col items-center justify-center">
                <div className="w-full h-12 flex items-center justify-center gap-4 bg-[#FAC20F]">
                    <strong>
                        Revolucione Sua Barbearia com 30 Dias Grátis do Nosso Sistema de Experiência Personalizada!
                    </strong>
                    <button type="button" className="bg-slate-950 px-6 py-1 text-white rounded hover:drop-shadow-sm hover:bg-slate-700 transition-all ">Contrate Agora</button>
                </div>
                <div className="flex w-[1024px] justify-around items-center align-middle content-center">
                    <Logo
                        altura="70"
                        tamanho="120"
                        cor="#000" />
                    <nav className="flex gap-5 transition-all py-2 ">
                        <p
                            className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all"
                        >Produto</p>
                        <p
                            className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all"
                        >Solução</p>
                        <p
                            className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all"
                        >Sobre</p>
                        <p
                            className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all"
                        >Preços</p>
                    </nav>
                    <button type="button" className="bg-[#FAC20F] px-6 py-1 text-white rounded hover:drop-shadow-sm hover:scale-125 shadow-2xl shadow-[#FAC20F] transition-all ">Contrate Agora</button>
                </div>


            </div>
            {/* <div className="w-full h-36 z-10 bg-white">
                <nav className="bg-[#FAC20F] fixed z-10 w-full gap-4 h-12 flex items-center justify-center">
                </nav>
            </div> */}
        </div>
    )
}