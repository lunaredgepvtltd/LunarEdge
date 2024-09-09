export const API = {
    register : {
       url : 'http://localhost:8080/api/query',
        method : 'post'
    },
    adminLogin  : {
        url : 'http://localhost:8080/api/adminLogin',
        method : 'post'
       },
    addNewVacancy : {
        url : 'http://localhost:8080/api/addNewVacancy',
        method : 'post'
    },
    getAllVacancy : {
        url : 'http://localhost:8080/api/getAllVacancy',
        method : "get"
    },
    deleteVacancy : {
        url : 'http://localhost:8080/api/deleteVacancy',
        method : 'delete'
    },
    updateVacancy : {
        url : 'http://localhost:8080/api/updateVacancy',
        method : 'put'
    },
    fillForm : {
        url : 'http://localhost:8080/api/formFill',
        method : 'post'
    }
}