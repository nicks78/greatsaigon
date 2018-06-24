import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
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
    this.setState({ menu: this.props.menu.menu})
  }

  componentWillReceiveProps(nextProps){
    this.setState({ menu: nextProps.menu.menu})
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
  
  if(this.props.menu.isFetching){
    return null
  }
  if(this.state.menu === undefined){
    return null 
  }

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


const mapStateToProps = ( state ) => {
  return {
      menu: state.menuReducer
  }
}

export default connect(mapStateToProps)(Header);