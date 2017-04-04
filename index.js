const skybiometry = require('skybiometry');
const client = new skybiometry.Client('12628d501f3a4bafae073caa1fadcc5d', 'e433bbe4e96c454083162a9ea2b0049b');
const fs = require('fs');


client.faces.detect( { files: fs.createReadStream('./images/test_image.jpg'), attributes: "all" })
//.then(results => console.log(results));
.then( function(result){
  //console.log(result);
  var parsedresults = JSON.parse(result);

  if(parsedresults.photos[0].tags[0] != undefined){
    console.log(parsedresults.photos[0].tags[0].attributes);
  } else{
    console.log("noface");
  }
});
