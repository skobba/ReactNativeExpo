import React from 'react'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {


  constructor(props) {
    super(props)


    console.log('*** AuthProvider (constructor) props.user: ' + props.user);

    this.state = { user: props.user  }

    this.user = this.props.user

  }

  render() {

    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }