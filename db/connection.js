import mongoose from "mongoose";
import config from "config";

mongoose.connect(config.get('mongo.uri'));

mongoose.connection.on('error', err => console.log(err))

export default mongoose;