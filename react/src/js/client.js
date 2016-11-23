import React from 'react';
import ReactDOM from 'react-dom';

class CreateNewActivity extends React.Component {
  render(){
      var things = this.props.activities;
    // all js logic
    // props are accessed as: this.props.name
    return (
      <div>
        {things}
      </div>
      // only html(jsx) and var names
    )
  }
}

class PositiveBalance extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  }
    render() {
        return (
            <div>
                <CreateNewActivity activities={this.props.activities}/>
            </div>
        )
    }
}

const ACTIVITIES = [
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

ReactDOM.render(
    <PositiveBalance activities={ACTIVITIES}/>, document.getElementById('app'));
