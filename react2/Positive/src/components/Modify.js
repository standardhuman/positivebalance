import React from 'react';


class Modify extends React.Component {
  constructor() {
    super()
    this.editActivity = this.editActivity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editActivity (){
    const correctForm = document.querySelector(`.${this.props.index}`);
    correctForm.classList.toggle('hideForm');
  }

  handleChange(e, index){
    const activity = this.props.details
    const updatedActivity = {...activity, [e.target.name]: e.target.value}
    this.props.updateActivity(index, updatedActivity)
  }

  render() {
    const index = this.props.index
    const {name, moreorless, minqty, unit, weight} = this.props.details
    let moreorlessToText = ''
    if(moreorless > 0){
      moreorlessToText = 'more'
    } else {
      moreorlessToText = 'less'
    }
    let classes = `${this.props.index} hideForm`
    return (
      <div className="modifyContainer">
        <h6><a onClick={this.editActivity}>Edit Activity</a></h6>
        <form className={classes}>

          <p>I would like to {name.toLowerCase()}</p>
          <p>
          <input type="radio" name="moreorless" className="moreorless" label="more" value="1" checked={moreorless > 0 ? 'checked' : ''} onChange={(e)=>this.handleChange(e, index)}/> more
          <input type="radio" name="moreorless" className="moreorless" label="less" value="-1" onChange={(e)=>this.handleChange(e, index)}  checked={moreorless < 0 ? 'checked' : ''}/> less.
          </p>

          <p>When I {name.toLowerCase()}, the minimum I would {name.toLowerCase()} is </p>
          <input type="text" name="minqty" placeholder="1, 2, 3..." value={minqty} onChange={(e)=>this.handleChange(e, index)}/>
          <input type="text" name="unit" placeholder="miles, minutes, drinks..." value={unit} onChange={(e)=>this.handleChange(e, index)}/>

          <p>How important is it to me that I {name.toLowerCase()} {moreorlessToText}?
          <select name="weight" placeholder="1-10"  value={weight} onChange={(e)=>this.handleChange(e, index)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5" defaultValue>5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </p>
          <button onClick={this.editActivity}>Save</button>
          <button onClick={() => this.props.removeActivity(index)}>Remove</button>
        </form>

      </div>
    )
  }
}

export default Modify;
