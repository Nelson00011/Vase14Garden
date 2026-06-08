//TODO home!
import MainCarousel from '../components/MainCarousel';
import MainInfo from '../components/MainInfo';
// TODO SUBSCRIBE / Main Content Interactive Hover
// import Subscribe from '../components/Subscribe';

function HomePage(){
    return(<div className='home'>
        <MainCarousel />
        <MainInfo />
        {/* <Subscribe /> */}
        </div>
    );
}

export default HomePage;