import React from "react";
import "./news.styles.css";

const Component = () => {
  return (
    <div className="news-container">
      <h2>News</h2>
      <h3>February 7, 2021: PPSSPP 1.11 is here!</h3>
      <p>
        It's been a long wait, but the reward is finally here.
        <br /> PPSSPP 1.11 has a large number of fixes for both long-standing
        and newly discovered issues. As a result, chances are better than ever
        that any game you try will work great!
      </p>
      <div className="perso-button2">
      <img src="https://ppsspp.org/img/ppsspp-icon-gold.png" />
        <a>Buy PPSSPP Gold 1.11.3!</a>              
      </div>
      <div className="perso-button2">
      <img src="https://ppsspp.org/img/ppsspp-icon.png" />
        <a>Download PPSSPP 1.11.3!</a>  
      </div>
      <p>
        1.11.1/2 has some additional crash fixes. 1.11.3 fixes an on-screen
        keyboard rendering glitch.
        <br /> Some of the improvements since 1.10:
      </p>
      <ul>
        <li>
          Lots of minor bug fixes, crash fixes, and performance fixes and
          improvements.
        </li>
        <li>New Browse... button to allow opening SD cards on Android 11</li>
        <li>
          Countless AdHoc networking fixes by ANR2ME, for example Dragon Ball
          Shin Budokai, PowerStone, Bleach Heat The Soul 7, Kingdom Hearts, GTA:
          VCS and many more.
        </li>
        <li>Additional fixed games:</li>
        <ul>
          <li>
            Namco Museum - Battle Collection, Vol 2 (#9523, #13297, #13298)
          </li>
          <li>Dream Club Portable (graphics bugs, GL and Vulkan) (#6025)</li>
        </ul>
      </ul>
      <h3>Older news</h3>
      <p>
        See <a className="link">older news</a>
      </p>
    </div>
  );
};

export default Component;
