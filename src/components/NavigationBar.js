import React from "react";
import { reveal as Menu } from 'react-burger-menu';
 
export default class NavigationBar extends React.Component {

 
  render() {
    return (
        <Menu width={ 210 } noOverlay noTransition>
        <a className="menu-item" href="">
          Dashboard
          <ul>
            <li>
            <a className="menu-item" href="">
          Hourly Stats
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Weekly Stats
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Monthly Stats
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Yearly Stats
        </a>
  
            </li>
          </ul>
        </a>
  
        <a className="menu-item" href="">
          Components
          <ul>
            <li>
            <a className="menu-item" href="">
          Base
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Custom
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Extended
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Widgets
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Forms
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Calenders
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Charts
        </a>
  
            </li>
          </ul>
        </a>
        <a className="menu-item" href="">
          Custom
          <ul>
            <li>
            <a className="menu-item" href="">
          Blog
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Pricing
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          Invoices
        </a>
  
            </li>
            <li>
            <a className="menu-item" href="">
          FAQs
        </a>
  
            </li>
          </ul>
        </a>
      </Menu>
    );
  }
}