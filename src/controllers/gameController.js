import Game from '../models/Game.js';



const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


function parsedDate(dateString) {
  const [day, month, y] = dateString.split('/').map(Number);
  return new Date(Date.UTC(y, month-1, day));
}

const createGame = async (req, res) => {
  try {
    req.body.date = parsedDate(req.body.date);
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const updateGame = async (req, res) => {
  try {
    if (req.body.date) {
      req.body.date = parsedDate(req.body.date);
    }
    const game = await Game.findByIdAndUpdate( req.params.id, req.body,{ new: true, runValidators: true } );
    if (!game) {
      return res.status(404).json({ message: "Game not found with id: " + req.params.id });
    }
    res.status(200).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteGame = async (req, res) => {
  try {
    const result = await Game.findByIdAndDelete( req.params.id )
    if (!result) {
      return res.status(404).json({ message: "Game not found with id: " + req.params.id });
    }
    res.status(200).json({message: "Succesfully deleted game with id: " + req.params.id});
  } catch (err) {
    res.status(500).send(err)
  }
}



export { getGames, createGame, updateGame, deleteGame };