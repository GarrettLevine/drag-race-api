import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {paraisoDark} from 'react-syntax-highlighter/styles/hljs';

import './DemoData.scss';
const exampleresult = require('json-loader!./exampleresult.json')

export default class DemoData extends React.Component {
  render() {
    return (
      <div className="demo_data">
        <SyntaxHighlighter language='JSON' useInlineStyles={false} style={paraisoDark} >
          {JSON.stringify(exampleresult, null, '  ')}
        </SyntaxHighlighter>
      </div>
    )
  }
}
