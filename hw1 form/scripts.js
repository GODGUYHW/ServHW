function previewBeforeUpload(id){
    document.querySelector("#"+id).addEventListener("change", function(e){
        if(e.target.files.length == 0){
            return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        document.querySelector("#"+id+"-preview img").src = url;
    });
}
previewBeforeUpload("img-upload");

const today = new Date();
const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const minDateString = minDate.toISOString().split('T')[0];
document.getElementById('birth').setAttribute('max', minDateString);

function input(inputclass,filter){
    for(var i=0;i<inputclass.length;i++){
        ["input"].forEach(function(event){
            inputclass[i].addEventListener(event,function(){
                if (!this.value.startsWith('0')) {
                            this.value = '0' + this.value.replace(/^0*/, '');
                        }
                        if (!filter(this.value)) {
                            this.value = "";
                        }
            });
        });
    }
}
input(document.getElementsByClassName("onlynum"),function(value){
    return /^\d*$/.test(value);
})
