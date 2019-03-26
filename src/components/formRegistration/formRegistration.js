import React, { Component } from 'react';
import './formRegistration.scss';

import RegistrationHeader from '../registrationHeader/registrationHeader';

class FormRegistration extends Component {

  render() {
    return (
      <div className="container-fluid">
        <RegistrationHeader />
        <form>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-12 col-md-6 custom-radios">
              <label>Ride in group?</label>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                  Always
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  Sometimes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                  Never
                </label>
              </div>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="Email1">E-mail</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="col-12 col-md-6 custom-checkboxes">
              <label>Days of the week</label>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Sun" />
                  Sun
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Mon" />
                  Mon
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Tue" />
                  Tue
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Wed" />
                  Wed
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Thu" />
                  Thu
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Fri" />
                  Fri
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="Sat" />
                  Sat
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-warning">Discard</button>
            </div>
            </div>
            </form>
      </div>
    );
  }
}

export default FormRegistration;
