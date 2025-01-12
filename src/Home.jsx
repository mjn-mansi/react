import './App.css'
import About from './components/About';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Service from './components/Service';
import Header from './Layout/Header';

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Offer />
            <Service />
        </>
    )
}

export default Home;