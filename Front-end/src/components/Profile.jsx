import React, { Component } from 'react';
class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <div className="body_scroll">
            <div className="block-header">
              <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12">
                  <h2>Profile</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Aero</a></li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                  <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                  <div className="card mcard_3">
                    <div className="body">
                      <a href="profile.html"><img src="assets/images/profile_av.png" className="rounded-circle shadow " alt="profile-image" /></a>
                      <h4 className="m-t-10">Admin</h4>
                      <div className="py-4" id="info">
                        <p className="clearfix">
                          <span className="float-left">
                            Nom Complet
                          </span>
                          <span className="float-right text-muted">
                            Ahmed
                          </span>
                        </p>
                        <p className="clearfix">
                          <span className="float-left">
                            Nom utilisateur
                          </span>
                          <span className="float-right text-muted">
                            Sidaty
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="card">
                    <div className="body">
                      <form>
                        <div className="card-header">
                          <h4>Edit Profile</h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="form-group col-md-6 col-12">
                              <label>Nom </label>
                              <input type="text" name="nomc" className="form-control" defaultValue="Ahmed" required />
                            </div>
                            <div className="form-group col-md-6 col-12">
                              <label>Prenom</label>
                              <input type="text" name="nom" className="form-control" defaultValue="Sidi" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-7 col-12">
                              <label>Nom utilisateur</label>
                              <div className="input-group masked-input mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><i className="zmdi zmdi-email" /></span>
                                </div>
                                <input type="text" className="form-control email" placeholder="Ex: example@example.com" />
                              </div>
                            </div>
                            <div className="form-group col-md-5 col-12">
                              <label>Mot de pass</label>
                              <div className="input-group masked-input mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><i className="zmdi zmdi-key" /></span>
                                </div>
                                <input type="text" className="form-control key" placeholder="Ex: XXX0-XXXX-XX00-0XXX" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-right">
                          <button type="submit" className="btn btn-primary" name="ajoute"><i className="zmdi zmdi-edit" /> Modifier</button>
                          <button type="submit" className="btn btn-danger" name="ajoute">Annuler</button>
                        </div>
                      </form>
                    </div>
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

export default Profile;