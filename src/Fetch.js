import { useState, useEffect } from 'react';

// export default class Fetch extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     fetch(this.props.url)
//       .then(response => response.json())
//       .then(results => this.setState({ data: results.data }));
//   }

//   componentDidUpdate(nextProps) {
//     fetch(nextProps.url)
//       .then(response => response.json())
//       .then(results => this.setState({ data: results.data }));
//   }

//   render() {
//     return this.props.children(this.state.data);
//     // return this.props.render(this.state.data);
//   }
// }

export default function Fetch({ url, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(results => setData(results.data))
      .catch(error => console.log(error.message));
    return function () {
      controller.abort();
    };
  }, [url]);

  return children(data);
}
