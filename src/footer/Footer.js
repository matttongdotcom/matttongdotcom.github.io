import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="Footer-Title">
                    Contact Me!
                </div>
                <div className="Contact-Item-Wrapper">
                    <div>
                        <p>
                            LinkedIn:
                        </p>
                        <p>
                            GitHub:
                        </p>
                        <p>
                            Email:
                        </p>
                    </div>
                    <div className="Column-2">
                        <p>
                            linkedin.com/in/matt-tong
                        </p>
                        <p>
                            @matttongdotcom
                        </p>
                        <p>
                            tong.ma@northeastern.edu
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer