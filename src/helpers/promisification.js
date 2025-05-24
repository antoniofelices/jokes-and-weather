function getCurrentPositionAsync(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

/*TODO: Understand when to promise a listener. */
function promisifyEvent(element, eventType, options = {}) {
    return new Promise((resolve, reject) => {
        const handler = (event) => {
            resolve(event)
        }

        element.addEventListener(eventType, handler, options)
    })
}

export { getCurrentPositionAsync, promisifyEvent }
