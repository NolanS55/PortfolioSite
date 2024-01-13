import Clock from "./Clock";
import './css/Home.css'
const Home = () => {
    return ( 
    <div className="home">
        <section className="info">
            <div className="text">
                <h1 className="title">Nolan Smith</h1>
                <Clock></Clock>
            </div>     
        </section>
        <section className="connect">
            <h1 className="connectTitle">Connect with me</h1>
            <div className="connections">
                <figure>
                    <a href="https://github.com/NolanS55" target="_blank"><img src="github.png" alt="github logo"></img></a>
                    <figcaption className="connectCaption">GITHUB</figcaption>
                </figure>
                <figure>
                    <a href="https://www.linkedin.com/in/nolan-smith-07a79a1a9/" target="_blank"><img src="link.png" alt="linkedin logo"></img></a>
                    <figcaption className="connectCaption">LINKEDIN</figcaption>
                </figure>   
            </div>
        </section>
    </div> );
}
 
export default Home;