import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n";
import logo from '../public/Logo.png'
import osh from '../public/osh.png'
import map from '../public/map.png'
import gam from '../public/gamburger.png'
import ovqat from '../public/ovqat.png'
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <header>
        <div className="container">
          <div className="q">
            <img src={logo} alt="logo" />
          </div>
          <div className="w">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="ru">Russian</option>
            </select>
            <h2>{t("main-w")}</h2>
            <button className='btn1'>Login</button>
          </div>
        </div>
      </header>
      <main>
        <section className='hero'>
          <div className="container">
            <div className="y">
              <div className="u">
                <h1>{t("title")}</h1>
                <p>{t("main-p")}</p>
              </div>
              <div className="e">
                <div className="r">
                  <button className='btn2'>Delivery</button>
                  <button className='btn3'>Pickup</button>
                </div><hr />
                <div className="t">
                  <input type="text" placeholder='Enter Your Address' />
                  <button className='btn4'>Find Food</button>
                </div>
              </div>
            </div>
            <img src={osh} alt="logo" />
          </div>
        </section>
        <section className="her">
          <div className="container">
            <div className="card">
              <img src={ovqat} alt="logo" />
              <p>Greys Vage</p>
              <button className="btn6">6 Days Remaining</button>
            </div>
            <div className="card">
              <img src={ovqat} alt="logo" />
              <p>Greys Vage</p>
              <button className="btn6">6 Days Remaining</button>
            </div>
            <div className="card">
              <img src={ovqat} alt="logo" />
              <p>Greys Vage</p>
              <button className="btn6">6 Days Remaining</button>
            </div>
          </div>
        </section>
        <section className="ero">
          <h1>How does it work</h1>
          <div className="container">
            <div className="y">
              <img src={map} alt="logo" />
              <h4>Select location</h4>
              <span>Choose the location where your <br /> food will be delivered.</span>
            </div>
            <div className="y">
              <img src={map} alt="logo" />
              <h4>Select location</h4>
              <span>Choose the location where your <br /> food will be delivered.</span>
            </div>
            <div className="y">
              <img src={map} alt="logo" />
              <h4>Select location</h4>
              <span>Choose the location where your <br /> food will be delivered.</span>
            </div>
            <div className="y">
              <img src={map} alt="logo" />
              <h4>Select location</h4>
              <span>Choose the location where your <br /> food will be delivered.</span>
            </div>
          </div>
        </section>
        <section className="er">
          <h1>Popular items</h1>
          <div className="container">
            <div className="u">
              <img src={gam} alt="logo" />
              <h4>Cheese Burger</h4>
              <span>Burger Arena</span>
              <p>$3.88</p>
              <button className="btn7">Order Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;












