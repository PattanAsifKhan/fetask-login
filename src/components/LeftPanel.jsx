import React,{useState,useEffect} from 'react'
import "./leftpanel.scss"
import eyeicon from "../assets/eyeicon.png"
import eyeclose from "../assets/eyeclose.png"
import { useDispatch } from "react-redux";
import { setLoginData } from "../redux/Login/action";

const LeftPanel = () => {
    const [userDetail,setUserDetail]=useState({});
    const [passwordVisible,setPasswordVisible]=useState(false);
    const [letButtonEnable,setletButtonEnable]=useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setUserDetail({
            name:"",
            email:"",
            role:"",
            password:"",
            validEmail:false
        })
    }, [])
    useEffect(()=>{
        if(userDetail.email!=undefined && userDetail.role!=undefined && userDetail.name!=undefined && userDetail.validEmail==true){
            if(userDetail.email.length>0 &&  userDetail.role.length>0 && userDetail.name.length>0 && userDetail.password.length>=8){
                setletButtonEnable(true);
            }
        }
    })
    const ChangeUserName=(event)=>{
        const currval=event.target.value;
        setUserDetail({...userDetail,name:currval});
    }
    const ChangeEmailAddress=(event)=>{
        const currval=event.target.value;
        const validate=validateEmail(currval);
        setUserDetail({...userDetail,email:currval,validEmail:validate});
    }
    const ChangePassword=(event)=>{
        const currval=event.target.value;
        setUserDetail({...userDetail,password:currval});
    }
    const showText=()=>{
        setPasswordVisible(!passwordVisible);
    }
    const ChangeRole=(e)=>{
        const currval=(e.target.options[e.target.selectedIndex].text);
        setUserDetail({...userDetail,role:currval});
    }
    const validateEmail=(email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let res=re.test(String(email).toLowerCase());
        return res;
    }
    const showToast=()=>{
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        dispatch(setLoginData(userDetail));
      }
    return (
        <div className="left-panel-main">
            <div className="center-heading-div margin-down">
                <h1>Let's setup your account</h1>
            </div>
            <div className="center-div margin-down"><div className="account-display">Already have a account?</div><a href="homepage">Sign In</a></div>
            <div className="center-div margin-down">
                <input type="text" placeholder="Your name" onChange={ChangeUserName} className="input-without-error"></input>
                <input type="email" placeholder="Email Address" onChange={ChangeEmailAddress} className={userDetail.validEmail===false && userDetail.email!=undefined && userDetail.email.length>0?"input-with-error":"input-without-error"}></input>
                <div className="helper-text">{userDetail.validEmail===false && userDetail.email!=undefined?userDetail.email.length>0?<div className="email-helper">Enter Valid Email</div>:"":""}</div>
                <select onChange={ChangeRole}>
                <option value="" disabled selected>I would describe my user type as</option>
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                </select>
                <div className="left-panel-password">
                <input type={passwordVisible?"text":"password"} placeholder="Password" onChange={ChangePassword} className="input-without-error"  minLength="8" required></input>
                <span><img src={passwordVisible?eyeicon:eyeclose} alt="openeye" onClick={showText}></img></span>
                </div>
                <div className="helper-text">{userDetail.password!==undefined?userDetail.password.length<8?<div className="password-helper">Minimum 8 Charecters</div>:"":""}</div>
                <button className={letButtonEnable==false?"next-button-disable margin-down":"next-button-enable margin-down"} onClick={showToast}>Next</button>
                <div className="terms">By clicking Next button,you agree to creating a free account, and to <a href="homepage">Terms of Service</a> and <a href="homepage">Privacy Policy</a></div>
                <div id="snackbar">Registration Successful</div>
            </div>
        </div>
    )
}

export default LeftPanel
