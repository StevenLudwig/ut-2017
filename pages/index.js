import { Component } from 'react';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch'
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';

const Item = (user) => {
	return (
		<Row>
			<Col xs={ 8 }>
				{ user.name }
			</Col>
			<Col xs={ 4 }>
				<a href={ `/users/${ user.id }` }>Ver mas</a>
			</Col>
		</Row>
	)
};


class Main extends Component {
	render() {
		const { items } = this.props;
		return (
			<Layout>
			{
				items.map(item => {
					return <div key={ item.id }>
						<Item { ...item } /> <hr />
					</div>
				})
			}
			</Layout>
		)
	}
};


Main.getInitialProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const items = await res.json();
	return { items };
};


export default Main;