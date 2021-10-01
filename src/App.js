import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from './SearchBox.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots} />
            </div>
        );
    }
}

export default App;