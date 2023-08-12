import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer_section">
        <div className="foot_txt">
          <ul className="br_columns" id="logo">
            <li className="logo">
              <a href="./App">
                Grow<span>.finance</span>
              </a>
            </li>
          </ul>
          <div className="contents">
            <ul className="br-columns">
              <li className="item" id="li_head">
                ROE FINANCE
              </li>
              <li className="item">supply</li>
              <li className="item">trade</li>
              <li className="item">Terms and Conditions</li>
              <li className="item">Privacy Policy</li>
            </ul>
            <ul className="br-columns">
              <li className="item" id="li_head">
                DOCUMENTATION
              </li>
              <li className="item">Gitbook</li>
              <li className="item">Github</li>
            </ul>
            <ul className="br-columns">
              <li className="item" id="li_head">
                COMMUNITY
              </li>
              <ul className="social_media">
                <li className="item">
                  <img
                    src="https://uploads-ssl.webflow.com/63639430e987e88239681138/63772c46964b8718af7f09eb_Twitter.svg"
                    alt="twitter"
                  />
                </li>
                <li className="item">
                  <img
                    src="https://uploads-ssl.webflow.com/63639430e987e88239681138/63772ad548814a1f8d6d6820_discord.png"
                    alt="discord"
                  />
                </li>
                <li className="item">
                  <img
                    src="https://uploads-ssl.webflow.com/63639430e987e88239681138/63772afe9c7f61310135f89c_medium.png"
                    alt="meta"
                  />
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="rights">
          <p>Copyright © 2022 Grow Finance</p>
        </div>
      </div>
    </>
  );
}
