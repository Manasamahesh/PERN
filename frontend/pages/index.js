import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
export default class PernList extends Component {
constructor (){
super ();
this.state ={
	plan:""
}
}
handlechange=(e)=>{
this.setState({plan:e.target.value})
}
addList =(plan)=>{
axios.post(`https://localhost:5000/createList`, {plan})
.then(res => {
 console.log(res);
 console.log(res.data); 
})
console.log("add this field")
}

deleteList = (id)=>{
  axios.post(`https://localhost:5000/deleteList`, {id})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
console.log("deleted this field")
}
render(){
return (
<div>
	<TextField
        id="standard-uncontrolled"
        label="Uncontrolled"
        defaultValue=""
        margin="normal"
	value={this.state.plan}
	onChange = {this.handlechange}
      />
      <Fab color="primary" aria-label="Add"  onClick ={this.addList(this.state.plan)} >
        <AddIcon />
      </Fab>
     <Fab aria-label="Delete"  onClick= {this.deleteList(this.state.id)}>
       <DeleteIcon />
      </Fab>
</div>
)
}
}
