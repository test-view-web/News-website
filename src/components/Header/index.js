import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import axios from 'axios';
import logo from './logo.png';
import './style.css';

class AppHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	getMenuItems() {
		return this.state.list.map(item => {
			return (
				<Menu.Item key={item.id}>
					<Link to={`/${item.id}`}>
      			<Icon type={item.icon} />{item.title}
      		</Link>
    		</Menu.Item>
			)
		})
	}

	getTestMap(){
		let array1 = [6,5,4,3,2,1,0]
		let array2 = array1.map(a=>(a+1));
		console.log(array2);

	}

	componentDidMount() {	
		axios.get('http://www.dell-lee.com/react/api/header.json')
			.then((res) => {
				this.setState({
					list: res.data.data
				})
			})
	}

	render() {
		return (
			<Fragment>
				<Link to='/'>
					<img 
						src={logo}
						className='app-header-logo'
						alt="logo"
					/>
				</Link>
				<Menu 
					mode="horizontal" 
					className='app-header-menu'
				>
	        		{ this.getMenuItems() }
					{ this.getTestMap()}
	      		</Menu>
      		</Fragment>
		)
	}
}

export default AppHeader;