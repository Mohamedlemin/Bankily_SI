import React from 'react';
class Statistiques extends React.Component {
    render() {
        return <React.Fragment>

            <section className="content">
                <div className>
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <h2>Statistiques</h2>

                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    {/*-Statistiques  */}
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card info-box-2">
                                <div className="body " style={{ backgroundColor: '#34b4cc' }}>
                                    <div className="icon col-12 m-t-15">
                                        <div className="chart chart-bar">6,4,8,6,8,10,5,6,7,9,5</div>
                                    </div>
                                    <div className="content col-12">
                                        <div className="text" style={{ color: 'white' }}>TOTAL DETTES</div>
                                        <div className="number" style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>125543 N-UM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card info-box-2">
                                <div className="body " style={{ backgroundColor: '#f5c306' }}>
                                    <div className="icon col-12 m-t-5">
                                        <span className="chart chart-line">17,4,6,5,6,4,7,4</span>
                                    </div>
                                    <div className="content col-12">
                                        <div className="text" style={{ color: 'white' }}>TOTALE COMMISSION</div>
                                        <div className="number" style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>457512 N-UM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card info-box-2">
                                <div className="body " style={{ backgroundColor: '#697f89', color: 'white' }}>
                                    <div className="icon col-12 m-t-15">
                                        <div className="chart chart-bar">4,6,-3,-1,2,-2,4,3,6,7,-2,3</div>
                                    </div>
                                    <div className="content col-12">
                                        <div className="text" style={{ color: 'white' }}>TOTAL CHARGES</div>
                                        <div className="number" style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>5790 N-UM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <ul className="row profile_state list-unstyled">
                                    <li className="col-lg-12 col-md-12 col-12">
                                        <div className="body bg-green">
                                            <span> TOTAL CAISSE</span>
                                            <h4 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>2, 399, 065 N-UM</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>;
    }
}

export default Statistiques;