import  {Component} from 'react';
import * as Mui from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AppleIcon from '@material-ui/icons/Apple';

class Home extends Component{
  render() {

    return (
      <div>
          <div class="navbar-fixed"  style={{ fontSize:'small', fontWeight: 400 }}>
          <nav >
          <div class="nav-wrapper #424242 grey darken-3">
          <ul class="ac-gn-list  ">
			<li class="ac-gn-item ac-gn-apple">
				<a class="ac-gn-link ac-gn-link-apple " href="/" data-analytics-title="apple home" id="ac-gn-firstfocus">
						<span class="ac-gn-link-text center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AppleIcon style={{width:50,height:25,marginTop:20}}></AppleIcon></span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-mac">
				<a class="ac-gn-link ac-gn-link-mac" href="/mac/" data-analytics-title="mac">
						<span class="ac-gn-link-text center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mac</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-ipad">
				<a class="ac-gn-link ac-gn-link-ipad" href="/ipad/" data-analytics-title="ipad">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPad</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-iphone">
				<a class="ac-gn-link ac-gn-link-iphone" href="/iphone/" data-analytics-title="iphone">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPhone</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-watch">
				<a class="ac-gn-link ac-gn-link-watch" href="/watch/" data-analytics-title="watch">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Watch</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-tv">
				<a class="ac-gn-link ac-gn-link-tv" href="/tv/" data-analytics-title="tv">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TV</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-music">
				<a class="ac-gn-link ac-gn-link-music" href="/music/" data-analytics-title="music">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-support">
				<a class="ac-gn-link ac-gn-link-support" href="https://support.apple.com" data-analytics-title="support">
						<span class="ac-gn-link-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-search" role="search">
				<a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SearchIcon style={{width:50,height:25,marginTop:20}}></SearchIcon></a>
			</li>
			<li class="ac-gn-item ac-gn-bag" id="ac-gn-bag">
              <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LocalMallIcon style={{width:50,height:25,marginTop:20}}></LocalMallIcon></a>
			</li>
		</ul>
          </div>
        </nav>
        </div>
        <a href="">
        <img data-caption="A picture of a way with a group of trees in a park" width="1300" height="550" src="/99.jpg"/>
                    <div class="container">
                        <center>
                        <br/><br/>
                        <p><font size="7"><b>iPhone 12</b></font><br/><font size="5">blast past fast.</font></p>
                        <div class="pricing-info">
                            <p class="price price-with-carrier">
                                <span aria-label="From forty one dollars and sixty two cents per month or nine hundred ninety nine dollars before trade in." role="text">
                                    From $41.62/mo. or $999 before trade-in. </span><sup><a href="#" class="footnote">2</a></sup></p>
                                    <p>Buy directly from Apple with special carrier offers.</p>
                                </div>
                                <div class="cta-links">
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12 Pro" aria-label="Learn more about iPhone 12 Pro">Learn more</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="Buy iPhone 12 Pro" aria-label="Buy iPhone 12 Pro">Buy</a>
                            </div>
                                <img src="/12.png" width="700" height="400" /><br/>
                                <img src="/apel.png  " />
                                    <h3><b>Give something wonderful</b></h3>
                                    <font size="5">
                                        <p><a href="/">Shop give </a></p>
                                    </font>
                           </center>      
                      </div>
                      </a>
        <footer class="page-footer #eceff1 blue-grey lighten-5 ">
          <div class="container">
            <div class="row">
              <div class="col 12 grey-text" style={{ fontSize:'small' }}>
                <p>1. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and iPhone Payments terms apply.</p>
                <p>2. Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and iPhone Payments terms apply.</p>
                <p>3. Apple Fitness+ is coming late 2020.</p>
                <p>4. The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</p>
                <p>5. New subscribers only. $9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled.</p>
                <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with iOS 12.4 or later or iPadOS. To manage Apple Card Monthly Installments, you need an iPhone with iOS 13.2 or later or an iPad with iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</p>
                <p>Available for qualifying applicants in the United States.</p>
                <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                <p>Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
              </div>
              <div class="col l12 s12" style={{ fontSize:'small' }}><hr/>
              <div class="col l2 s12" style={{ fontSize:'small' }}>
                <p class="black-text">Shop and Learn</p>
                <ul>
                  <li><a class="grey-text" href="#">Mac</a></li>
                  <li><a class="grey-text" href="#">iPad</a></li>
                  <li><a class="grey-text" href="#">iPhone</a></li>
                  <li><a class="grey-text" href="#">Watch</a></li>
                  <li><a class="grey-text" href="#">TV</a></li>
                  <li><a class="grey-text" href="#">Music</a></li>
                  <li><a class="grey-text" href="#">AirPods </a></li>
                  <li><a class="grey-text" href="#">HomePod</a></li>
                  <li><a class="grey-text" href="#">iPod Touch</a></li>
                  <li><a class="grey-text" href="#">Accesories</a></li>
                  <li><a class="grey-text" href="#">Gift Cards</a></li>
                </ul>
               </div> 

               <div class="col l3 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Services</p>
                <ul>
                  <li><a class="grey-text" href="#">Apple Music</a></li>
                  <li><a class="grey-text" href="#">Apple TV+</a></li>
                  <li><a class="grey-text" href="#">Apple Fitness+</a></li>
                  <li><a class="grey-text" href="#">Apple News+</a></li>
                  <li><a class="grey-text" href="#">Apple Arcade</a></li>
                  <li><a class="grey-text" href="#">iCloud</a></li>
                  <li><a class="grey-text" href="#">Apple One </a></li>
                  <li><a class="grey-text" href="#">Apple Card</a></li>
                  <li><a class="grey-text" href="#">Apple Books</a></li>
                  <li><a class="grey-text" href="#">App Store</a></li>
                </ul>
               <p class="black-text">Account</p>
               <ul>
                  <li><a class="grey-text" href="#">Manage Your Apple ID</a></li>
                  <li><a class="grey-text" href="#">Apple Store Account</a></li>
                  <li><a class="grey-text" href="#">iCloud.com</a></li>
                </ul>
               </div> 

               <div class="col l2 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Apple Store</p>
                <ul>
                  <li><a class="grey-text" href="#">Find a Store</a></li>
                  <li><a class="grey-text" href="#">Shop Online</a></li>
                  <li><a class="grey-text" href="#">Genius Bar</a></li>
                  <li><a class="grey-text" href="#">Today at Apple</a></li>
                  <li><a class="grey-text" href="#">Apple Camp</a></li>
                  <li><a class="grey-text" href="#">Apple Store App</a></li>
                  <li><a class="grey-text" href="#">Refurbished and Clearance</a></li>
                  <li><a class="grey-text" href="#">Financing</a></li>
                  <li><a class="grey-text" href="#">Apple Trade In</a></li>
                  <li><a class="grey-text" href="#">Order Status</a></li>
                  <li><a class="grey-text" href="#">Shopping Help</a></li>
                </ul>
                </div> 

               <div class="col l3 s12" style={{ fontSize:'small' }}>
               <p class="black-text">For Business</p>
                <ul>
                  <li><a class="grey-text" href="#">Apple and Business</a></li>
                  <li><a class="grey-text" href="#">Shop for Business</a></li>
                </ul>
               <p class="black-text">For Education</p>
               <ul>
                  <li><a class="grey-text" href="#">Apple and Education</a></li>
                  <li><a class="grey-text" href="#">Shop for K-12</a></li>
                  <li><a class="grey-text" href="#">Shop for College</a></li>
                </ul>
                <p class="black-text">For Healthcare</p>
               <ul>
                  <li><a class="grey-text" href="#">Apple in Healthcare</a></li>
                  <li><a class="grey-text" href="#">Health on Apple Watch</a></li>
                  <li><a class="grey-text" href="#">Health Records on iPhone</a></li>
                </ul>
                <p class="black-text">For Government</p>
               <ul>
                  <li><a class="grey-text" href="#">Shop for Government</a></li>
                  <li><a class="grey-text" href="#">Shop for Veterans and Military</a></li>
                </ul>
               </div> 

               <div class="col l2 s12" style={{ fontSize:'small' }}>
               <p class="black-text">Apple Values</p>
                <ul>
                  <li><a class="grey-text" href="#">Accessibility</a></li>
                  <li><a class="grey-text" href="#">Education</a></li>
                  <li><a class="grey-text" href="#">Environment</a></li>
                  <li><a class="grey-text" href="#">Inclusion and Diversity</a></li>
                  <li><a class="grey-text" href="#">Privacy</a></li>
                  <li><a class="grey-text" href="#">Supplier Responsibility</a></li>
                </ul>
               <p class="black-text">About Apple</p>
               <ul>
                  <li><a class="grey-text" href="#">Newsroom</a></li>
                  <li><a class="grey-text" href="#">Apple Leadership</a></li>
                  <li><a class="grey-text" href="#">Job Opportunities</a></li>
                  <li><a class="grey-text" href="#">Investors</a></li>
                  <li><a class="grey-text" href="#">Events</a></li>
                  <li><a class="grey-text" href="#">Contact Apple</a></li>
                </ul>
               </div>
              </div>

            </div>
            <div class="col l12 s12 grey-text" style={{ fontSize:'small' }}>
                  <p>More ways to shop: <a href='#'>Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p><hr/>                 
              </div>
              <div class="col l12 s12 grey-text" style={{ fontSize:'small' }}>
                  <p>Copyright © 2020 Apple Inc. All rights reserved. &nbsp; <a href="#">Privacy Policy</a>&nbsp;&nbsp; |&nbsp;&nbsp; <a href="#">Terms Of Use</a>&nbsp;&nbsp;| &nbsp;&nbsp;<a href="#">Sales And Refuns</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#">Legal</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Site Map&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">United States</a></a></p>
              </div>

          </div>
        </footer>
      </div>
    );
  }
}


export default Home;
