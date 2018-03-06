<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">Suelta tu archivo aquí o <em>haz clic para cargar</em></div>
    <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tamaño menor de 500kb</div>
  </el-upload>
</template>
<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>