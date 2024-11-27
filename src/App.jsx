
import "./App.css"
import Button from "./companents/Button"
import logo from "./assets/logo.png"
import logo1 from "./assets/logo1.png"
import icn1 from "./assets/icn1.png"
import img1 from "./assets/img1.png"
import icn2 from "./assets/icn2.png"
import icn3 from "./assets/icn3.png"
import icn4 from "./assets/icn4.png"
 import ic1 from "./assets/ic1.png"
 import ic2 from "./assets/ic2.png"
 import ic3 from "./assets/ic3.png"
 import ic4 from "./assets/ic4.png"
 import ic5 from "./assets/ic5.png"
 import ic6 from "./assets/ic6.png"
 import ic7 from "./assets/ic7.png"
 import ic8 from "./assets/ic8.png"
 import star from "./assets/star.png"
 import borderstar from "./assets/borderstar.png"
 import img2 from "./assets/img2.png"
 import i1 from "./assets/i1.png"
 import i2 from "./assets/ii2.png"
 import i3 from "./assets/i3.png"
 import i4 from "./assets/i4.png"
 import icon1 from "./assets/icon1.png"
 import icon2 from "./assets/icon2.png"
 import icon3 from "./assets/icon3.png"

function App() {
  return (
    <div>
      <div className="bg">
    <header className="flex justify-between bg-[#52503B] lg:px-[10%] md:px-[7%] px-[3%] py-[1%]">
      <div className="">
<img src={logo} alt="" />
      </div>
      <nav className="m-auto lg:flex hidden ">
        <ul className="grid grid-cols-3 gap-[10%] " >
          <li className="text-[#ffffff]">Start</li>
          <li className="text-[#ffffff]">Contact</li>
          <li className="text-[#ffffff]">Our<span className="text-[#00000000]">_</span>history</li>
        </ul>
      </nav>
<Button hasBorderGreen={true} itemBtn='Book now' />
    </header>
      
<div className=" lg:pt-[17%] md:pt-[10%] pt-[3%]">
  <img className="m-auto lg:w-[20%]  md:w-[15%] w-[14%]" src={logo1} alt="" />
</div>
<h1 className="w-[80%] m-auto text-center lg:text-5xl md:text-4xl text-xl text-[#ffffff] lg:py-5 py-1">Experience the perfect combination of modern housing & natural scenery.</h1>
<p className="m-auto text-[#ffffff] font-[300] text-center">Located in Lofoten, norway</p>
<div className="lg:py-[3%] md:py-[1%]">
  <img className="m-auto" src={icn1} alt="" />
</div>
      </div>
      <main>
      <section className="bg-[#FAF8F0] md:px-[25%] md:py-[5%] py-[12%] px-[10%]">
        <div className="bg-[#E08631] w-[10%] m-auto py-1">

        </div>
        <div className="grid lg:grid-cols-2 lg:gap-[7%] gap-[3%] py-[4%]">
          <div className="">
            <p className="text-[#333333] ">The Guest House is the perfect weekend get-away housing.
               Located in the Norwegian archipelago, Lofoten, it's a great escape 
               from the hustle and bustle of the city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
                 Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue
                  et, vulputate ut ligula.</p>
          </div>
          <div className="">
          <p className="text-[#333333]">
          Below you'll find information about the accommodation and what's included
           in the price. Don't hesitate to reach out to us vi the contact page
            if you have any questions around your stay.</p>
            <br />
            <div className="w-[60%] pt-[5%] text-center">
              <Button hasbgGreen={true} itemBtn='Book now' />
              </div>
            
          </div>

        </div>
      </section>
      <section className="p-[5%]">
      <div className="bg-[#E08631] w-[10%] m-auto py-1"></div>
      <h1 className="text-center text-7xl font-bold text-[#52503B] w-[85%] m-auto py-3">The Guest House is the perfect weekend getaway cabin.</h1>
      </section>
   <section>
    <img className="w-full" src={img1} alt="" />
   </section>
   <section className="bg-[#FAF8F0] px-[12%] md:py-[5%] py-[20%]">
   <div className="bg-[#E08631] w-[10%] m-auto py-1"></div>
   <h1 className="text-[#52503B] text-2xl font-medium text-center">Sleeping arrangements.</h1>
   <p  className="text-[#52503B] text-md font-normal text-center lg:w-[60%] md:w-[80%] w-[90%] m-auto py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[5%]">
      <div className="">
        <img className="m-auto" src={icn2} alt="" />
        <p className="text-[#52503B] text-md font-normal text-center  m-auto py-3">Beds</p>
        <p className="text-[#52503B] text-md font-normal text-center  m-auto">The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.</p>
      </div>
      <div className="">
        <img className="m-auto" src={icn3} alt="" />
        <p className="text-[#52503B] text-md font-normal text-center  m-auto py-3">Bedrooms</p>
        <p className="text-[#52503B] text-md font-normal text-center  m-auto">Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.</p>
      </div>
      <div className="">
        <img className="m-auto" src={icn4} alt="" />
        <p className="text-[#52503B] text-md font-normal text-center  m-auto py-3">Bathrooms</p>
        <p className="text-[#52503B] text-md font-normal text-center  m-auto">The cabin has three bathrooms, all equipped with showers and one with a bath tub,</p>
      </div>
     </div>
   </section>
   <section className="px-[12%] py-[7%]">
   <div className="bg-[#E08631] w-[10%]  py-1"></div>
   <div className=" py-4">
   <h1 className="text-[#52503B] text-2xl font-medium ">The perfect escape.</h1>
   <p  className="text-[#52503B] text-md font-normal  lg:w-[60%] md:w-[80%] w-[90%] py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
   </div>
   <div className="">
    <div className="grid md:grid-cols-2 gap-x-[5%] gap-y-[15%] lg:pb-[5%] md:pb-[10%] pb-[180%]">
      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic1} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic5} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic2} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic6} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic3} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic7} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic4} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="grid grid-cols-[25%,75%] gap-3">
        <img src={ic8} alt="" />
        <div className="">
          <p className="text-[#52503B] text-sm">Modern Kitchen Appliances</p>
          <p className="text-[#52503B] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
   </div>
   </section>
   <section className="bg-[#FAF8F0] py-[5%] px-[12%]">
   <div className="bg-[#E08631] w-[5%] m-auto py-1"></div>
   <h1 className="text-[#52503B] text-2xl font-medium text-center">Past guests.</h1>
   <p  className="text-[#52503B] text-md font-normal text-center lg:w-[50%] md:w-[75%] w-[90%] m-auto py-3">Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House.</p>
   <div className="grid md:grid-cols-2 gap-[3%]">
    <div className="p-[5%] bg-[#ffffff]">
