// // import React, { Component } from "react";
// // import { Button, Tooltip, OverlayTrigger, FormControl } from "react-bootstrap";
// // import WebrtcSession from "./webrtc";
// // import Keyboard from "./keyboard";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import Accordion from "react-bootstrap/Accordion";
// // import Form from "react-bootstrap/Form";
// // import { io } from "socket.io-client";
// // class SessionManager extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { isToggleOn: true };
// //     this.handleClick = this.handleClick.bind(this);
// //     this.requestFullscreen = this.requestFullscreen.bind(this);
// //     if (props.keyCapture) {
// //       this.enableKeyCapture();
// //     }
// //   }

// //   async requestFullscreen() {
// //     var elem = this.props.videoRef.current;
// //     if (elem.requestFullscreen) {
// //       await elem.requestFullscreen();
// //     } else if (elem.mozRequestFullScreen) {
// //       await elem.mozRequestFullScreen();
// //     } else if (elem.webkitRequestFullscreen) {
// //       await elem.webkitRequestFullscreen();
// //     } else if (elem.msRequestFullscreen) {
// //       await elem.msRequestFullscreen();
// //     }
// //   }

// //   async handleClick() {
// //     if (this.state.isToggleOn) {
// //       try {
// //         if (this.props.fullscreen) {
// //           this.requestFullscreen();
// //         }
// //         this.session = new WebrtcSession(
// //           "ws://192.168.0.2:8888/webrtc",
// //           this.props.options
// //         ); // this.props.url
// //         this.session.setOnStreamCallback(this.props.onStream);
// //         this.session.setOnCloseCallback(() => {
// //           this.setState((state) => ({ isToggleOn: true }));
// //           if (this.keyboard) {
// //             this.removeKeyboardListeners();
// //           }
// //         });
// //         this.session.setOnMessageCallback((msg) => alert(msg));
// //         this.session.setOnDataChannelCallback((datachannel) => {
// //           this.datachannel = datachannel;
// //           if (this.keyboard) {
// //             this.addKeyboardListeners();
// //           }
// //         });
// //         await this.session.call();
// //       } catch (e) {
// //         alert(e);
// //         throw e;
// //       }
// //       this.setState((state) => ({ isToggleOn: false }));
// //     } else {
// //       await this.session.hangup();
// //     }
// //   }

// //   sendKeys(keys) {
// //     console.log(keys);
// //     this.datachannel.send(keys);
// //   }

// //   addKeyboardListeners() {
// //     window.addEventListener("keydown", this.keyboard.onKeyDown, true);
// //     window.addEventListener("keyup", this.keyboard.onKeyUp, true);
// //   }

// //   removeKeyboardListeners() {
// //     window.removeEventListener("keydown", this.keyboard.onKeyDown, true);
// //     window.removeEventListener("keyup", this.keyboard.onKeyUp, true);
// //   }

// //   async enableKeyCapture() {
// //     this.keyboard = new Keyboard((keys) => {
// //       this.sendKeys(keys);
// //       const websocketAddress = "ws://192.168.0.5:8080"; // NestJS WebSocket 서버 주소
// //       const socket = new WebSocket(websocketAddress);

// //       socket.onopen = () => {
// //         socket.send(JSON.stringify({
// //           event: 'command',
// //           data: 'test',
// //         }),)
// //       };
// //       socket.onmessage = event => {
// //         const blob = new Blob([event.data], {type: 'image/jpeg'});
// //         const url = URL.createObjectURL(blob);
// //       }
// //     });

// //     if (this.datachannel) {
// //       this.addKeyboardListeners();
// //       console.log("key capture enabled");
// //     }
// //   }

// //   disableKeyCapture() {
// //     if (this.datachannel) {
// //       this.removeKeyboardListeners();
// //       console.info("key capture disabled");
// //     }
// //     this.keyboard = null;
// //   }

// //   render() {
// //     const tooltip = (
// //       <Tooltip id="tooltip">
// //         Start the screen sharing session. Keyboard events will then be sent to
// //         the remote peer.
// //       </Tooltip>
// //     );

