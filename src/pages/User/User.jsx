import React from 'react';
import Footer from '../../components/Footer/Footer';
import UserList from '../../components/List/UserList';
import HeaderCef from '../../components/HeaderCef/HeaderCef';


function User() {

  return (
    <div className="wrapper">
      <HeaderCef />
      <div className="content-wrapper">
        <section class="content">
          <UserList />
        </section>
      </div>
      <Footer />
    </div>

  );
}

export default User;