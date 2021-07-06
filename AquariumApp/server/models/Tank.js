import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TankSchema = new Schema(
  {
    fish: [{ type: String }],
    plants: [{ type: String }],
    type: { type: Boolean, default: false },
    enviroment: { type: String, defualt: 'tropical' },
    name: { type: String, requried: true },
    size: { type: Number, required: true }
  }
)
