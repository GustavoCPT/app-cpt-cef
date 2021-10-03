import React from 'react';
import HeaderCef from '../../components/HeaderCef//HeaderCef';
import Footer from '../../components/Footer/Footer';
import CardPosting from '../../components/Posting/CardPosting'


function Home() {
  return (
   
      <div className="wrapper">
        <HeaderCef />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
        <CardPosting />
      </div>
      <Footer />
    </div>

  );
}

export default Home;