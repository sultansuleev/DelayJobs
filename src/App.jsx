import React, {Fragment, Component} from 'react';
import Header from './Header/index';
import Main from './Main/index';
import Footer from './Footer/index';
import Modal from './Modal/index';

export default class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataSet: []
        }
    }

    componentWillMount() {
        let obj = require('./data/db');
        this.setState({
            dataSet: obj,
        });
    };

    render(){
        return(
          <Fragment>
              <Header func = {this.props.modalShow}/>
              <Main isVisible = {this.props.isVisible} hide={this.props.modalHide} dataSet = {this.state.dataSet}/>
              <Footer/>
              <Modal id="Subject" isShown = {this.props.isVisible} modalHide = {this.props.modalHide} />
          </Fragment>
        );
    }
}