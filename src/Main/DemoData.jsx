import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {paraisoDark} from 'react-syntax-highlighter/styles/hljs';

import './DemoData.scss';

export default class DemoData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
    this.forceUpdate()
  }

  render() {
    return (
      <div className="demo_data">
        <SyntaxHighlighter language='JSON' useInlineStyles={false} style={paraisoDark} >
          {JSON.stringify(this.state.data, null, '  ')}
        </SyntaxHighlighter>
      </div>
    )
  }
}
