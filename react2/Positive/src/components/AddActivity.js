import React from 'react';


class AddActivity extends React.Component {
  constructor(){
    super()
    this.createActivity = this.createActivity.bind(this);
  }
  showCreateForm(){
    const createForm = document.querySelector('.createForm')
    createForm.classList.toggle('hideForm')
    // console.log(document.querySelector('.createForm'));
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
  }

  render() {

    return (
      <div>
        <form className="createForm hideForm" onSubmit={(e) => this.createActivity(e)}>

          <p>I would like to
          <input type="text" name="name" placeholder="run, meditate, drink..." ref={(input) => this.name = input} />.
          </p>

          <p>
          <input type="radio" name="moreorless" className="moreorless" label="more" value="1" defaultChecked ref={(input) => this.moreorless = input}/> more
          <input type="radio" name="moreorless" className="moreorless" label="less" value="-1" ref={(input) => this.moreorless = input} /> less.
          </p>

          <p>When I , the minimum I would  is
          <input type="text" name="minqty" placeholder="1, 2, 3..." ref={(input) => this.minqty = input}/>
          <input type="text" name="unit" placeholder="miles, minutes, drinks..." ref={(input) => this.unit = input} />.
          </p>

          <p>How important is it to me that I  ?
          <input type="text" name="weight" placeholder="1-10" ref={(input) => this.weight = input} />
          </p>
          <button type="submit">Create Activity</button>
        </form>
        <button onClick={this.showCreateForm}>Create New Activity</button>
      </div>
    )
  }
}

export default AddActivity;
