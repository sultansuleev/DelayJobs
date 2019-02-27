import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import EmploySear from './EmploySear/index';
import JobSear from './JobSear/index';
import Help from './Help/index';
import Registration from './Registration/index';

class Main extends Component{

    render(){
        return(
            <Switch>
                <Route exact path = '/' render={() => <Home isVisible = {this.props.isVisible} hide={this.props.hide}/>}/>
                <Route path='/JobSear' render={() => <JobSear isVisible = {this.props.isVisible} hide={this.props.hide} />}/>
                <Route path='/EmlpoySear' render={() => <EmploySear isVisible = {this.props.isVisible} hide={this.props.hide} />}/>
                <Route path='/About' render={() => <About isVisible = {this.props.isVisible}  hide={this.props.hide}/>}/>
                <Route path='/Help' render={() => <Help isVisible = {this.props.isVisible} hide={this.props.hide} />}/>
                <Route path='/Registration' render={() => <Registration/>}/>
            </Switch>
        );
    }
}

export default withRouter(Main);