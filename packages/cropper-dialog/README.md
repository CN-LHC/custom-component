# 圆形百分比组件

## lhc-cropper-dialog 组件

一个图片裁剪组件

### 使用方法

```javascript
<template>
    <div>
        <img :src="imgMsg.blob" :alt="imgMsg.name">
        <button @click="uploadImg">上传</button>
        <input type="file" ref="fileInput" style="display: none" @change="batchImport" accept=".jpeg,.jpg,.png,.gif">
        <lhc-cropper-dialog ref="cropper" :fixed="true" :nameControl="false" @changeImgMsg="changeImgMsg" />
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
        changeImgMsg(value) {
            blobToBase64(value.blobFile).then((base64) => {
                this.imgMsg = {
                    blob: base64,
                    name: value.name
                }
            })
        }
    }
}
</script>
```

### 哪里引用了 lhc-cropper-dialog 组件？

examples/components/CropperDialog.vue

### 效果

### CircularDouble Attributes

| 参数         | 说明                       | 类型    | 可选值 | 默认值  |
| ------------ | -------------------------- | ------- | ------ | ------- |
| fixedControl | 修改裁剪比例               | Boolean |        | true    |
| nameControl  | 修改图片名称               | Boolean |        | true    |
| canScale     | 图片是否允许滚轮缩放       | Boolean |        | false   |
| autoCrop     | 是否默认生成截图框         | Boolean |        | true    |
| fixedBox     | 固定截图框大小 不允许改变  | Boolean |        | false   |
| fixed        | 是否开启截图框宽高固定比例 | Boolean |        | false   |
| fixedNumber  | 截图框的宽高比例           | Array   |        | [16, 9] |
| full         | 是否输出原图比例的截图     | Boolean |        | false   |
| canMoveBox   | 截图框能否拖动             | Boolean |        | true    |
| original     | 上传图片按照原始比例渲染   | Boolean |        | false   |
| centerBox    | 截图框是否被限制在图片里面 | Boolean |        | true    |
| infoTrue     | 图片（截图）宽高           | Boolean |        | true    |

### CircularDouble Events

| 事件名       | 说明                   | 参数  |
| ------------ | ---------------------- | ----- |
| changeImgMsg | 获取裁剪之后的图片资源 | ----- |

### 组件相关信息

| Author      | CreateTime | UpdateTime | Introduction       | parameter |
| ----------- | ---------- | ---------- | ------------------ | --------- |
| liuhanchuan | 2023/1/31  |            | lhc-cropper-dialog |           |
