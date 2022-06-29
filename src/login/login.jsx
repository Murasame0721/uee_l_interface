import React from 'react';
import './css/style.css'
import hs_title from './img/hs_title.png'
import bg_svg from './img/bg.svg'
import {SuggestSheet} from "../SuggestSheet/SuggestSheet";
import ReactDOM from "react-dom/client";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admissionTicketNumber:'',
            identityNumber:'',
            originalPassword:'',
        }
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="img">
                        <img src={bg_svg} alt=""/>
                    </div>
                    <div className="login-content">
                        <form>
                            <img src={hs_title} alt="华山title" id={'hs_title'}/>
                            <h2 className="title">高考志愿辅助系统</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="text" className="input" placeholder="准考证号" value={this.state.admissionTicketNumber}  onChange={this.handleChange1}/>
                                </div>
                            </div>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="text" className="input" placeholder="身份证号" value={this.state.identityNumber}  onChange={this.handleChange2}/>
                                </div>
                            </div>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="text" placeholder="初始密码" className="input" value={this.state.originalPassword}  onChange={this.handleChange3}/>
                                </div>
                            </div>
                            <a href="https://hs-app-3.qcly.top">使用说明</a>
                            <input type="submit" className="btn" value="登录" onClick={this.submit}/>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    submit=(e)=>{
        e.preventDefault()
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", "/api/login", true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        const thisObject = this;
        httpRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const message = JSON.parse(this.responseText)
                thisObject.next(message.info,message.suggestions)
                //解除加载Login组件，加载SuggestSheet组件
            } else if(this.readyState === 4 && this.status ===404) {
                alert('服务器错误')
            } else if (this.readyState ===4 && this.status===403){
                alert('您似乎不是华山中学的学生，如有疑问请在使用说明中联系开发者')
            }
        };
        httpRequest.send(JSON.stringify(this.state));
    }
    handleChange1 = (event)=>{
        this.setState({admissionTicketNumber: event.target.value});
    }
    handleChange2 = (event)=>{
        this.setState({identityNumber: event.target.value});
    }
    handleChange3 = (event)=>{
        this.setState({originalPassword: event.target.value});
    }
    next = (info,suggestions)=>{
        const root = ReactDOM.createRoot(document.getElementsByClassName('App')[0])
        root.render(<SuggestSheet suggestions={suggestions} info={info}></SuggestSheet>)
        React.unmountComponentAtNode(document.getElementsByClassName('App')[0])
        return (<SuggestSheet suggestions={suggestions} info={info}></SuggestSheet>)
            /**
             * info的格式：{studentName: '李华', studentScore: 600, studentRank: 200}
             */

    }
}
