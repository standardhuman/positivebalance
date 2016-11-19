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

// class SaveNewActivity extends React.Component {
//     render() {
//         return
//     }
// }
//
// class UpdateActivity extends React.Component {
//     render() {
//         return
//     }
// }
//
// class ActivitySummary extends React.Component {
//     render() {
//         return
//     }
// }
//
// class PointsSummary extends React.Component {
//     render() {
//         return
//     }
// }
//
class PositiveBalance extends React.Component {
    render() {
        return <div>
            <CreateNewActivity/>
        </div>
    }
}
ReactDOM.render(
    <PositiveBalance/>, document.getElementById('container'))
