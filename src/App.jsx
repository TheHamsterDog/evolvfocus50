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
import Risk from './components/risk';
import Prose from './components/Prose';
import Limited from './components/limitedTime';
import Discount from './components/discount';
import Footer from './components/footer';
import Terms from './components/terms';
import Privacy from './components/privacy';
import ScrollToTop from "react-scroll-to-top";
import NotFound from './components/404';
import Disclaimer from './components/disclaimer';
import News from './components/asSeenOn';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
let Application = () => {
  return (<div className="home">
    <ScrollToTop smooth />

    <Header />
    <Discover />
    <News/>
    {/* <Quiz /> */}

    <Video />
    <Different />
    <Steps />
    <Numbers />
    <Learn />
    <Beneficiary />
    <Testimonials />
    <Deal />
    <More />
    <Special />
    <Prose />
    <Risk />
    <Limited />
    <Discount />

  </div>)
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Application} />
        <Route exact path='/disclaimer' component={Disclaimer} />
        <Route exact path='/terms-of-use' component={Terms} />
        <Route exact path='/privacy-policy' component={Privacy} />
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </BrowserRouter >

  );
}

export default App;
