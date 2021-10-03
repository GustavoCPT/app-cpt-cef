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
          <div className="row p-5 ml-5">
            <div className="col-lg-6 col-6">
              {/*small box*/}
              <div className="small-box bg-primary ml-5">
                <div className="inner">
                  <h3>Lançamento 1</h3>
                  <p>Descrição</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                 <NavLink to="/posting" className="small-box-footer">Lançamento 1 <i className="fas fa-arrow-circle-right" /></NavLink>
                
              </div>
            </div>
            {/*./col*/}
            <div className="col-lg-6 col-6">
              {/*small box*/}
              <div className="small-box disabled mr-5">
                <div className="inner">
                  <h3>Lançamento 2 - em contrução</h3>
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