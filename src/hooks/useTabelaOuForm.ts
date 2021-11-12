import { useState } from "react";

export default function useTabelaOuForm(){
    const [visivel, setVisivel] =   useState<'tabela' | 'from'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('from')
    
    return{
        formularioVisivel: visivel ==='from',
        tabelaVisivel: visivel ==='tabela',
        exibirTabela,
        exibirFormulario

    }
}