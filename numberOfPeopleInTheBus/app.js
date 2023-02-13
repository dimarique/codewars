var number = function(busStops) {
    let result = 0
    busStops.map((stop) => {
        result += (stop[0] - stop[1])
    })
    return result
}