// //     return (
// //       <OverlayTrigger placement="right" overlay={tooltip}>
// //         <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">
// //           {this.state.isToggleOn ? "Start" : "Stop"}
// //         </Button>
// //       </OverlayTrigger>
// //     );
// //   }
// // }

// // class Options extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleChangeKeyCapture = this.handleChangeKeyCapture.bind(this);
// //     this.handleChangeCodec = this.handleChangeCodec.bind(this);
// //     this.handleChangeResolution = this.handleChangeResolution.bind(this);
// //     this.handleChangeIceServers = this.handleChangeIceServers.bind(this);
// //     this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
// //   }

// //   handleChangeKeyCapture(e) {
// //     this.props.onKeyCaptureChange(e.target.checked);
// //   }

// //   handleChangeFullscreen(e) {
// //     this.props.onFullscreenChange(e.target.checked);
// //   }

// //   handleChangeCodec(e) {
// //     this.props.options.useH264 = e.target.checked;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   handleChangeResolution(e) {
// //     this.props.options.resolution = e.target.value;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   handleChangeIceServers(e) {
// //     if (e.target.value === "") {
// //       this.props.options.iceServers = null;
// //       this.props.onOptionsChange(this.props.options);
// //     } else {
// //       try {
// //         this.props.options.iceServers = JSON.parse(e.target.value);
// //         this.props.onOptionsChange(this.props.options);
// //       } catch (e) {
// //         console.log(e);
// //       }
// //     }
// //   }

// //   render() {
// //     const tooltipCodec = <Tooltip id="tooltipCodec">Recommended</Tooltip>;
// //     const tooltipShareKeyboard = (
// //       <Tooltip id="tooltipShareKeyboard">
// //         Useful to get full control of the remote peer with your keyboard
// //       </Tooltip>
// //     );
// //     const tooltipIceServers = (
// //       <Tooltip id="tooltipIceServers">
// //         WebRTC ICE Servers as standard JSON string.{" "}
// //         <strong>Leave the default value if you do not know</strong>
// //       </Tooltip>
// //     );
// //     const tooltipFullscreen = (
// //       <Tooltip id="tooltipFullscreen">
// //         Start in fullscreen mode in the browser
// //       </Tooltip>
// //     );
// //     return (
// //       <Accordion id="panelElement" bsStyle="info">
// //         <Accordion.Header>Options</Accordion.Header>
// //         <Accordion.Body collapsible>
// //         </Accordion.Body>
// //         <Accordion.Body collapsible>
// //           <Form>
// //             <Form.Check
// //               type="checkbox"
// //               checked={this.props.options.useH264}
// //               onChange={this.handleChangeCodec}
// //             >
// //               <Form.Check.Label>
// //                 <OverlayTrigger placement="top" overlay={tooltipCodec}>
// //                   <span>Use H264 hardware acceleration</span>
// //                 </OverlayTrigger>
// //               </Form.Check.Label>
// //             </Form.Check>
// //           </Form>
// //         </Accordion.Body>
// //         <Accordion.Body collapsible>
// //           <Form.Select
// //             aria-label="Default select example"
// //             id="resolutionElement"
// //             componentClass="select"
// //             placeholder="resolution"
// //             onChange={this.handleChangeResolution}
// //             value={this.props.options.resolution}
// //             bsSize="small"
// //           >
// //             <option value="5">320x240 15 fps</option>
// //             <option value="10">320x240 30 fps</option>
// //             <option value="25">640x480 15 fps</option>
// //             <option value="30">640x480 30 fps</option>
// //             <option value="35">800x480 30 fps</option>
// //             <option value="40">960x720 30 fps</option>
// //             <option value="50">1024x768 30 fps</option>
// //             <option value="55">1280x720 15 fps</option>
// //             <option value="60">1280x720 30 fps</option>
// //             <option value="65">1280x768 15 fps</option>
// //             <option value="70">1280x768 30 fps</option>
// //             <option value="80">1280x960 30 fps</option>
// //             <option value="90">1600x768 30 fps</option>
// //             <option value="95">1640x1232 15 fps</option>
// //             <option value="97">1640x1232 30 fps</option>
// //             <option value="100">1920x1080 15 fps</option>
// //             <option value="105">1920x1080 30 fps</option>
// //           </Form.Select>
// //         </Accordion.Body>
// //       </Accordion>
// //     );
// //   }
// // }

