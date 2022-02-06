const data = require('./../integration/data')
const util = require('./../util/geo-distance');
const Result = require('./../model/result');
const stringSimilarity = require("string-similarity");

module.exports = class SearchService {
    data = data;

    findMatchingServices(serviceName, lat, lng) {
        let matchingServices = this.createMatchingServicesArray(serviceName, lat, lng);
        return new Result(matchingServices, data.length)
    }

    createMatchingServicesArray(search, lat, lng) {
        let results = []
        for (let i = 0; i < this.data.length; i++) {
            let distance = this.calculateDistance(lat, lng, this.data[i].position);
            let score = this.calculateScore(search, this.data[i].name);
            let result = {
                "id": this.data[i].id,
                "name": this.data[i].name,
                "position": this.data[i].position,
                "distance": util.convertUnit(distance),
                "score": score
            };
            if (score > 5)
                results.push(result);
        }

        return results;
    }

    calculateDistance(lat, lng, servicePosition) {
        return util.distance(
            lat,
            lng,
            servicePosition.lat,
            servicePosition.lng,
            "K"
        );
    }

    calculateScore(searchTerm, serviceName) {
        let s = (stringSimilarity.compareTwoStrings(searchTerm.toLowerCase(), serviceName.toLowerCase()) * 10).toFixed(0);
        return s;
    }

}