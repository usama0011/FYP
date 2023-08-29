import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String },
  organizer: { type: String },
  phone: { type: String },
  email: { type: String },
  venue: { type: String }
},{timestamps:true});

const Event = mongoose.model('Event', eventSchema);

export default Event;