// // class ScreenSharing extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleUrlChange = this.handleUrlChange.bind(this);
// //     this.handleOptionsChange = this.handleOptionsChange.bind(this);
// //     this.handleChangeKeyCapture = this.handleChangeKeyCapture.bind(this);
// //     this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
// //     this.handleChangeResolution = this.handleChangeResolution.bind(this);
// //     this.onStream = this.onStream.bind(this);
// //     this.videoRef = React.createRef();
// //     this.sessionRef = React.createRef();
// //     this.state = {
// //       url: this.getDefaultUrl(), // e.g. "ws://192.168.1.10:9080/stream/webrtc",
// //       options: {
// //         useH264: true,
// //         resolution: "60",
// //         iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }],
// //       },
// //       keyCapture: true,
// //       fullscreen: typeof window.orientation !== "undefined", // simple way to check if we are on a mobile
// //     };
// //   }

// //   getDefaultUrl() {
// //     return "ws://192.168.100.250:8888/webrtc";
// //     // if (window.location.hostname) {
// //     //   var address =
// //     //     window.location.hostname +
// //     //     ":" +
// //     //     (window.location.port ||
// //     //       (window.location.protocol === "https:" ? 443 : 80)) +
// //     //     "/";
// //     //   var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
// //     //   var url = protocol + "//" + address;
// //     //   return url;
// //     // }
// //     // return "";
// //   }

// //   handleUrlChange(url) {
// //     this.setState({ url });
// //   }

// //   handleOptionsChange(options) {
// //     this.setState({ options });
// //   }

// //   handleChangeKeyCapture(e) {
// //     this.setState({ keyCapture: !this.state.keyCapture });
// //     if (!this.state.keyCapture) {
// //       this.sessionRef.current.enableKeyCapture();
// //     } else {
// //       this.sessionRef.current.disableKeyCapture();
// //     }
// //   }

// //   handleChangeFullscreen(fullscreen) {
// //     this.setState({ fullscreen });
// //   }

// //   handleChangeResolution(e) {
// //     this.props.options.resolution = e.target.value;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   async onStream(stream) {
// //     this.videoRef.current.srcObject = stream;
// //     await this.videoRef.current.play();
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <div>
// //           <video src={this.state.url} style={{width : '600px', height : '300px'}}id="videoElement" autoPlay="" controls>
// //             Your browser does not support the video tag.
// //           </video>
// //         </div>
// //         <div>
// //           <Options
// //             options={this.state.options}
// //             onOptionsChange={this.handleOptionsChange}
// //             keyCapture={this.state.keyCapture}
// //             onKeyCaptureChange={this.handleChangeKeyCapture}
// //             fullscreen={this.state.fullscreen}
// //             onFullscreenChange={this.handleChangeFullscreen}
// //           />
// //         </div>
// //         <SessionManager
// //           ref={this.sessionRef}
// //           url={this.state.url}
// //           keyCapture={this.state.keyCapture}
// //           options={this.state.options}
// //           onStream={this.onStream}
// //           videoRef={this.videoRef}
// //           fullscreen={this.state.fullscreen}
// //         />
// //       </div>
// //     );
// //   }
// // }

// // const Remoteplay = () => {
// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
// //       <h1>원격놀이</h1>
// //       <ScreenSharing />
// //     </div>
// //   );
// // };
// // export default Remoteplay;

// // import React, { Component } from "react";
// // import { Button, Tooltip, OverlayTrigger, FormControl } from "react-bootstrap";
// // import WebrtcSession from "./webrtc";
// // import Keyboard from "./keyboard";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import Accordion from "react-bootstrap/Accordion";
// // import Form from "react-bootstrap/Form";

