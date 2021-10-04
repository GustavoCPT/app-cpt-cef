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

                 

                   
<button type="button"  style={{ background: '#163484', color: 'white' }} className="btn " data-toggle="modal" data-target="#modalExemplo">
  Ajuda
</button>


                 
                </div>
              </div>
              <div className="ui segment " id="ui_data_ano_lancamentos">
                <div className="ui grid">
                  <div className="eight wide column">
                    <div className="ui medium form ">
                      <div className="inline field" style={{ marginBottom: 0 }}>

                        <input id="ano_lancamento" placeholder className="somenteNumeros limitaNumCaracteres4" type="text" size={4} />
                        <a className="ui  tag label   " style={{ background: '#163484', color: 'white' }} >ANO</a>
                      </div>
                    </div>
                  </div>
                  <div className="eight wide column ">
                    <div className="ui  block align-right">
                      <button className="ui positive icon button btnreceita p-2 ml-2">

                        RECEITAS
                      </button>
                      <button className="ui negative   icon button btndespesa p-2 ml-2">

                        DESPESAS
                      </button>
                      <button className="ui purple   icon button btninvestimento p-2 ml-2 ">

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



        <div className="content mt-3">
          <div className="container-fluid">

            <div className="card">
              <div className="card-header border-0">
                <GraphCef />

              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalExemplo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ajuda</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Texto em contrução.
                <p> </p>
                <p> Dicas de como usar o aplicativo.</p>
              </div>
              
            </div>
          </div>
        </div>



      </div>
    </div>

        





  );
}

export default Posting;