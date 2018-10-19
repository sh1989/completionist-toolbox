import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './header';
import './index.css';
import 'react-circular-progressbar/dist/styles.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Completionist Toolbox"
      meta={[
        { name: 'description', content: 'A tool for completionists of all types' },
        { name: 'keywords', content: 'gaming, completionists' },
      ]}
    />
    <Header />
    <main>
      <div className={"container mt-4"}>
        {children}
      </div>
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default TemplateWrapper;