// // class SessionManager extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { isToggleOn: true };
// //     this.handleClick = this.handleClick.bind(this);
// //     this.requestFullscreen = this.requestFullscreen.bind(this);
// //     if (props.keyCapture) {
// //       this.enableKeyCapture();
// //     }
// //   }

// //   async requestFullscreen() {
// //     var elem = this.props.videoRef.current;
// //     if (elem.requestFullscreen) {
// //       await elem.requestFullscreen();
// //     } else if (elem.mozRequestFullScreen) {
// //       await elem.mozRequestFullScreen();
// //     } else if (elem.webkitRequestFullscreen) {
// //       await elem.webkitRequestFullscreen();
// //     } else if (elem.msRequestFullscreen) {
// //       await elem.msRequestFullscreen();
// //     }
// //   }

// //   async handleClick() {
// //     if (this.state.isToggleOn) {
// //       try {
// //         if (this.props.fullscreen) {
// //           this.requestFullscreen();
// //         }
// //         this.session = new WebrtcSession(
// //           "ws://192.168.1.6:6001",
// //           this.props.options
// //         ); // this.props.url
// //         this.session.setOnStreamCallback(this.props.onStream);
// //         this.session.setOnCloseCallback(() => {
// //           this.setState((state) => ({ isToggleOn: true }));
// //           if (this.keyboard) {
// //             this.removeKeyboardListeners();
// //           }
// //         });
// //         this.session.setOnMessageCallback((msg) => alert(msg));
// //         this.session.setOnDataChannelCallback((datachannel) => {
// //           this.datachannel = datachannel;
// //           if (this.keyboard) {
// //             this.addKeyboardListeners();
// //           }
// //         });
// //         await this.session.call();
// //       } catch (e) {
// //         alert(e);
// //         throw e;
// //       }
// //       this.setState((state) => ({ isToggleOn: false }));
// //     } else {
// //       await this.session.hangup();
// //     }
// //   }

// //   sendKeys(keys) {
// //     console.log(keys);
// //     this.datachannel.send(keys);
// //   }

// //   addKeyboardListeners() {
// //     window.addEventListener("keydown", this.keyboard.onKeyDown, true);
// //     window.addEventListener("keyup", this.keyboard.onKeyUp, true);
// //   }

// //   removeKeyboardListeners() {
// //     window.removeEventListener("keydown", this.keyboard.onKeyDown, true);
// //     window.removeEventListener("keyup", this.keyboard.onKeyUp, true);
// //   }

// //   enableKeyCapture() {
// //     this.keyboard = new Keyboard((keys) => {
// //       // this.sendKeys(keys);
// //       const websocketAddress = "ws://192.168.1.6:6001";
// //       const socket = new WebSocket(websocketAddress);
// //       socket.onopen = () => {
// //         socket.send(
// //           JSON.stringify({
// //             event: "command",
// //             data: keys,
// //           })
// //         );

// //       };
// //       // socket.onmessage = (event) => {
// //       //   const blob = new Blob([event.data], { type: "image/jpeg" });
// //       //   const url = URL.createObjectURL(blob);

// //       //   // You can do something with the 'url' here
// //       // };
// //     });
// //     if (this.datachannel) {
// //       this.addKeyboardListeners();
// //       console.info("key capture enabled");
// //     }
// //   }

// //   disableKeyCapture() {
// //     if (this.datachannel) {
// //       this.removeKeyboardListeners();
// //       console.info("key capture disabled");
// //     }
// //     this.keyboard = null;
// //   }

// //   render() {
// //     const tooltip = (
// //       <Tooltip id="tooltip">
// //         Start the screen sharing session. Keyboard events will then be sent to
// //         the remote peer.
// //       </Tooltip>
// //     );

// //     return (
// //       <OverlayTrigger placement="right" overlay={tooltip}>
// //         <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">
// //           {this.state.isToggleOn ? "Start" : "Stop"}
// //         </Button>
// //       </OverlayTrigger>
// //     );
// //   }
// // }

