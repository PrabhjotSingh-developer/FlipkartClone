
import Navbar from '../Components/Navbar/Navbar';
import Itemtype from '../Components/ItemNav/Itemtype';
import Slider1 from '../Components/SliderNav/Slider1';
import Sliders from '../Components/AllSliders/Sliders'
function Home() {
  return (
    <div className="App">
         <Navbar/>
         <Itemtype/>
         <Slider1/>
         <Sliders/>
    </div>
  );
}

export default Home;