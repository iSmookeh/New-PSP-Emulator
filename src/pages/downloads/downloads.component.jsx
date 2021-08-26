import React from "react";
import Downloads from "../../components/download-methods/download-methods.component";

import "./downloads.styles.css";

const Component = () => {
  return (
    <div>
      <hr style={{ marginTop: "32px" }} />
      <a href="" className="link title-download">
        Development builds directly from Git
      </a>
      <Downloads
        title="PPSSPP Gold for Android"
        img="http://ppsspp.org/img/ppsspp-icon-gold.png"
        description={
          <>
            Do you want to support the development of PPSSPP? Buy the Gold
            version of PPSSPP for Android!
            <br />
            Note: Except for the icon, it's the same as the regular version, but
            it makes you feel good, too.
          </>
        }
        download1="https://image.flaticon.com/icons/png/128/300/300218.png"
        type="orange"
      />
      <Downloads
        title="PPSSPP for Android"
        img="http://ppsspp.org/img/ppsspp-icon.png"
        description={
          <>
            Download the latest version of this PSP emulator on{" "}
            <a> Google Play</a>, or simply download and install the .apk files
            from here (surf to this page and touch this button on your device,
            make sure that you have enabled <a>non-Play-Store installs</a>):
          </>
        }
        download1="https://image.flaticon.com/icons/png/128/300/300218.png"
        download2="http://ppsspp.org/img/android-36.png"
        versions=""
        type="blue"
      />
      <Downloads
        title="PPSSPP for Windows"
        img="https://ppsspp.org/img/ppsspp-icon.png"
        description="Download the ZIP file and unpack it where you like, or download an installer."
        download1="https://ppsspp.org/img/windows-36-white.png"
        download2="https://ppsspp.org/img/windows-36-white.png"
        versions=""
        type="blue"
      />
      <Downloads
        title="PPSSPP Gold for Windows"
        img="https://ppsspp.org/img/ppsspp-icon-gold.png"
        description="Do you want to support the development of PPSSPP? Buy the Gold version of PPSSPP for Windows!"
        download1="https://ppsspp.org/img/windows-36-white.png"
        type="orange"
      />
      <Downloads
        title="PPSSPP for iOS"
        img="https://ppsspp.org/img/ppsspp-icon.png"
        description={
          <>
            PPSSPP works on both jailbroken (recommended) and non-jailbroken iOS
            devices.<br/><a href=""> Unofficial PPSSPP builds for iOS devices（W.MS buildbot)</a>
          </>
        }
        download3=""
        download4=""
        versions=""
        type="blue"
      />
    </div>
  );
};

export default Component;
