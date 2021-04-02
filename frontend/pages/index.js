import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

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
add =()=>{
console.log("add this field")
}

delete = ()=>{
console.log("dleted this field")
}
render(){
return (
<div>
	 <TextField
        id="standard-uncontrolled"
        label="Uncontrolled"
        defaultValue=""
        margin="normal"
	onChange = {this.handlechange}
      />
      <Fab color="primary" aria-label="Add"  onClick ={this.add()} >
        <AddIcon />
      </Fab>
     <Fab aria-label="Delete"  onClick= {this.delete()}>
        <DeleteIcon />
      </Fab>
</div>
)
}
}
