import React from 'react'
import PropTypes from 'prop-types';
import {API_ENDPOINT} from '../api/constant'
import Link from 'next/link'
import Menu from '../components/navigations/menu';
import Offcanvas from '../components/navigations/offcanvas'
import Dropdown from '../components/navigations/dropdown'

class Header extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    showDropdown: false,
    menu: []
  };

  componentDidMount(){
   
    // NOT YET WORKING / TO BE FIXED 
    fetch(`${API_ENDPOINT}directories`, {
      mode: 'cors'
    })
    .then( response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({ menu: data })
    })
  }

  toggleDrawer = (side, open) => () => {

    this.setState({
      [side]: open,
    });
  };

  showDropdown = () => {
      this.setState({ showDropdown: !this.state.showDropdown })
  }


  render() {
  const {menu} = this.state;

    return (
      <div>
      <Menu  menu={menu} showDropdown={ this.showDropdown }/>
      { this.state.showDropdown ? <Dropdown menu={menu}  /> : '' }
      <Offcanvas menu={menu} />
     </div>
    )
  }
}

export default Header;