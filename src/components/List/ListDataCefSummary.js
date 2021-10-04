import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/auth';
import api from '../../services/api';

export default function ListDataCefSummary() {

    let itemsToRender = [];

    const [listar, setListar] = useState([]);
    const [nome, setNome] = useState('');


    const { user } = useContext(AuthContext);



    useEffect(() => {


        ListarDados();



    }, []);

    async function ListarDados() {


        try {
            //alert('serial: '+ user.serial);
            //const response = await api.get('http://localhost/apiModelo/apireact/listar_clientes_react.php')
            // const response = await api.post('/listar_dados_cef.php', [user.serial]);
            const response = await api.post('/listar_dados_cef.php', [user.serial]);
            //alert('response: '+ response.data.resultado);

            console.log('-------------------------------------');
            //setNome(response.data.resultado);
            console.log(response); //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
            console.log(response.data); //{success: true, resultado: Array(1)}
            console.log(response.data.resultado); // [{…}]
            //console.log(response.data.resultado[0]); // {id: "1", nome: "leonardo", email: "leonardosolar@yahoo.com.br", senha: "123"}
            //console.log(nome); //[{…}]
            // console.log(listar[0]); // {id: "1", nome: "leonardo", email: "leonardosolar@yahoo.com.br", senha: "123"}
            //console.log(listar[0].nome); //leonardo



            setListar(response.data.resultado);

            console.log(listar); //[{…}]

        } catch (error) {
            alert('Banco inexistente!!!');
            setListar(null);
            return false;
        }

    }
    /*
            
            const dados = '';
            for (dados in itemsToRender) {
               console.log(dados)
            };
            console.log(dados);
 
   */





    //name[0].nome
    //console.log(listar.response);


    //{listar.map(item => <li>{item.nome}</li>)}



    return (
        <div>

            

                {/* Content Header (Page header) */}


                


                                <div className="card">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">Demonstrativo de Resultado</h3>
                                        
                                    </div>
                                    <div className="card-body table-responsive p-0" >
                                        <table className="table table-head-fixed table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Receita</th>
                                                    <th>Jan</th>
                                                    <th>Fev</th>
                                                    <th>Mar</th>
                                                    <th>Abr</th>
                                                    <th>Mai</th>
                                                    <th>Jun</th>
                                                    <th>jul</th>
                                                    <th>ago</th>
                                                    <th>Set</th>
                                                    <th>Out</th>
                                                    <th>Nov</th>
                                                    <th>Dez</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                    <i className="fa fa-arrow-circle-up fa-lg m-2" style={{ color: '#163484' }} />
                                                    <span className="">Receita Bruta</span>
                                                    </td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <i className="fa fa-arrow-circle-down fa-lg m-2" style={{ color: 'red' }}/>
                                                    <span className="">Total de Despesas</span>
                                                    </td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    
                                                    <span className="m-3">Resultado</span>
                                                    <i className="fa fa-arrow-right fa-lg m-2" style={{ color: 'green' }}/>
  
                                                    </td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                    <i className="fa fa-rocket fa-lg m-2" style={{ color: '#993399' }}/>
                                                    <span className="">Total de Investimentos</span>
                                                       
                                                    </td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    <i className="  fa-lg m-2" style={{ color: 'red' }}/>
                                                    <span className="">Resultados Acumulados</span>
                                                    </td>
                                    
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    <i className="fa fa-percent fa-lg m-2" style={{ color: 'black' }}/>
                                                    <span className="">Lucratividade</span>
                                                    </td>
                                                    
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                    <td>$100.000</td>
                                                    <td>$200.000</td>
                                                    <td>$200.000</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


        </div>

    )

}


