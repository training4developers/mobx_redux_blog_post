import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxCarTool } from './redux-car-tool';
import { MobXCarTool } from './mobx-car-tool';

import { BaseForm } from './base-form';

const APP_MOBX = 'mobx';
const APP_REDUX = 'redux';

class App extends BaseForm {

  constructor(props) {
    super(props);

    this.state = {
      appVersion: '',
    };
  }

  render() {
    return <div>
      Car Tool App Version:
      <select onChange={this.onChange} value={this.state.appVersion} name="appVersion">
        <option value="">Select One...</option>
        <option value={APP_MOBX}>MobX Version</option>
        <option value={APP_REDUX}>Redux Version</option>
      </select>
      {do { if (this.state.appVersion === APP_MOBX) {
          <MobXCarTool />;
        } else if (this.state.appVersion === APP_REDUX) {
          <ReduxCarTool />;
        } else {
          <div>Select an Application Version</div>;
      } }}
    </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('main'));
