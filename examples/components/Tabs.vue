<template>
    <div class="tab_container">
        <tabs value="name1">
        <tab-pane label="入驻企业" name="name1">
            <div class="tab_pane_container">
                入驻企业
            </div>
        </tab-pane>
        <tab-pane label="年度TOP10企业" name="name2">
            <div class="tab_pane_container">年度TOP10企业</div>
        </tab-pane>
        </tabs>
    </div>
</template>
<style lang="less" scoped>
.tab_container {
    width: 600px;
    .tab_pane_container {
        min-height: 400px;
    }
}
</style>