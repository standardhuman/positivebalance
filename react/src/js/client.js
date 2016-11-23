// import React from 'react';
// import {render} from 'react-dom';
//
class CreateNewActivity extends React.Component {
    render() {
        return (
            <div>
                <p>{this.state.activities}</p>
                <form id="newActivity">
                    <h1>
                        <p className="title">Create new activity</p>
                    </h1>
                    <div className="inputs">
                        <p>I would like to
                            <label htmlFor="activityName"></label>
                            <input type="text" id="activity_name" name="activity_name" placeholder="run, drink, meditate..."/>
                            <label htmlFor="more">more</label>
                            <input type="radio" value="1" id="more" name="moreorless"/>
                            <label htmlFor="less">less</label>
                            <input type="radio" value="-1" id="less" name="moreorless"/>
                        </p>
                    </div>
                    <div className="inputs">
                        <p>
                            <label htmlFor="activity_unit">
                                'When I do {this.props.activities}, the smallest amount I might ACTIVITYNAME is'
                            </label>
                            <label htmlFor="min_qty"></label>
                            <input type="number" id="min_qty" name="min_qty" placeholder="1, 2..."/>
                            <input type="text" id="activity_unit" name="activity_unit" placeholder="miles, drink, minutes..."/>
                        </p>
                    </div>
                    <div className="inputs">
                        <label htmlFor="activity_weight">On a scale of 1-10, with 10 being most important, how important is it to me that I ACTIVITYNAME MOREORLESS
                        </label>
                        <br/>
                        <input type="number" id="activity_weight" name="activity_weight" min="1" max="10" placeholder="1-10"/>
                    </div>
                    <br/>
                    <div className="button">
                        <button type="button">Save new activity</button>
                    </div>
                </form>
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
                <UpdateEachActivity/>
            </div>
        )
    }
}

class UpdateEachActivity extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <p>
                        <label for="activity_quantity">How many times did I {this.props.activities.name}
                            {this.props.activities.quantity}
                            {this.props.activities.unit}?</label>
                    </p>
                    <input type="number" name="number" id="activity_quantity"/>
                </form>
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
                <h1>{this.state}</h1>
            </div>
        )
    }
}

class PositiveBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ACTIVITIES: [
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
            ]
        }
    }

    render() {
        return (
            <div>
                <CreateNewActivity activities={this.state.ACTIVITIES}/>
                <PointsSummary/>
                <ActivitySummary/>
                <UpdateActivity/>
            </div>
        )
    }
}

ReactDOM.render(
    <PositiveBalance />, document.getElementById('app'))
