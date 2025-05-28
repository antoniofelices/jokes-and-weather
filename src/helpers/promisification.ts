function getCurrentPositionAsync(options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

export { getCurrentPositionAsync }
