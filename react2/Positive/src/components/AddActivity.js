import React from 'react';


class AddActivity extends React.Component {
  constructor(){
    super()
    this.createActivity = this.createActivity.bind(this);
    this.state = {name: ''}
  }
  showCreateForm(){
    const createForm = document.querySelector('.createForm')
    createForm.classList.toggle('hideForm')
  }

  createActivity(e) {
    e.preventDefault()
    const activity = {
      name: this.name.value,
      moreorless: this.moreorless.value,
      minqty: this.minqty.value,
      unit: this.unit.value,
      weight: this.weight.value
    }
    this.props.addActivity(activity)
    const form = document.getElementsByClassName('createForm')[0]
    form.reset()
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div className="addActivityContainer">
      <button onClick={this.showCreateForm}>Create New Activity</button>
      <div className="addNewActivity">
        <form className="createForm hideForm" onSubmit={(e) => this.createActivity(e)}>

          <p>I would like to </p>
          <input type="text" name="name" placeholder="run, meditate, drink..." ref={(input) => this.name = input} onChange={(e) => this.handleChange(e)} />
          <p>
          <input type="radio" name="moreorless" className="moreorless" label="more" value="1" defaultChecked ref={(input) => this.moreorless = input}/> more
          <input type="radio" name="moreorless" className="moreorless" label="less" value="-1" ref={(input) => this.moreorless = input} /> less.
        </p>

          <p>When I {this.state.name}, the minimum I would {this.state.name} is</p>
          <input type="text" name="minqty" placeholder="1, 2, 3..." ref={(input) => this.minqty = input}/>
          <input type="text" name="unit" placeholder="miles, minutes, drinks..." ref={(input) => this.unit = input} />


          <p>How important is it to me that I {this.state.name}?</p>
          <select type="text" name="weight" placeholder="1-10" ref={(input) => this.weight = input}>
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

          <button type="submit">Save</button>
        </form>
      </div>
      </div>
    )
  }
}

export default AddActivity;
