import { Component } from 'react';
import Layout from '../components/Layout';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch'
import { Alert } from 'react-bootstrap';


class User extends Component {
	render() {
		const { user } = this.props;

		return (
			<Layout>
				<Alert bsStyle="info">
				{
					`
					Estás viendo el perfil de ${ user.name } con ID ${ user.id } y su correo electrónico es ${ user.email }.
					Este es un texto plano y para practicar tus habilidades de front end usa react-bootstrap y haz que esta página sea responsiva.
					Si quieres realizar más pruebas como un PUT, POST o DELETE visita esta página! => https://jsonplaceholder.typicode.com/. Recuerda entonces
					separar por archivos, es decir, puedes tener un solo archivo de API y hacer el import de dicho archivo donde lo necesites, si así lo quieres
					puedes buscar otra API pública que traiga datos diferentes. Envíame un pull request!
					`
				}
				</Alert>
			</Layout>
		)
	}
};

User.getInitialProps = async ({ req }) => {
	const { user_id } = req.params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ user_id }`);
	const user = await res.json();
	return { user };
};


export default User;