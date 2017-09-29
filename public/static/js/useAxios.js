/**
 * Created by 高笛淳 on 2017/8/16.
 */
config = {
    // 基础url前缀
    baseURL: 'http://localhost/vue/public/'
};

new Vue({
    el:'#app',
    data:{
        dataList:[]
    },
    mounted:function () {
        this.$nextTick(function () {
            this.loadData();
        })
    },
    methods:{
        loadData:function () {
            var _this = this;
            axios.get('index/index/select',config)
                .then(function (response) {
                    res = response.data;
                    _this.dataList = res.result.list;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
});