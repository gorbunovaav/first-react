
import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/image1.jpg';
import img2 from './assets/img/image2.jpg';
import img3 from './assets/img/image3.jpg';
import img4 from './assets/img/image4.jpg';
import img5 from './assets/img/image5.jpg';
import img6 from './assets/img/image6.jpg';
import Header from './components/header/Header';
import Channel from './components/channel/Channel';
import ChannelImg1 from './assets/img/channel-img1.png';
import ChannelImg2 from './assets/img/channel-img2.png';
import ChannelImg3 from './assets/img/channel-img3.png';
import ChannelImg4 from './assets/img/channel-img4.png';
import ChannelImg5 from './assets/img/channel-img5.png';
import ChannelImg6 from './assets/img/channel-img6.png';
import TitleWrapper from './components/titleWrapper/titleWrapper';
import News from './components/news/News';
import NewsImg1 from './assets/img/news-img1.jpg';
import NewsImg2 from './assets/img/news-img2.png';
import NewsImg3 from './assets/img/news-img3.png';

const chanImg1 = {
  width: '56px',
  height: '55px',
  marginBottom:'27px',
  marginTop:'36px',
}
const chanImg2 = {
  width: '78px',
  height: '31px',
  marginBottom:'39px',
  marginTop:'48px',
}
const chanImg3 = {
  width: '87px',
  height: '31px',
  marginBottom:'39px',
  marginTop:'48px',
}
const chanImg4 = {
  width: '87px',
  height: '51px',
  marginBottom:'29px',
  marginTop:'38px',
}
const chanImg5 = {
  width: '80px',
  height: '25px',
  marginBottom:'42px',
  marginTop:'51px',
}
const chanImg6 = {
  width: '128px',
  height: '33px',
  marginBottom:'38px',
  marginTop:'47px',
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <aside className="sidebar">Aside</aside>
      <main className="main">
        <section className="channels">
        <TitleWrapper title="Explore Channels"/>
        <div className="channelsWrapper">
        <Channel style={chanImg1} channelImg={ChannelImg1} text="FOX NEWS"/>
        <Channel style={chanImg2} channelImg={ChannelImg2} text="CW6 NEWS"/>
        <Channel style={chanImg3} channelImg={ChannelImg3} text="ABC NEWS"/>
        <Channel style={chanImg4} channelImg={ChannelImg4} text="AL JAXEERA"/>
        <Channel style={chanImg5} channelImg={ChannelImg5} text="BBC NEWS"/>
        <Channel style={chanImg6} channelImg={ChannelImg6} text="CNN NEWS"/>
        </div>
        </section>
        <section className="headliners">
        <TitleWrapper title="Today’s Headlines"/>
        <div className="block-content">
          <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" like="10.8k" dislike="1.4k"/>
          <Headliner title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS" like="10.8k" dislike="3.4k"/>
          <Headliner title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS" like="20.8k" dislike="1.1k"/>
          <Headliner title="Mother who left her baby" thumbnail={img4} label="ABC NEWS" like="0" dislike="20k"/>
          <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS" like="10.8k" dislike="1.4k"/>
          <Headliner title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS" like="10.8k" dislike="1.4k"/>
        </div>
        </section>
        <section className="news">
        <TitleWrapper title="Featured News"/>
        <div className="newsList">
        <News newsImg={NewsImg1} text="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS"/>
        <News newsImg={NewsImg2} text="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS"/>
        <News newsImg={NewsImg3} text="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS"/>
        </div>
        </section>
      </main>





    </div>
  );
}

export default App;
