const fetchSimultion = (dataBase, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(dataBase);
            rejact(new Error("Error"))
        }, time)
    })
}

export default fetchSimultion;