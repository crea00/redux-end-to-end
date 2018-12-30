import React from 'react';
import { renderToString } from 'react-dom/server';
import RGB from './universal/RGB';
import template from './template';

export default function render(req, res) {
  const html = renderToString(<h2>hello Express</h2>);
  res.send(template(html));
}
