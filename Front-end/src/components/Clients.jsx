import React from 'react';
import { Link } from 'react-router-dom';
class Clients extends React.Component {
    render() {
        return (<React.Fragment>
            <section className="content">
                <div className>
                    {/*-Liste des clients  */}
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="header">
                                                <h2><strong>Ajouter</strong> &nbsp;  Des Clients</h2>
                                            </div>
                                            <div className="body">
                                                <form>
                                                    <div className="row clearfix">
                                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Nom" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Prénom" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                                            <div className="form-group">
                                                                <input type="number" className="form-control" placeholder="Téléphone" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                                            <button type="button" className="btn btn-raised btn-primary btn-round waves-effect m-l-20">SAVE</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="header">
                                        <h2><strong>Liste</strong> &nbsp;  Des Clients</h2>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover dataTable js-exportable ">
                                            <thead style={{ backgroundColor: '#72c8d9' }}>
                                                <tr>
                                                    <th>Nom</th>
                                                    <th>Prenom</th>
                                                    <th>Téléphone</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>$320,800</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-warning waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit" /></a>
                                                        <a href="javascript:void(0);" className="btn btn-danger waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete" /></a>
                                                        <Link to="/Dettes" className="btn btn-info waves-effect waves-float btn-sm waves-red">Dettes &nbsp;<i className="zmdi zmdi-eye" /></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </React.Fragment >);
    }
}

export default Clients;