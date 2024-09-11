import React from "react"

//The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

//If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
class MyClass extends React.Component {
    constructor(username){
        super(username)
    }
    render(){ // class requires render method. this method returns HTML.
        return <h2>{this.props.username}</h2>
    }
}

export default MyClass