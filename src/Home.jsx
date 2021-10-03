import React from 'react';
import HeaderCef from './components/HeaderCef/HeaderCef';
import Footer from './components/Footer/Footer';
import List from './components/List/List'


function Home() {
  return (
    <div className="wrapper">
      <HeaderCef />
      <div className="content-wrapper">
        <section class="content">
          <List />
        </section>
      </div>
      <Footer />
    </div>

  );
}

export default Home;