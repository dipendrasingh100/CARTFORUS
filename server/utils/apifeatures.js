// search , filter

class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
        // console.log("Query - ", this.queryStr);
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                title: {
                    $regex: this.queryStr.keyword,
                    $options: 'i'
                }
            } : {};

        this.query = this.query.find({ ...keyword });

        return this
    }

    filter() {
        const queryCopy = { ...this.queryStr }
        //Removing some fields for category
        const removeFields = ["keyword", "page", "limit"]

        removeFields.forEach((key) => delete queryCopy[key])

        //Filter for Price and Rating 
        //added $before lt, lte, gt, gte
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`)
        // console.log("Filter - ", JSON.parse(queryStr));
        this.query = this.query.find(JSON.parse(queryStr))

        return this
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1
        const skipItems = resultPerPage * (currentPage - 1)

        // chained a .clone() method to the .find() method to prevent query already exists error
        this.query = this.query.limit(resultPerPage).skip(skipItems).clone()
        return this
    }

}

module.exports = ApiFeatures