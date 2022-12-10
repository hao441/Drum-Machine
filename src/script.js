const ids = ["groove","shuffle","snare","bass","jive","hive","joint","jiggle","wiggle"]
const keys = ['Q','W','E','A','S','D','Z','X','C']
const sounds = ['https://bigsoundbank.com/UPLOAD/mp3/0001.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0002.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0003.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0004.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0005.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0006.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0007.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0008.mp3', 'https://bigsoundbank.com/UPLOAD/mp3/0009.mp3']

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    value : ''
     }
  }
 
  render () {
    return (
		<>
		<div id="text">
			<h2>Welcome to my Drum Machine</h2>
			<h5>Click a button to begin</h5>
		</div>
        <Bass />
		</>
    );
  }
}

class Bass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}
	
	componentDidMount () {
		document.addEventListener("keydown", this.handleKeyPress)
	}
	
	componentWillUnmount () {
			document.addEventListener("keydown", this.handleKeyPress)
		}
	
	clickHandler = (e) => {
		e.target.children[0].play();
		console.log(e.target.style.color)
		e.target.style.backgroundColor = "red";
		document.getElementById('display').innerHTML = e.target.id;
	}
	
	handleKeyPress = (e) => {
		for (let x = 0; x <keys.length; x++) {
			if (e.key.toUpperCase() === keys[x]) {
				document.getElementById(keys[x]).play();
				document.getElementById('display').innerHTML = ids[x];
			}
		}
	}
	
	createElement = keys.map((a,b) => 
		<button style={{}} className='drum-pad' id={ids[b]} onClick={this.clickHandler}>{keys[b]}<audio id={keys[b]} className="clip" src={sounds[b]}></audio></button>
						 
	)
	
	
	render () {
		return (
			<>
				
				<div id="bassElements">
					{this.createElement}
				</div>
				<div id="display"></div>
			</>
		);
	}
}

ReactDOM.render(<DrumMachine />, document.getElementById('drum-machine'))