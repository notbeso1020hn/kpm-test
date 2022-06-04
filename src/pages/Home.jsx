// sign-in with knox email only and about page
// after sign out will go back to this page
import React, { useState } from "react";
import Navbar from "../components/navBar";
import styled from 'styled-components'
import '../App.css';

const LogoButton = styled.div`
   width: 200px;
   margin: 0px;
   cursor: pointer;
   img {
      width: 100%;
   }
`
const coverImg = styled.div`
   width: 200px;
   margin: 0px;
   cursor: pointer;
   img {
      width: 100%;
   }
`
const signIn = styled.div`
width:70%;
height:70%;
padding-top: 100px;
background-color: white;
`
const HomeSignUp = styled.button`
    right: 0px;
    appearance: none;
    background-color: #CACFD2;
    border: 2px solid #CACFD2;
    border-radius: 5px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 40px;
    outline: none;
    padding: 6px 8px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;
 
 const FavPageButton = styled.button`
    right: 0px;
    appearance: none;
    background-color: #CACFD2;
    border: 2px solid #CACFD2;
    border-radius: 5px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 40px;
    outline: none;
    padding: 6px 8px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;

const Home = () => {
    return(
        
    <body>
        <section>
        <article>
            <header>
                <section>
                    {/* <div><LogoButton ><img src="./logotest.jpg"/></LogoButton> </div>
                    <div>dsgsr</div> */}
                    <logo_pos><LogoButton ><img src="./logogif.gif"/></LogoButton></logo_pos>
                        <h6>
                            <br />
                            <br />
                            <br />
                            Knox<br />
                            Market<br />
                            Place
                        </h6>
                </section>
            </header>
            <h2>
            Sustainalitity<br />
            Recycle<br />
            Green<br />
            Care<br />
            🌎♻️💚
            </h2>
            
        </article>
        <nav>
            {/* <signIn>wrgrwg sfgdfb fbfbsf rgrsg</signIn> */}
            <signIn>
                <h2>Let's SignIN</h2>
                <h4>
                    with KnoxEmail
                    <br />
                    <br />
                </h4>

                <h6>
                    By clicking the sign-in button<br />
                    you agree to our
                </h6>
                
            </signIn>
        </nav>
        
        
        </section>

    <LogoButton><img src="./mainhome.jpg"/></LogoButton> 
    
    
                
    </body>
    
        
    )


};

export default Home;