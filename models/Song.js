const mongoose  = require('mongoose');

const SongSchema = new mongoose.Schema(
    {
        name :{ type:String, required : true},
        band :{ type:String, required : true},
        link :{ type:String, required : true, unique :true},
        multitracklink :{ type:String}
    }
);

module.exports = mongoose.model("Song", SongSchema)