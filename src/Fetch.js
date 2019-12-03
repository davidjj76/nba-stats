import React, { useEffect, useState } from 'react';

// export default class Fetch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     const { url } = this.props;
//     fetch(url)
//       .then(response => response.json())
//       .then(results => this.setState({ data: results.data }));
//   }

//   render() {
//     const { data } = this.state;
//     return this.props.render(data);
//   }
// }

export default function Fetch({ url, render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(results => setData(results.data));
  }, [url]);

  return render(data);
}
