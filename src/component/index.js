import React from 'react'
 import './index.css'
import loading from '../images/loading.gif'
import logo from '../images/logo.png'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import food from '../images/food.jpg'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'
import product5 from '../images/product5.jpg'
import tes1 from '../images/tes1.png'
import './bootstrap.css'
import './responsive.css'
import './iconmon.css'
import { Link, NavLink } from 'react-router-dom'

 import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GoogleMaps from '../Pages/GoogleMaps/googleMaps'
 const Index= () => {
  return (
    <> 
      <section class="banner_main">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="text-bg">
                     <h1>A&A cattle and dairy farm</h1>
                     <p>At Ali and Ayaan we provide the highest quality products regarding dairy, cattle and farming products in Islamabad/Rawalpindi </p>
                     
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div class="three_box">
         <div class="container">
            <div class="row">
               <div class="col-md-4">
                  <div class="box_text">
                     <figure>
                        <img src={img1} alt="#" className='zoom'/>
                        </figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="box_text">
                     <figure><img src={img2} alt="#" className='zoom'/></figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="box_text">
                     <figure><img src={img3} alt="#" className='zoom'/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div  class="hottest">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>One of Islamabad's best dairy and cattle Farm</h2>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="hottest_box">
                     <p> Situatued on the outskirts of Islamabad away from the city, We Produce all natural dairy products of the highest quality. Our Wheat and Rice farms are maintained thorughly and produce the highest quality grain seed thats love by all our customers </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="choose ">
         <div class="container">
            <div class="row">
               <div class="col-md-8">
                  <div class="titlepage">
                     <h2>Why Choose Us? </h2>
                     <p>We provide the best quality products made in the cleanest,smartest way possible in the most economic rates  </p>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row d_flex">
               <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                  <div class="padding_with">
                     <div class="row">
                        <div class="col-md-6 padding_bottom">
                           <div class="choose_box">
                              <i><img src={icon1} alt="#" /></i>
                              <div class="choose_text">
                                 <h3>Excellent Service</h3>
                                 <p>Our Service is highly reliable with products delievered well within time. We take consumer satisfication very highly in every way
</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 padding_bottom">
                           <div class="choose_box">
                              <i><img src={icon2} alt="#" className='zoom'/></i>
                              <div class="choose_text">
                                 <h3>Clean Working</h3>
                                 <p>We make cleanliness sure in every step of our production, From the sanitary conditions of the enivornment to the health of our animals to the extraction of our products. Proper Steps ensure no contamination occurs</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 padding_bottom2">
                           <div class="choose_box">
                              <i><img src={icon3} alt="#" /></i>
                              <div class="choose_text">
                                 <h3>Quality And Reliability</h3>
                                 <p>Our Products are one of the highest and purest quality to be found</p>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="choose_box">
                              <i><img src={icon4} alt="#" /></i>
                              <div class="choose_text">
                                 <h3>Expert Farmer</h3>
                                 <p>Best trained Experts are hired in taking care of  animals, enivorment and fields</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div class="choose_img">
                     <figure><img src={food} alt="#" /></figure>
                  </div>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-md-5">
               <div class="read_more">
               <NavLink exact to = "/About">Click for more Info</NavLink>
               </div>
               </div>
            </div>
         </div>
      </div>

      <div class="product">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage">
                     <h2>Our Products</h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
                  <div class="product_box">
                     <figure>
                        <Link exact to="/Products" className="nav__link">
                        <img src={product1} alt="#" className='zoom'/>
                        </Link></figure>
                     <h3 class="black">vegetable</h3>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div class="product_box">
                     <figure>
                     <Link exact to="/Products" className="nav__link"><img src={product2} alt="#" className='zoom'/></Link></figure>
                     <h3 >wheat</h3>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
                  <div class="product_box">
                     <figure><Link exact to="/Products" className="nav__link"><img src={product3} alt="#" className='zoom'/></Link></figure>
                     <h3>fruit</h3>
                  </div>
               </div>
               <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 padding_left0">
                  <div class="product_box">
                     <figure><Link exact to="/Products" className="nav__link"><img src={product4} alt="#" className='zoom'/></Link></figure>
                     <h3>sunflower</h3>
                  </div>
               </div>
               <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 padding_right0">
                  <div class="product_box">
                     <figure><Link exact to="/Products" className="nav__link"><img src={product5} alt="#" className='zoom'/></Link></figure>
                     <h3>Livestock</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* No */}
      {/* <div class="about">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>People Says About Farm</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div id="myCarousel" class="carousel slide about_Carousel " data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container">
                              <div class="carousel-caption ">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <div class="test_box">
                                          <i><img src={tes1} alt="#"/></i>
                                          <h4>jhone Du</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <div class="test_box">
                                          <i><img src="images/tes1.png" alt="#"/></i>
                                          <h4>jhone Du</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <div class="test_box">
                                          <i><img src="images/tes1.png" alt="#"/></i>
                                          <h4>jhone Du</h4>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div> */}


      {/* No */}

      {/* <footer id="contact">
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-4">
                     <div class="titlepage">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
                  <div class="col-md-12">
                     <form id="request" class="main_form">
                        <div class="row">
                           <div class="col-md-3 ">
                              <input class="contactus" placeholder="Full Name" type="type" name="Full Name"/> 
                           </div>
                           <div class="col-md-3">
                              <input class="contactus" placeholder="Email" type="type" name="Email"/> 
                           </div>
                           <div class="col-md-3">
                              <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                           </div>
                           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                              <ul class="social_icon">
                                 <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                              </ul>
                           </div>
                           <div class="col-md-8">
                              <textarea class="contactus1" placeholder="Message" type="type" Message="Name">Message </textarea>
                           </div>
                           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                              <button class="send_btn">Send</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div class="col-md-3 border_right">
                     <ul class="location_icon">
                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a> Locatins</li>
                        <li><a href="#"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></a> +71 9087654321</li>
                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>demo@gmail.com</li>
                     </ul>
                  </div>
                  <div class="col-md-3 border_right">
                     <h3>Useful Link</h3>
                     <ul class="link">
                        <li><a href="#">humour, or </a></li>
                        <li><a href="#">randomised words </a> </li>
                        <li><a href="#">which don't look </a></li>
                        <li><a href="#">even slightly  </a> </li>
                        <li><a href="#">believable. If   </a></li>
                     </ul>
                  </div>
                  <div class="col-md-3 border_right">
                     <h3>Menus</h3>
                     <ul class="link">
<li><a href="index.html">Home</a></li>                             
<li><a href="about.html">About</a></li>                                                     
<li><a href="products.html">Products</a></li>                             
<li><a href="blog.html">Blog</a></li>
<li><a href="contact.html">Contact</a></li>
                     </ul>
                  </div>
                  <div class="col-md-3">
                     <form class="bottom_form">
                        <h3>Newsletter</h3>
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>Copyright 2019 All Right Reserved By <a href="https://html.design/"> Free  html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer> */}
      <div className='Map'>
         <p className='LocationText'>Location Of our Farm</p>
         <GoogleMaps/>
      </div>

    </>
  )
}
export default Index