import React from 'react'
function Form() {
    return (
        <section className="form" id="form">
            <div className="container-fluid">
                <div className="heading">Donor Registeration</div>
                <form action="#">
                    <div className="card-details">
                        <div className="card-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your Full Name" />
                        </div>
                        <div className="card-box">
                            <span className="details">Age</span>
                            <input type="text" placeholder="Enter your Age" />
                        </div>
                        <div className="card-box">
                            <span className="details">Mobile No.</span>
                            <input type="text" placeholder="Enter your Mobile No." />
                        </div>
                        <div className="card-box">
                            <span className="details">Blood group</span>
                            <input type="text" placeholder="Enter your Blood group" />
                        </div>
                        <div className="card-box">
                            <span className="details">Weight</span>
                            <input type="text" placeholder="Enter your Weight" />
                        </div>
                        <div className="card-box">
                            <span className="details">City</span>
                            <input type="text" placeholder="Enter your City" />
                        </div>
                        <div className="circal-form">
                            <span className="circal-title">Gender</span>
                            <div className="category">
                                <input type="radio" name="gender" />Male
                                <input type="radio" name="gender" />Female
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        </section>)}
export default Form
