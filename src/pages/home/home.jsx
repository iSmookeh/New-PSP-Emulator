import React from "react";
import Divulgation from "../../components/divulgation/divulgation.component";
import News from "../../components/news/news.component";
import "./home.css";

const Component = () => {
  return (
    <div>
      <div className="card">
        <div className="card-colum">
          <h1>PPSSPP</h1>
          <p>A PSP emulator.</p>
          <a href="" className="version">
            <strong>1.11.3</strong> is out!
          </a>
          <div className="perso-button">
            <div className="card-download">
              <img src="https://ppsspp.org/img/ppsspp-icon.png" />
              <button className="button-download"> Download </button>
            </div>
            <div className="card-download">
              <img src="https://ppsspp.org/img/ppsspp-icon-gold.png" />
              <button className="button-buy">Buy PPSSPP Gold</button>
            </div>
          </div>
        </div>
        <div className="card-colum">
          <img src="https://ppsspp.org/img/screens/small/monsterhunterfreedomunite.jpg" />
          <button className="button-twitter">
            <i class="fa fa-twitter"></i> Follow @PPSSPP_emu
          </button>
          <a href="">PPSSPP On Facebook</a>
          <a href="">Discuss on Discord</a>
        </div>
      </div>
      <div className="divulgations">
        <Divulgation
          title="Play your PSP games in HD!"
          description={
            <>
              PPSSPP can run your PSP games on your PC in full HD resolution,
              and play them on Android too. It can even upscale textures that
              would otherwise be too blurry as they were made for the small
              screen of the original PSP.
              <br/> Even on modern Android phones and tablets, you can often
              run at double the original resolution.
            </>
          }
          buttonText="HD Screenshots"
          link="https://www.xvideos.com"
        />
        <Divulgation
          title="Enhance your experience!"
          description={
            <>  
            • Play in HD resolutions and more<br/>
            • Play on a tablet for big-screen mobile gaming<br/>
            • Customize on-screen touch controls or use an external controller or keyboard<br/>
            • Save and restore game state anywhere, anytime<br/>
            • Crank up the anisotropic filtering and texture scaling<br/>
            • Continue where you left off by transferring saves from your real PSP
            </>
          }
          />
        <Divulgation
          title="Free & Open Source"
          description="PPSSPP is an open source project, licensed under the GPL 2.0 (or later). Anyone is welcome to contribute improvements to the code. Partly thanks to such contributions, PPSSPP's compatibility is steadily increasing, letting us all play our PSP games on the devices of our choice."
          buttonText="GitHub"
          link="https://www.xvideos.com"
        />
      </div>
      <hr />
      <News/>
    </div>
  );
};

export default Component;
