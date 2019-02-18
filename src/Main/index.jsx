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
                <Route exact path = '/' render={() => <Home/>}/>
                <Route path='/jobsearch' render={() => <JobSear/>}/>
                <Route path='/emlpoysearch' render={() => <EmploySear/>}/>
                <Route path='/about' render={() => <About/>}/>
                <Route path='/help' render={() => <Help/>}/>
            </Switch>
        );
    }
}

export default withRouter(Main);