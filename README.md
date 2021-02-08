# MIDI Controller as a web app

A very simple [MIDI controller](https://en.wikipedia.org/wiki/MIDI_controller): four [Faders](https://en.wikipedia.org/wiki/Fade_(audio_engineering)#Fader) and a button that starts a pre-programmed melody when pressed. 

This MIDI controller is a [React](https://reactjs.org/) web app bootstrapped with [CRA](https://create-react-app.dev/) that acts as a simple client that sends MIDI codes from input events as [POST requests](https://en.wikipedia.org/wiki/POST_(HTTP)) to a Python based [Flask](https://en.wikipedia.org/wiki/Flask_(web_framework)) web server (previously hosted at https://berklee.herokuapp.com/midi). This server tracked the latest inputs and sent the inputs as responses to periodic GET request [polls](https://en.wikipedia.org/wiki/Polling_(computer_science)) from an [Ableton](https://en.wikipedia.org/wiki/Ableton_Live) [DAW](https://en.wikipedia.org/wiki/Digital_audio_workstation) via the use of a custom [Max7](https://cycling74.com/products/max/) script.

This project was built for and won **grand prize** at the [AT&T Entertainment Hackathon 2018](https://www.hackathon.com/event/att-entertainment-hackathon---boston-49627990656) at the [Berklee School of Music](https://college.berklee.edu/events/att-entertainment-hackathon?ss=203791).

## Credits:

[Zachary Towbes](https://www.linkedin.com/in/zachary-towbes-a6b399149/): Audio Engineer and Product Manager
- Created the pre-programmed melody in [Ableton](https://en.wikipedia.org/wiki/Ableton_Live)
- Wrote the custom [Max7](https://cycling74.com/products/max/) Ableton adapter & server polling script 
- Provided a crucial [product managment](https://en.wikipedia.org/wiki/Product_management) role from the beginning through the end of the hackathon. As a student at Berklee School of Music, Zac and came onto the project with a better idea of useful products for the music industry than Zakar or Perry. Zac later took the lead on both demoing and pitching the product at the end of the hackathon, clinching us the grand prize.
- Senior at Berklee School of Music at the time.

[Zakar Handricken](https://www.linkedin.com/in/zakarh/) ([GitHub](https://github.com/zakarh)): Computer Scientist 
- Built the Python based [Flask](https://en.wikipedia.org/wiki/Flask_(web_framework)) web server and hosted it on [Heroku](https://www.heroku.com/) at https://berklee.herokuapp.com/midi (defunct as of 2021)
- [Connected the MIDI Controller GUI to the web server](https://github.com/perrywarner/BerkleeHackathon2018_UI/commit/ac3e0378aad7dcb3457dde3301786687ef93ce9b) after spinning it up
- Saved the project with a [critical bug fix to the GUI](https://github.com/perrywarner/BerkleeHackathon2018_UI/commit/b70c4cbc91414778b1759eed3b827c50f2456472) less then 20 minutes before presenting at the end of the hackathon after it was found that the GUI wasn't sending any MIDI codes in the POST requests to the backend.
- Senior at Bridgewater State University at the time.

[Perry Warner](https://www.linkedin.com/in/perry-warner-132b0682/) ([GitHub](https://github.com/perrywarner)): Frontend Developer and System Architect
- Built the JS & [React](https://reactjs.org/) based web GUI with bootstrapping from [Create React App](https://create-react-app.dev/) and UI components from [Reactstrap](https://reactstrap.github.io/)
- Conceptualized the project's architecture: a webapp sending GUI inputs to a web server that kept track of the input history (input history feature was later nixed for only latest input due to time pressure) and served it to Ableton via a poller script written in JavaScript through Max7
- Collaborated with team to define interface boundaries - we found that passing raw [MIDI codes](https://ccrma.stanford.edu/~craig/articles/linuxmidi/misc/essenmidi.html) around was the simplest way
- Mentored Zac in writing the [Max7](https://cycling74.com/products/max/) server poller with JavaScript
- Software Engineer (5 months out of college) at the time.
