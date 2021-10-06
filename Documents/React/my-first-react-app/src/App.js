
import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/image1.jpg';
import img2 from './assets/img/image2.jpg';
import img3 from './assets/img/image3.jpg';
import img4 from './assets/img/image4.jpg';
import img5 from './assets/img/image5.jpg';
import img6 from './assets/img/image6.jpg';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <aside className="sidebar">Aside</aside>
      <main className="main">
        <section className="headliners">
        <h2 className="block-title">Today's Headlines</h2>
        <div className="block-content">
          <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" like="10.8k" dislike="1.4k"/>
          <Headliner title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS" like="10.8k" dislike="3.4k"/>
          <Headliner title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS" like="20.8k" dislike="1.1k"/>
          <Headliner title="Mother who left her baby" thumbnail={img4} label="ABC NEWS" like="0" dislike="20k"/>
          <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS" like="10.8k" dislike="1.4k"/>
          <Headliner title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS" like="10.8k" dislike="1.4k"/>
        </div>
        </section>
      </main>





    </div>
  );
}

export default App;
