import { html } from 'htm/preact';
import register from 'preact-custom-element';

const QueryGenerator = () => {
  return html`
    <a href="https://twitter.com/search?lang=ja&q=コロナ">Twitter</a>
  `;
};

register(QueryGenerator, 'x-query-generator');
