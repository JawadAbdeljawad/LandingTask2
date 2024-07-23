
import image from "./assets/image.svg";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import icon from "./assets/icon.svg";

function App() {
  return (
    <body>
      <header className="header">
        <nav className="menu">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </nav>
        <p className="div1">Landing</p>
        <button className="buy-now">Buy Now</button>
      </header>
      <div className="div2">
        <div className="text">
          <p id="p1">Introduce Your Product Quickly & Effectively</p>
          <p id="p2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            <br></br>
            <br></br> mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <button className="but1">Purchase UI Kit</button>
          <button className="but2">Learn More</button>
        </div>
        <div className="image1">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="div3">
        <div class="leftHalf">
          <div className="text1">
            <p id="p3">Light, Fast & Powerful</p>
            <p id="p4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br></br> <br></br>mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </p>
          </div>
          <div className="icons">
            <div className="svg1">
              <img src={icon} alt="" />
              <p id="p5">Title Goes Here</p>
              <p id="p6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="svg2">
              <img src={icon} alt="" />
              <p id="p5">Title Goes Here</p>
              <p id="p6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="image2">
          <img src={image1} alt="" />
        </div>
      </div>

      <div className="div3">
        <div className="image2">
          <img src={image2} alt="" />
        </div>
        <div className="leftHalf">
          <div className="text1">
            <p id="p3">Light, Fast & Powerful</p>
            <p id="p4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br></br> mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
