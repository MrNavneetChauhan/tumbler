import "./footer.scss";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
export const Footer = () => {
  return (
    <div className="footer">
      {/* first bar with some links */}
      <div>
        <div>
          <h3>Trending Now</h3>
          <p>
            <a href="">
              Harry Potter <sup>TM</sup>{" "}
            </a>
          </p>
          <p>
            <a href="">NHL®</a>
          </p>
          <p>
            <a href="">NFL®</a>
          </p>
        </div>
      </div>

      {/* second bar */}

      <div className="email-input-div">
        <form>
          <input placeholder="Email" required type="text" />
          <button>Sign Up</button>
        </form>

        <div>
          <p>HEAR ABOUT NEW PRODUCTS, UPDATES AND OFFERS</p>
        </div>
      </div>

      {/* third bar */}

      <div className="contact_us">
        <div>
          <p>Locate Store</p>
          <form>
            <input required placeholder="Zip Code" type="text" />

            <select required name="" id="">
              <option value="">Radius</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="3000">300</option>
            </select>

            <button>Go</button>
          </form>
        </div>
        {/*  ============  */}
        <div>
          {/* 1 */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Account</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="">My Account</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Saved Projects</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Order Status</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Register Drinkware</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2 */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Get Help</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="">Contact Us</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Guarantee & Returns</a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Use & Care</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Shipping Guide</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">FAQ</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Current Offers</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Klarna</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 3 */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Gift Card</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="">Shop Gift Cards</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Check Balance</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Partnership</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="">Wholesale</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">corporate</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Affiliate</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 4 */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>About</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="">About Tervis</a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="">Sustainability</a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="">Tervis Stores</a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <a href="">Careers</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* second section of About us complete */}
      </div>

      {/* social media icons */}

      <div className="chat-bot-div">

        <div>
            <p>Follow Us</p>
            <Facebook className="icon"/>
            <Instagram className="icon"/>
            <Twitter className="icon"/>
            <Pinterest className="icon"/>
        </div>
        <div>
          <div>
            <img  src="view/chatbot.png" alt="" />
          </div>
        </div>

      </div>

      <div className="copy-right">
        <div>
        <p>© 2022 TERVIS TUMBLER COMPANY. ALL RIGHTS RESERVED.</p>
        </div>
        <div>
        <p><a href="">Privacy</a></p>
        <p><a href="">Terms of Use</a></p>
        <p><a href="">Patents</a></p>
        <p><a href="">Accessibility</a></p>
        </div>
      </div>
      {/* copyright footer subpart */}
    </div>
  );
};
