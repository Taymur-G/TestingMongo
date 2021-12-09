exports.addMovie = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj);
    } catch (e) {
        console.log(error);
    }
}

exports.listMovies = async (collection) => {
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (e) {
        console.log(error);
    }
}

exports.listMovie = async (collection, dataObj) => {
    try {
        const listOne = await collection.find({
            "title": dataObj.title
        }).toArray();
        console.log(listOne);
    } catch (e) {
        console.log(error);
    }
}

exports.listActor = async (collection, dataObj) => {
    try {
        const listAll = await collection.find({
            "actor": dataObj.actor
        }).toArray();
        console.log(listAll);
    } catch (e) {
        console.log(error);
    }
}

exports.listRating = async (collection, dataObj) => {
    try {
        const listAll = await collection.find({
            "rating": dataObj.rating
        }).toArray();
        console.log(listAll);
    } catch (e) {
        console.log(error);
    }
}

exports.updateMovie = async (collection, dataObj) => {
    try {
        await collection.updateOne(
            {
                title: dataObj.targetTitle
            },
            {
                $set: {
                    "title": dataObj.title,
                    "actor": dataObj.actor,
                    "rating": dataObj.rating
                }
            });
    } catch (e) {
        console.log(error);
    }
}

exports.deleteMovie = async (collection, dataObj) => {
    try {
        await collection.deleteOne(dataObj);
    } catch (e) {
        console.log(error);
    }
}