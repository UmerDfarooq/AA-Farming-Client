import React from 'react'
import ImageSlider from '../../component/ImageSlider/imageSlider'
import { sliderData } from '../../component/ImageSlider/SliderData'
import admin from '../../images/admin.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './aboutPage.css'


export default function () {
    return (
        <>
            <div className='flex-container'>
                <div className='row'>

                    <div className=" col-sm-4 col-md-4 col-lg-4 ">

                        <h1>Contact and Farm Details</h1>
                        <ul className="listText" >
                            Contact Info
                            <li>•+92 346 2269933</li>
                            <p></p>

                            Farm Details
                            <li>•Empty area around 80 kanal</li>
                            <li>•Number of animals 60</li>
                            <li>•Irrigation area around 100 kanal</li>
                        </ul>
                    </div>

                    <div className='col-sm-3 col-md-3 col-lg-3 '>

                        <div className="welcome-block">
                            <div className="message-body">
                                <img src={admin} className="imgClass" alt="member" />

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 offset-1">
                        <div className="welcome-block">
                            <div className="message-body">
                                <h1>Owner</h1>
                                <ul className='listText'>
                                    <li>Raja Imran Mazhar
                                    8years experience of inbound and outbound E-Commeece in Saudi Arabia.
                                    Family Business of Dairy Products.</li>
                                </ul>
                                

                            </div>
                        </div>
                    </div>


                    {/* NEw */}

                    {/* <div class="slide-container swiper">
            <div class="slide-content">
                <div class="card-wrapper swiper-wrapper">
                  
                   
         
               */}
                    {/* <div class="col-sm-6 col-md-6 col-lg-6 offset-2">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src={admin} alt="" class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                  */}




                    {/* </div>
            // </div>

       
               </div> */}
                </div>
            </div>
            <div className='imageSlider'>
                <ImageSlider slides={sliderData} />

            </div>



        </>
    )
}

