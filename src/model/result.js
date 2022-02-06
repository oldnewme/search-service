module.exports = class Result {
    constructor(matchingServices, sizeOfData){
        this.totalHits = matchingServices.length;
        this.totalDocuments = sizeOfData;
        this.results = matchingServices;
    }


}