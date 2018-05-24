import React, { Component, Fragment } from "react"
const windowsAudio = require("../../assets/windowsStartup.mp3")
// import "normalize.css";
import "./styles.css"
// init recognition
const recognition = new (window.SpeechRecognition ||
	window.webkitSpeechRecognition ||
	window.mozSpeechRecognition ||
	window.msSpeechRecognition)()

export default class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}
	componentDidMount = () => {
		this.initializeSpeechRecognitionAndSynthesis()
	}

	componentWillUnmount = () => {
		document.removeEventListener("keydown", this.handleKeyDown, false)
	}

	finishLoading = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
		const synth = window.speechSynthesis
		const msg = new SpeechSynthesisUtterance()
		let voices = synth.getVoices()
		console.log(voices)
		msg.voice = voices[7]
		msg.lang = "hi-En"
		console.log(msg)
		const windowsMusic = new Audio(windowsAudio)
		windowsMusic.play()
		windowsMusic.addEventListener("ended", () => {
			msg.text = "Slides are loaded up"
			synth.speak(msg)
			document.onkeydown = null
		})
	}

	handleKeyDown = (event = window.event) => {
		const charCode = event.keyCode || event.which
		const charStr = String.fromCharCode(charCode)
		console.log(charCode)
		charCode === 38 && recognition.start()
	}

	initializeSpeechRecognitionAndSynthesis = () => {
		// Speech synthesis
		const synth = window.speechSynthesis
		const msg = new SpeechSynthesisUtterance()

		// init Grammar list to fine tune words
		const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
		// init Recognition
		const SpeechRecognitionEvent =
			SpeechRecognitionEvent || webkitSpeechRecognitionEvent

		const keyWords = [
			"ok",
			"google",
			"siri",
			"slides",
			"slide",
			"react",
			"foo",
			"alexa",
			"pappu",
		]
		// Grammar to train
		const grammar = `#JSGF V1.0; grammar keyWords; public <keyWords> = ${keyWords.join(
			" | ",
		)} ;`
		const speechRecognitionList = new SpeechGrammarList()
		speechRecognitionList.addFromString(grammar, 1)
		recognition.grammars = speechRecognitionList
		recognition.lang = "en-US"
		recognition.interimResults = false
		recognition.maxAlternatives = 5

		document.addEventListener("keydown", this.handleKeyDown, false)

		const awaitVoices = new Promise(
			done => (speechSynthesis.onvoiceschanged = done),
		)

		awaitVoices.then(() => {
			let voices = synth.getVoices()
			console.log(voices)
			msg.voice = voices[7]
			msg.lang = "hi-En"
			console.log(msg)
		})

		recognition.onresult = function(event) {
			const spokenWords = event.results[0][0].transcript
			console.log("You said: ", event.results[0][0].transcript)
			if (spokenWords.includes("slide")) {
				msg.text = "Webpack is bundling please wait"
				synth.speak(msg)
				this.setState(prevState => {
					return { count: prevState.count + 1 }
				})
				msg.onend = () => {
					setTimeout(() => {
						this.finishLoading()
					}, 1000)
				}
			} else {
				msg.text = "Hey Jr. Stark! Can you repeat?"
				synth.speak(msg)
			}
		}.bind(this)
	}

	render() {
		return (
			<div>
				{this.state.count === 1 && (
					<div className="container">
						<div className="scene">
							<div className="webpack-cube">
								<div className="outer-cube">
									<div className="face face-top" />
									<div className="face face-bottom" />
									<div className="face face-left" />
									<div className="face face-right" />
									<div className="face face-front" />
									<div className="face face-back" />
								</div>
								<div className="inner-cube">
									<div className="face face-top" />
									<div className="face face-bottom" />
									<div className="face face-left" />
									<div className="face face-right" />
									<div className="face face-front" />
									<div className="face face-back" />
								</div>
							</div>
							<div className="shadows-outer-container">
								<div className="shadow-outer" />
							</div>
							<div className="shadows-inner-container">
								<div className="shadow-inner" />
							</div>
						</div>
					</div>
				)}
				{this.state.count === 2 && (
					<Fragment>
						<div className="react-logo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								version="1.1"
								x="0px"
								y="0px"
								viewBox="0 0 600 600"
								xmlSpace="preserve">
								<circle id="st4" cx="299.529" cy="299.628" r="50.167" />
								<path
									id="st1"
									fill="none"
									strokeMiterlimit={10}
									d="M299.529,197.628  c67.356,0,129.928,9.665,177.107,25.907c56.844,19.569,91.794,49.233,91.794,76.093c0,27.991-37.041,59.503-98.083,79.728  c-46.151,15.291-106.879,23.272-170.818,23.272c-65.554,0-127.63-7.492-174.29-23.441c-59.046-20.182-94.611-52.103-94.611-79.559  c0-26.642,33.37-56.076,89.415-75.616C167.398,207.503,231.515,197.628,299.529,197.628z"
								/>
								<path
									id="st2"
									fill="none"
									stroke="#00D8FF"
									strokeWidth={24}
									strokeMiterlimit={10}
									d="M210.736,248.922  c33.649-58.348,73.281-107.724,110.92-140.48c45.35-39.466,88.507-54.923,111.775-41.505  c24.248,13.983,33.042,61.814,20.067,124.796c-9.81,47.618-33.234,104.212-65.176,159.601  c-32.749,56.788-70.25,106.819-107.377,139.272c-46.981,41.068-92.4,55.929-116.185,42.213  c-23.079-13.31-31.906-56.921-20.834-115.233C153.281,368.316,176.758,307.841,210.736,248.922z"
								/>
								<path
									id="st3"
									fill="none"
									stroke="#00D8FF"
									strokeWidth={24}
									strokeMiterlimit={10}
									d="M210.821,351.482  c-33.746-58.292-56.731-117.287-66.312-166.255c-11.544-58.999-3.382-104.109,19.864-117.566  c24.224-14.024,70.055,2.244,118.14,44.94c36.356,32.28,73.688,80.837,105.723,136.173c32.844,56.733,57.461,114.209,67.036,162.582  c12.117,61.213,2.309,107.984-21.453,121.74c-23.057,13.348-65.249-0.784-110.239-39.499  C285.567,460.886,244.898,410.344,210.821,351.482z"
								/>
							</svg>
						</div>
						<button className="button">Replay</button>
					</Fragment>
				)}
			</div>
		)
	}
}
