var Myform = React.createClass({

  render: function(){
    return (
        <div>
          <h1>This is My From Component Form</h1>
        <form>
          <input type = "text"/><br/>
          <button>Set Name</button>
        </form>
        </div>
    );
  }

});


var GreeterMessage = React.createClass({
    render: function(){
      return (
        <div>
            <h1>Some H1</h1>
            <p>Some paragraph</p>
        </div>
      );
    }
});


//React component
// we are using jsc because much easier to read and maintain
var Greeter = React.createClass({

  // Property is not passed then this would be the default propery
  getDefaultProps: function(){
    return{
      name: 'React',
      message: 'It is React Component'
    };
  },
  getInitialState: function(){

    return {
      name: this.props.name
    };
  },

  // It is my Custom methid for Submit button
  onButtonClick: function(e){
    // e is event handeler
    e.preventDefault(); // so that our page will not fully post back // like ajax // i.e prevent browser from refreshing
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if(typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
        });
      }
    },
  render: function(){
    // this is name i am pulling out which was passed as property from reactDom
    var name = this.state.name; // this.state is from getInitialState :)
    var message = this.props.message;
    // we are returning jsx
    //But should be one root Html element i.e here i am returininig one div
    //but can have more child component.
    // we are returning multiple things fromm the component
    return (
      <div>
        <h1>Hello  {name}!</h1>
        <p>{message}</p>
          <GreeterMessage/>
      <form onSubmit={this.onButtonClick}>
        <input type="text" ref = "name"/>
        <button>Set Name</button>
      </form>

      <Myform/>
      </div>
    );
  }
});


// ReactDOM
var name = "Grewal";
ReactDOM.render(
  //name = "Simran" is property i passed to component
  <Greeter name = {name} message = "This is message from prop!"/>,
  document.getElementById('app')
);
