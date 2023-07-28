export class FileSaveRequest{
    fileName = '';
    extension = '';
    file = '';
    constructor(data){
        this.username = data.fileName;
        this.password = data.extension;
        this.file = data.file;
    }
}