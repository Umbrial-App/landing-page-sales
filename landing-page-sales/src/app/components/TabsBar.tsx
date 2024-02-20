import Image from "next/image"
import PatternLogo from "./PatternLogo"

export default function TabsBar() {
    return (
        <div>
            <div className="flex h-[420px] justify-center gap-6">
                <div className="w-full justify-evenly flex flex-col rounded-2xl p-3 shadow-2xl shadow-[#FAC20F] bg-[#FAC20F]">
                    <strong>
                        <h1 className="text-3xl">Atendimento Personalizado</h1>
                    </strong>
                    <p className="text-xs text-justify">
                        Imagine cumprimentar seu cliente pelo nome, saber a data do seu aniversário e oferecer um serviço especial para celebrar a ocasião. Com dados detalhados, o nosso sistema permite que você crie conexões mais profundas, tornando cada visita única e memorável.
                    </p>
                    <div className="bg-black rounded-xl shadow-md ">
                        <PatternLogo />
                    </div>
                </div>
                <div className="w-full justify-evenly flex flex-col p-3 bg-black rounded-2xl">
                    <strong>
                        <h1 className="text-3xl text-[#FAC20F]">
                            Conhecimento Profundo do Cliente
                        </h1>
                    </strong>
                    <p className="text-xs text-[#FAC20F] text-justify">
                        Saber a idade do cliente, seu histórico de cortes e até mesmo suas preferências de bebida (como a quantidade de Coca-Colas consumidas) não apenas aprimora o atendimento, mas também demonstra um cuidado genuíno. Isso cria uma fidelidade do cliente, pois se sentem valorizados e compreendidos.
                    </p>
                    <div>

                    </div>
                    <PatternLogo />
                </div>
                <div className="w-full justify-evenly flex flex-col p-3 bg-black rounded-2xl">
                    <strong>
                        <h1 className="text-3xl text-[#FAC20F]">
                            Metrificação Eficiente                        </h1>
                    </strong>
                    <p className="text-xs text-[#FAC20F] text-justify">
                        Ao coletar e analisar dados de consumo e comportamento, nosso sistema oferece uma visão holística do desempenho da sua barbearia. Saiba quais serviços são mais populares, quais produtos têm maior demanda e ajuste estratégias para otimizar cada setor, garantindo eficiência operacional.
                    </p>
                    <div>

                    </div>
                    <PatternLogo />
                </div>
            </div>
        </div>
    )
}