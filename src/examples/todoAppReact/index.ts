import { MainView } from './views/mainView';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './sass/ratchet.scss';
import './sass/theme-ios.scss';


class App {
    mainView = null as MainView;

    constructor() {
        setTimeout(() => this.initialize());
    }
    initialize() {
        const div = document.createElement('div');
        document.body.append(div);
        ReactDOM.render(React.createElement(MainView, {
            ref: (v => this.mainView = v),
            activeFilter: window.location.hash.replace(/^#\//, '')
        }), div);
        window.addEventListener('hashchange', (evnt) => this.switchLocation(evnt));
    }
    switchLocation(evnt) {
        this.mainView.prop('activeFilter', window.location.hash.replace(/^#\//, '') as any);
    }
}

new App();
