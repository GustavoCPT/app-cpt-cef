import React from 'react';
import Footer from '../../components/Footer/Footer';
import Posting from '../../components/Posting/Posting';
import HeaderCef from '../../components/HeaderCef/HeaderCef';

function UserPosting() {


  return (
    <div class="wrapper">

    <HeaderCef />
    <div className="content-wrapper">
    <Posting />
    </div>
    <Footer />
    </div>
  );
}

export default UserPosting;