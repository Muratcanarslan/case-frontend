import FileService from "../services/FileService.js";

const FileModule = {
    namespace: true,
    actions: {
        getAllFiles(state,_){
           return FileService.getAllFiles().then(
                successData => {
                    return Promise.resolve(successData);
                },
                error => {
                    return Promise.reject(error);
                }
            )
        },
        delete(state,id){
            return FileService.delete(id).then(
                 successData => {
                     return Promise.resolve(successData);
                 },
                 error => {
                     return Promise.reject(error);
                 }
             )
         }
    },
}

export default FileModule;