function getCurrentPositionAsync(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

function promisifyEvent(element, eventType, options = {}) {
    return new Promise((resolve, reject) => {
        const handler = (event) => {
            resolve(event)
        }

        element.addEventListener(eventType, handler, options)
    })
}

export { getCurrentPositionAsync, promisifyEvent }
