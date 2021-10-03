import React from 'react';
import ListDataCef from '../List/ListDataCef';
import GraphCef from '../../components/Graph/GraphCef';
import ListDataCefSummary from '../List/ListDataCefSummary';


function Posting() {
  return (

    <div className="content  ">
      <div className="container-fluid ">

        <div className="ui padded grid " id="controle-planilha">
          <div className="row pl-3">
            <div className="column">
              <div className="clearfix">
                <div className="ui small buttons icon compact align-left" >

                  <div className="ui  right floated dropdown compact blue icon button" style={{ background: '#163484', color: 'white' }}>

                    <span className="text" >Ajuda</span>
                    
                  </div>
                </div>
              </div>
              <div className="ui segment " id="ui_data_ano_lancamentos">
                <div className="ui grid">
                  <div className="eight wide column">
                    <div className="ui medium form ">
                      <div className="inline field" style={{ marginBottom: 0 }}>

                        <input id="ano_lancamento" placeholder className="somenteNumeros limitaNumCaracteres4"  type="text" size={4} />
                        <a className="ui  tag label" style={{ background: '#163484', color: 'white' }} >ANO</a>
                      </div>
                    </div>
                  </div>
                  <div className="eight wide column">
                    <div className="ui  block align-right">
                      <button className="ui positive icon button btnreceita p-2 ">

                        RECEITAS
                      </button>
                      <button className="ui negative   icon button btndespesa p-2 ">

                        DESPESAS
                      </button>
                      <button className="ui purple   icon button btninvestimento p-2 ">

                        INVESTIMENTOS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="content mt-3">
          <div className="container-fluid">
            <ListDataCefSummary />

          </div>
        </div>


        <div className="content mt-3">
          <div className="container-fluid">
            <ListDataCef />

          </div>
        </div>




        <div className="ui padded grid" id="ui_grafico">
          <div className="row pl-3">
            <div className="column">
              <div className="ui segment">
                <div className="ui grid">
                  <div className="sixteen wide column">
                   
                    <GraphCef />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>


  );
}

export default Posting;