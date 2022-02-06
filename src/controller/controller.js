const SearchService = require("./../service/search-service")
module.exports = class Controller {

    findMatchingServices(searchTerm, lat, lng) {
        return new SearchService().findMatchingServices(searchTerm, lat, lng);
    }
}
