import "./../styles/Home.scss";
import Students from "./../images/language-school-834138_1920.jpg";

function Home() {
    return (
        <div className="home">
            <div className="headline-section container-fluid p-5">
                <div className="px-5 pb-5">
                    <h1>Easy Almani</h1>
                    <h1>Einfach Deutsch</h1>
                    <h1>lernen</h1>
                </div>
            </div>
            <div className="image-section container-fluid">
                <div className="text">
                    <p>Starte deine Karriere und lerne Deutsch mit <span>Easy Almani</span>.</p>
                    <p>Wir bieten dir muttersprachlichen, strukturierten und modernen Deutschunterricht, kostengünstig und bequem von zu Hause aus.</p>
                    <button className="px-4">Unsere Kurse</button>
                </div>
                <div className="image">
                    <img src={Students} alt="three students learning together" />
                </div>
            </div>
        </div >
    )
}

export default Home;