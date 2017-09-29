/**
 * Created by 高笛淳 on 2017/8/16.
 */
new Vue({
    el:'.container',
    data:{
        limitNum:3,
        addressList:[],
        currentIndex:0,
        send:true
    },
    mounted:function () {
        this.$nextTick(function () {
            this.getAddressList();
        })
    },
    methods:{
        getAddressList:function () {
            this.$http.get('/vue/public/static/data/address.json').then( res => {
                if(res.data.status === 0){
                    this.addressList = res.data.result;
                }
            });
        },
        showAll:function () {
            this.limitNum = this.limitNum===3?this.addressList.length:3
        },
        setDefault:function (addressId) {
            this.addressList.forEach((item,index) => {
                if(item.addressId === addressId){
                    item.isDefault = true;
                }else{
                    item.isDefault = false;
                }
            })
        }
    },
    computed:{
        computedList:function () {
            return this.addressList.slice(0,this.limitNum);
        }
    }
});