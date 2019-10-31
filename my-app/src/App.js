import React, { Component } from 'react';
import './App.css';
import Layout from './components/layoutPartOne/Layout';
import Carousel from './components/carousel/Carousel';
import Navigation from './components/navigation/Navigation';

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo( "a6b62565a9cd3fb12a23a09760347e4bc9e9ce95", // client ID
                        "HCtqCJnvgujj0onYlVvnGGWypAO+j50kktSEx2AccpuuG73lOmxr5l+qGELCyosjwokHD1iNTSoVJKrj6oloj3eHphfJ6LIP9168++n01n6z3DSfjL384fzG4/52z/TC", // client secret
                        "73f1ecbe9511f42f65d31f866d4b77ef"); // access token

const initialState = {
  route : 'layout',
  currentSlide : 0,
  slideObject :  [],
  thumbnailURL : '',
}

class App extends Component{

  constructor(){
    super();
    this.state = initialState;
  }
  
  goToLayout = () => {
    this.setState({route : 'layout'});
  }
  goToCarousel = () => {
    this.setState({route : 'carousel'});

    // need to update the states also when opening the carousel
    client.request({
      method: 'GET',
      path: '/users/104559028/videos',
    }, (error, body) => {
      if (error) {
        console.log(error);
        return;
      }
      this.setState({slideObject : body.data[4 - this.state.currentSlide]});
      this.setState({thumbnailURL : body.data[4 - this.state.currentSlide].pictures.sizes[3].link})
    })
  }

  // increasing index onClick right arrow
  moveToRight = () => {
    if (this.state.currentSlide === 4){
        this.setState({currentSlide : 0});
    } else {
        this.setState({currentSlide : this.state.currentSlide + 1});
    }
  }

  // decreasing index onClick left arrow
  moveToLeft = () => {
    if (this.state.currentSlide === 0){
        this.setState({currentSlide : 4});
    } else {
        this.setState({currentSlide : this.state.currentSlide - 1});
    }
  }

  // this function sets the state of slideObject and thumbnailURL to the video trailer (from Vimeo) of the current slide
  requestVimeoVideo = (currentIndex) => {
    client.request({
      method: 'GET',
      path: '/users/104559028/videos',
    }, (error, body) => {
      if (error) {
        console.log(error);
        return;
      }
      this.setState({slideObject : body.data[4 - currentIndex]});
      this.setState({thumbnailURL : body.data[4 - currentIndex].pictures.sizes[3].link})
    })
  }

  render (){

    return (

      <div className='App'>
          <Navigation goToLayout = {this.goToLayout} 
                      goToCarousel={this.goToCarousel}/>
          {
            this.state.route === 'layout'
            ? <div>
                <Layout/>
              </div>
            : 
              <div>
                <Carousel currentSlide = {this.state.currentSlide}
                          moveToRight = {this.moveToRight} 
                          moveToLeft = {this.moveToLeft}
                          requestVimeoVideo = {this.requestVimeoVideo}
                          slideObject = {this.state.slideObject}
                          thumbnailURL = {this.state.thumbnailURL}
                          />
              </div>
          }
      </div>
      
    );
  }
}

export default App;
