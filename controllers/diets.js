const Diet = require('../models/diet');

module.exports = {
  index,
  new: newDiet,
  create, 
  show, 
  edit, 
  update: updateDiet,
  delete: deleteDiet
};

async function index(req, res) {
    try {
    const diets = await Diet.find({});
    res.render('diets/index', { diets });
    } catch (err) {
        console.log(err);
        res.render('diets/index', {errorMsg: err.message});
    }
}

function newDiet(req, res) {
  res.render('diets/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    await Diet.create(req.body);
    res.redirect('/diets');
  } catch (err) {
    console.log(err);
    res.render('diets/new', { errorMsg: err.message });

  }

}

async function show(req, res){
    try {
      const diet = await Diet.findById(req.params.id);
      res.render('diets/show', { diet });
    } catch (err) {
      console.log(err);
      res.redirect('/diets');
    }
  }

async function edit(req, res) {
      try {
        const diet = await Diet.findById(req.params.id);
        res.render('diets/edit', { diet });
      } catch (err) {
        res.redirect('/diets/');
      }
    }
    
async function updateDiet(req, res) {
        try {
            await Diet.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/diets/' + req.params.id)
        }  catch (err) {
          res.render(`/diets/${req.params.id}/edit`, { errorMsg: err.message });
        }
      }

async function deleteDiet(req, res) {
        try {
          await Diet.findByIdAndRemove(req.params.id);
          res.redirect('/diets');
        }  catch (err) {
          res.render('/diets', { errorMsg: err.message });
        }
      }

      exports.submitRating = function(req, res) {
        const rating = req.body.rating; // Get the rating value from the request body
        const dietId = req.params.id; // Get the diet ID from the request parameters
      
        // Find the corresponding diet document in the database based on the diet ID
        Diet.findById(dietId, function(err, diet) {
          if (err) {
            // Handle error if diet is not found
            console.error(err);
            res.redirect('/diets'); // Redirect to an appropriate page, e.g., the "All Diets" page
          } else {
            // Update the diet document with the new rating value
            diet.rating = rating;
      
            // Save the updated diet document to the database
            diet.save(function(err) {
              if (err) {
                // Handle error if the save operation fails
                console.error(err);
              }
              // Redirect back to the "All Diets" show page
              res.redirect('/diets/' + dietId);
            });
          }
        });
      };