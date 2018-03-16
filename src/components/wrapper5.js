import React, { Component } from 'react';
import logo from '../images/logos/logo.jpg';
import isaac from '../images/isaac.jpg'
import $ from 'jquery';

export default class Wrapper5 extends Component {
    componentDidMount(){
        $('.slider').slider({
            interval: 4500,
            transition: 1000
        });
    }

    render(){
        let testimonialStyle = {
            backgroundImage: 'url(' + logo + ')'
        }

        return (
            <div className="wrapper5" id="wrapper5">
                <div className="skills row center" id="skills">
                    <h2>HERE ARE A FEW OF MY SKILLS</h2>
                    <div className="underline slideanim"></div>
                    <div className="col s6 m4 center">
                        <div className="icon html">
                            <i className="devicon-html5-plain colored"></i>
                            <p className="light">HTML5</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon sass">
                            <i className="devicon-sass-plain colored"></i>
                            <p className="light">SASS, CSS3</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon js">
                            <i className="devicon-javascript-plain colored"></i>
                            <p className="light">ReactJS</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon php">
                            <i className="devicon-php-plain colored"></i>
                            <p className="light">PHP, MySQL</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon mongo">
                            <i className="devicon-mongodb-plain colored"></i>
                            <p className="light">MongoDB</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon photoshop">
                            <i className="devicon-photoshop-plain colored"></i>
                            <p className="light">Adobe Photoshop</p>
                        </div>
                    </div>                   
                </div>
                <div className="testimonials" id="testimonials">
                    <h4 className="light center">HERE'S WHAT PEOPLE ARE SAYING ABOUT ME:</h4>
                    <div className="underline2 slideanim"></div>
                    <div className="slider">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(' + isaac + ')', backgroundPosition: 'top center' }}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text"><b>Chibuokem</b> is a developer with experience, passion and great skill set. A developer ready to work, learn and explore. He is a developer I would definitely like to have at close reach</p>
                                        <br/>
                                        <p className="referrer">Akinbosede Oluwatemilorun</p>
                                        <p className="ref-title light">CEO, Rainbow Hub</p>
                                    </div>
                                </div>
                            </li>
                            {/* <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}