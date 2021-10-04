import React from 'react';
import ListDataCef from '../List/ListDataCef';
import GraphCef from '../Graph/GraphCef';
import ListDataCefSummary from '../List/ListDataCefSummary';
import { NavLink } from 'react-router-dom'

function CardPosting() {
  return (

    <div className="content">
      <div className="container">
        {/*Small boxes (Stat box)*/}
        <div className="row ">
          <div className="col-lg-6 col-12 mt-3 p-3">
            {/*small box*/}
            <NavLink to="/posting" className="small-box-footer">
            <div className="small-box bg-primary ">
              <div className="inner">
                <h4> <strong>  Empresa de Calçados </strong> </h4>
                <p>Descrição</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              
              <a  className="small-box-footer ">Lançamentos <i className="fas fa-arrow-circle-right" /></a>
              
              </div>
              </NavLink>
            
          </div>
          {/*./col*/}
        
          {/*./col*/}
        </div>
      </div>
    </div>

  );
}

export default CardPosting;