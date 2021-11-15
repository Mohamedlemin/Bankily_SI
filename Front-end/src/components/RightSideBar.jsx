import React from 'react';
class RightSideBar extends React.Component {
    render() {
        return (

            <React.Fragment>
                <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs sm">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="setting">
                            <div className="slim_scroll">
                                <div className="card">
                                    <h6>Theme Option</h6>
                                    <div className="light_dark">
                                        <div className="radio">
                                            <input type="radio" name="radio1" id="lighttheme" defaultValue="light" defaultChecked />
                                            <label htmlFor="lighttheme">Light Mode</label>
                                        </div>
                                        <div className="radio mb-0">
                                            <input type="radio" name="radio1" id="darktheme" defaultValue="dark" />
                                            <label htmlFor="darktheme">Dark Mode</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <h6>Color Skins</h6>
                                    <ul className="choose-skin list-unstyled">
                                        <li data-theme="purple">
                                            <div className="purple" />
                                        </li>
                                        <li data-theme="blue">
                                            <div className="blue" />
                                        </li>
                                        <li data-theme="cyan">
                                            <div className="cyan" />
                                        </li>
                                        <li data-theme="green">
                                            <div className="green" />
                                        </li>
                                        <li data-theme="orange">
                                            <div className="orange" />
                                        </li>
                                        <li data-theme="blush" className="active">
                                            <div className="blush" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>



            </React.Fragment>
        );
    }
}

export default RightSideBar;