import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import EmploySear from './EmploySear/index';
import JobSear from './JobSear/index';
import Help from './Help/index';

class Main extends Component{

    render(){
        return(
            <Switch>
                <Route exact path = '/' render={() => <Home isVisible = {this.props.isVisible} />}/>
                <Route path='/jobsearch' render={() => <JobSear isVisible = {this.props.isVisible} />}/>
                <Route path='/emlpoysearch' render={() => <EmploySear isVisible = {this.props.isVisible} />}/>
                <Route path='/about' render={() => <About isVisible = {this.props.isVisible} />}/>
                <Route path='/help' render={() => <Help isVisible = {this.props.isVisible} />}/>
            </Switch>
        );
    }
}

export default withRouter(Main);