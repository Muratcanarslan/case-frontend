<template>
    <Toast />
    <div style="position:absolute;top:30%;left: 45%;" >
      <h2>Upload File To System</h2>
  <div class="flex align-items-stretch flex-wrap card-container blue-container">
      <label for="filename">File Name</label>
      <InputText v-model="filename" id="filename" type="text" class="flex align-items-center justify-content-center text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
  </div>
  <div class="field">
      <label for="extension">Extension</label>
      <InputText v-model="extension" id="extension" type="text" class="flex align-items-center justify-content-center	text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
  </div>

  <div class="field">
      <label for="file">File</label>
      <input  type="file" @change="change"/>
  </div>
  
  <Button label="UploadFile" @click="uploadFile"></Button>
  </div>
  </template>
  
  <script>
  import { FileSaveRequest } from '@/models/FileSaveRequest';
  export default {
    name: 'FileUploadScreen',
    data() {
      return {
        filename: null,
        extension: null,
        fileByteArray: null
    }
    },
    methods : {
     
    showErrorToast(message){
        this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: message, life: 3000});   
    } ,
    change(event){
        const reader = new FileReader();
        const fileByteArray = [];
        reader.readAsArrayBuffer(event.target.files[0]);
  reader.onloadend = (evt) => {
    if (evt.target.readyState === FileReader.DONE) {
      const arrayBuffer = evt.target.result,
        array = new Uint8Array(arrayBuffer);
      for (const a of array) {
        fileByteArray.push(a);
      }
      this.fileByteArray = fileByteArray;
    }
  }
    },
    uploadFile(){
        this.$store.dispatch('uploadFile', new FileSaveRequest({fileName:this.filename,extension:this.extension,file:this.fileByteArray})).then(
          () => {
            this.$toast.add({severity: 'Success', summary: 'Success', detail: "Success", life: 3000});
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.response.data;
            this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: this.errorMessage, life: 3000});
          }
      ); 
      

        }
   
  }
  }
  
  </script>
  
  