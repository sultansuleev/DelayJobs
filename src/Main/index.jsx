import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import EmploySear from './EmploySear/index';
import JobSear from './JobSear/index';
import Help from './Help/index';
import Registration from './Registration/index';

class Main extends Component{

    state = {
        dataSet: []
    };

    componentWillMount() {
        let obj = require('../data/db');
        this.setState({
            dataSet: obj,
        });
    };

    render(){
        return(
            <Switch>
                <Route exact path = '/' render={() => <Home/>}/>
                <Route path='/JobSear' render={() => <JobSear dataSet = {this.state.dataSet}/>}/>
                <Route path='/EmploySear' render={() => <EmploySear/>}/>
                <Route path='/About' render={() => <About/>}/>
                <Route path='/Help' render={() => <Help/>}/>
                <Route path='/Registration' render={() => <Registration/>}/>
            </Switch>
        );
    }
}

export default withRouter(Main);