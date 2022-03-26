var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Button from "react-bootstrap/Button";

window.onload = function () {
  function MyNavBar(props) {
    return React.createElement(
      "nav",
      { className: "navbar navbar-expand-lg navbar-light " },
      React.createElement(
        "a",
        { className: "navbar-brand", href: "#" },
        React.createElement("img", { src: "images/logo.svg", width: "100px" })
      ),
      React.createElement(
        "ul",
        { className: "navbar-nav" },
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link mb-4 mt-4", href: "#" },
            "Collections"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link mb-4 mt-4", href: "#" },
            "Men"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link mb-4 mt-4", href: "#" },
            "Women"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link mb-4 mt-4", href: "#" },
            "About"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link mb-4 mt-4", href: "#" },
            "Contact"
          )
        ),
        React.createElement("li", { className: "nav-item position-relative top-0 end-0" })
      ),
      React.createElement(
        "div",
        { className: "position-absolute top-0 end-0" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col" },
            React.createElement(
              "a",
              { className: "nav-link mb-4 mt-4", href: "#" },
              React.createElement("img", { src: "images/icon-cart.svg" })
            )
          ),
          React.createElement(
            "div",
            { className: "col" },
            React.createElement(
              "a",
              { className: "nav-link mb-4 mt-4", href: "#" },
              React.createElement("img", {
                src: "images/image-avatar.png",
                height: "50px",
                className: "avatar-image"
              })
            )
          )
        )
      )
    );
  }

  function ImageVitrine(props) {
    return React.createElement(
      "div",
      { className: "col-6" },
      React.createElement(
        "div",
        { className: props.slideNumber == 1 ? "" : "mySlides" },
        React.createElement("img", {
          src: "images/image-product-1.jpg",
          className: "mt-5 image-vitrine",
          onClick: props.toggleLightBox
        })
      ),
      React.createElement(
        "div",
        { className: props.slideNumber == 2 ? "" : "mySlides" },
        React.createElement("img", {
          src: "images/image-product-2.jpg",
          className: "mt-5 image-vitrine",
          onClick: props.toggleLightBox
        })
      ),
      React.createElement(
        "div",
        { className: props.slideNumber == 3 ? "" : "mySlides" },
        React.createElement("img", {
          src: "images/image-product-3.jpg",
          className: "mt-5 image-vitrine",
          onClick: props.toggleLightBox
        })
      ),
      React.createElement(
        "div",
        { className: props.slideNumber == 4 ? "" : "mySlides" },
        React.createElement("img", {
          src: "images/image-product-4.jpg",
          className: "mt-5 image-vitrine",
          onClick: props.toggleLightBox
        })
      )
    );
  }

  function AddToCart() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        null,
        React.createElement(
          "a",
          { className: "minus", href: "#" },
          "-"
        ),
        React.createElement("input", { type: "number", min: "0", value: "0", className: "number-input" }),
        React.createElement(
          "a",
          { className: "plus", href: "#" },
          "+"
        ),
        React.createElement(
          "button",
          { className: "cart" },
          React.createElement("img", { src: "images/icon-cart-white.svg" }),
          " Add to Cart"
        )
      )
    );
  }

  function TextInformation() {
    return React.createElement(
      "div",
      { className: "col-4 ms-4" },
      React.createElement(
        "h3",
        { className: "colortext-orange" },
        "SNEAKER COMPANY"
      ),
      React.createElement(
        "h2",
        null,
        "Fall Limited Edition Sneakers"
      ),
      React.createElement(
        "p",
        null,
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
      ),
      React.createElement(
        "span",
        { className: "price" },
        "$125.00"
      ),
      React.createElement(
        "span",
        { className: "badge bg-warning ms-2" },
        "50%"
      ),
      React.createElement(
        "p",
        { className: "text-decoration-line-through text-secondary" },
        "$250.00"
      ),
      React.createElement(AddToCart, null)
    );
  }

  function LightBox(props) {
    return React.createElement(
      "div",
      { className: "modal-lightBox" },
      React.createElement(
        "a",
        {
          className: "close-modal-lightBox",
          onClick: function onClick() {
            return props.toggleLightBox();
          },
          href: "#"
        },
        "X"
      ),
      React.createElement(
        "div",
        { className: "center-block" },
        React.createElement(
          "span",
          null,
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { className: "modal-previous", src: "images/icon-previous.svg" })
          )
        ),
        React.createElement("img", {
          className: "image-vitrine-modal",
          width: "700px",
          height: "700px",
          src: "images/image-product-1.jpg"
        }),
        React.createElement(
          "span",
          null,
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { className: "modal-next", src: "images/icon-next.svg" })
          )
        )
      )
    );
  }

  function ImageThumbnail(props) {
    return React.createElement(
      "div",
      { className: "col-6" },
      React.createElement("img", {
        src: "images/image-product-1-thumbnail.jpg",
        onClick: function onClick() {
          return props.currentSlide(1);
        },
        className: "demo cursor mt-5 image-thumbnail"
      }),
      React.createElement("img", {
        src: "images/image-product-2-thumbnail.jpg",
        className: "demo cursor mt-5 image-thumbnail",
        onClick: function onClick() {
          return props.currentSlide(2);
        }
      }),
      React.createElement("img", {
        src: "images/image-product-3-thumbnail.jpg",
        className: "demo cursor mt-5 image-thumbnail",
        onClick: function onClick() {
          return props.currentSlide(3);
        }
      }),
      React.createElement("img", {
        src: "images/image-product-4-thumbnail.jpg",
        className: "demo cursor mt-5 image-thumbnail",
        onClick: function onClick() {
          return props.currentSlide(4);
        }
      })
    );
  }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

      _this.state = { slideNumber: 1, toggleLightBox: false };
      _this.currentSlide = _this.currentSlide.bind(_this);
      _this.toggleLightBox = _this.toggleLightBox.bind(_this);
      return _this;
    }

    _createClass(App, [{
      key: "currentSlide",
      value: function currentSlide(i) {
        this.setState({ slideNumber: i });
      }
    }, {
      key: "nextSlide",
      value: function nextSlide() {}
    }, {
      key: "previousSlide",
      value: function previousSlide() {}
    }, {
      key: "toggleLightBox",
      value: function toggleLightBox() {
        console.log(this.state.toggleLightBox);
        this.setState({ toggleLightBox: !this.state.toggleLightBox });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          React.Fragment,
          null,
          this.state.toggleLightBox ? React.createElement(LightBox, { toggleLightBox: this.toggleLightBox }) : "",
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(MyNavBar, null),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(ImageVitrine, {
                slideNumber: this.state.slideNumber,
                toggleLightBox: this.toggleLightBox
              }),
              React.createElement(TextInformation, null),
              React.createElement(ImageThumbnail, { currentSlide: this.currentSlide })
            )
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  var element = React.createElement(App, null);
  var container = document.getElementById("container");
  ReactDOM.render(element, container);
};