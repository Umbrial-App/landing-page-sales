import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Acordeon() {
    return (
        <div className='w-[950px] max-w-screen-xl mb-16 mt-16 mx-auto '>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Como posso começar a utilizar o sistema de agendamento para minha barbearia?</AccordionTrigger>
                    <AccordionContent>
                        Para começar a utilizar nosso sistema de agendamento, basta se cadastrar em nosso site e seguir as instruções para configurar sua barbearia e disponibilizar seus horários de atendimento.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>O sistema de agendamento é fácil de usar?</AccordionTrigger>
                    <AccordionContent>
                        Sim, nosso sistema foi projetado para ser intuitivo e fácil de usar, tanto para você quanto para seus clientes. Oferecemos
                        <Button
                            className='m-0 px-1'
                            variant={'link'}>
                            <strong>
                                <a href=""></a>
                                suporte técnico
                            </strong>
                        </Button>
                        para ajudá-lo em caso de dúvidas ou problemas.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Posso personalizar os horários de atendimento da minha barbearia?</AccordionTrigger>
                    <AccordionContent>
                        Sim, você pode personalizar os horários de atendimento de acordo com a disponibilidade dos seus barbeiros e as necessidades da sua barbearia.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>O sistema de agendamento permite que eu gerencie múltiplos barbeiros?</AccordionTrigger>
                    <AccordionContent>
                        Sim, nosso sistema permite que você gerencie múltiplos barbeiros e seus horários de atendimento em um único lugar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Há algum custo para utilizar o sistema de agendamento?</AccordionTrigger>
                    <AccordionContent>
                        Sim, há um custo mensal pelo uso do sistema, mas oferecemos planos flexíveis e acessíveis que se adequam às necessidades da sua barbearia.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Posso personalizar o sistema com o logo e informações da minha barbearia?</AccordionTrigger>
                    <AccordionContent>
                        Sim, você pode personalizar o sistema com o logo, cores e informações da sua barbearia para garantir uma experiência consistente para seus clientes.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>

    )
}