// export default class CreateTodo extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         error: null
//       };
//     }
  
//     renderError() {
//       if (!this.state.error) {
//         return null;
//       }
  
//       return <div style={{
//         color: 'red'
//       }}>{this.state.error}</div>;
//     }




//         <div className="errorMsg">
//           {this.renderError()}
//         </div>





//  handleCreate(event) {
//     event.preventDefault();

//     const createInput = this.refs.createInput;
//     const task = createInput.value;
//     const validateInput = this.validateInput(task);

//     if (validateInput) {
//       this.setState({error: validateInput});
//       return;
//     }

//     this.setState({error: null});
//     this.props.createTask(task);
//     this.refs.createInput.value = '';
//   }

//   validateInput(product) {
//     if (!product.name) {
//         return 'Please enter a dictionary name.';
//     } else if (!product.domain){
//         return 'Please enter a domain.'
//     }else if (!product.range){
//         return 'Please enter a range.'
//     }else if (_.find(this.props.projects.domain, product => product.domain === domain)) {
//       return 'Domain already exists.';
//     }else if (_.find(this.props.projects.range, product => product.domain === range)) {
//         return 'This is already a range, you dont have to translate it.';
//     } else {
//       return null;
//     }
//   }