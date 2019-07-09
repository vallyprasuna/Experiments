import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import KeyValObj from './Object'

class Init extends React.Component {

  constructor() {
    super()
    this.setValueFunc = this.setValueFunc.bind(this)
    this.setKeyFunc = this.setKeyFunc.bind(this)
    this.addKeyVal = this.addKeyVal.bind(this)
    this.KeyValObj = new KeyValObj()
    this.state = {
      key: '',
      val: '',
      data: {}
    }
  }
  componentDidMount() {
    this.setState({ data: this.KeyValObj.getPairs()})
  }

  setKeyFunc = (e) => {
    this.setState({ key: e.target.value })
  }
  setValueFunc = (e) => {
    this.setState({ val: e.target.value })
  }
  addKeyVal = () => {
    console.log("Okies")
    this.KeyValObj.init(this.state.key, this.state.val)
    this.setState({ data: this.KeyValObj.getPairs()})
  }
  render() {
    const {
      key,
      val,
      data
    } = this.state
  return (
    <Fragment>
      <h3>This is a demo using Singleton Pattern in Javascript</h3>
        <TextField onChange={this.setKeyFunc} value={key} placeholder='Enter the key here'/><br/>
        <TextField onChange={this.setValueFunc} value={val} placeholder='Enter the value here'/><br/>
        <Button color="primary" onClick={() => this.addKeyVal()}>
          Add Pair
        </Button>
        <br/>
        {
          Object.keys(data).map(e =>
            <Fragment key={e}>{e} : {data[e]}<br/></Fragment>
          )
        }
    </Fragment>
  )}
}

export default Init
