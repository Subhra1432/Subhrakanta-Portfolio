import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Intern</h4>
                <h5>CTTC, Bhubaneswar</h5>
              </div>
              <h3>July 2025 - Aug 2025</h3>
            </div>
            <p>
              Worked on Core Java applications focusing on OOP concepts and database connectivity, improving backend programming proficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>AICTE Virtual Internship (Remote)</h5>
              </div>
              <h3>May 2024 - July 2024</h3>
            </div>
            <p>
              Built responsive web interfaces using HTML, CSS, and JavaScript. Enhanced performance via API integration and optimized UI/UX using vibe coding techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Ramaiah University of Applied Sciences</h5>
              </div>
              <h3>Expected 2027</h3>
            </div>
            <p>
              Coursework: Computer Architecture, Comparison of Learning Algorithms, Computational Theory
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Grade (PCM B)</h4>
                <h5>Upendra Nath Higher Secondary School</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed higher secondary education with a focus on Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Grade</h4>
                <h5>Khaira Govt. High School, Balasore</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary and foundational education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
