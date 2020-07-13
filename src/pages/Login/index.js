import React, { Component } from 'react'
import './styles.css'

const Login = class Login extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    }
    onSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
    }
    render() {
        return (
            <div className="content">
                <form className="login-form" onSubmit={this.onSubmit}>
                    <span>
                    <h1>Bem vindo</h1>
                    <p><small>Entre com suas credenciais</small></p>
                    </span>
                    <input
                        type="text"
                        placeholder="Informe seu usuário"
                        onChange={e => this.setState({username: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Informe sua senha"
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button>Entrar</button>
                </form>
            </div>
        )
    }
}

export default Login
