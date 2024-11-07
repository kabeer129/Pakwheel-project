
import React from "react";
import Image from "next/image"
export default function Footer() {
    return(  
           <div>
        <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
            
            
    
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
                <div className="flex items-center">
                    <input type="email" placeholder="Enter Detail Here" className="bg-gray-800 text-white p-2 rounded-l outline-none focus:ring focus:ring-green-500"/>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600">Subscribe</button>
                </div>
            </div>
    
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/rana.kabeer.7798?mibextid=ZbWKwL">
                    <img
                    src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                    alt="facbook logo"
                    className= "  w-10 h-10"
                    />
                    </a>
                    
                    <a href="https://www.instagram.com/rana_kabeer00?igsh=c2lobHowNGVrcWJ0" className="hover:text-gray-400">
                    <img 
                    src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000"
                    alt="instagram logo"
                    className="w-10 h-10"
                    />
                    
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-kabeer-khan-99a6a02b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BgFRj%2Btm0R2es8Nfbua%2B5MQ%3D%3D" className="hover:text-gray-400">
                        <img 
                        src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                        alt="linkedin"
                        className="w-10 h-10"
                        /></a>

                    <a href="#" className="hover:text-gray-400">
                        <img
                        src="https://img.icons8.com/?size=100&id=LIJ9IxCSCvNw&format=png&color=000000"
                        alt="discord"
                        className="w-10 h-10"
                        />
                    </a>





                    
                </div>
            </div>
    
            <div>
                <h3 className="text-lg font-semibold mb-4">Download Mobile Apps</h3>
                <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Google Play</a>
                    <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">App Store</a>
                    <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">AppGallery</a>
                </div>
            </div>
        </div>
    </footer>
    </div>




        


           
           
           
           
           
           
           
            
        

         );
          }