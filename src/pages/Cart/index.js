import React from 'react';
import axios from 'axios';
import Menu from '../../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
// import API from '../../data/api';

// class Cart extends Component {
//   handleDubmit = async event => {
//     event.preventDefault();
    
//     const response = await API.get(`5b15c4923100004a006f3c07/${this.state}`);

//     console.log(response);
//     console.log(response.data);
//   }
// }

export default class Cart extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`http://www.mocky.io/v2/5b15c4923100004a006f3c07`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <div className="container">
      <Menu />
      <hr />
      <h1>Carrinho de Compras</h1>
      <hr />
      <div className="row">
        <div className="col">
          Imagem
          
        </div>
        {/* <div className="col">
          Nome, Quantidade, Preço
          <div>
            { this.state.persons.map(person => <li>{person.username}</li>)}
          </div>
        </div>
        <div className="col">
          Comprar
          <div>
            { this.state.persons.map(person => <li>{person.email}</li>)}
          </div>
        </div> */}
      </div>
     </div>
    );
  }
}
  //   render() {
//     return (
//       <div>
//         <Menu />
//           <div className="container">
//             <h1>Carrinho de Compras</h1>
//           </div>
//           <hr/>
//           <div className="row">
//             <div className="col-md-8">
//               <Api />
//             </div>
//           </div>
//         <Footer />  
//       </div>
//   );
//   }
    
// }


// export default Cart;