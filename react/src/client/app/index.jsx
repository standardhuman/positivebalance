// import React from 'react';
// import {render} from 'react-dom';
//
class CreateNewActivity extends React.Component {
    render() {
        return (
            <div>
                <h1>Create New Activity</h1>
            </div>
        /*html {this.props/this.state.varName} */
        )
    }
}

class SaveNewActivity extends React.Component {
    render() {
        return (
            <div>
                <h1>Create New Activity</h1>
            </div>
        )
    }
}

class UpdateActivity extends React.Component {
    render() {
        return (
            <div>
                <h1>Update Activity</h1>
            </div>
        )
    }
}

class ActivitySummary extends React.Component {
    render() {
        return (
            <div>
                <h1>Activity Summary</h1>
            </div>
        )
    }
}

class PointsSummary extends React.Component {
    render() {
        return (
            <div>
                <h1>Points Summary</h1>
            </div>
        )
    }
}

class PositiveBalance extends React.Component {
    render() {
        return <div>
            <CreateNewActivity/>
            <PointsSummary/>
            <ActivitySummary/>
            <UpdateActivity/>
        </div>
    }
}

var ACTIVITIES = [
    {
        name: 'run',
        moreorless: 1,
        quantity: 1,
        unit: 'mile',
        weight: 5,
        didido: 1,
        howmanyunits: 0
    }, {
        name: 'drink',
        moreorless: -1,
        quantity: 1,
        unit: 'drinks',
        weight: 6,
        didido: 1,
        howmanyunits: 0
    }
];

ReactDOM.render(
    <PositiveBalance activities={ACTIVITIES}/>, document.getElementById('container'))
