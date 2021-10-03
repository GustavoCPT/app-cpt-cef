import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/auth';
import api from '../../services/api';

export default function ListDataCef() {

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

            var item = response.data.resultado;
            var item_2 = [];
            var ano_selecionado = '2021';
            var ano = {};

            for (var i = 0, tam = item.length; i < tam; i++) {
                if (item[i].ANO != ano_selecionado) {
                    continue;
                }
                if (!ano[item[i].tipo_conta]) {
                    ano[item[i].tipo_conta] = {};
                }
                if (!ano[item[i].tipo_conta][item[i].nome_conta]) {
                    ano[item[i].tipo_conta][item[i].nome_conta] = {};
                        ano[item[i].tipo_conta][item[i].nome_conta].tipo_conta = item[i].tipo_conta;
                        ano[item[i].tipo_conta][item[i].nome_conta].nome_conta = item[i].nome_conta;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_1 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_2 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_3 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_4 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_5 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_6 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_7 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_8 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_9 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_10 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_11 = 0;
                        ano[item[i].tipo_conta][item[i].nome_conta].mes_12 = 0;
                }
                ano[item[i].tipo_conta][item[i].nome_conta].mes_1 += (item[i].MES == '1' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_2 += (item[i].MES == '2' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_3 += (item[i].MES == '3' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_4 += (item[i].MES == '4' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_5 += (item[i].MES == '5' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_6 += (item[i].MES == '6' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_7 += (item[i].MES == '7' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_8 += (item[i].MES == '8' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_9 += (item[i].MES == '9' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_10 += (item[i].MES == '10' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_11 += (item[i].MES == '11' ? Number(item[i].VALOR) : 0);
                ano[item[i].tipo_conta][item[i].nome_conta].mes_12 += (item[i].MES == '12' ? Number(item[i].VALOR) : 0);

            }
            console.log('----------ano-------\n' + ano);
            var aux_obj = {};
            for (var t = 0; t < Object.keys(ano).length; t++) {
                aux_obj = ano[Object.keys(ano)[t]];
                for (var k = 0; k < Object.keys(aux_obj).length; k++) {
                    //item_2.push(  ano[Object.keys(aux_obj)[k]][Object.keys(ano[Object.keys(ano)[k]])[0]]   )
                    item_2.push(  aux_obj[Object.keys(aux_obj)[k]] );
                }
            }

            setListar(item_2);

            //console.log(listar); //[{…}]

        } catch (error) {
            console.log('Banco inexistente!!!');
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

            
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Lançamentos</h3>

                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body table-responsive p-0">
                                        <table id="example1" className="table table-striped">
                                            <thead>
                                                <tr style={{ color: 'black',  }}>
                                                    <th style={{ width: 100 }}>TIPO DA CONTA</th>
                                                    <th style={{ width: 100 }}>Conta</th>

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
                                                            <tr style={{ color: '#212529'}}>
                                                                <td >{item.tipo_conta}</td>
                                                                <td >{item.nome_conta}</td>
                                                                <td >{item.mes_1.toFixed(2)}</td>
                                                                <td >{item.mes_2.toFixed(2)}</td>
                                                                <td >{item.mes_3.toFixed(2)}</td>
                                                                <td >{item.mes_4.toFixed(2)}</td>
                                                                <td >{item.mes_5.toFixed(2)}</td>
                                                                <td >{item.mes_6.toFixed(2)}</td>
                                                                <td >{item.mes_7.toFixed(2)}</td>
                                                                <td >{item.mes_8.toFixed(2)}</td>
                                                                <td >{item.mes_9.toFixed(2)}</td>
                                                                <td >{item.mes_10.toFixed(2)}</td>
                                                                <td >{item.mes_11.toFixed(2)}</td>
                                                                <td >{item.mes_12.toFixed(2)}</td>
                                                            </tr>
                                                        )
                                                    } )
                                                }

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Conta</th>
                                                    <th>Jan</th>
                                                    <th>Fev</th>
                                                    <th>Mar</th>
                                                    <th>Abr</th>
                                                    <th>Mai</th>
                                                    <th>Jun</th>
                                                    <th>jul</th>
                                                    <th>Ago</th>
                                                    <th>Set</th>
                                                    <th>Out</th>
                                                    <th>Nov</th>
                                                    <th>Dez</th>
                                                </tr>
                                            </tfoot>

                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            
                    
    )

}


