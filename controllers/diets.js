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