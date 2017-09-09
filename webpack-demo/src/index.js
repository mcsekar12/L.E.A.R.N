// import _ from 'lodash';
require('./login');
console.log('App ');

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack1'], ' ');
  console.log('asasassa test again1eee');
    return element;
  }
  
  document.body.appendChild(component());