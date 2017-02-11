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
    let classes = `${this.props.index} hideForm`
    return (
      <div>
        <h6><a onClick={this.editActivity}>Edit</a></h6>
        <form className={classes}>

          <p>I would like to {name.toLowerCase()}
          <input type="radio" name="moreorless" className="moreorless" label="more" value="1" checked={moreorless > 0 ? 'checked' : ''} onChange={(e)=>this.handleChange(e, index)}/> more
          <input type="radio" name="moreorless" className="moreorless" label="less" value="-1" onChange={(e)=>this.handleChange(e, index)}  checked={moreorless < 0 ? 'checked' : ''}/> less.
          </p>

          <p>When I {name.toLowerCase()}, the minimum I would {name.toLowerCase()} is
          <input type="text" name="minqty" placeholder="1, 2, 3..." value={minqty} onChange={(e)=>this.handleChange(e, index)}/>
          <input type="text" name="unit" placeholder="miles, minutes, drinks..." value={unit} onChange={(e)=>this.handleChange(e, index)}/>.
          </p>
          <p>How important is it to me that I {name.toLowerCase()} {moreorless}?
          <input type="text" name="weight" placeholder="1-10" value={weight} onChange={(e)=>this.handleChange(e, index)}/>
          </p>
        </form>
      </div>
    )
  }
}

export default Modify;
