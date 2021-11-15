import React from 'react';

class Charge extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="content">
                    <div className>
                        {/*--ADD */}
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Ajouter</strong> &nbsp; Des Charges</h2>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <div className="row clearfix">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="DESCRIPTION" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <input type="number" className="form-control" placeholder="MONTANT" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <button type="button" className="btn btn-raised btn-primary btn-round waves-effect m-l-20">SAVE</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-Liste transactions  */}
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Liste</strong> &nbsp; Des Charges</h2>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hover dataTable js-exportable ">
                                                <thead style={{ backgroundColor: '#72c8d9' }}>
                                                    <tr>
                                                        <th>DESCRIPTION</th>
                                                        <th>MONTANT</th>
                                                        <th>DATE</th>
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

export default Charge;