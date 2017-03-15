// It is Presentation Component
var GreeterForm = React.createClass({
  // e is event handeler
  onFormSubmit: function(e){
    e.preventDefault(); // so that our page will not fully post back // like ajax // i.e prevent browser from refreshing
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if(name.length > 0 && message.length > 0){
        this.refs.name.value = '';
        this.refs.message.value = '';
        this.props.onNewName(name, message);

    }
  },
  render: function(){
    return (
        <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type = "text" ref="name" placeholder="Enter Name"/><br/>
          <textarea ref="message" placeholder="Enter Message"/><br/>
          <button>Submit</button>
        </form>
        </div>
    );
  }

});

//  It is also Presentation component
var GreeterMessage = React.createClass({

    render: function(){
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
            <h1>Hello {name}!</h1>
            <p>{message}</p>
        </div>
      );
    }
});


//React component
// we are using jsx because much easier to read and maintain
// It is container component not a Presentation Component
var Greeter = React.createClass(  {

  // Property is not passed then this would be the default propery
  getDefaultProps: function(){
    return{
      name: 'React',
      message: 'It is React Component'
    };
  },
  getInitialState: function(){

    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  // It is my Custom methid for Submit button
  handleNewName: function(name, message){
      this.setState({
        name: name,
        message: message
        });
    },
  render: function(){
    // this is name i am pulling out which was passed as property from reactDom
    var name = this.state.name; // this.state is from getInitialState :)
    var message = this.state.message;
    // we are returning jsx
    //But should be one root Html element i.e here i am returininig one div
    //but can have more child component.
    // we are returning multiple things fromm the component
    return (
      <div>
        <GreeterMessage name = {name} message = {message}/>
        <GreeterForm onNewName = {this.handleNewName}/>
      </div>
    );
  }
});


// ReactDOM
var name = "Grewal";
ReactDOM.render(
  //name = "Simran" is property i passed to component
  <Greeter name = {name} message = "This is message prop!"/>,
  document.getElementById('app')
);
