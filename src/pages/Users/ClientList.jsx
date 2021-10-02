import React from 'react';
import MenuLT from '../../components/Menu/MenuLT';
import Footer from '../../components/Footer/Footer';
import ListClient from '../../components/List/ListClient';

function ClientList() {


  return (
    <div>
      
      <MenuLT />

      <div >
        <ListClient />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ClientList;