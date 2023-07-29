import { Component } from "react";
import { DropdownItem } from "./DropdownItem";

export class DropdownList extends Component {   

  render() {    
    return (
        <ul data-id="dropdown" className="dropdown">
            <DropdownItem/>            
        </ul>
    );
  }
}