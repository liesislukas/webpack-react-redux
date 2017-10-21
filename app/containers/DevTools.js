import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

console.info('**** TO TOGGLE REDUX DEV TOOLS CLICK click+d AND click+w TO CHANGE POSITION ****');
export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-d"
               changePositionKey="ctrl-w"
               defaultIsVisible={false}
  >
    <LogMonitor/>
  </DockMonitor>
);
