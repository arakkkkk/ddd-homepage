import "static/css/test.css";

import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

class FirstSlide extends React.Component {
    render() {
        return (
            <div className="section">
                <img src="images/maman1.jpeg" className="img-fluid bg-img" />
                <span>
                    <img src="images/title0.png" alt="フレンチ食堂ママン" id="maman_title" />
                    <p>フランスの家庭料理の美味しさをベースに 親しみやすい料理を</p>
                </span>
            </div>
        );
    }
}

class SecondSlide extends React.Component {
    render() {
        return (
            <div className="section" style={{ backgroundColor: "#583F2A" }}>
                <span>
                    <h1>フレンチ食堂ママン</h1>
                    <p>"ママン"は、フランス語で"お母さん"という意味です。</p>
                    <p>フランスの家庭料理の美味しさをベースに</p>
                    <p>親しみやすい料理を</p>
                    <p>お出しする事を心がけています</p>
                    <div class="mt-4"></div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-4" style={{ width: "120px" }}>
                            <img src="images/maman4.png" className="img-fluid" />
                        </div>
                        <div class="col-1" style={{ marginTop: "30px" }}>
                            <a href="https://www.instagram.com/maman2030toward/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    class="bi bi-instagram"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                            </a>
                        </div>
                        <div class="col-1" style={{ marginTop: "30px" }}>
                            <a href="https://www.hotpepper.jp/strJ001042933/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    class="bi bi-info-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </a>
                        </div>
                        <div class="col-1" style={{ marginTop: "30px" }}>
                            <a href="tel:079-268-7070" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    class="bi bi-telephone-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </span>
            </div>
        );
    }
}

class ThirdSlide extends React.Component {
    render() {
        return (
            <div className="section">
                <img src="images/foods/foods.jpg" className="img-fluid bg-img" />
                <span>
                    <h1>メニュー Menu</h1>
                    <p>
                        <a href="lunch.html">コース</a>
                    </p>
                    <p>
                        <a href="lunch.html">料理</a>
                    </p>
                    <p>
                        <a href="lunch.html">ドリンク</a>
                    </p>
                    <p>
                        <a href="lunch.html">ランチ</a>
                    </p>
                    <p>
                        <a href="lunch.html">テイクアウト</a>
                    </p>
                </span>
            </div>
        );
    }
}

class FourthSlide extends React.Component {
    render() {
        return (
            <div className="section">
                <img src="images/layout.jpg" className="img-fluid bg-img" />
                <span>
                    <h1>店舗情報 Infomation</h1>
                    <div class="row">
                        <div class="col-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.6669929889135!2d134.6325210152366!3d34.86459388039269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e1fb4a6aab83%3A0x29aed1cf46efdcf8!2z44Oe44Oe44Oz!5e0!3m2!1sja!2sjp!4v1636499221264!5m2!1sja!2sjp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div class="col-sm">
                            <p>【ランチ】11:00〜14:00</p>
                            <p>【ディナー】17:30〜20:00</p>
                            <p>月曜定休(祝祭日は営業)</p>
                            <p>兵庫県姫路市飾西41-1</p>
                            <p>
                                <a href="tel:079-268-7070" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        class="bi bi-telephone-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                        />
                                    </svg>
                                    079-268-7070
                                </a>
                            </p>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}

export const Test = () => (
    <div class="toppage">
        <ReactFullpage
            licenseKey={"C5C881D6-81D74A73-AB857381-6D757637"}
            render={({ state, fullpageApi }) => {
                return (
                    <div>
                        <FirstSlide />
                        <SecondSlide />
                        <ThirdSlide />
                        <FourthSlide />
                    </div>
                );
            }}
        />
    </div>
);
