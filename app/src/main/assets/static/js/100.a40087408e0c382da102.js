webpackJsonp([100],{jqK6:function(e,t,i){var a=i("ku5p");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("de512c4a",a,!0,{})},ku5p:function(e,t,i){var a=i("L4zZ");t=e.exports=i("UTlt")(!0),t.push([e.i,"\n.title[data-v-6a605194]{background:#fff;height:1.2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.title i[data-v-6a605194]{display:block;height:.46667rem;width:.26667rem;background:url("+a(i("P9/e"))+") no-repeat center;background-size:cover\n}\n.title .name[data-v-6a605194]{font-size:17px\n}\n.diagnosis[data-v-6a605194]{background:#fff;padding:.4rem;margin:.26667rem 0\n}\n.diagnosis p[data-v-6a605194]{height:.66667rem;line-height:.66667rem;font-size:15px;color:#656565;text-align:center\n}\n.diagnosis input[data-v-6a605194]{height:.8rem;background:#f4f4f4;width:100%;border-radius:20px;padding:0 .4rem;margin:.26667rem 0\n}\n.diagnosis .main[data-v-6a605194]{border:1px solid red\n}\n.prescription[data-v-6a605194]{background:#fff;padding:.4rem\n}\n.prescription h2[data-v-6a605194]{font-weight:bold\n}\n.prescription .med[data-v-6a605194]{padding:.26667rem 0\n}\n.prescription .med p[data-v-6a605194]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:.13333rem 0\n}\n.prescription .operate[data-v-6a605194]{padding:.26667rem 0 0;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.prescription .operate span[data-v-6a605194]{display:block;width:2.13333rem;height:.86667rem;line-height:.86667rem;border:1px solid #2a6dc9;color:#2a6dc9;text-align:center;border-radius:20px;margin-right:.26667rem\n}\n.prescription .gray[data-v-6a605194]{color:#626262\n}\n.prescription .btn[data-v-6a605194]{width:90%;height:1.2rem;line-height:1.2rem;text-align:center;color:#fff;background:#2a6dc9;margin:auto;border-radius:30px;margin-top:.93333rem\n}\n","",{version:3,sources:["E:/project/NetHosp/xqdMedical/src/style/page/usu-detail.scss"],names:[],mappings:";AACA,wBAAwB,gBAAgB,cAAc,oBAAoB,qBAAqB,aAAa,yBAAyB,sCAAsC,8BAA8B,yBAAyB,2BAA2B,kBAAkB;CAC9Q;AACD,0BAA0B,cAAc,iBAAiB,gBAAgB,0DAAoD,qBAAqB;CACjJ;AACD,8BAA8B,cAAc;CAC3C;AACD,4BAA4B,gBAAgB,cAAc,kBAAkB;CAC3E;AACD,8BAA8B,iBAAiB,sBAAsB,eAAe,cAAc,iBAAiB;CAClH;AACD,kCAAkC,aAAa,mBAAmB,WAAW,mBAAmB,gBAAgB,kBAAkB;CACjI;AACD,kCAAkC,oBAAoB;CACrD;AACD,+BAA+B,gBAAgB,aAAa;CAC3D;AACD,kCAAkC,gBAAgB;CACjD;AACD,oCAAoC,mBAAmB;CACtD;AACD,sCAAsC,oBAAoB,qBAAqB,aAAa,yBAAyB,sCAAsC,8BAA8B,mBAAmB;CAC3M;AACD,wCAAwC,sBAAsB,oBAAoB,qBAAqB,YAAY;CAClH;AACD,6CAA6C,cAAc,iBAAiB,iBAAiB,sBAAsB,yBAAyB,cAAc,kBAAkB,mBAAmB,sBAAsB;CACpN;AACD,qCAAqC,aAAa;CACjD;AACD,oCAAoC,UAAU,cAAc,mBAAmB,kBAAkB,WAAW,mBAAmB,YAAY,mBAAmB,oBAAoB;CACjL",file:"usu-detail.scss",sourcesContent:['\n.title[data-v-6a605194]{background:#fff;height:1.2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.title i[data-v-6a605194]{display:block;height:.46667rem;width:.26667rem;background:url("~assets/back.png") no-repeat center;background-size:cover\n}\n.title .name[data-v-6a605194]{font-size:17px\n}\n.diagnosis[data-v-6a605194]{background:#fff;padding:.4rem;margin:.26667rem 0\n}\n.diagnosis p[data-v-6a605194]{height:.66667rem;line-height:.66667rem;font-size:15px;color:#656565;text-align:center\n}\n.diagnosis input[data-v-6a605194]{height:.8rem;background:#f4f4f4;width:100%;border-radius:20px;padding:0 .4rem;margin:.26667rem 0\n}\n.diagnosis .main[data-v-6a605194]{border:1px solid red\n}\n.prescription[data-v-6a605194]{background:#fff;padding:.4rem\n}\n.prescription h2[data-v-6a605194]{font-weight:bold\n}\n.prescription .med[data-v-6a605194]{padding:.26667rem 0\n}\n.prescription .med p[data-v-6a605194]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:.13333rem 0\n}\n.prescription .operate[data-v-6a605194]{padding:.26667rem 0 0;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.prescription .operate span[data-v-6a605194]{display:block;width:2.13333rem;height:.86667rem;line-height:.86667rem;border:1px solid #2a6dc9;color:#2a6dc9;text-align:center;border-radius:20px;margin-right:.26667rem\n}\n.prescription .gray[data-v-6a605194]{color:#626262\n}\n.prescription .btn[data-v-6a605194]{width:90%;height:1.2rem;line-height:1.2rem;text-align:center;color:#fff;background:#2a6dc9;margin:auto;border-radius:30px;margin-top:.93333rem\n}\n'],sourceRoot:""}])},lgXj:function(e,t,i){"use strict";function a(e){i("jqK6")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("pKZN"),n=(s.a,{components:{back:s.a},data:function(){return{id:this.$route.query.id,ListDetails:[],Diagnoses:null,user:this.$store.state.userInfo,showConfirm:!1,popIdx:null,timer:null}},created:function(){var e=this;this.timer=setInterval(function(){e.$bridge.registerhandler("confirmBack",function(t,i){i("cantBack"),e.$refs.back.back()})},50);var t=this.$store.state.pullFlag;if(this.id&&!t)this.$post("Prescription/Prescription/GetPrescriptionOftenUsed",{Id:this.id}).then(function(t){e.$store.dispatch("pushpullFlag",1),e.Diagnoses=t.Diagnoses,e.ListDetails=t.ListDetails});else{var i=this.$store.state,a=i.upList,s=i.Diagnoses;i.saveFlag;this.ListDetails=a,this.Diagnoses=s}console.log(this.$store.state.upList)},beforeDestroy:function(){clearInterval(this.timer),this.$store.dispatch("pushupList",this.ListDetails),this.$store.dispatch("pushDiagnoses",this.Diagnoses)},methods:{pop:function(e){this.showConfirm=!0,this.popIdx=e},modify:function(e){this.$store.dispatch("pushcMed",this.ListDetails[e]),this.$router.push("/modifyCon?idx="+e+"&&back=-1")},toUm:function(){this.$store.dispatch("pushisUp",0),this.$store.dispatch("pushisShowXC",!0),this.$router.push("/pharmacy?from=up")},save:function(){var e=this;if(this.$store.dispatch("pushpullFlag",0),!this.ListDetails.length)return this.$toast("请添加药品");if(!this.Diagnoses)return this.$toast("请填写临床诊断");if(!this.ListDetails)return this.$toast("请选择药品");var t=[];this.ListDetails.forEach(function(e){var i={};i.MedicationId=e.Id,i.UsageTimeId=e.UsageTimeId,i.UsageTime=e.UsageTime,i.UsageMethodId=e.UsageMethodId,i.UsageMethod=e.UsageMethod,i.PackageUnitId=e.PackageUnitId,i.PackageUnit=e.PackageUnit,i.DayDosageId=e.DayDosageId,i.DayDosage=e.DayDosage,i.Dosage=e.Dosage,i.DosageUnitId=e.DosageUnitId,i.DosageUnit=e.DosageUnit,i.Quantity=e.Quantity,i.Remark=e.Remark,i.DosageDaysId=e.DosageDaysId,i.DosageDays=e.DosageDays,t.push(i)}),this.$post("Prescription/Prescription/SavePrescriptionOftenUsed",this.$pick({id:this.$route.query.id,DoctorId:this.user.Data.User.DoctorId,OrgId:this.user.Data.User.OrgId,Diagnoses:this.Diagnoses,ListDetails:t})).then(function(t){e.ListDetails=null,e.Diagnoses="",e.$store.dispatch("pushisShowXC",!1),e.$store.dispatch("pushisUp",1),e.$store.dispatch("pushpullTemp",0),e.$router.push("/pharmacy?back=2")})},confirm:function(){this.ListDetails.splice(this.popIdx,1)}}}),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pdt"},[i("div",{staticClass:"title"},[i("back",{ref:"back",attrs:{tip:!0}}),e._v(" "),i("span",{staticClass:"name"},[e._v("常用处方详情")]),e._v(" "),i("span",{staticClass:"save",on:{click:e.save}},[e._v("保存")])],1),e._v(" "),i("div",{staticClass:"diagnosis"},[i("p",[e._v("临床诊断")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Diagnoses,expression:"Diagnoses"}],attrs:{type:"text",placeholder:"请输入临床诊断"},domProps:{value:e.Diagnoses},on:{input:function(t){t.target.composing||(e.Diagnoses=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"prescription"},[i("h2",[e._v("RP")]),e._v(" "),e._l(e.ListDetails,function(t,a){return i("div",{key:a,staticClass:"med"},[i("p",[i("span",[e._v(e._s(t.Name)+" "+e._s(t.Specification))]),e._v(" "),i("span",[e._v("x"+e._s(t.Quantity))])]),e._v(" "),i("p",{staticClass:"gray"},[e._v("\n                    用法："+e._s(t.DayDosage)+"，\n                    一次"+e._s(0==t.Dosage?"":t.Dosage)+e._s(t.DosageUnit)+"，\n                    "+e._s(t.UsageTime)+e._s(t.UsageMethod)+"\n                     "),t.DosageDays?i("span",[e._v("用药"+e._s(t.DosageDays))]):e._e(),e._v("\n                    "+e._s(t.Remark)+"\n                ")]),e._v(" "),i("p",{staticClass:"gray"},[e._v("\n\t\t\t\t    "+e._s(t.MedicationCompanyName)+"提供\n\t\t\t\t")]),e._v(" "),i("div",{staticClass:"operate"},[i("span",{on:{click:function(t){return e.modify(a)}}},[e._v("修改用量")]),e._v(" "),i("span",{on:{click:function(t){return e.pop(a)}}},[e._v("删除")])])])}),e._v(" "),e.ListDetails.length<5?i("div",{staticClass:"btn",on:{click:e.toUm}},[e._v("添加药品")]):e._e()],2),e._v(" "),i("confirm",{on:{"on-cancel":function(t){e.showConfirm=!1},"on-confirm":e.confirm},model:{value:e.showConfirm,callback:function(t){e.showConfirm=t},expression:"showConfirm"}},[e._v("确定删除该药品吗？")])],1)},r=[],d={render:o,staticRenderFns:r},c=d,p=i("C7Lr"),A=a,l=p(n,c,!1,A,"data-v-6a605194",null);t.default=l.exports}});
//# sourceMappingURL=100.a40087408e0c382da102.js.map