// // class Options extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleChangeKeyCapture = this.handleChangeKeyCapture.bind(this);
// //     this.handleChangeCodec = this.handleChangeCodec.bind(this);
// //     this.handleChangeResolution = this.handleChangeResolution.bind(this);
// //     this.handleChangeIceServers = this.handleChangeIceServers.bind(this);
// //     this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
// //   }

// //   handleChangeKeyCapture(e) {
// //     this.props.onKeyCaptureChange(e.target.checked);
// //   }

// //   handleChangeFullscreen(e) {
// //     this.props.onFullscreenChange(e.target.checked);
// //   }

// //   handleChangeCodec(e) {
// //     this.props.options.useH264 = e.target.checked;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   handleChangeResolution(e) {
// //     this.props.options.resolution = e.target.value;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   handleChangeIceServers(e) {
// //     if (e.target.value === "") {
// //       this.props.options.iceServers = null;
// //       this.props.onOptionsChange(this.props.options);
// //     } else {
// //       try {
// //         console.log(e.target.value);
// //         console.log(typeof e.target.value);

// //         this.props.options.iceServers = JSON.parse(e.target.value);
// //         this.props.onOptionsChange(this.props.options);
// //       } catch (e) {
// //         console.log(e);
// //       }
// //     }
// //   }

// //   render() {
// //     const tooltipCodec = <Tooltip id="tooltipCodec">Recommended</Tooltip>;
// //     const tooltipShareKeyboard = (
// //       <Tooltip id="tooltipShareKeyboard">
// //         Useful to get full control of the remote peer with your keyboard
// //       </Tooltip>
// //     );
// //     const tooltipIceServers = (
// //       <Tooltip id="tooltipIceServers">
// //         WebRTC ICE Servers as standard JSON string.{" "}
// //         <strong>Leave the default value if you do not know</strong>
// //       </Tooltip>
// //     );
// //     const tooltipFullscreen = (
// //       <Tooltip id="tooltipFullscreen">
// //         Start in fullscreen mode in the browser
// //       </Tooltip>
// //     );
// //     return (
// //       <Accordion id="panelElement" bsStyle="info">
// //         <Accordion.Header>Options</Accordion.Header>
// //         <Accordion.Body collapsible></Accordion.Body>
// //         <Accordion.Body collapsible>
// //           <Form>
// //             <Form.Check
// //               type="checkbox"
// //               checked={this.props.options.useH264}
// //               onChange={this.handleChangeCodec}
// //             >
// //               <Form.Check.Label>
// //                 <OverlayTrigger placement="top" overlay={tooltipCodec}>
// //                   <span>Use H264 hardware acceleration</span>
// //                 </OverlayTrigger>
// //               </Form.Check.Label>
// //             </Form.Check>
// //           </Form>
// //         </Accordion.Body>
// //         <Accordion.Body collapsible>
// //           <Form.Select
// //             aria-label="Default select example"
// //             id="resolutionElement"
// //             componentClass="select"
// //             placeholder="resolution"
// //             onChange={this.handleChangeResolution}
// //             value={this.props.options.resolution}
// //             bsSize="small"
// //           >
// //             <option value="5">320x240 15 fps</option>
// //             <option value="10">320x240 30 fps</option>
// //             <option value="25">640x480 15 fps</option>
// //             <option value="30">640x480 30 fps</option>
// //             <option value="35">800x480 30 fps</option>
// //             <option value="40">960x720 30 fps</option>
// //             <option value="50">1024x768 30 fps</option>
// //             <option value="55">1280x720 15 fps</option>
// //             <option value="60">1280x720 30 fps</option>
// //             <option value="65">1280x768 15 fps</option>
// //             <option value="70">1280x768 30 fps</option>
// //             <option value="80">1280x960 30 fps</option>
// //             <option value="90">1600x768 30 fps</option>
// //             <option value="95">1640x1232 15 fps</option>
// //             <option value="97">1640x1232 30 fps</option>
// //             <option value="100">1920x1080 15 fps</option>
// //             <option value="105">1920x1080 30 fps</option>
// //           </Form.Select>
// //         </Accordion.Body>
// //       </Accordion>
// //     );
// //   }
// // }

