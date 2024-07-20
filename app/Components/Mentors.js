// components/MentorsComponent.js


const imagePaths = "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg";

const Mentors = () => {
  return (
    <div className="mentors-container">
      
      <div className="mentors-list">
        <div className="mentor-item">
          <img src={imagePaths} alt="Vikas Lakhani" className="mentor-image" />
          <p className="mentor-name">Vikas Lakhani</p>
          <p className="mentor-title">InstaOffice</p>
        </div>
        <div className="mentor-item">
          <img src={imagePaths} alt="Alok Kohli" className="mentor-image" />
          <p className="mentor-name">Alok Kohli</p>
          <p className="mentor-title">Pepsico</p>
        </div>
        <div className="mentor-item">
          <img src={imagePaths} alt="M Ramakrishnan" className="mentor-image" />
          <p className="mentor-name">M Ramakrishnan</p>
          <p className="mentor-title">Investor</p>
        </div>
        <div className="mentor-item">
          <img src={imagePaths} alt="Sandeep Nailwal" className="mentor-image" />
          <p className="mentor-name">Sandeep Nailwal</p>
          <p className="mentor-title">Polygon</p>
        </div>
      </div>
    </div>
  );
};

export default Mentors;