

const About = () => {
    return (
        <section className="aboutSection">
            <h2 className="aboutHeading">About</h2>
            <h1 className="aboutTitle">PedalCircle</h1>
            <p className="aboutDescription">
                PedalCircle is an innovation hub by PedalStart for selected early-stage startups to accelerate the journey in 4 months and build them seed-stage investable.
            </p>
            <div className="features">
                <div className="feature">
                    <img src="https://via.placeholder.com/80" alt="24x7 Innovation hub" className="featureIcon" />
                    <span className="featureText">24×7 Innovation hub</span>
                </div>
                <div className="feature">
                    <img src="https://via.placeholder.com/80" alt="Brainstorming with dedicated EIR" className="featureIcon" />
                    <span className="featureText">Brainstorming with dedicated EIR</span>
                </div>
                <div className="feature">
                    <img src="https://via.placeholder.com/80" alt="Mentorship from Industry experts" className="featureIcon" />
                    <span className="featureText">Mentorship from Industry experts</span>
                </div>
                <div className="feature">
                    <img src="https://via.placeholder.com/80" alt="Up to $250k investment opportunity" className="featureIcon" />
                    <span className="featureText">Up to $250k investment opportunity</span>
                </div>
            </div>
        </section>
    );
}

export default About;
