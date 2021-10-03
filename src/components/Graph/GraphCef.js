//https://dev.to/hjdesigner/criando-graficos-com-o-react-google-charts-4mm5
//https://react-google-charts.com/
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/auth';
import api from '../../services/api';
import { Chart } from "react-google-charts";

export default function GraphCef() {

    let itemsToRender = [];

    const [listar, setListar] = useState([]);
    const [nome, setNome] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        ListarDados();
    }, []);

    async function ListarDados() {


        try {

            const response = await api.post('/listar_dados_cef.php', [user.serial]);


            console.log('-------------------------------------');
            //setNome(response.data.resultado);
            console.log(response); //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
            console.log(response.data); //{success: true, resultado: Array(1)}
            console.log(response.data.resultado); // [{…}]

            setListar(response.data.resultado);

        } catch (error) {
            alert('Banco inexistente!!!');
            setListar(null);
            return false;
        }

    }

    /*criar 2 states para controlar as informações do 
    gráfico: um vai ser para os options e o outro para o data
    No options vamos adicionar o titulo e no data os valores do gráfico:*/
    const [optionsBar, setOptionsBar] = useState({
        title: 'Gráfico de Barras',
        subtitle: 'Gráfico Anual',
    });
    /*
    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ]);*/
    const [dataBar, setDataBar] = useState([
        ['Meses', 'Receita1', 'Despesa', 'Lucro'],
        ['Jan', 1000, 400, 200],
        ['Fev', 1170, 460, 250],
        ['Mar', 660, 1120, 300],
        ['Abri', 1030, 540, 350],
        ['Maio', 660, 1120, 300],
        ['Jun', 1030, 540, 350],
        ['Ago', 1000, 400, 200],
        ['Set', 1170, 460, 250],
        ['Out', 660, 1120, 300],
        ['Nov', 1030, 540, 350],
        ['Dez', 660, 1120, 300],

    ])

    return (


        <div style={{ display: "flex", alignItems: 'center' }}>


            <Chart
                width={'100%'}
                height={'500px'}
                chartType="Bar"
                
                loader={<div>Carregado Chart</div>}
                data={dataBar}
                options={{
                    // Material design options
                    chart: {
                        title: 'Gráfico do DRE',
                        subtitle: 'Análise anual',
                    },
                    
                    
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>


    )

}


