   

// Look Right Click 


document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });






// Look keys 

    document.onkeydown = function(e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }






// disable copy paste cut 
<body oncopy="return false" oncut="return false" onpaste="return false">

// For React 
<body oncopy="return false;" oncut="return false;" onpaste="return false;" oncontextmenu="return false;">




