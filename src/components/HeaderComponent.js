import React from 'react'
import {Link} from "react-router-dom";
//import style from '../css/style.css';
//import indexstyle from '../css/indexstyle.css';



const HeaderComponent = () => {
    return (
        <div className="header_menu">
            <Link to={"/"} className="header_logo"><img src={require('../img/logo2.png')} alt="" className="header_img"/></Link>
            <span className="empty_punkt"></span>
            <Link to={""} className="punkt">Вход</Link>
            <Link to={"/registration"} className="punkt">Регистрация</Link>
{/*            <Link to={""} className="punkt">Личный кабинет</Link>
            <Link to={""} className="punkt">Список заявок</Link>*/}
        </div>
)
}

export default HeaderComponent