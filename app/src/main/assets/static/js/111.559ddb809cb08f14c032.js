webpackJsonp([111],{BdJQ:function(e,t,i){t=e.exports=i("UTlt")(!0),t.push([e.i,"\n.customSevice[data-v-6127b7ed]{padding-top:1.22667rem;background-color:#fff;height:100vh\n}\n.customSevice .customTab.customTabLine[data-v-6127b7ed]{border-bottom:none\n}\n.customSevice .customTab[data-v-6127b7ed]{padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px #F1F1F1 solid\n}\n.customSevice .customTab input[data-v-6127b7ed]{width:4rem;text-align:right;margin-right:.13333rem\n}\n.customSevice .customTab input[data-v-6127b7ed]::-webkit-input-placeholder{color:#cccccc\n}\n.customSevice .customTab textarea[data-v-6127b7ed]{display:block;width:100%;height:2rem;border:1px #eeeeee solid;color:#555555\n}\n.customSevice .customTab input[data-v-6127b7ed]::-webkit-input-placeholder,.customSevice .customTab textarea[data-v-6127b7ed]::-webkit-input-placeholder{color:#b3b3b3;font-size:13px\n}\n.customSevice .customTab textarea[data-v-6127b7ed],.customSevice .customTab input[data-v-6127b7ed],.customSevice .customTab select[data-v-6127b7ed]:focus{outline:0\n}\n.customSevice p[data-v-6127b7ed]{background-color:#F3F7FF;padding:.4rem;font-size:14px;color:#999999\n}\n.customSevice .custombtn[data-v-6127b7ed]{display:block;width:80%;height:.8rem;background-image:-webkit-linear-gradient(left, #148FFE 0%, #2C66D3 100%);background-image:linear-gradient(90deg, #148FFE 0%, #2C66D3 100%);color:#fff;text-align:center;line-height:.8rem;border-radius:.4rem;font-size:13px;font-style:normal;margin:3.33333rem auto 0rem\n}\n","",{version:3,sources:["E:/project/NetHosp/xqdMedical/src/page/Consultation/custom-sevice.vue"],names:[],mappings:";AACA,+BAA+B,uBAAuB,sBAAsB,YAAY;CACvF;AACD,wDAAwD,kBAAkB;CACzE;AACD,0CAA0C,cAAc,oBAAoB,qBAAqB,aAAa,yBAAyB,sCAAsC,8BAA8B,yBAAyB,2BAA2B,mBAAmB,+BAA+B;CAChT;AACD,gDAAgD,WAAW,iBAAiB,sBAAsB;CACjG;AACD,2EAA2E,aAAa;CACvF;AACD,mDAAmD,cAAc,WAAW,YAAY,yBAAyB,aAAa;CAC7H;AACD,yJAAyJ,cAAc,cAAc;CACpL;AACD,0JAA0J,SAAS;CAClK;AACD,iCAAiC,yBAAyB,cAAc,eAAe,aAAa;CACnG;AACD,0CAA0C,cAAc,UAAU,aAAa,yEAAyE,kEAAkE,WAAW,kBAAkB,kBAAkB,oBAAoB,eAAe,kBAAkB,2BAA2B;CACxV",file:"custom-sevice.vue",sourcesContent:["\n.customSevice[data-v-6127b7ed]{padding-top:1.22667rem;background-color:#fff;height:100vh\n}\n.customSevice .customTab.customTabLine[data-v-6127b7ed]{border-bottom:none\n}\n.customSevice .customTab[data-v-6127b7ed]{padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px #F1F1F1 solid\n}\n.customSevice .customTab input[data-v-6127b7ed]{width:4rem;text-align:right;margin-right:.13333rem\n}\n.customSevice .customTab input[data-v-6127b7ed]::-webkit-input-placeholder{color:#cccccc\n}\n.customSevice .customTab textarea[data-v-6127b7ed]{display:block;width:100%;height:2rem;border:1px #eeeeee solid;color:#555555\n}\n.customSevice .customTab input[data-v-6127b7ed]::-webkit-input-placeholder,.customSevice .customTab textarea[data-v-6127b7ed]::-webkit-input-placeholder{color:#b3b3b3;font-size:13px\n}\n.customSevice .customTab textarea[data-v-6127b7ed],.customSevice .customTab input[data-v-6127b7ed],.customSevice .customTab select[data-v-6127b7ed]:focus{outline:0\n}\n.customSevice p[data-v-6127b7ed]{background-color:#F3F7FF;padding:.4rem;font-size:14px;color:#999999\n}\n.customSevice .custombtn[data-v-6127b7ed]{display:block;width:80%;height:.8rem;background-image:-webkit-linear-gradient(left, #148FFE 0%, #2C66D3 100%);background-image:linear-gradient(90deg, #148FFE 0%, #2C66D3 100%);color:#fff;text-align:center;line-height:.8rem;border-radius:.4rem;font-size:13px;font-style:normal;margin:3.33333rem auto 0rem\n}\n"],sourceRoot:""}])},M6GL:function(e,t,i){"use strict";function a(e){i("vJ20")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("pKZN"),c=(o.a,{components:{back:o.a},data:function(){return{info:null,list:[[]],orderInfo:this.$store.state.pInfo,user:this.$store.state.userInfo,item:[],show:!1,ServiceItemName:"",Price:"",NumValue:"",Description:null,ServiceItemId:this.$route.query.ServiceItemId,customSevice:this.$store.state.customSevice,addArr:[]}},created:function(){var e=this;void 0!=this.$route.query.ServiceItemId&&this.customSevice.forEach(function(t,i){t.ServiceItemId==e.ServiceItemId&&(e.ServiceItemName=t.ServiceItemName,e.Price=Number(t.Price),e.NumValue=t.NumValue,e.Description=t.Description,e.item[0]=t.DoctorServiceWayName)}),this.pull(!1)},mounted:function(){},beforeDestroy:function(){window.onscroll=null},methods:{changeNumber:function(){if(-1!=this.NumValue.indexOf("."))return this.$toast("服务次数需是整数")},pull:function(e){var t=this;this.$post("PlatFormAPI/ServicePackItem/QueryDoctorServiceWays",this.$pick({DrId:this.user.Data.User.DoctorId,DrType:this.user.Data.User.DrType})).then(function(e){t.info=e,e.forEach(function(e){t.list[0].push(e.DoctorServiceWayName)})})},send:function(e){var t=this;if(!this.ServiceItemName)return this.$toast("请输入服务名称");if(!this.Price)return this.$toast("请输入服务单价");if(!this.NumValue)return this.$toast("请输入服务次数");if(!this.Description)return this.$toast("请填写服务简介");var i=Number(this.NumValue).toString();if(Number(this.NumValue)<1)return this.$toast("服务次数需是整数且大于1");if(-1!=i.indexOf("."))return this.$toast("服务次数需是整数且大于1");if(!this.item[0])return this.$toast("请输入服务方式");if(null!=this.Description&&this.Description.length>200)return this.$toast("服务简介不能超过200字");var a=[];if(this.info.forEach(function(e){e.DoctorServiceWayName==t.item[0]&&(a=e)}),a.GoodsSource=4,a.ServiceItemName=this.ServiceItemName,a.Price=this.Price,a.NumValue=Number(this.NumValue),a.Description=this.Description,a.NumTypeName="次",a.isChecked=1,this.ServiceItemId&&(a.ServiceItemId=a.ServiceItemId),this.addArr.splice(0,1,a),this.customSevice.length>0){var o=0;this.customSevice.forEach(function(e,i){e.ServiceItemId==t.ServiceItemId&&e.GoodsSource>1&&(o=1,t.customSevice.splice(i,1,a))}),0==o&&this.customSevice.push(a)}console.log(this.customSevice),this.$store.dispatch("pushcustomSevice",this.customSevice.length>0?this.customSevice:this.addArr),this.$router.back()},goback:function(){this.$router.back()}}}),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"el"},[i("div",{staticClass:"title"},[i("back"),e._v(" "),i("span",{staticClass:"name"},[e._v("添加服务项")]),e._v(" "),i("a",{on:{click:function(t){return e.goback()}}},[e._v("取消")])],1),e._v(" "),i("div",{staticClass:"customSevice"},[i("div",{staticClass:"customTab"},[i("span",[e._v("服务项名称")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.ServiceItemName,expression:"ServiceItemName"}],attrs:{type:"text",placeholder:"请输入服务项名称"},domProps:{value:e.ServiceItemName},on:{input:function(t){t.target.composing||(e.ServiceItemName=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"customTab"},[i("span",[e._v("服务单价")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.Price,expression:"Price"}],attrs:{type:"number",placeholder:"请输入服务金额"},domProps:{value:e.Price},on:{input:function(t){t.target.composing||(e.Price=t.target.value)}}}),e._v("元\n\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"customTab"},[i("span",[e._v("服务次数")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.NumValue,expression:"NumValue"}],attrs:{type:"number",placeholder:"请输入服务次数"},domProps:{value:e.NumValue},on:{input:[function(t){t.target.composing||(e.NumValue=t.target.value)},e.changeNumber]}}),e._v("次\n\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"customTab",on:{click:function(t){e.show=!0}}},[i("span",[e._v("服务方式：")]),e._v(" "),i("span",[e._v("\n\t\t\t\t\t"+e._s(e.item[0]?e.item[0]:"选择项目")),i("em")]),e._v(" "),i("popup-picker",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{show:e.show,data:e.list},on:{"on-hide":function(t){e.show=!1}},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}})],1),e._v(" "),i("p",[e._v("若服务方式选择其他，则患者消费该服务项的方式由医生自行解释，平台不予处理。")]),e._v(" "),i("div",{staticClass:"customTab customTabLine"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Description,expression:"Description"}],attrs:{placeholder:"请输入您的服务简介，清晰描述服务项服务内容，以免因为无法为购买患者提供服务而造成损失。200个字符以内"},domProps:{value:e.Description},on:{input:function(t){t.target.composing||(e.Description=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"custombtn",on:{click:function(t){return e.send()}}},[e._v("\n\t\t\t\t添加\n\t\t\t")])])])},n=[],r={render:s,staticRenderFns:n},u=r,m=i("C7Lr"),d=a,l=m(c,u,!1,d,"data-v-6127b7ed",null);t.default=l.exports},vJ20:function(e,t,i){var a=i("BdJQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("558f9ffa",a,!0,{})}});
//# sourceMappingURL=111.559ddb809cb08f14c032.js.map