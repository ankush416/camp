import React from 'react'
function About() {
  return (
    <section className="about" id="about">
    <div className="container">
      <div className="main-txt">
        <h1>About <span>Us</span></h1>
      </div>
      <div className="row">
        <div className="col-md-6 py-3 py-md-0">
          <div className="card">
            <img src="./images/bg1.jpg" alt=""/>
          </div>
        </div>
  <div className="col-md-6 py-3 py-md-0">
          <h2>Who We Are</h2>
          <p>We are a group of volunteers who organize blood donation camps in various cities across the country. Our mission is to create awareness about the importance of donating blood and to ensure that there is a sufficient supply of blood for those in need.</p>
          <h2>Our History</h2>
          <p>Our organization was founded in 2010 by a group of like-minded individuals who wanted to make a difference in their community. Since then, we have organized over 100 blood donation camps and have helped save countless lives.</p>
          <h2>Our Team</h2>
        </div>
      </div>
  </div>
  </section>
  )
}
export default About
