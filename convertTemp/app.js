function weatherInfo(temp) {
    let converted = temp - 32 * (5 / 9)
    if (converted > 0) {
        return (converted + " is freezing temperature")
    } else {
        return (converted + " is above freezing temperature")
    }
}