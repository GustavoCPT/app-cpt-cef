import React from 'react';
import Footer from '../../components/Footer/Footer';
import UserList from '../../components/List/UserList';
import HeaderCef from '../../components/HeaderCef/HeaderCef';


function User() {

  return (
    <div class="wrapper">
      
      <HeaderCef />

      <div >
        <UserList />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default User;