import React, { Component } from 'react';



class LeftSideBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {/* Page Loader */}
                    <div className="page-loader-wrapper">
                        <div className="loader">
                            <div className="m-t-30"><img className="zmdi-hc-spin" src="assets/images/loader.svg" width={48} height={48} alt="Aero" /></div>
                            <p>Please wait...</p>
                        </div>
                    </div>
                    {/* Overlay For Sidebars */}
                    <div className="overlay" />
                    {/* Main Search */}
                    <div id="search">
                        <button id="close" type="button" className="close btn btn-primary btn-icon btn-icon-mini btn-round">y</button>
                        <form>
                            <input type="search" defaultValue placeholder="Search..." />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    {/* Right Icon menu Sidebar */}
                    <div className="navbar-right">
                        <ul className="navbar-nav">
                            <li><a href="javascript:void(0);" className="js-right-sidebar" title="Setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
                            <li><a href="/" className="mega-menu" title="Sign Out"><i className="zmdi zmdi-power" /></a></li>
                        </ul>
                    </div>
                </div>

                <aside id="leftsidebar" className="sidebar">
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info">
                                    <a className="image" href="profile.html"><img src="assets/images/RCB.PNG" alt="User" /></a>
                                    <div className="detail">
                                        <h4>RC Bankily</h4>
                                    </div>
                                </div>
                            </li>
                            <a href="/Statistiques"><i className="zmdi zmdi-chart" /><span>Statistiques</span></a>
                            <a href="/Transaction"><i className="zmdi zmdi-transform" /><span>Transaction</span></a>
                            <a href="/Clients"><i className="zmdi zmdi-assignment" /><span>Dettes</span></a>
                            <a href="/Charge"><i className="zmdi zmdi-case-check" /><span>Charges</span></a>
                            <a href="/Profile"><i className="zmdi zmdi-account" /><span>Profile</span></a>
                            {/* <a href="profile"><i class="zmdi zmdi-settings"></i><span>Profile</span></Link> */}
                        </ul>
                    </div>
                </aside>

            </React.Fragment>



        );
    }
}

export default LeftSideBar;