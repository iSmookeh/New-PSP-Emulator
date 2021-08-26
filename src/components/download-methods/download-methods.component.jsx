import React from "react";
import "./download-methods.styles.css";

const Component = ({
  title,
  description,
  img,
  download1,
  download2,
  download3,
  download4,
  versions,
  link,
  linkTitle,
  type,
}) => {
  return (
    <div>
      <hr />
      <div className="download-container">
        <div className="estrutura1">
          <h2 className="downloads-title">{title}</h2>
          <div className="estrutura2">
            <div className="perso-estrutura2">
              <img src={img} className="downloads-img" />
              <div className="botao-download-esquerda">
                <p className="downloads-description">{description}</p>
                <div className="botao-download-esquerda2">
                  {download3 != undefined ? (
                    <>
                      <a href="" className={`perso-botoes2 ${type}`}>
                        <p>W.MS: Download Latest IPA</p>
                      </a>
                    </>
                  ) : null}
                  {download4 != undefined ? (
                    <>
                      <a href="" className={`perso-botoes2 ${type}`}>
                        <p>W.MS: Download Lasted DEB</p>
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="perso-botoes-download">
              {download1 != undefined ? (
                <a href="" className={`perso-botoes ${type}`}>
                  <img src={download1} className="downloads-btn" />
                  <p>Download</p>
                </a>
              ) : null}
              {download2 != undefined ? (
                <a href="" className={`perso-botoes ${type}`}>
                  <img src={download2} className="downloads-btn" />
                  <p>APK Download</p>
                </a>
              ) : null}

              {versions != undefined ? (
                <a href={versions} className="downloads-versions">
                  Older Versions
                </a>
              ) : null}
            </div>
          </div>
        </div>
        {link != undefined ? (
          <a href={link} className="downloads-link">
            {linkTitle}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Component;
