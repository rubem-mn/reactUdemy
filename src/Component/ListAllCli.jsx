export default function ListAllCli(dadosCliente) {

    let {id, nome } = dadosCliente;

    if (!dadosCliente){
         return <div> Vazio</div>   
    }
    return (
        <h1>
           {id} 
           {nome} 
        </h1>
    )
}
