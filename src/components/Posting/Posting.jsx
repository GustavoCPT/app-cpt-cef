import React from 'react';
import ListDataCef from '../List/ListDataCef';
import GraphCef from '../../components/Graph/GraphCef';
import ListDataCefSummary from '../List/ListDataCefSummary';


function Posting() {
  return (

    <div className="content  ">
      <div className="container-fluid ">

        <div className="row">
          <div className="col p-2">
            <button type="button" style={{ background: '#163484', color: 'white' }} className="btn btn-sm" data-toggle="modal" data-target="#modalExemplo">
              Ajuda
            </button>
          </div>
          <div className="col">

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header border-0">
                <div className="row">
                  <div className="col-4">

                    <div>
                      <form className="form-inline">
                        <div className="form-group  ">
    
                          <input type="text"  className="form-control col-xs-2" style={{width:80 }} />
                          <a class="btn btn-primary  btn-sm float-right mt-1 ml-2"  > <strong>Ano</strong></a>
                        </div>
                      </form>

                    </div>


                  </div>


                  <div className="col-8  ">

                    <a class="btn  btn-sm float-right ml-1 mb-1" style={{ background: '#993399', color: 'white' }}>Investimentos</a>
                    <a class="btn  btn-sm float-right ml-1 mb-1" style={{ background: 'red', color: 'white' }}>Depesas</a>
                    <a class="btn  btn-sm float-right ml-1 mb-1" style={{ background: '#163484', color: 'white' }} >Receitas</a>

                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>


        <ListDataCefSummary />



        <ListDataCef />




        <div className="card">
          <div className="card-header border-0">
            <GraphCef />

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