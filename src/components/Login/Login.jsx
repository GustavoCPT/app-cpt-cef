import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/auth';

const Login: React.FC = () => {

    //buscarmos esse  que se encontra em auth.tsx
    const context = useContext(AuthContext);

    // controlar o estado de autenticação signed: false/true
    const { signed } = useContext(AuthContext);
    
    console.log('Ver o signed: ' + signed); //false

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    console.log('------senha ----- ' + senha)

    // função onde será dispara para a autenticação
    async function handleLogin() {
        console.log('handleLogin: função Login() em auth.tsx');
        const obj = { email, senha };
        // movendo a responsabilidade de lidar com autenticação para o dentro do contexto ao inves do componente
        context.signIn(obj);

    }

    return (

        <div style={{ background: 'white' }} className=" login-page ">
            <div class="login-box" style={{ marginBottom: 120 }}  >
                {/* /.login-logo */}
                
                < div className="login-logo ">
                    <img style={{ height: 70 }} src="/dist/img/CEF.png" alt="CPT" className="brand-image center" />
                </div>
                <div className="card ">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Acesse a sua conta</p>
                        {/* temos um state: false e  de formulario null */}
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Digite seu e-mail" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" onChange={e => setSenha(e.target.value)} className="form-control" placeholder="Digite sua senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className=" text-center mt-2 mb-1">
                                <NavLink to="/" >
                                    <button onClick={handleLogin} type="submit" className="btn btn-primary btn-block">Entrar</button>
                                </NavLink>
                            </div> 
                        </form>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}

            </div>
            {/* /.login-box */}
        </div >


    )

}

export default Login
