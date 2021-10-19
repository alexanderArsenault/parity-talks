
import "regenerator-runtime/runtime"

import './js/events'
import './js/graphic'

// improt styles
import './app.scss'


/* 
  To include modules, import and include them anywhere in your JS. For example, 
  uncommenting the following two lines will force the jquery chunk to be 
  generated. Normally, only code that is actually used will be output as modules.
*/
import $ from "jquery"
console.log( $ );

// Only used in dev

if (module.hot) {
  console.log('module.hot')
  module.hot.accept();
}
