<template>
    <div style="float: right;">
    <Button label="File Upload Screen" @click="goToFileUploadScreen" icon="pi pi-check" class="block mb-4" />
    <Button label="Log out" @click="logout" icon="pi pi-check" />

    </div>
    <div class="center">
    <DataTable :value="files" tableStyle="min-width: 50rem">
    <Column field="File Name" header="Name">
        <template #body="slotProps">
                    {{ slotProps.data.fileName }}
        </template>
    </Column>
    <Column field="Path" header="Path">
        <template #body="slotProps">
                    {{ slotProps.data.path }}
        </template>
    </Column>
    <Column field="Size" header="Size">
        <template #body="slotProps">
                    {{ slotProps.data.size }}
        </template>
    </Column>
    <Column headerStyle="width: 10rem">
        <template  #body="slotProps">
            <div class="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-pencil" rounded style="background-color: red;" label="Delete" @click="deleteData(slotProps.data.id)"/>
            </div>
        </template>
    </Column>
</DataTable>
  </div>
    <div class="center">  <!--
        <TreeTable :value="files">
    <template #header>
        <div class="text-xl font-bold">Files</div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="extension" header="extension"></Column>
    <Column field="path" header="path"></Column>
   <Column headerStyle="width: 10rem">
        <template #body>
            <div class="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-pencil" rounded style="background-color: red;" label="Delete"/>
            </div>
        </template>
    </Column>
</TreeTable>-->
</div>
</template>

<script>
export default {
name: 'HomeScreen',
methods: {
    logout(){
        this.$store.commit('logout');
        this.$router.push('/login');
    },
    goToFileUploadScreen(){
        this.$router.push('/file-upload');
    },
    deleteData(id){
        debugger;
        this.$store.dispatch('delete',id).then(
          (response) => {
            console.log(response);
            this.files = response; 
            this.updateTableData();
          }, (error) => {
            this.loading = false;
            this.errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: this.errorMessage, life: 3000});
          }
      );   
    },
    updateTableData(){
        this.$store.dispatch('getAllFiles').then(
          (response) => {
            console.log(response);
            this.files = response; 
          }, (error) => {
            this.loading = false;
            this.errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: this.errorMessage, life: 3000});
          }
      ); 
    }
},
data(){
    return {
        files: [],
    }
},
created(){
    this.$store.dispatch('getAllFiles').then(
          (response) => {
            console.log(response);
            this.files = response; 
          }, (error) => {
            this.loading = false;
            this.errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: this.errorMessage, life: 3000});
          }
      );   
}
}
</script>

<style>
.center{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50% , -50%)
}
</style>
