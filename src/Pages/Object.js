//Use Singleton

let instance = null
class KeyValObj {

  constructor() {
    if(!instance) {
      instance = this
    }
    this.data = {};
    return instance
  }

  init(key, val) {
    console.log("In init")
    this.data[key] = val
    return this.data
    // return getSalesRepContacts(data)
    //   .then(res => {
    //     const companies = res.data.result.data;
    //     const counts = res.data.result.counts;
    //
    //     this.companies = Object.keys(companies).map(company => ({
    //       companyName: company,
    //       count: null,
    //       personaData: companies[company]
    //     }));
    //     return this.companies;
    //   })
    //   .catch(err => {});
  }

  getPairs() {
    return this.data;
  }

  // getAccountsByPersona(company, persona) {
  //   const foundCompany = _.find(this.companies, { companyName: company });
  //   return foundCompany.personaData[persona];
  // }
}

export default KeyValObj;
