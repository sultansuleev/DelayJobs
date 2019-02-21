import React, {Component, Fragment} from 'react';
import ReactLoading from 'react-loading';
import ModalAuth from '../ModalAuth/index';
import Container1 from './Container1/index';
import Container2 from './Container2/index';
import Container3 from './Container3/index';
import {MyHome} from './style';
import Header from '../../Header/index';

class Home extends Component{
    state = {
        isVisible: false,
    };
    constructor(props){
        super(props);
        this.state = this.state = {
            avatar: '',
            isLoading: false,
        }
    }
    componentDidMount(){
        this.setState({
            avatar: '', 
            isLoading: false,
        });
    }

    up = () => {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if(currentScroll > 0){
                window.requestAnimationFrame(this.up);
                window.scrollTo(0, (currentScroll - currentScroll/10));
            }
    };

    popUp(){
        let isVis = Header.User;
        isVis.addEventListener("click", function(){
            this.setState({
                isVisible: !this.state.isVisible,
            });
        });

        console.log(this.state.isVisible);
    }

    render(){
        return(
            this.state.isLoading ? <ReactLoading type={'bars'} color={'white'} height={667} width={375}/> :
            <Fragment>
                <MyHome onLoad={this.props.popUp}>
                    <Container1/>
                    <Container2/>
                    <Container3 func={this.up}/>
                </MyHome>
            </Fragment>
        );
    }
}

export default Home;