<div className="flex gap-1">
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
</div>
<p className="  text-[#333333] text-md font-normal m-auto py-3">We had an amazing stay at the Guest House!</p>
<p className="  text-[#333333] text-sm font-normal m-auto ">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
 mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus
  nibh et justo cursus id rutrum lorem imperdiet. 
Nunc ut sem vitae risus tristique posuere.</p>
<p className="  text-[#333333] text-sm font-normal m-auto my-4 border-l-2 border-solid border-[#E08631] pl-2">Nate Davidsson</p>
    </div>

    <div className="p-[5%] bg-[#ffffff]">
<div className="flex gap-1">
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={borderstar} alt="" />
</div>
<p className="  text-[#333333] text-md font-normal m-auto py-3">Beautiful little hideaway.</p>
<p className="  text-[#333333] text-sm font-normal m-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
<p className="  text-[#333333] text-sm font-normal m-auto my-4 border-l-2 border-solid border-[#E08631] pl-2">Laura Paulie</p>
    </div>
   </div>
   <div className="flex gap-3 justify-end py-4">
    <div className="p-[3%] rounded-full border-2 border-solid border-[#52503B]"></div>
    <div className="p-[3%] rounded-full border-2 border-solid border-[#52503B]"></div>
   </div>
   
   </section>
   <section>
    <img className="w-full" src={img2} alt="" />
   </section>
   <section className="px-[12%] md:py-[5%] py-[10%]">
    <div className="grid lg:grid-cols-2 gap-[5%]">
    <div className="">
    <div className="bg-[#E08631] w-[10%]  py-1"></div>
   <h1 className="text-[#52503B] text-2xl font-medium ">Come together.</h1>
   <p  className="text-[#52503B] text-md font-normal py-3">Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
  
    </div>
    <div className="grid grid-cols-2 gap-[5%]">
      <div className="flex gap-3">
        <div className=""><img className="m-auto" src={i1} alt="" /></div>
        
        <p  className="text-[#52503B] text-sm font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-3">
        <div className=""><img className="m-auto" src={i2} alt="" /></div>
        
        <p  className="text-[#52503B] text-sm font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-3">
        <div className=""><img className="m-auto" src={i3} alt="" /></div>
        
        <p  className="text-[#52503B] text-sm font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-3">
        <div className=""><img className="m-auto" src={i4} alt="" /></div>
        
        <p  className="text-[#52503B] text-sm font-normal ">Morbi neque ex, condimentum.</p>
      </div>

    </div>
