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
            const response = await api.post('/listar_dados_rd_cef.php', [user.serial]);
            //alert('response: '+ response.data.resultado);
            console.log('-------------------------------------');

            //console.log(response); //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
            //console.log(response.data); //{success: true, resultado: Array(1)}
            //console.log(response.data.resultado); // [{…}]

            

            var item = response.data.resultado;
            var item_2 = [];
            var ano_selecionado = '2021';
            var ano = {};

            setListar(item);

            console.log('-------dados------');

            item.forEach(element => {
                const valor = element.DESPESA_RECEITA;
                
                if(valor>0){
                    console.log(element);
                }
            });

            

                

                //const income = transactionsAmounts.filter(value => value = 0)
            
            //console.log(item[0]); //0: {tipo_conta: 'RECEITa', nome_conta: 'Juros recebidos', VALOR: '0', MES: '0', ANO: '2021'}

            //0: {tipo_conta: 'RECEITa', nome_conta: 'Juros recebidos', VALOR: '0', MES: '0', ANO: '2021'}
           /* const dados = listar.map(item => {
                console.log('-------dados------');
                console.log(item.tipo_conta)
                if(item.tipo_conta ==)
            }
                )*/
            

         //const dados2 = dados.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2)
      
           



        } catch (error) {
            alert('Banco inexistente!!!');
            setListar(null);
            return false;
        }

    }


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
                            {
                                listar.map((item) => {
                                    return (

                                        <tr>
                                            <td>
                                                <i className="fa fa-arrow-circle-up fa-lg m-2" style={{ color: '#163484' }} />
                                                <span className="">Receita Bruta</span>
                                            </td>
                                            
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>
                                    <i className="fa fa-arrow-circle-down fa-lg m-2" style={{ color: 'red' }} />
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
                            <tr class="table-success">
                                <td>

                                    <span className="m-3">Resultado</span>
                                    <i className="fa fa-arrow-right fa-lg m-2" style={{ color: 'green' }} />

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
                            <tr >

                                <td>
                                    <i className="fa fa-rocket fa-lg m-2" style={{ color: '#993399' }} />
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
                            <tr class="table-primary">
                                <td>
                                    <i className="  fa-lg m-2" style={{ color: 'red' }} />
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
                                    <i className="fa fa-percent fa-lg m-2" style={{ color: 'black' }} />
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