// // class ScreenSharing extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleUrlChange = this.handleUrlChange.bind(this);
// //     this.handleOptionsChange = this.handleOptionsChange.bind(this);
// //     this.handleChangeKeyCapture = this.handleChangeKeyCapture.bind(this);
// //     this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
// //     this.handleChangeResolution = this.handleChangeResolution.bind(this);
// //     this.onStream = this.onStream.bind(this);
// //     this.videoRef = React.createRef();
// //     this.sessionRef = React.createRef();
// //     this.state = {
// //       url: this.getDefaultUrl(), // e.g. "ws://192.168.1.10:9080/stream/webrtc",
// //       options: {
// //         useH264: true,
// //         resolution: "60",
// //         iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }],
// //       },
// //       keyCapture: true,
// //       fullscreen: typeof window.orientation !== "undefined", // simple way to check if we are on a mobile
// //     };
// //   }

// //   getDefaultUrl() {
// //     return "ws://192.168.1.6:6001";
// //     // if (window.location.hostname) {
// //     //   var address =
// //     //     window.location.hostname +
// //     //     ":" +
// //     //     (window.location.port ||
// //     //       (window.location.protocol === "https:" ? 443 : 80)) +
// //     //     "/";
// //     //   var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
// //     //   var url = protocol + "//" + address;
// //     //   return url;
// //     // }
// //     // return "";
// //   }

// //   handleUrlChange(url) {
// //     this.setState({ url });
// //   }

// //   handleOptionsChange(options) {
// //     this.setState({ options });
// //   }

// //   handleChangeKeyCapture(e) {
// //     this.setState({ keyCapture: !this.state.keyCapture });
// //     if (!this.state.keyCapture) {
// //       this.sessionRef.current.enableKeyCapture();
// //     } else {
// //       this.sessionRef.current.disableKeyCapture();
// //     }
// //   }

// //   handleChangeFullscreen(fullscreen) {
// //     this.setState({ fullscreen });
// //   }

// //   handleChangeResolution(e) {
// //     this.props.options.resolution = e.target.value;
// //     this.props.onOptionsChange(this.props.options);
// //   }

// //   async onStream(stream) {
// //     this.videoRef.current.srcObject = stream;
// //     await this.videoRef.current.play();
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <div>
// //           <video
// //             ref={this.videoRef}
// //             style={{ width: "600px", height: "300px" }}
// //             id="videoElement"
// //             autoPlay=""
// //             controls
// //           >
// //             Your browser does not support the video tag.
// //           </video>
// //         </div>
// //         <div>
// //           <Options
// //             options={this.state.options}
// //             onOptionsChange={this.handleOptionsChange}
// //             keyCapture={this.state.keyCapture}
// //             onKeyCaptureChange={this.handleChangeKeyCapture}
// //             fullscreen={this.state.fullscreen}
// //             onFullscreenChange={this.handleChangeFullscreen}
// //           />
// //         </div>
// //         <SessionManager
// //           ref={this.sessionRef}
// //           url={this.state.url}
// //           keyCapture={this.state.keyCapture}
// //           options={this.state.options}
// //           onStream={this.onStream}
// //           videoRef={this.videoRef}
// //           fullscreen={this.state.fullscreen}
// //         />
// //       </div>
// //     );
// //   }
// // }

// // const Remoteplay = () => {
// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         paddingTop: "200px",
// //       }}
// //     >
// //       <h1>원격놀이</h1>
// //       <ScreenSharing />
// //     </div>
// //   );
// // };
// // export default Remoteplay;

// // ChatGPT 꺼
// import React, { Component } from "react";
// import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
// import Keyboard from "./keyboard";
// import Accordion from "react-bootstrap/Accordion";
// import Form from "react-bootstrap/Form";

// class SessionManager extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//     this.handleClick = this.handleClick.bind(this);
//     this.enableKeyCapture = this.enableKeyCapture.bind(this);
//     this.disableKeyCapture = this.disableKeyCapture.bind(this);
//   }

