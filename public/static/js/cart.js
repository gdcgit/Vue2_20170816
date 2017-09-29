/**
 * Created by 高笛淳 on 2017/8/15.
 */
// 全局注册
Vue.filter('money',function (value,type) {
    return '￥' + value.toFixed(2) + type;
});
new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        dataList:[],
        checkAllFlag:false,
        delFlag:false,
        curProduct:'',
        jumpUrl:""
    },
    filters:{
      formatMoney:function (value) {
          return "￥" + value.toFixed(2);
      }
    },
    mounted:function () {
        this.$nextTick(function () {
            this.getData();
        })
    },
    methods: {
        getData: function () {
            this.$http.get('http://localhost/vue/public/index/index/select').then(res => {
                this.dataList = res.data.result.list;
            })
        },
        changeNum: function (item, type) {
            if (type > 0) {
                item.count++;
            } else {
                if (item.count < 1) {
                    item.count = 1;
                }
                item.count--;
            }
            if(item.count>0){
                if(typeof item.checked === 'undefined'){
                    this.$set(item, 'checked', true);//局部注册
                }
            }
            this.calTotal();
        },
        selectProduct: function (item) {
            if (typeof item.checked === 'undefined') {
                // Vue.set(item,'checked',true);//全局注册
                this.$set(item, 'checked', true);//局部注册
            } else {
                item.checked = !item.checked;
            }
            this.calTotal();
        },
        checkAll: function () {
            this.checkAllFlag = !this.checkAllFlag;
            this.dataList.forEach((item, index) => {
                if (typeof item.checked === 'undefined') {
                    this.$set(item, 'checked', this.checkAllFlag);
                } else {
                    item.checked = this.checkAllFlag;
                }
            })
            this.calTotal();
        },
        selectAll:function () {
            this.checkAllFlag = true;
            this.dataList.forEach((item,index) => {
                if(typeof item.checked === 'undefined'){
                    this.$set(item,'checked',true);
                }else{
                    item.checked = true;
                }
            })
            this.calTotal();
        },
        NotselectAll:function () {
            this.checkAllFlag = false;
            this.dataList.forEach((item,index) => {
                if(typeof item.checked !== 'undefined'){
                    item.checked = false;
                }
            })
            this.calTotal();
        },
        calTotal:function () {
            this.totalMoney = 0;
            this.dataList.forEach((item,index) => {
                if(item.checked === true){
                    this.totalMoney += item.amount * item.count;
                }
            })
        },
        delConfirm:function (item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct:function () {
            var index = this.dataList.indexOf(this.curProduct);
            this.dataList.splice(index,1);
            this.delFlag = false;
        },
        jump:function () {
            this.jumpUrl = "/vue/public/index/Second/address?totalMoney="+this.totalMoney;
        }
    }
});
