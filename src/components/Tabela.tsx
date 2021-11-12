import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente) => void
    clienteExcluido?: (cliente:Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes =props.clienteExcluido || props.clienteSelecionado

    function RenderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ?  <th className=" p-4">Ações</th>: false}
            </tr>
        )
    }

    function RenderizarDados(){
        return props.clientes?.map((cliente,i)=>{
            return(
                <tr key={cliente.id}
                        className={`${i % 2 === 0 ? `bg-purple-200` : `bg-purple-100`}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? RenderizarAcoes(cliente): false}
                </tr>
            )
        })
    }

    function RenderizarAcoes(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center p-2 m-1
                    text-green-600 rounded-full hover:bg-purple-50`}>
                    {IconeEdicao}
                </button>
                ): false}

                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center p-2 m-1
                        text-red-500 rounded-full hover:bg-purple-50`}>
                    {IconeLixo}
                </button>
                ): false}
            </td>
        )
    }

    return(
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {RenderizarCabecalho()}
            </thead>
            <tbody>
                {RenderizarDados()}
            </tbody>
        </table>
    )
}