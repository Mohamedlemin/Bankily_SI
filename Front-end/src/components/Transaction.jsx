import React, { Component } from 'react';
import axios from 'axios'
class Transaction extends Component {
    state = { details: [], }
    componentDidMount() {
        let data;
        axios.get('http://127.0.0.1:8000/transaction/List/')
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
                });
            }).catch(err => { })

    }
    render() {
        return (
            <React.Fragment>
                <section className="content">
                    <div className>
                        {/*-Liste transactions  */}
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="block-header">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <h2>Transaction</h2>
                                            </div>
                                            <div className="col-lg-5 col-md-6 col-sm-12">
                                                <button className="btn  btn-icon  float-right" type="button " style={{ backgroundColor: '#f5c300' }} data-toggle="modal" data-target="#defaultModal"><i className="zmdi zmdi-plus" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hover dataTable js-exportable ">
                                                <thead style={{ backgroundColor: '#72c8d9' }}>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Portfeuille</th>
                                                        <th>Opération</th>
                                                        <th>Téléphone</th>
                                                        <th>Montant</th>
                                                        <th>Commission</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {this.state.details.map((output, id) => {
                                                        return (

                                                            <tr>
                                                                <td>Le {output.date} </td>
                                                                <td>{output.portfeuille}</td>
                                                                <td>{output.operation}</td>
                                                                <td>{output.telephone}</td>
                                                                <td>{output.montant}</td>
                                                                <td>{output.commision}</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" className="btn btn-warning waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit" /></a>
                                                                    <a href="javascript:void(0);" className="btn btn-danger waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete" /></a>
                                                                </td>

                                                            </tr>
                                                        )

                                                    })}
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="defaultModal" tabIndex={-1} role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="title" id="defaultModalLabel">Transaction</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <select className="form-control show-tick ">
                                                        <option>Opération</option>
                                                        <option>Retrait client</option>
                                                        <option>Retrait bénéficiaire</option>
                                                        <option>Dépôt</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Portfeuille" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Téléphone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Montant" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Commission" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success  waves-effect">SAVE</button>
                                        <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal">CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </React.Fragment>
        );
    }
}

export default Transaction;