

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/../../AppData/Local/npm-cache/_npx/495ac59a700c9d98/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '__react_static_root__/../../AppData/Local/npm-cache/_npx/495ac59a700c9d98/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('__react_static_root__/src/Components/Home.jsx'), universalOptions)
      t_1.template = '__react_static_root__/src/Components/Home.jsx'
      
const t_2 = universal(import('__react_static_root__/src/Components/About.jsx'), universalOptions)
      t_2.template = '__react_static_root__/src/Components/About.jsx'
      
const t_3 = universal(import('__react_static_root__/src/Components/Careers.jsx'), universalOptions)
      t_3.template = '__react_static_root__/src/Components/Careers.jsx'
      
const t_4 = universal(import('__react_static_root__/src/Components/ContactUs.jsx'), universalOptions)
      t_4.template = '__react_static_root__/src/Components/ContactUs.jsx'
      
const t_5 = universal(import('__react_static_root__/src/Components/Feedback.jsx'), universalOptions)
      t_5.template = '__react_static_root__/src/Components/Feedback.jsx'
      
const t_6 = universal(import('__react_static_root__/src/Components/InformationCentre.jsx'), universalOptions)
      t_6.template = '__react_static_root__/src/Components/InformationCentre.jsx'
      
const t_7 = universal(import('__react_static_root__/src/Components/Projects.jsx'), universalOptions)
      t_7.template = '__react_static_root__/src/Components/Projects.jsx'
      

// Template Map
export default {
  '__react_static_root__/../../AppData/Local/npm-cache/_npx/495ac59a700c9d98/node_modules/react-static/lib/browser/components/Default404': t_0,
'__react_static_root__/src/Components/Home.jsx': t_1,
'__react_static_root__/src/Components/About.jsx': t_2,
'__react_static_root__/src/Components/Careers.jsx': t_3,
'__react_static_root__/src/Components/ContactUs.jsx': t_4,
'__react_static_root__/src/Components/Feedback.jsx': t_5,
'__react_static_root__/src/Components/InformationCentre.jsx': t_6,
'__react_static_root__/src/Components/Projects.jsx': t_7
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/../../AppData/Local/npm-cache/_npx/495ac59a700c9d98/node_modules/react-static/lib/browser/components/Default404"

