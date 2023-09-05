import mongoose from "mongoose"; //                                              depois do "?" se der erro colocar o nome Nickolas
mongoose.connect("mongodb+srv://Destroier007:Ni24Am21@nickolas.guqrlxl.mongodb.net/Nickolas");

let db = mongoose.connection;

export default db;