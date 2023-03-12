import Header from '../header/Header'
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import './Home.css'

function Home () {
    return (
        <>
        <Header className="header" />
        <Tours className="cards" />
        <Footer />
        </>
    )
}
export default Home;
