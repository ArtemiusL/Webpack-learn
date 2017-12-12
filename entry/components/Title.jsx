import React, {Component} from 'react';
import styles from "../css/style.css";

class Title extends Component {
	render(){
		return(
			<h1 className={styles.title}> Hello Artem, go sleep! </h1>
		)
	}
}

export default Title;