const mongoose = require("mongoose");
const opts = {toJSON: {virtuals: true}};
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String
            },

            name: {
                type: String
            },

            duration: {
                type: Number
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type: Number
            },

            distance: {
                type: Number
            }
        }
    ]
}, opts);

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((acc, curr) => {
      return acc + curr.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;