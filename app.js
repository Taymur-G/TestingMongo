const connection = require('./db/connection');
const { addMovie, listMovies, updateMovie, deleteMovie, listMovie, listActor, listRating } = require('./utils');

const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        const newMovie = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        };

        await connection(addMovie, newMovie);
        console.log("Added new movie");

    } else if (command === "list") {
        await connection(listMovies);

    } else if (command === "listBMN") {
        const movie = {
            title: process.argv[3]
        }

        await connection(listMovie, movie);

    } else if (command === "listBAN") {
        const movie = {
            actor: process.argv[3]
        }

        await connection(listActor, movie);

    } else if (command === "listBR") {
        const movie = {
            rating: process.argv[3]
        }

        await connection(listRating, movie);

    } else if (command === "update") {
        const movieUpdate = {
            targetTitle: process.argv[3],
            title: process.argv[4],
            actor: process.argv[5],
            rating: process.argv[6]
        };

        await connection(updateMovie, movieUpdate);
        console.log("Updated something.")

    } else if (command === "delete") {
        const movieDelete = {
            title: process.argv[3]
        }
        await connection(deleteMovie, movieDelete);
    }
    else {
        console.log("Incorrect Input");
    }
}

app();