</div>
   </section>
   <section className="bg-[#FAF8F0] py-[6%]">
   <div className="bg-[#E08631] w-[5%] m-auto py-1"></div>
   <h1 className="text-[#52503B] lg:w-[50%] md:w-[75%] w-[90%] text-4xl m-auto font-medium text-center py-4">We're already booked up for the spring — hurry up & secure your stay for the summer.</h1>
   <p  className="text-[#52503B] text-md font-normal text-center lg:w-[50%] md:w-[75%] w-[90%] m-auto py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Nullam scelerisque aliquam odio et faucibus.</p>
   <div className="flex justify-center gap-[3%]">
    <Button hasBorderGreen={true} itemBtn='Contact' />
    <Button hasbgGreen={true} itemBtn='Book now' />
   </div>
  
   </section>

   </main>
   <footer className="px-[12%] py-[5%] bg-[#52503B]">
    <div className=" grid lg:grid-cols-[25%,25%,50%] grid-cols-2  justify-between gap-[7%]">
    <div className="">
      <p className="text-[#ffffff] py-1 text-lg">Pages</p>
      <p className="text-[#ffffff] py-1">Start</p>
      <p className="text-[#ffffff] py-1">Contact</p>
      <p className="text-[#ffffff] py-1">Our history</p>
      <p className="text-[#ffffff] py-1">Licenses</p>
      <p className="text-[#ffffff] py-1">Instructions</p>
      <p className="text-[#ffffff] py-1">Style guide</p>
    </div>
    <div className="">
    <p className="text-[#ffffff] py-1 text-lg"> Social Media</p>
    <div className="flex gap-2">
      <img src={icon1} alt="" />
      <img src={icon2} alt="" />
      <img src={icon3} alt="" />
    </div>
   
    </div>
    <div className="lg:col-auto col-start-1 col-end-3 ">
    <p className="text-[#ffffff] py-1 text-lg">Newsletter</p>
      <p className="text-[#ffffff] py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Suspendisse varius enim in eros elementum tristique.</p>
      <div className="bg-[#ffffff] p-[2%] rounded-md flex justify-between">
        <input placeholder="Email" type="text" />
        <Button hasbgGreen={true} itemBtn='Submit' />
      </div>
    </div>
</div>
<div className="py-8">
  <img className="m-auto" src={logo} alt="" />
  <p className="text-[#ffffff] py-3 text-center">© Guest House, LLC. All rights reserved. Powered by Webflow</p>
  <p className="text-[#ffffff] py-1 text-center">+47 (0) 702 88 12 34 - example@webflow.io - Klubbvika 12, 8310 Kabelvag, Norway</p>
</div>
   </footer>
    </div>

  );
}

export default App;
