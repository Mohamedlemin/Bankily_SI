import React from 'react';

class Dettes extends React.Component {
    render() {
        return (<React.Fragment>
            <section className="content">
                <div className>
                    {/*-Liste transactions  */}
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="header">
                                            <h2><strong>TOTAL</strong> &nbsp; Différences &nbsp; de &nbsp;<strong>Mohamed lemin 49915181</strong></h2><br />
                                            <div className="body bg-red">
                                                <div className="content col-12">
                                                    <div className="number" style={{ fontFamily: 'Verdana', fontSize: 'x-large', textAlign: 'center' }}>5000 N-UM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="header">
                                        <h2><strong>Liste</strong> &nbsp;  Dettes</h2>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover dataTable js-exportable ">
                                            <thead style={{ backgroundColor: '#72c8d9' }}>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Débit</th>
                                                    <th>Crédit</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>22/11/21</td>
                                                    <td>10000</td>
                                                    <td>5000</td>
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

        </React.Fragment>);
    }
}

export default Dettes;