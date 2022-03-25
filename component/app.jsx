// import Button from "react-bootstrap/Button";

window.onload = function () {
  function MyNavBar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          <img src="images/logo.svg" width="100px" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link mb-4 mt-4" href="#">
              Collections
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-4 mt-4" href="#">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-4 mt-4" href="#">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-4 mt-4" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-4 mt-4" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item position-relative top-0 end-0"></li>
        </ul>
        <div className="position-absolute top-0 end-0">
          <div className="row">
            <div className="col">
              <a className="nav-link mb-4 mt-4" href="#">
                <img src="images/icon-cart.svg" />
              </a>
            </div>
            <div className="col">
              <a className="nav-link mb-4 mt-4" href="#">
                <img
                  src="images/image-avatar.png"
                  height="50px"
                  className="avatar-image"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  function ImageVitrine(props) {
    return (
      <div className="col-6">
        <div className={props.slideNumber == 1 ? "" : "mySlides"}>
          <img
            src="images/image-product-1.jpg"
            className="mt-5 image-vitrine"
          />
        </div>

        <div className={props.slideNumber == 2 ? "" : "mySlides"}>
          <img
            src="images/image-product-2.jpg"
            className="mt-5 image-vitrine"
          />
        </div>

        <div className={props.slideNumber == 3 ? "" : "mySlides"}>
          <img
            src="images/image-product-3.jpg"
            className="mt-5 image-vitrine"
          />
        </div>

        <div className={props.slideNumber == 4 ? "" : "mySlides"}>
          <img
            src="images/image-product-4.jpg"
            className="mt-5 image-vitrine"
          />
        </div>
      </div>
    );
  }

  function AddToCart() {
    return (
      <div>
        <form>
          <a className="minus" href="#">
            -
          </a>
          <input type="number" min="0" value="0" className="number-input" />
          <a className="plus" href="#">
            +
          </a>
          <button className="cart">
            <img src="images/icon-cart-white.svg" /> Add to Cart
          </button>
        </form>
      </div>
    );
  }

  function TextInformation() {
    return (
      <div className="col-4 ms-4">
        <h3 className="colortext-orange">SNEAKER COMPANY</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <span className="price">$125.00</span>
        <span className="badge bg-warning ms-2">50%</span>
        <p className="text-decoration-line-through text-secondary">$250.00</p>
        <AddToCart />
      </div>
    );
  }

  class ImageThumbnail extends React.Component {
    constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(i) {
      this.props.currentSlide(i);
    }

    render() {
      return (
        <div className="col-6">
          <img
            src="images/image-product-1-thumbnail.jpg"
            onClick={() => this.handleOnClick(1)}
            className="demo cursor mt-5 image-thumbnail"
          />
          <img
            src="images/image-product-2-thumbnail.jpg"
            className="demo cursor mt-5 image-thumbnail"
            onClick={() => this.handleOnClick(2)}
          />

          <img
            src="images/image-product-3-thumbnail.jpg"
            className="demo cursor mt-5 image-thumbnail"
            onClick={() => this.handleOnClick(3)}
          />
          <img
            src="images/image-product-4-thumbnail.jpg"
            className="demo cursor mt-5 image-thumbnail"
            onClick={() => this.handleOnClick(4)}
          />
        </div>
      );
    }
  }

  class App extends React.Component {
    constructor() {
      super();
      this.state = { slideNumber: 1 };
      this.currentSlide = this.currentSlide.bind(this);
    }

    currentSlide(i) {
      this.setState({ slideNumber: i });
    }

    render() {
      return (
        <div className="container">
          <MyNavBar />
          <div className="row">
            <ImageVitrine slideNumber={this.state.slideNumber} />
            <TextInformation />
            <ImageThumbnail currentSlide={this.currentSlide} />
          </div>
        </div>
      );
    }
  }
  const element = <App />;
  var container = document.getElementById("container");
  ReactDOM.render(element, container);
};
