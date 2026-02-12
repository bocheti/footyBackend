import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    teamHome: { type: String, required: true },
    teamAway: { type: String, required: true },
    goalsHome: { type: Number, required: true, min: 0 },
    goalsAway: { type: Number, required: true, min: 0 },
  },
  { timestamps: false, versionKey: false }
);


// cleaner json version
gameSchema.set("toJSON", {transform: (doc, ret) => {
    return {
      _id: ret._id,
      date: ret.date,
      teamHome: ret.teamHome,
      teamAway: ret.teamAway,
      goalsHome: ret.goalsHome,
      goalsAway: ret.goalsAway
    };
  },
});

export default mongoose.model("Game", gameSchema);
