import React from 'react';
import HeaderCef from '../../components/HeaderCef//HeaderCef';
import Footer from '../../components/Footer/Footer';
import CardPosting from '../../components/Posting/CardPosting'


function Home() {
  return (
    <div className="wrapper">
      <HeaderCef />
      <div className="content-wrapper">
        <section class="content">
        <CardPosting />
        </section>
      </div>
      <Footer />
    </div>

  );
}

export default Home;