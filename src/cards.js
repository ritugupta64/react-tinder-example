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
            <React.Fragment>
            <div className="stage">
            <div className="title">What Kind of Job Are You looking for?</div>
              <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                <div className="stackedcards-container">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image"><img src="https://picsum.photos/id/237/320" width="100%" height="100%" alt="1"/></div>
                      <div className="card-titles">
                        <h1>Job <br/>  1</h1>
                        <h3>job one</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular <br/> Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle"><img src="https://image.ibb.co/jmEYL7/adventure_1.jpg" alt="1"  width="100%" height="100%"/></div>
                        <div className="circle"><img src="https://image.ibb.co/nsCynn/adventure_2.jpg" alt="2" width="100%" height="100%"/></div>
                        <div className="circle"><img src="https://image.ibb.co/hmsL07/adventure_3.jpg" alt="3" width="100%" height="100%"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image"><img src="https://picsum.photos/id/238/320" width="100%" height="100%" alt="2"/></div>
                      <div className="card-titles">
                        <h1>Job <br/>  2</h1>
                        <h3>job two</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle"><img src="https://image.ibb.co/muiA07/beach_chill_1.jpg" alt="1" width="100%" height="100%"/></div>
                        <div className="circle"><img src="https://image.ibb.co/emAOL7/beach_chill_2.jpg" alt="2" width="100%" height="100%"/></div>
                        <div className="circle"><img src="https://image.ibb.co/invq07/beach_chill_3.jpg" alt="3" width="100%" height="100%"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image"><img src="https://picsum.photos/id/239/320" width="100%" height="100%" alt="3"/></div>
                      <div className="card-titles">
                             <h1>Job <br/>  3</h1>
                            <h3>job three</h3>
                        </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle">
                            <img src="https://image.ibb.co/nQrkYS/romantic_1.jpg" width="100%" height="100%" alt="1"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/ioqOL7/romantic_2.jpg" width="100%" height="100%" alt="2"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/mXSESn/romantic_3.jpg" width="100%" height="100%" alt="3"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image"><img src="https://picsum.photos/id/240/320" width="100%" height="100%" alt="4"/></div>
                      <div className="card-titles">
                            <h1>Job <br/>  4</h1>
                            <h3>job four</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle">
                            <img src="https://image.ibb.co/myaetS/city_break_1.jpg" width="100%" height="100%" alt="1"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/ciocf7/city_break_2.jpg" width="100%" height="100%" alt="2"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/i2e5YS/city_break_3.jpg" width="100%" height="100%" alt="3"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                          <img src="https://picsum.photos/id/241/320" width="100%" height="100%" alt="5"/></div>
                      <div className="card-titles">
                         <h1>Job <br/>  5</h1>
                         <h3>job five</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle">
                            <img src="https://image.ibb.co/kEN3L7/family_vacation_1.jpg" width="100%" height="100%" alt="1"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/iA8M7n/family_vacation_2.jpg" width="100%" height="100%" alt="2"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/mXOcf7/family_vacation_3.jpg" width="100%" height="100%" alt="3"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                          <img src="https://image.ibb.co/epvM7n/Art_and_culture.png" width="100%" height="100%" alt="1"/></div>
                      <div className="card-titles">
                        <h1>Job <br/>  6</h1>
                        <h3>job Six</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle">
                            <img src="https://image.ibb.co/kVPYL7/art_culture_1.jpg" width="100%" height="100%" alt="1"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/dp4Tnn/art_culture_2.jpg" width="100%" height="100%" alt="2"/></div>
                        <div className="circle">
                            <img src="https://image.ibb.co/bu6KtS/art_culture_3.jpg" width="100%" height="100%" alt="3"/></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                          <img src="https://image.ibb.co/bXTXV7/Far_and_Away_2x.png" width="100%" height="100%" alt="1"/></div>
                      <div className="card-titles">
                         <h1>Job <br/>  7</h1>
                        <h3>job Seven</h3>
                      </div>  
                    </div>
                    <div className="card-footer">
                      <div className="popular-destinations-text">Popular <br/> Destinations</div>
                      <div className="popular-destinations-images">
                        <div className="circle"><img src="https://image.ibb.co/fOYztS/far_away_1.jpg" width="100%" height="100%" alt="1"/></div>
                        <div className="circle"><img src="https://image.ibb.co/izdXDS/far_away_2.jpg" width="100%" height="100%" alt="2"/></div>
                        <div className="circle"><img src="https://image.ibb.co/mqwKtS/far_away_3.jpg" width="100%" height="100%" alt="3"/></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stackedcards--animatable stackedcards-overlay top">
                    <img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png"  width="auto" height="auto" alt="1"/></div>
                <div className="stackedcards--animatable stackedcards-overlay right">
                    <img src="https://image.ibb.co/dCuESn/Path_3x.png" width="auto" height="auto" alt="2"/></div>
                <div className="stackedcards--animatable stackedcards-overlay left">
                    <img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width="auto" height="auto" alt="3"/></div>
              </div>
              <div className="global-actions">
                <div className="left-action"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" alt="1" width="26" height="26"/></div>
                <div className="top-action"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png" alt="2" width="18" height="16"/></div>
                <div className="right-action"><img src="https://image.ibb.co/dCuESn/Path_3x.png" alt="3" width="30" height="28"/></div>
            </div>
          </div>
            <div className="final-state hidden"><h2>Got it! We received your preferences! <br/> To submit again, press F5.</h2></div>
            </React.Fragment>
        )
    }
}

export default cards;
