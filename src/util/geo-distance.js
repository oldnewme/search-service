/*https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates*/

function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

function convertUnit(distance){
    if(distance < 1){
        return (distance * 100).toFixed(0) + 'm';
    }
    return distance.toFixed(2) + 'KM';
}

module.exports = {distance, convertUnit};
