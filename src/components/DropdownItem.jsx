import { Component } from "react";
import items from "./items.json";

export class DropdownItem extends Component {

    constructor() {
        super();        
        this.items = items;
    }

    render() { 
        return (
            <>            
                {items.map((el, index) => 
                <li key={index}>
                    <a href="#">{el.content}</a>
                </li>)} 
            </>      
        );
    }
}

