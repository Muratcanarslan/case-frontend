import axiosInstance from "../utils/axiosUtil.js";
class FileService{
    uploadFile(fileRequest){
        try {
                return axiosInstance.post('file/upload', fileRequest).then(function (response) {
                    return response.data;
                });
        }catch (error){
            console.error(error);
        }
    }

    getAllFiles(){
        try {
                return axiosInstance.get('file/getAll').then(function (response) {
                    return response.data;
                });
        }catch (error){
            console.error(error);
        }
    }

    delete(id){
        try {
                return axiosInstance.delete('file/'+id).then(function (response) {
                    return response.data;
                });
        }catch (error){
            console.error(error);
        }
    }

}
export default new FileService();