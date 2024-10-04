const DomainName = 'https://13.201.243.29:8080';
const localDomainName = 'http://localhost:8080';

// const DomainName = 'https://lunaredge.in'
// const localDomainName = 'http://localhost:8080'


 
// export const API = {
//     register : {
//        url : `${DomainName}/api/query`,
//         method : 'post'
//     },
//     adminLogin  : {
//         url : `${DomainName}/api/adminLogin`,
//         method : 'post'
//        },
//     addNewVacancy : {
//         url : `${DomainName}/api/addNewVacancy`,
//         method : 'post'
//     },
//     getAllVacancy : {
//         url : `${DomainName}/api/getAllVacancy`,
//         method : "get"
//     },
//     deleteVacancy : {
//         url : `${DomainName}/api/deleteVacancy`,
//         method : 'delete'
//     },
//     updateVacancy : {
//         url : `${DomainName}/api/updateVacancy`,
//         method : 'put'
//     },
//     fillForm : {
//         url : `${DomainName}/api/formFill`,
//         method : 'post'
//     },
//     sendEmail : {
//        url : `${DomainName}/api/sendEmail`,
//        method : 'post'
//     }
// }

// Use the appropriate domain based on the environment
const currentDomain = isLocal ? localDomainName : DomainName;

export const API = {
    register: {
        url: `${currentDomain}/api/query`,
        method: 'post'
    },
    adminLogin: {
        url: `${currentDomain}/api/adminLogin`,
        method: 'post'
    },
    addNewVacancy: {
        url: `${currentDomain}/api/addNewVacancy`,
        method: 'post'
    },
    getAllVacancy: {
        url: `${currentDomain}/api/getAllVacancy`,
        method: 'get'
    },
    deleteVacancy: {
        url: `${currentDomain}/api/deleteVacancy`,
        method: 'delete'
    },
    updateVacancy: {
        url: `${currentDomain}/api/updateVacancy`,
        method: 'put'
    },
    fillForm: {
        url: `${currentDomain}/api/formFill`,
        method: 'post'
    }
};
