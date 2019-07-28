import React, { Component } from 'react'
import {tindercard} from './cardjs';

class cards extends Component {

componentDidMount(){
    console.log('mount');
    document.addEventListener("DOMContentLoaded", function(event) {
        tindercard();
    });
}


    render() {
       
        return (
                <div className="stage">
                    <div className="title">What Kind of JOB you will choose....</div>
                    <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                        <div className="stackedcards-container">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-image"><img src="https://image.ibb.co/gQsq07/Adventure_and_Outdoor.png" width="100%" height="100%" alt="1"/></div>
                                    <div className="card-titles">
                                        <h1>Job <br/> 1</h1>
                                        <h3>Test msg..1</h3>
                                    </div>  
                                </div>
                            <div className="card-footer">
                                <div className="popular-destinations-text">Popular <br/> Destinations</div>
                                    <div className="popular-destinations-images">
                                        <div className="circle"><img src="https://image.ibb.co/jmEYL7/adventure_1.jpg" alt="2" width="100%" height="100%"/></div>
                                        <div className="circle"><img src="https://image.ibb.co/nsCynn/adventure_2.jpg" alt="3" width="100%" height="100%"/></div>
                                        <div className="circle"><img src="https://image.ibb.co/hmsL07/adventure_3.jpg" alt="4" width="100%" height="100%"/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-content">
                                    <div className="card-image"><img src="https://image.ibb.co/gQsq07/Adventure_and_Outdoor.png" width="100%" height="100%" alt="1"/></div>
                                    <div className="card-titles">
                                        <h1>Job <br/> 1</h1>
                                        <h3>Test msg..1</h3>
                                    </div>  
                                </div>
                            <div className="card-footer">
                                <div className="popular-destinations-text">Popular <br/> Destinations</div>
                                    <div className="popular-destinations-images">
                                        <div className="circle"><img src="https://image.ibb.co/jmEYL7/adventure_1.jpg" alt="2" width="100%" height="100%"/></div>
                                        <div className="circle"><img src="https://image.ibb.co/nsCynn/adventure_2.jpg" alt="3" width="100%" height="100%"/></div>
                                        <div className="circle"><img src="https://image.ibb.co/hmsL07/adventure_3.jpg" alt="4" width="100%" height="100%"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
        )
    }
}

export default cards;
