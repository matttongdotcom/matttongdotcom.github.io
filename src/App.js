import './App.css';
import React, {Component} from 'react';
import AboutMePage from "./aboutMe/AboutMePage";

// function App() {
//   return (
//       <div>
//     <div className="App">
//       <header className="App-header">
//         <div>
//           Hi, I'm Matthew Tong
//         </div>
//         <div className="Sub-Header">
//           <p>
//             Welcome to my interactive resume
//           </p>
//         </div>
//         <div>
//           <button className="View-my-work">
//               View my work
//           </button>
//         </div>
//       </header>
//     </div ref={this.content} id="content" class="section">
//       <AboutMePage/>
//       </div>
//   );
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.content = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this)
    }

    scrollToContent() {
        this.content.current.scrollIntoView({ behavior: 'smooth' });
    }

  render() {
    return (
        <div>
          <div className="App">
            <header className="App-header">
              <div>
                Hi, I'm Matthew Tong
              </div>
              <div className="Sub-Header">
                <p>
                  Welcome to my interactive resume
                </p>
              </div>
              <div>
                <button onClick={() => this.scrollToContent()} className="View-my-work">
                  Learn more about me
                </button>
              </div>
            </header>
          </div>
          <div ref={this.content} id="content">
            <AboutMePage/>
          </div>
        </div>
    );
  }
}

export default App;
