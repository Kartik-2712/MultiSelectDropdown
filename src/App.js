import React, { Component } from 'react';
import './App.css';
// import {Multiselect} from "multiselect-react-dropdown"
import { Multiselect } from './multiselect-react-dropdown-master/src/multiselect/multiselect.component';



export class App1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkOpen: false,
            wallet:{},
            clickAction: ()=>{
                this.setState({
                    checkOpen: true
                })
            },   
            objectArray: [
                { key: "Option 1", cat: "Group 1" , style:{color:"red"}},
                { key: "Option 2", cat: "Group 1" , style:{color:"red"}},
                { key: "Option 3", cat: "Group 1", style:{color:"red"} },
                { key: "Option 4", cat: "Group 2", style:{color:"blue"}},
                { key: "Option 5", cat: "Group 2", style:{color:"blue"} },
                { key: "Option 6", cat: "Group 2" , style:{color:"blue"}},
                { key: "Option 7", cat: "Group 2" , style:{color:"blue"}}
              ],     
             closeButton: ()=>{
                this.setState({
                    checkOpen: false
                })
            },
            selectedValue: [],
            onSelect :(selectedList, selectedItem) =>{
                debugger
                let array = [...this.state.selectedValue, `${selectedItem.cat}-${selectedItem.key}`]
                this.setState({
                    selectedValue: array
                })
                console.log(this.state.selectedValue)
            },
             
            onRemove : (selectedList, removedItem)=> {
                let item = `${removedItem.cat}-${removedItem.key}`
                this.setState({
                    selectedValue: this.state.selectedValue.filter((e)=>{return e !== item})
                })
            } ,
            styles:{
                width: "50%",
                height: "50%",
                margin:"5% 5% 5% 5%"
            }
        }
    }
    
    
    render() {
        return (
            <div style={this.state.styles}>
                 <Multiselect
                    options={this.state.objectArray}
                    groupBy="cat"
                    displayValue="key"
                    showCheckbox={true}
                    displayKey="cat"
                    onSelect={this.state.onSelect} 
                    onRemove={this.state.onRemove} 
                    />

            </div>
        )
    }
}

export default App1
