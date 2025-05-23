function getCurrentPositionAsync(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

export { getCurrentPositionAsync }
