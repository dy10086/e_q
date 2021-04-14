import MessageBox from './MessageBox'
import Vue from 'vue'
var defaults = {
    isShow:false,
    text:'',
    handleCancel:null,
    handleOk:null
}

export function Message(opts){

    for(let attr in opts){
        
        defaults[attr] = opts[attr]
    }

    var MyComponent = Vue.extend(MessageBox)
    var vm = new MyComponent({
        data: {
            isShow:defaults.isShow,
            text:defaults.text
        },
        methods: {
            handleCancel(){
                if(defaults.handleCancel) defaults.handleCancel() && defaults.handleCancel.bind(this)

                document.body.removeChild(vm.$el)
                defaults = {
                    isShow:false,
                    text:'',
                    handleCancel:null,
                    handleOk:null
                }
            },
            handleOk(){
                if(defaults.handleOk) defaults.handleOk() && defaults.handleOk.bind(this)
                
                document.body.removeChild(vm.$el)
                defaults = {
                    isShow:false,
                    text:'',
                    handleCancel:null,
                    handleOk:null
                }
            }
        }
    }).$mount(document.createElement('div'))

    document.body.appendChild(vm.$el)
}