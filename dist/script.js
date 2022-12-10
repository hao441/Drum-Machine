function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ids = ["groove", "shuffle", "snare", "bass", "jive", "hive", "joint", "jiggle", "wiggle"];
const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sounds = ['https://bigsoundbank.com/UPLOAD/mp3/0001.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0002.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0003.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0004.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0005.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0006.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0007.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0008.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0009.mp3'];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' };

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/
      React.createElement("h2", null, "Welcome to my Drum Machine"), /*#__PURE__*/
      React.createElement("h5", null, "Click a button to begin")), /*#__PURE__*/

      React.createElement(Bass, null)));


  }}


class Bass extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickHandler",













    e => {
      e.target.children[0].play();
      console.log(e.target.style.color);
      e.target.style.backgroundColor = "red";
      document.getElementById('display').innerHTML = e.target.id;
    });_defineProperty(this, "handleKeyPress",

    e => {
      for (let x = 0; x < keys.length; x++) {
        if (e.key.toUpperCase() === keys[x]) {
          document.getElementById(keys[x]).play();
          document.getElementById('display').innerHTML = ids[x];
        }
      }
    });_defineProperty(this, "createElement",

    keys.map((a, b) => /*#__PURE__*/
    React.createElement("button", { style: {}, className: "drum-pad", id: ids[b], onClick: this.clickHandler }, keys[b], /*#__PURE__*/React.createElement("audio", { id: keys[b], className: "clip", src: sounds[b] }))));this.state = { value: '' };}componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);}componentWillUnmount() {document.addEventListener("keydown", this.handleKeyPress);}




  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/

      React.createElement("div", { id: "bassElements" },
      this.createElement), /*#__PURE__*/

      React.createElement("div", { id: "display" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById('drum-machine'));