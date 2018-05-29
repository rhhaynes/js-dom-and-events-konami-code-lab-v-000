const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init(){
  
  document.body.addEventListener('keydown', listener);
  
  let index = 0;
  
  function listener(e){
    const key = parseInt(e.which || e.detail);
    if ( key === code[index] ) {
  	  index++;
  	  if ( index === code.length ) {
  		  window.alert;
  		  index = 0;
  	  }
    } else {
  	  index = 0;
    }
  }

}