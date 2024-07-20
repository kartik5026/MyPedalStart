import React from 'react';

const MainContent = () => {
    const imgurl = "https://img.freepik.com/free-photo/happy-latin-businesswoman-standing-with-arms-crossed-against-isolated-background_662251-639.jpg"
    return (
        <main className="mainContent">
            <div className="textSection">
                <h1 className="heading">Accelerating Growth Driving Success</h1>
                <p className="description">
                    PedalCircle is an offline acceleration cohort by PedalStart, giving handpicked startups access to 24x7 offline innovation hub, mentorship from industry experts and up to $250k investment opportunity.
                </p>
                <button className="button">Start your Journey</button>
            </div>
            <div className="imageSection">
            <img src={imgurl} alt="PedalCircle Event" className="mainImage" />
            </div>
        </main>
    );
}

export default MainContent;
