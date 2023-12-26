import Navbar from '../components/nav-bar/Navbar';
import CustomFooter from '../components/footer/CustomFooter';
import HeroBanner from '../components/hero-banner/HeroBanner';
import LeftImageCard from '../components/left-image-card/LeftImageCard';
import RightImageCard from '../components/right-image-card/RightImageCard';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <LeftImageCard />
      <RightImageCard />
      <CustomFooter />
    </div>
  )
}

export default App;