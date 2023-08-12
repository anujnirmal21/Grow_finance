import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [Supply, setSupply] = useState(true);
  function handleSupply(e) {
    setSupply(true);
  }
  function handleTrade(e) {
    setSupply(false);
  }
  return (
    <div className="hero_section">
      <section className="hreo">
        <div className="container">
          <div className="heading">
            <h1>Supply, Trade & Earn</h1>
            <span className="highlight">Crypto Blue Chips</span>
            <div className="btn-2">
              <button>LAUNCH APP</button>
            </div>
          </div>
          <div>
            <div className="head_img">
              <img
                id="hero_img"
                src="https://uploads-ssl.webflow.com/63639430e987e88239681138/6377262b964b870fb97ea483_earn-p-500.png"
                alt="head_image"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="br">
          <p className="txt">Audited by</p>
          <div className="br-img">
            <img
              src="https://uploads-ssl.webflow.com/63639430e987e88239681138/637135043b9c9d8fb32789a9_Peckshield.svg"
              alt="br_img"
            />
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container-2">
          <div className="part-1">
            <div className="heading s-2">
              <span className="h-2">Powered by</span>
              <span className="highlight hl-2">LP Token Liquidity</span>
            </div>
            <p>
              We have created the simplest one click experience to connect v2
              LPs with professionals who are executing volatility based trading
              strategies to allow LPs to supply and earn additional interest
              income at scale
            </p>
          </div>
          <div className="part-2">
            <div className="tab_btn">
              <button id={Supply ? "crr" : ""} onClick={handleSupply}>
                Supply
              </button>
              <button id={Supply ? "" : "crr"} onClick={handleTrade}>
                Trade
              </button>
            </div>
            <div className="tab_content">
              {Supply ? (
                //Supply
                <div className="columns">
                  <div className="col_1">
                    <h1>Genrate More Yield With Your LP Tokens</h1>
                    <p>
                      Supply your LP tokens to get supply interest and more on
                      top of just your AMM swap fees.
                    </p>
                    <div className="btn-2">
                      <button>SUPPLY NOW</button>
                    </div>
                  </div>
                  <div className="col-2">
                    <img
                      id="img_1"
                      src="https://uploads-ssl.webflow.com/63639430e987e88239681138/637728ad84d90ef69df578f4_Supply%20Now-p-500.png"
                      alt="tab_img"
                    />
                  </div>
                </div>
              ) : (
                //Trade
                <div className="columns">
                  <div className="col_1">
                    <h1>Profit in Both Market Directions</h1>
                    <p>
                      Trade impermanent gains to profit when the market moves
                      sharply in either direction
                    </p>
                    <div className="btn-2">
                      <button>TRADE NOW</button>
                    </div>
                  </div>
                  <div className="col-2">
                    <img
                      id="img_1"
                      src="https://uploads-ssl.webflow.com/63639430e987e88239681138/6377289af4c5ff2d5e63f79e_trade%20now-p-500.png"
                      alt="tab_img"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="hero_head">
        <div className="hero_content">
          <span>What are you doing?</span>
        </div>
        <div className="tab_2">
          <div className="columns_2">
            <div className="col_1">
              <h1>Making DeFi Accessible At Scale</h1>
              <p>
                ROE Finance connects v2 LPs with professionals who borrow LP
                tokens to redeploy into v3 to generate additional interest
                income for v2 LPs and professionals to make sustainable income
                from volatility arbitrage
              </p>
            </div>
            <div className="col-2">
              <img
                id="img_2"
                src="https://uploads-ssl.webflow.com/63639430e987e88239681138/6377066e8efb9e3742f7881c_AMMs-p-500.png"
                alt="tab_img"
              />
            </div>
          </div>
        </div>
        <div className="footer_content">
          <div className="item">
            <span>Supported by</span>
            <img
              id="img_3"
              src="https://uploads-ssl.webflow.com/63639430e987e88239681138/637135e7a2eccad084ea9216_QCP%20Logo.svg"
              alt="supports_img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
