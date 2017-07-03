import { Component } from 'react';
import 'isomorphic-fetch'

import Layout from '../components/Layout';


class Main extends Component {
    render() {
      return (
        <Layout>
        {
          this.props.courses.map(course => {
            return (

              <div key={ course.id }>
                <strong>{ course.title }</strong>
                <hr />
              </div>
            )
          })
        }
        </Layout>
      )
    }
};


Main.getInitialProps = async () => {
  const res = await fetch('https://api-stage.somos.tech/v1/courses');
  const courses = await res.json();
  return { courses };
};
export default Main;
