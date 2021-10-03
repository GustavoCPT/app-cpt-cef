import React from 'react';
import ListDataCef from '../List/ListDataCef';
import GraphCef from '../../components/Graph/GraphCef';
import ListDataCefSummary from '../List/ListDataCefSummary';


function Lancamentos() {
  return (

    <div>

      <div className="ui padded grid" id="controle-planilha">
        <div className="row">
          <div className="column">
            <div className="clearfix">
              <div className="ui small buttons icon compact align-left">
               
                <div className="ui  right floated dropdown compact blue icon button">
                  
                  <span className="text">Ajuda</span>
                  <div className="menu">
                    <div data-value="ajuda_title_plano_conta_alterar" className="item"><i className="checkmark box icon" />  ${'{'}moduloPlanoConta.ajuda_title_plano_conta_alterar{'}'}</div>
                    <div data-value="ajuda_title_lancamento_realizar" className="item"><i className="checkmark box icon" />  ${'{'}moduloPlanoConta.ajuda_title_lancamento_realizar{'}'}</div>
                    <div data-value="ajuda_title_gerar_relatorios" className="item"><i className="checkmark box icon" /> ${'{'}moduloPlanoConta.ajuda_title_gerar_relatorios{'}'} </div>
                    <div data-value="ajuda_title_outras_informacoes" className="item"><i className="checkmark box icon" /> ${'{'}moduloPlanoConta.ajuda_title_outras_informacoes{'}'} </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui segment" id="ui_data_ano_lancamentos">
              <div className="ui grid">
                <div className="eight wide column">
                  <div className="ui medium form">
                    <div className="inline field" style={{ marginBottom: 0 }}>
                     
                      <input id="ano_lancamento" placeholder className="somenteNumeros limitaNumCaracteres4" type="text" size={4} />
                      <a className="ui blue tag label">ANO</a>
                    </div>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui  block align-right">
                    <button  className="ui positive icon button btnreceita">
                      
                      RECEITAS
                    </button>
                    <button  className="ui negative   icon button btndespesa">
                      
                      DESPESAS
                    </button>
                    <button  className="ui purple   icon button btninvestimento">
                     
                      INVESTIMENTOS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui padded grid" id="ui_tabela_resumo">
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <div className="ui grid">
                <div className="sixteen wide column">
                  
                   <ListDataCefSummary />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui padded grid" id="ui_tabela_lancamentos">
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <div className="ui grid">
                <div className="sixteen wide column">
                  
                    <ListDataCef />
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="ui padded grid" id="ui_grafico">
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <div className="ui grid">
                <div className="sixteen wide column">
                  <h2 className="ui horizontal color-header-text">
                    
                  </h2>
                  <GraphCef />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>


  );
}

export default Lancamentos;