import React, {Component} from 'react';
import {Foot, FirstContent, SecondContent} from './style';

export default class Footer extends Component {
    render(){
        return(
            <Foot>
                <FirstContent>
                    <p>©2018 Delay Inc. All Rights Reserved</p>
                    <p>Real Estate Advertising by Galamat Academy</p>
                </FirstContent>

                <SecondContent>
                    <p>delay.jobs@gmail.com</p>
                    <p>+7 747 894 54 68</p>
                    <p>+7 705 656 92 01</p>
                </SecondContent>
            </Foot>
        );
    }
}