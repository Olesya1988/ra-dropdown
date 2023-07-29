import { Component } from "react";
import { DropdownList  } from "./DropdownList";

export class Dropdown extends Component {  

  constructor() {
    super();    
    this.handleOnOpenDropdown = this.handleOnOpenDropdown.bind(this);
    this.state = {
        isOpen: 'open'
    };
  }

  handleOnOpenDropdown(e) {
    console.log('click');
    let target = e.target;
    console.log(target);
    let dropdown = document.querySelector('.dropdown-wrapper');
    console.log(dropdown);
    if (target.classList.contains('btn')) {
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            this.setState({ 
                isOpen: 'open'   
            });
        } else {
            dropdown.classList.add('open');
            this.setState({ 
                isOpen: ''          
            });
        }
    }    
  };

  render() {
    return (        
        <div className="container">
            <div data-id="wrapper" className="dropdown-wrapper">
                <button data-id="toggle" className="btn" onClick={this.handleOnOpenDropdown}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList isOpen={this.state.isOpen}/>    
            </div> 
        </div>        
    );
  }
}