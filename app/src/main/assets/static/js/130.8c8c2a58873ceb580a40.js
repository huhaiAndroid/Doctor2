webpackJsonp([130],{VgAn:function(e,t,r){"use strict";function i(e){r("iD4t")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("3cXf"),o=r.n(a),n=r("8pLc"),l=r("pKZN"),A=(n.a,l.a,{components:{noData:n.a,back:l.a},data:function(){return{list:[],DrId:null==this.$store.state.userInfo?18:this.$store.state.userInfo.Data.User.DoctorId,pageShow:!1,page:1,haveMore:!0,totalNum:0,search:""}},created:function(){this.getReferralRecord(!1)},mounted:function(){this.getMore()},beforeDestroy:function(){window.onscroll=null},methods:{getReferralRecord:function(e){var t=this;this.haveMore&&this.$post("PlatFormAPI/DoctorReferral/QueryPatientReferralSetPage",{DrId:this.DrId,PageIndex:this.page,pageSize:10,KeyName:this.search}).then(function(r){t.pageShow=!0,!r.ReturnData||r.ReturnData.length<10?t.haveMore=!1:t.haveMore=!0,e?r.ReturnData.forEach(function(e){t.list.push(e)}):t.list=r.ReturnData,t.totalNum=r.Total})},getMore:function(){var e=this,t=this.$refs.el,r=null;window.onscroll=function(){clearTimeout(r),r=setTimeout(function(){var r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;t.scrollHeight-r-window.innerHeight<100&&e.haveMore&&(e.page+=1,e.getReferralRecord(!0))},100)}},searchFor:function(){this.inputFlag||(this.haveMore=!0,this.page=1,this.getReferralRecord(!1))},keepInfo:function(e){var t=this;this.$store.dispatch("pushpatient",e),this.$post("IMAPI/Message/GetNullIMRelationRecord",{DoctorId:this.DrId,PatientId:e.PatientId}).then(function(r){r.Total=t.Total,r.PatientInfo={PatientId:e.PatientId,PatientName:e.PatientName,PatientSex:e.PatientSex,Birthday:e.Birthday,Age:e.Age},r.DoctorPatientRelation={DrPatientId:e.DrPatientId||0},t.$bridge.callhandler("SendMessage",o()(r))})}}}),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"el",staticClass:"pdt"},[i("div",{staticClass:"title"},[i("back"),e._v(" "),i("span",{staticClass:"name"},[e._v("转诊患者("+e._s(e.totalNum)+")")]),e._v(" "),i("a")],1),e._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"search",placeholder:"输入患者姓名或基层医生"},domProps:{value:e.search},on:{compositionend:function(t){e.inputFlag=!1},compositionstart:function(t){e.inputFlag=!0},input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchFor],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchFor(t)}}}),e._v(" "),i("span",{staticClass:"sBtn",on:{click:e.searchFor}},[e._v("搜索")])]),e._v(" "),!e.list&&e.pageShow?i("no-data",{attrs:{txt:"无转诊患者数据"}}):e._e(),e._v(" "),i("div",{staticClass:"referral-record"},e._l(e.list,function(t,a){return e.list?i("div",{key:a,staticClass:"list clearfix",on:{click:function(r){return e.keepInfo(t)}}},[i("div",{staticClass:"img"},[t.PicturePath?i("img",{attrs:{src:t.PicturePath}}):i("img",{attrs:{src:r("tyKI")}})]),e._v(" "),i("div",{staticClass:"r-middle"},[i("span",[e._v(e._s(t.PatientName))]),e._v(" "),i("p",[e._v(e._s(1==t.PatientSex?"男":2==t.PatientSex?"女":"未知")+" "+e._s(t.Age))])]),e._v(" "),i("div",{staticClass:"r-right"},[i("h6",[e._v("基层医生"),i("i",[e._v(e._s(t.BasicDrName))])]),e._v(" "),i("p",[e._v(e._s(t.ReferralTime))])])]):e._e()}),0)],1)},c=[],d={render:s,staticRenderFns:c},f=d,m=r("C7Lr"),p=i,g=m(A,f,!1,p,"data-v-4236705a",null);t.default=g.exports},iD4t:function(e,t,r){var i=r("vYRM");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("FIqI")("6d931f51",i,!0,{})},vYRM:function(e,t,r){t=e.exports=r("UTlt")(!0),t.push([e.i,"\n.search[data-v-4236705a]{height:1.33333rem;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;border:1px solid #ececec;border-bottom:none\n}\n.search input[data-v-4236705a]{height:60%;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 .4rem;background:#fff;border-radius:30px;padding:0 .4rem;border:1px solid #ececec\n}\n.search .sBtn[data-v-4236705a]{min-width:1.6rem;height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#306bce;color:#fff;border-radius:10px;margin:0 .26667rem\n}\n.referral-record[data-v-4236705a]{background-color:#fff\n}\n.referral-record .list[data-v-4236705a]{padding:.53333rem .26667rem;border-top:.01333rem #eee solid;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.referral-record .list .img[data-v-4236705a]{width:1.2rem;height:1.2rem;position:relative\n}\n.referral-record .list .img img[data-v-4236705a]{display:block;width:1.2rem;height:1.2rem;display:block;border-radius:50%;box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1\n}\n.referral-record .list .img i[data-v-4236705a]{width:.26667rem;height:.26667rem;background-color:red;border-radius:50%;display:block;position:absolute;right:0rem;top:0rem\n}\n.referral-record .list .r-middle[data-v-4236705a]{box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:.2rem\n}\n.referral-record .list .r-middle span[data-v-4236705a]{font-size:16px;color:#333333\n}\n.referral-record .list .r-middle p[data-v-4236705a]{font-size:13px;color:#999999;margin-top:.26667rem\n}\n.referral-record .list .r-right[data-v-4236705a]{box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right\n}\n.referral-record .list .r-right h6[data-v-4236705a]{font-size:16px;font-weight:bold;color:#333333\n}\n.referral-record .list .r-right h6 i[data-v-4236705a]{font-size:15px;color:#555555;font-weight:normal;font-style:normal;display:inline-block;margin-left:.2rem\n}\n.referral-record .list .r-right p[data-v-4236705a]{font-size:14px;color:#999999;margin-top:.26667rem\n}\n","",{version:3,sources:["E:/project/NetHosp/xqdMedical/src/page/Consultation/referral-record.vue"],names:[],mappings:";AACA,yBAAyB,kBAAkB,gBAAgB,oBAAoB,qBAAqB,aAAa,yBAAyB,2BAA2B,mBAAmB,wBAAwB,+BAA+B,uBAAuB,kBAAkB,yBAAyB,kBAAkB;CAClU;AACD,+BAA+B,WAAW,mBAAmB,eAAe,OAAO,eAAe,gBAAgB,mBAAmB,gBAAgB,wBAAwB;CAC5K;AACD,+BAA+B,iBAAiB,aAAa,oBAAoB,qBAAqB,aAAa,yBAAyB,2BAA2B,mBAAmB,wBAAwB,+BAA+B,uBAAuB,mBAAmB,WAAW,mBAAmB,kBAAkB;CAC1U;AACD,kCAAkC,qBAAqB;CACtD;AACD,wCAAwC,4BAA4B,gCAAgC,oBAAoB,qBAAqB,YAAY;CACxJ;AACD,6CAA6C,aAAa,cAAc,iBAAiB;CACxF;AACD,iDAAiD,cAAc,aAAa,cAAc,cAAc,kBAAkB,WAAW,mBAAmB,eAAe,MAAM;CAC5K;AACD,+CAA+C,gBAAgB,iBAAiB,qBAAqB,kBAAkB,cAAc,kBAAkB,WAAW,QAAQ;CACzK;AACD,kDAAkD,WAAW,mBAAmB,eAAe,OAAO,iBAAiB;CACtH;AACD,uDAAuD,eAAe,aAAa;CAClF;AACD,oDAAoD,eAAe,cAAc,oBAAoB;CACpG;AACD,iDAAiD,WAAW,mBAAmB,eAAe,OAAO,gBAAgB;CACpH;AACD,oDAAoD,eAAe,iBAAiB,aAAa;CAChG;AACD,sDAAsD,eAAe,cAAc,mBAAmB,kBAAkB,qBAAqB,iBAAiB;CAC7J;AACD,mDAAmD,eAAe,cAAc,oBAAoB;CACnG",file:"referral-record.vue",sourcesContent:["\n.search[data-v-4236705a]{height:1.33333rem;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;border:1px solid #ececec;border-bottom:none\n}\n.search input[data-v-4236705a]{height:60%;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 .4rem;background:#fff;border-radius:30px;padding:0 .4rem;border:1px solid #ececec\n}\n.search .sBtn[data-v-4236705a]{min-width:1.6rem;height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#306bce;color:#fff;border-radius:10px;margin:0 .26667rem\n}\n.referral-record[data-v-4236705a]{background-color:#fff\n}\n.referral-record .list[data-v-4236705a]{padding:.53333rem .26667rem;border-top:.01333rem #eee solid;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.referral-record .list .img[data-v-4236705a]{width:1.2rem;height:1.2rem;position:relative\n}\n.referral-record .list .img img[data-v-4236705a]{display:block;width:1.2rem;height:1.2rem;display:block;border-radius:50%;box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1\n}\n.referral-record .list .img i[data-v-4236705a]{width:.26667rem;height:.26667rem;background-color:red;border-radius:50%;display:block;position:absolute;right:0rem;top:0rem\n}\n.referral-record .list .r-middle[data-v-4236705a]{box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:.2rem\n}\n.referral-record .list .r-middle span[data-v-4236705a]{font-size:16px;color:#333333\n}\n.referral-record .list .r-middle p[data-v-4236705a]{font-size:13px;color:#999999;margin-top:.26667rem\n}\n.referral-record .list .r-right[data-v-4236705a]{box-flex:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right\n}\n.referral-record .list .r-right h6[data-v-4236705a]{font-size:16px;font-weight:bold;color:#333333\n}\n.referral-record .list .r-right h6 i[data-v-4236705a]{font-size:15px;color:#555555;font-weight:normal;font-style:normal;display:inline-block;margin-left:.2rem\n}\n.referral-record .list .r-right p[data-v-4236705a]{font-size:14px;color:#999999;margin-top:.26667rem\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=130.8c8c2a58873ceb580a40.js.map