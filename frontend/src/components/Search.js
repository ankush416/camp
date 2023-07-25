import React from 'react'

function Search() {
  return (
    <section className="search" id="search">
 <div className="container">
<h1><span>S</span>earch donor</h1>

						<hr className="white-bar text-center"/>
            <form action="#" method="get" className="form-inline text-center" >
							<div className="form-group text-center justify-content-center">

                <div className="container">
                  <div className="row">
                    <div className="col" sp>
                      <select  name="city" id="city" className="form-control demo-default" >
                    
                      <option value="">-- Select --</option><optgroup title="Azad Jammu and Kashmir (Azad Kashmir)" label="&raquo; India"></optgroup><option value="Bagh" >Jammu And Kashmir </option><option value="Bhimber" >Himachal Pradesh</option><option value="Kotli" >Punjab</option><option value="Mirpur" >Haryana</option><option value="Muzaffarabad" >Delhi</option><option value="Neelum" >Rajasthan</option><option value="Poonch" >Gujarat</option><option value="Sudhnati" >Andhra Pradesh</option><option value="Awaran" >Bihar</option><option value="Barkhan" >Uttar Pradesh</option><option value="Bolan" >Arunachal Pradesh</option><option value="Chagai" >Assam</option><option value="Dera Bugti" >Tripura</option><option value="Gwadar" >Goa</option><option value="Jafarabad" >Telangana</option><option value="Jhal Magsi" >Tamil Nadu</option><option value="Kalat" >Sikkim</option><option value="Kech" >Odisha</option><option value="Kharan" >Nagaland</option><option value="Khuzdar" >Mizoram</option><option value="Kohlu" >Meghalaya</option><option value="Lasbela" >Manipur</option><option value="Loralai" >Maharashtra</option><option value="Mastung" >Madhya Pradesh</option><option value="Musakhel" >Kerala</option><option value="Naseerabad" >Karnatka</option><option value="Nushki" >Jharkhand</option><option value="Panjgur" >West Bengal</option>
                     </select> 
                    </div>
                    
                  
    
                    <div className="col">
                      <select name="blood_group" id="blood_group"  className="form-control demo-default text-center margin10px">
									
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
      
                      </select>
                    </div>
                    <div className="col">
                    
                      <button type="submit" className="btn btn-lg btn-danger">Search</button>
                      
                    </div>
                  </div>
                  
                 
                </div>
							
         	</div>
						</form>
					</div>
				
			
      </section>
  )
}

export default Search