//   async handleClick() {
//     if (this.state.isToggleOn) {
//       try {
//         this.enableKeyCapture();
//       } catch (e) {
//         alert(e);
//         throw e;
//       }
//       this.setState({ isToggleOn: false });
//     } else {
//       this.disableKeyCapture();
//       this.setState({ isToggleOn: true });
//     }
//   }

//   enableKeyCapture() {
//     this.keyboard = new Keyboard((keys) => {
//       const socket = new WebSocket(this.props.websocketAddress);

//       socket.onopen = () => {
//         socket.send(
//           JSON.stringify({
//             event: "command",
//             data: keys,
//           })
//         );
//       };
//     });
//   }

//   disableKeyCapture() {
//     if (this.keyboard) {
//       this.keyboard.destroy();
//       this.keyboard = null;
//     }
//   }

//   render() {
//     const tooltip = (
//       <Tooltip id="tooltip">
//         Start capturing keyboard events and send them through WebSocket.
//       </Tooltip>
//     );

//     return (
//       <OverlayTrigger placement="right" overlay={tooltip}>
//         <Button onClick={this.handleClick} bsStyle="primary" bsSize="large">
//           {this.state.isToggleOn ? "Start" : "Stop"}
//         </Button>
//       </OverlayTrigger>
//     );
//   }
// }

// class ScreenSharing extends Component {
//   constructor(props) {
//     super(props);
//     this.handleUrlChange = this.handleUrlChange.bind(this);
//     this.handleOptionsChange = this.handleOptionsChange.bind(this);
//     this.handleChangeKeyCapture = this.handleChangeKeyCapture.bind(this);
//     this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
//     this.handleChangeResolution = this.handleChangeResolution.bind(this);
//     this.onStream = this.onStream.bind(this);
//     this.videoRef = React.createRef();
//     this.sessionRef = React.createRef();
//     this.state = {
//       url: this.getDefaultUrl(),
//       options: {
//         useH264: true,
//         resolution: "60",
//         iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }],
//       },
//       keyCapture: true,
//       fullscreen: typeof window.orientation !== "undefined",
//     };
//   }

//   getDefaultUrl() {
//     return "ws://192.168.1.6:6001"; // Update with your default URL
//   }

//   handleUrlChange(url) {
//     this.setState({ url });
//   }

//   handleOptionsChange(options) {
//     this.setState({ options });
//   }

//   handleChangeKeyCapture() {
//     this.setState((prevState) => ({
//       keyCapture: !prevState.keyCapture,
//     }));
//   }

//   handleChangeFullscreen(fullscreen) {
//     this.setState({ fullscreen });
//   }

//   handleChangeResolution(e) {
//     const newOptions = {
//       ...this.state.options,
//       resolution: e.target.value,
//     };
//     this.setState({ options: newOptions });
//   }

//   async onStream(stream) {
//     this.videoRef.current.srcObject = stream;
//     await this.videoRef.current.play();
//   }

//   render() {
//     return (
//       <div>
//         <video
//           ref={this.videoRef}
//           style={{ width: "600px", height: "300px" }}
//           id="videoElement"
//           autoPlay=""
//           controls
//         >
//           Your browser does not support the video tag.
//         </video>
//         <SessionManager
//           websocketAddress={this.state.url}
//           ref={this.sessionRef}
//         />
//       </div>
//     );
//   }
// }

// const Remoteplay = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         paddingTop: "200px",
//       }}
//     >
//       <h1>원격놀이</h1>
//       <ScreenSharing />
//     </div>
//   );
// };
// export default Remoteplay;
// App.js
// App.js
// App.js

import React, { useState, useEffect, useRef } from "react";

function App() {
  const imgRef = useRef(null);
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:6001"); // WebSocket 서버 주소를 적절히 변경

    wsRef.current.onmessage = (event) => {
      const imageBuffer = event.data; // 이미지 데이터를 Buffer로 받아옴
      const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
      const imageURL = URL.createObjectURL(imageBlob);
      imgRef.current.src = imageURL;
    };

    return () => {
      wsRef.current.close();
    };
  }, []);

  return (
    <div>
      <img ref={imgRef} alt="Received Image" />
    </div>
  );
}

export default App;
