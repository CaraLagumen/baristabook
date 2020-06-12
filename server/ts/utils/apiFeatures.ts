class APIFeatures {
  query: any;
  queryString: any;

  constructor(query: any, queryString: any) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //1. REGULAR FILTERING
    const queryObj = { ...this.queryString };
    const excludedFields = [`page`, `sort`, `limit`, `fields`, `alert`];
    excludedFields.forEach(el => delete queryObj[el]);

    //2. ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    //3. SORTING
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(`,`).join(` `);
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort(`-createdAt`);
    }
    return this;
  }

  limitFields() {
    //4. FIELD LIMITING
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(`,`).join(` `);
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select(`-__v`);
    }
    return this;
  }

  paginate() {
    //5. PAGINATION
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default APIFeatures;
