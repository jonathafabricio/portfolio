import PageTransition from '../../components/PageTransition/PageTransition';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <PageTransition>
        <div className="home-page">
            <Navbar />
            <Header />
        </div>
        </PageTransition>
    );
}

export default Home;