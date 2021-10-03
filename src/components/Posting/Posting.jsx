import React from 'react';
//import ListDataCef from '../List/ListDataCef';
//import GraphCef from '../../components/Graph/GraphCef';
//import ListDataCefSummary from '../../components/List/ListDataCefSummary';


function Lancamentos() {
  return (

    <div>

      <div className="ui padded grid" id="controle-planilha">
        <div className="row">
          <div className="column">
            <div className="clearfix">
              <div className="ui small buttons icon compact align-left">
                <button id="btnLancamentos" className="ui blue right icon button">
                  <i className="table icon" />
                  ${'{'}Lancamentos{'}'}
                </button>
                <div className="ui  right floated dropdown compact blue icon button">
                  <i className="help circle icon" />
                  <span className="text">${'{'}Ajuda{'}'}</span>
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
                      <input id="mes_lancamento" placeholder className="somenteNumeros limitaNumCaracteres2" type="text" size={2} />
                      <a className="ui blue tag label">${'{'}MES{'}'}</a>
                      <input id="ano_lancamento" placeholder className="somenteNumeros limitaNumCaracteres4" type="text" size={4} />
                      <a className="ui blue tag label">${'{'}ANO{'}'}</a>
                    </div>
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui  block align-right">
                    <button id="btnAddReceita" className="ui positive ui labeled icon button btnreceita">
                      <i className="plus icon" />
                      ${'{'}RECEITAS{'}'}
                    </button>
                    <button id="btnAddDespesa" className="ui negative  ui labeled icon button btndespesa">
                      <i className="plus icon" />
                      ${'{'}DESPESAS{'}'}
                    </button>
                    <button id="btnAddInvestimento" className="ui purple  ui labeled icon button btninvestimento">
                      <i className="plus  icon" />
                      ${'{'}INVESTIMENTOS{'}'}
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
                  <h2 className="ui horizontal ">
                    
                  </h2>
                  <table id="tabela_lancamentos" name="tabela_lancamentos" className="ui  large celled structured table" />
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