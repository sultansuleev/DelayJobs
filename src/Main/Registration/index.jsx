import React, {Component} from 'react';
import {Body} from './style';

export default class Registration extends Component {
    render(){
        return(
          <Body>
            <div className="signUp-contain">
                <div className="signUp">
                    <h1 className="title">Регистрация</h1>

                    <form>
                        <input type="text" placeholder="Имя" className="regular inputText"/>
                        <input type="text" placeholder="Фамилия" className="regular inputText"/>
                        <input type="password" placeholder="Пароль" className="regular inputText"/>
                        <input type="text" placeholder="Email или номер телефона" className="regular inputText"/>
                        <div className="chk-box">
                            <input type="radio" id="worker" value="Worker" className="regular inputRadio"/>
                            <label htmlFor="worker" className="regular radVal" style={{marginBottom: '1em'}}>
                                Я СОИСКАТЕЛЬ
                            </label>
                            <input type="radio" id="researcher" value="Researcher" className="regular inputRadio gap"/>
                            <label htmlFor="researcher" className="regular radVal">
                                Я РАБОТАДАТЕЛЬ
                            </label>
                        </div>
                        <input type="submit" value="ЗАРЕГЕСТРИРОВАТЬСЯ" className="regular btn"/>
                    </form>
                </div>

                <div className="agreements">
                    <p>
                        Нажимая «<span className="fill">ЗАРЕГИСТРИРОВАТЬСЯ</span>», вы подтверждаете, что ознакомлены,
                        полностью согласны и принимаете условия «<span className="fill">Соглашения об оказании услуг
                    по содействию в трудоустройстве (оферта)</span>»
                    </p>
                </div>
            </div>
          </Body>
        );
    }
}