import React, {Component} from 'react';
import {Foot, FirstContent, SecondContent} from './style';

export default class Footer extends Component {
    render(){
        return(
            <Foot>
                <FirstContent>
                    <span>©2018 Delay Inc. All Rights Reserved</span>
                    <span>Designed by Malgazhdar Ermahan</span>
                    <span>Real Estate Advertising by Galamat Academy</span>

                </FirstContent>

                <SecondContent>
                    <span>delay.jobs@gmail.com</span>
                    <span>+7 747 894 54 68</span>
                    <span>+7 705 656 92 01</span>
                </SecondContent>
            </Foot>
        );
    }
}