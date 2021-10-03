import React from 'react';
import ListDataCef from '../List/ListDataCef';
import GraphCef from '../Graph/GraphCef';
import ListDataCefSummary from '../List/ListDataCefSummary';
import { NavLink } from 'react-router-dom'

function CardPosting() {
  return (

    <div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/*Small boxes (Stat box)*/}
          <div className="row mt-3 p-3">
            <div className="col-lg-6 col-12">
              {/*small box*/}
              <div className="small-box bg-primary ">
                <div className="inner">
                  <h4> <strong>  Empresa de Calçados </strong> </h4>
                  <p>Descrição</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                 <NavLink to="/posting" className="small-box-footer">Lançamento 1 <i className="fas fa-arrow-circle-right" /></NavLink>
                
              </div>
            </div>
            {/*./col*/}
            <div className="col-lg-6 col-12">
              {/*small box*/}
              <div className="small-box disabled ">
                <div className="inner">
                  <h5>Nome do lançamento - em contrução </h5>
                  <p>Descrição</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="#" className="small-box-footer ">Lançamentos <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/*./col*/}
          </div>
        </div>
        <section>
        </section></section>


    </div >






  );
}

export default CardPosting;