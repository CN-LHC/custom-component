<template>
    <div>
        <img :src="imgMsg.blob" :alt="imgMsg.name">
        <button @click="uploadImg">上传</button>
        <input type="file" ref="fileInput" style="display: none" @change="batchImport" accept=".jpeg,.jpg,.png,.gif">
        <lhc-cropper-dialog ref="cropper" :fixed="true" @changeImgMsg="changeImgMsg" />
    </div>
</template>
<script>
import { blobToBase64 } from '../../utils/index'
export default {
    data() {
        return {
            imgMsg: {
                blob: '',
                name: '',
            }
        }
    },
    methods: {
        sendChartConfig(value) {
            this.$emit('getChartConfig', JSON.stringify(value))
        },
        // 词云图
        uploadImg() {
            this.$refs.fileInput.click()
        },
        batchImport(e) {
            const [file] = e.target.files;
            const checkSize = this.imgBeforeUpload(file)
            if (checkSize) {
                this.$refs.cropper.openDialog(file)
            }
             // 清空input的值
            this.$refs.fileInput.value = ''
        },
        //图片上传前，检查大小是否超出
        imgBeforeUpload(file) {
            const isFileSizeFit = file.size / 1024 / 1024 < 5;
            if (!isFileSizeFit) {
                this.$message.error("图片大小不能超过 5MB!");
            }

            return isFileSizeFit;
        },
        changeImgMsg(value, callback) {
            blobToBase64(value.blobFile).then((base64) => {
                this.imgMsg = {
                    blob: base64,
                    name: value.name
                }
                callback()
            })
        }
    }
}
</script>