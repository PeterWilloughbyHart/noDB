const data = require("../data");

const read = (req, res) => {
  res.json(data.marineLife);
  console.log(data.marineLife);
  console.log("hit");
};

const readOne = (req, res) => {
  let post = data.marineLife.findIndex(e => e.id === +req.params.id);
  res.json(data.marineLife[post]);
};

const add = (req, res) => {
  data.marineLife.push(req.body); //data is an object. Dot notation to get marineLife
  res.json(data.marineLife);
};

const edit = (req, res) => {
  let post = data.marineLife.findIndex(e => e.id === +req.params.id);

  let { name, lifeSpan, info} = req.body; // 1 Destructuring
  let {funFact, endangered} = req.body; // 2 Destructuring 

  if (name) {
    data.marineLife[post].name = name;
  } 
  if (lifeSpan) {
    data.marineLife[post].lifeSpan = lifeSpan;
  }
  if (info) {
    data.marineLife[post].info = info;
  }
  if (funFact) {
    data.marineLife[post].funFact = funFact;
  }
  if (endangered) {
    data.marineLife[post].endangered = endangered;
  }
  res.json(data.marineLife);
};

                                                                // let {name, lifeSpan, info, funFact, endangered }  = req.body; =
                                                                // let name = req.body.name;
                                                                //axios is what postman is doing. axios.get is the client side request. app.get is handling axios.get on the server side.

const remove = (req, res) => {

  let post = data.marineLife.findIndex(e => e.id === +req.params.id);
  // console.log(post);

  if (post >= 0) data.marineLife.splice(post, 1);
  res.json(data.marineLife);

};



module.exports = {
  read,
  readOne,
  add,
  edit,
  remove
};
