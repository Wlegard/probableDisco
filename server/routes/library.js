const express = require('express');
//const cors = require('cors')
// import Library db model
const { Library } = require('../database/index');

const route = express.Router();

// handle GET requests for all playlists
route.get('/libraries', (req, res) => {
  // mongooose method to find
  Library.find()
.then((libraries)=>{
  // id not playlist is found
  if(libraries.length === 0){
    // failure status
    res.status(400).send("No libraries found!")
  }
  // successful status fetching libraries
res.status(200).send("Success, found libraries!")
})
.catch((err)=>{
console.error("Failure to find library:", err)in
// internal service error
res.sendStatus(500);
})
});





// handle POST requests
route.post('/libraries', (req, res) => {
  const {library} = req.body
// mongoose method to create
if (!library) {
  return res.status(400).send("Library is not found!");
}

  Library.create(library)
.then(()=>{
  //ok status for successful creation
  res.sendStatus(201);
})
  .catch((err)=>{
console.error("Failure to create library!:", err);
// internal service error
res.sendStatus(500);
})
});

// handle PATCH requests
route.patch('/libraries/:id', (req, res) => {
  Library.findByIdAndUpdate(req.params.id, req.body)

.then(()=>{
  //ok sucess status for update
res.status(200).send("Update was successful!")
})
.catch((err)=>{
console.error("Failure to update libraries!:", err)
// internal failure error
res.sendStatus(500);
})
});

// handle DELETE requests
route.delete('/libraries/:id', (req, res) => { 
  Library.findByIdAndDelete(req.params.id)
  .then(()=>{
      //ok success status for deletion

    res.status(200).send("libraries has been deleted!")

  })
  .catch((err)=>{
console.error("Failure to delete library!:", err);
// internal failure error
res.sendStatus(500);
  })

});

// export the route for use in server/index.js
module.exports = route;
