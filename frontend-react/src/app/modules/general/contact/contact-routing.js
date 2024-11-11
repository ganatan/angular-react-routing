import React from 'react';
import { Routes, Route } from "react-router-dom";

import Mailing from './mailing/mailing';
import Mapping from './mapping/mapping';
import Website from './website/website';

import Notfound from '../../../modules/general/not-found/not-found';

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Mailing />} />
        <Route path="mailing/*" element={<Mailing />} />
        <Route path="mapping/*" element={<Mapping />} />
        <Route path="website/*" element={<Website />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    )
  }

}

export default AppRouting;