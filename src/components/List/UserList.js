import React, { createContext, useContext } from 'react';

import AuthContext from '../Context/auth';



export default function UserList() {


    //const [listar, setListar] = useState([]);

    const { user } = useContext(AuthContext);

    console.log(user);


    return (
        <div>
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">

                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">listar</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* /.card */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">UserList- Dados no sistema</h3>

                                </div>
                                {/* /.card-header */}
                                <div className="card-body table-responsive p-0">



                                    <table id="example1" className="table table-striped text-center">

                                        <thead>
                                            <tr >
                                                <th>ID</th>
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Senha</th>
                                                <th>Serial</th>
                                                <th>Editar dados</th>


                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>

                                                <td >{user.id}</td>
                                                <td >{user.nome}</td>
                                                <td >{user.email}</td>
                                                <td >{user.senha}</td>
                                                <td >{user.serial}</td>

                                                <td>
                                                    <div class="">
                                                        <button type="submit" name="submit" value="submit" id="submit" class="btn btn-warning btn-sm"><i class="fa fa-fw fa-plus-circle"></i> Editar</button>
                                                    </div>
                                                </td>

                                            </tr>


                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>

                                            </tr>
                                        </tfoot>

                                    </table>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </section>
        </div>



    )

}


