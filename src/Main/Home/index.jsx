import React, {Component, Fragment} from 'react';
import ReactLoading from 'react-loading';
import Helmet from 'react-helmet';
import Modal from '../Modal/index';
import Container1 from './Container1/index';
import Container2 from './Container2/index';
import Container3 from './Container3/index';
import {MyHome} from './style';

class Home extends Component{
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

    render(){
        return(
            this.state.isLoading ? <ReactLoading type={'bars'} color={'white'} height={667} width={375}/> :
            <Fragment>
                <Helmet>
                    <title>Главная Страница</title>
                </Helmet>
                <MyHome onLoad={this.props.popUp}>
                    <Modal isVisible = {this.props.isVisible} hide={this.props.hide}/>
                    <Container1/>
                    <Container2/>
                    <Container3 func={this.up}/>
                </MyHome>
            </Fragment>
        );
    }
}

export default Home;