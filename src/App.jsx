import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Discover from './components/discover';
import Video from './components/video';
import Quiz from './components/quiz';
import Different from './components/different';
import Steps from './components/steps';
import Learn from './components/learn';
import Numbers from './components/numbers';
import Beneficiary from './components/beneficiary';
import Testimonials from './components/testimonials';
import Deal from './components/whatYouGet';
import More from './components/more';
import Special from './components/SpecialBonuses';
function App() {
  return (
    <div className="home">
        <Header />
        <Discover />
        <Quiz/>
        <Video/>
        <Different/>
        <Steps />
        <Numbers/>
        <Learn />
        <Beneficiary/>
        <Testimonials/>
        <Deal/>
        <More />
        <Special/>
    </div>
  );
}

export default App;
