import React, {Component} from 'react';
import {render} from 'react-dom';
import Toast from '../lib';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                margin: "20px",
                display: "block",
                borderRadius: "3px",
                border: "0",
                backgroundColor: "#38f",
                color: "white",
                padding: "5px 10px",
                fontFamily: "Microsoft YaHei"
            }
        }
    }

    textToast() {
        Toast({
            type: "msg",
            msg: "文本提示",
            duration: 2000
        })
    }

    successToast() {
        Toast({
            type: "success",
            msg: "成功提示",
            duration: 2000
        })
    }

    failToast() {
        Toast({
            type: "fail",
            msg: "错误提示",
            duration: 2000
        })
    }

    startLoadingToast() {
        Toast({
            type: "loading",
            typeStatus: 1,
            msg: "正在加载",
        })
    }

    endLoadingToast() {
        Toast({
            type: "loading",
            typeStatus: 2,
            msg: "正在加载"
        })
    }

    offlineToast() {
        Toast({
            type: "offline",
            msg: "网络错误",
            duration: 1500
        })
    }

    render() {
        return (
            <div style={{paddingTop: "40px"}}>
                <div
                    className="headerBox"
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "40px",
                        lineHeight: "40px",
                        backgroundColor: "rgb(51, 136, 255)",
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center"
                    }}
                >
                    Header
                </div>
                <div
                    className="footerBox"
                    style={{
                        position: "fixed",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "40px",
                        lineHeight: "40px",
                        backgroundColor: "rgb(51, 136, 255)",
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center"
                    }}
                >
                    Footer
                </div>
                <button onClick={this.textToast} style={this.state.style}>
                    文本提示
                </button>
                <button onClick={this.successToast} style={this.state.style}>
                    成功提示
                </button>
                <button onClick={this.failToast} style={this.state.style}>
                    错误提示
                </button>
                <button onClick={this.startLoadingToast} style={this.state.style}>
                    正在加载
                </button>
                <button onClick={this.endLoadingToast} style={this.state.style}>
                    加载完毕
                </button>
                <button onClick={this.offlineToast} style={this.state.style}>
                    网络错误
                </button>
            </div>
        );
    }
}

render(
    <Example />,
    document.getElementById("app")
);
