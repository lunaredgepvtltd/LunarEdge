
const DomainName = process.env.DOMAIN_URL
const localDomainName = process.env.BASE_URL


export const API = {
    register : {
       url : `${DomainName}/api/query`,
        method : 'post'
    },
    adminLogin  : {
        url : `${DomainName}/api/adminLogin`,
        method : 'post'
       },
    addNewVacancy : {
        url : `${DomainName}/api/addNewVacancy`,
        method : 'post'
    },
    getAllVacancy : {
        url : `${DomainName}/api/getAllVacancy`,
        method : "get"
    },
    deleteVacancy : {
        url : `${DomainName}/api/deleteVacancy`,
        method : 'delete'
    },
    updateVacancy : {
        url : `${DomainName}/api/updateVacancy`,
        method : 'put'
    },
    fillForm : {
        url : `${DomainName}/api/formFill`,
        method : 'post'
    }
}