webpackJsonp([115],{"4Dmk":function(e,i,n){"use strict";function t(e){n("9Toc")}Object.defineProperty(i,"__esModule",{value:!0});var a=n("pKZN"),A=(a.a,{components:{back:a.a},data:function(){return{isReject:!1,appeal:"药吃完了",haveMed:!0,info:null}},created:function(){this.pull()},methods:{pull:function(){var e=this;this.$post("Prescription/Prescription/GetPrescriptionApply",{Id:1}).then(function(i){e.info=i,e.$store.dispatch("pushpatient",i.PatientInfo)})},toPre:function(){var e=this.info.PrescriptionFullInfo?this.info.PrescriptionFullInfo.ListDetail:null;this.$store.dispatch("pushupList",e),this.$router.push("/prescription")}}}),r=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"prescription detail pdt"},[n("div",{staticClass:"title"},[n("back"),e._v(" "),n("b"),e._v(" "),n("input",{attrs:{type:"search",placeholder:"请搜索药品、处方"}})],1),e._v(" "),e.info?n("div",[n("div",{staticClass:"info"},[n("p",[n("span",[n("span",{staticClass:"gray"},[e._v("姓名：")]),e._v("\n                    "+e._s(e.info.PatientInfo.PatientName)+"\n                    "),n("router-link",{attrs:{to:"/archives"}},[n("span",{staticClass:"archives"},[e._v("患者档案")])])],1),e._v(" "),n("span",[n("span",{staticClass:"gray"},[e._v("性别：")]),e._v("\n                    "+e._s(e._f("toSex")(e.info.PatientInfo.PatientSex))+"\n                ")])]),e._v(" "),n("p",[n("span",[n("span",{staticClass:"gray"},[e._v("年龄：")]),e._v("\n                    "+e._s(e.info.PatientInfo.Age)+"\n                ")]),e._v(" "),n("span",[e._v("\n                    "+e._s(e.info.UpdateTime.split(" ")[0])+"\n                ")])]),e._v(" "),n("p",[n("span",[n("span",{staticClass:"gray"},[e._v("临床诊断：")]),e._v("\n                    "+e._s(e.info.Diagnoses)+"\n                ")])])]),e._v(" "),e.info.PrescriptionFullInfo?n("div",{staticClass:"medicine"},e._l(e.info.PrescriptionFullInfo.ListDetails,function(i,t){return n("div",{key:t,staticClass:"add"},[n("p",[n("span",[e._v(e._s(i.Name)+" "),i.Brand?n("span",[e._v("("+e._s(i.Brand)+")")]):e._e()]),e._v(" "),n("span",{staticClass:"gray"},[e._v("x"+e._s(i.Quantity))])]),e._v(" "),n("span",{staticClass:"specifications"},[e._v("规格："+e._s(i.Specification))]),e._v(" "),n("span",{staticClass:"specifications"},[e._v("用法："+e._s(i.UsageTime)+e._s(i.UsageMethod)+"  每次"+e._s(0==i.Dosage?"":i.Dosage)+e._s(i.DosageUnit)+" "+e._s(i.DayDosage)+" "),i.DosageDays?n("span",[e._v("用药"+e._s(i.DosageDays))]):e._e(),e._v(" "+e._s(i.Remark))])])}),0):e._e(),e._v(" "),n("div",{staticClass:"appeal"},[n("p",[e._v("患者诉求：")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.info.Appeal,expression:"info.Appeal"}],staticClass:"gray",attrs:{readonly:""},domProps:{value:e.info.Appeal},on:{input:function(i){i.target.composing||e.$set(e.info,"Appeal",i.target.value)}}})])]):e._e(),e._v(" "),n("p",{staticClass:"btnBox"},[n("span",{on:{click:e.toPre}},[e._v("续方")])])])},o=[],d={render:r,staticRenderFns:o},c=d,p=n("C7Lr"),s=t,l=p(A,c,!1,s,"data-v-58970001",null);i.default=l.exports},"9Toc":function(e,i,n){var t=n("ym8J");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n("FIqI")("d461ab3e",t,!0,{})},ym8J:function(e,i,n){var t=n("L4zZ");i=e.exports=n("UTlt")(!0),i.push([e.i,"\n.container[data-v-58970001]{padding-bottom:.4rem\n}\n.title[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;height:1.06667rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff;padding-right:.4rem\n}\n.title i[data-v-58970001]{display:block;height:.46667rem;width:.26667rem;background:url("+t(n("P9/e"))+") no-repeat center;background-size:cover\n}\n.title input[data-v-58970001]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:70%;background:#f4f4f4;border-radius:20px;padding:0 1.06667rem\n}\n.title b[data-v-58970001]{display:block;width:.53333rem;height:.53333rem;background:url("+t(n("wIlF"))+") no-repeat center;position:absolute;left:1.33333rem\n}\n.title a[data-v-58970001]{white-space:nowrap;color:#306bce;width:1.86667rem\n}\n.title.inspectTitle a[data-v-58970001]{width:2.13333rem\n}\n.gray[data-v-58970001]{color:#9c9c9c\n}\n.archives[data-v-58970001]{font-size:13px;color:#3A66FF;background:#D6E4FF;padding:.13333rem .33333rem;border-radius:.4rem\n}\n.card[data-v-58970001]{background:#fff;margin:.26667rem .4rem 0;padding:.4rem 0;border-radius:5px\n}\n.card div[data-v-58970001]{height:2.46667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;padding:0 .4rem;border-bottom:1px solid #f6f6f6\n}\n.card p[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.card span[data-v-58970001]{min-width:35%\n}\n.card h2[data-v-58970001]{padding:0 .4rem;font-weight:bold\n}\n.card .btnLine[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end\n}\n.card .btn[data-v-58970001]{display:block;width:2.66667rem;height:.8rem;line-height:.8rem;background:#306bce;color:#fff;border-radius:.53333rem;text-align:center;margin:.26667rem .4rem 0 0\n}\n.card .medicine span[data-v-58970001]{min-width:0\n}\n.card .medicine .specifications[data-v-58970001]{font-size:13px;color:#626262;font-weight:normal\n}\n.prescription[data-v-58970001]{font-size:13px;padding-bottom:.4rem\n}\n.prescription .date[data-v-58970001]{color:#626262;font-size:15px;background:#fff;padding:.26667rem .4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:.26667rem .4rem 0;border-radius:5px\n}\n.prescription .info[data-v-58970001]{background:#fff;margin:1px .4rem 0;padding:.4rem 0 .4rem;border-radius:5px 5px 0 0;font-size:15px\n}\n.prescription .info .infoData[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.prescription .info .infoData span[data-v-58970001]{width:32%;background-color:#fff;box-shadow:0 0 4px #ddd;display:inline-block;font-size:16px;text-align:center;padding:.4rem 0;border-radius:.10667rem\n}\n.prescription .info .infoData span em[data-v-58970001]{display:block;font-style:normal;margin-bottom:.13333rem\n}\n.prescription .info .infoData span input[data-v-58970001]{display:block;width:100%;text-align:center;line-height:.66667rem\n}\n.prescription .info p[data-v-58970001]{padding:.13333rem .4rem\n}\n.prescription .info .clinical[data-v-58970001]{position:relative\n}\n.prescription .info .clinical span[data-v-58970001]{white-space:nowrap;display:block;width:100%;padding:.26667rem 0\n}\n.prescription .info .clinical input[data-v-58970001]{height:100%;border-radius:10px;padding-left:.26667rem;height:1.06667rem;border:1px #eee solid\n}\n.prescription .info .clinical .main[data-v-58970001]{border:1px solid #ffa113\n}\n.prescription .info .clinical textarea[data-v-58970001]{width:100%;font-size:14px;resize:none;height:1.6rem;border-radius:10px;padding:.13333rem;border:1px solid #ececec;display:block;outline:none\n}\n.prescription .info .clinical ul[data-v-58970001]{width:100%;padding:.13333rem 5%;display:block;position:absolute;left:0%;top:2.29333rem;background-color:#fff;border-radius:.13333rem;box-shadow:0px 1px 4px #ccc\n}\n.prescription .info .clinical ul li[data-v-58970001]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1.2rem;border-bottom:1px #eee solid;text-align:left\n}\n.prescription .info .clinical ul li i[data-v-58970001]{display:inline-block;height:.32rem;width:.32rem;background:url("+t(n("OTFg"))+") no-repeat center;background-size:cover;margin-right:.13333rem\n}\n.prescription .info .clinical ul li b[data-v-58970001]{display:inline-block;height:.8rem;width:.8rem;background:url("+t(n("YclJ"))+") no-repeat center;background-size:.26667rem;float:right;margin-top:.26667rem\n}\n.prescription .medicine[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.26667rem .4rem\n}\n.prescription .medicine .RP[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:.06667rem\n}\n.prescription .medicine .RP h2[data-v-58970001]{font-weight:bold\n}\n.prescription .medicine .RP span[data-v-58970001]{color:#306bce;font-size:15px\n}\n.prescription .medicine .RP h3[data-v-58970001]{font-size:16px;font-weight:normal;color:#000\n}\n.prescription .medicine .add[data-v-58970001]{border-bottom:1px solid #ececec;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:15px\n}\n.prescription .medicine .add p[data-v-58970001]{padding:.26667rem 0;display:-webkit-box;display:-webkit-flex;display:flex;width:100%\n}\n.prescription .medicine .add p span.close_style[data-v-58970001]{text-align:left;margin-left:1%;color:#777\n}\n.prescription .medicine .add span[data-v-58970001]{padding:.06667rem 0\n}\n.prescription .medicine .add span i[data-v-58970001]{display:inline-block;float:right;padding:.06667rem .4rem;background-color:#fba319;color:#fff;font-size:11px;border-radius:.33333rem;font-style:normal\n}\n.prescription .medicine .add .close_icon[data-v-58970001]{background:url("+t(n("/TeD"))+") no-repeat 0 .13333rem;width:.45333rem;height:.8rem;display:inline-block;background-size:.37333rem;padding-top:.13333rem\n}\n.prescription .medicine .add .specifications[data-v-58970001]{font-size:14px;color:#626262;width:15%;text-align:right\n}\n.prescription .medicine .add .specifications strong[data-v-58970001]{font-weight:normal\n}\n.prescription .medicine .add .specifications .red[data-v-58970001]{color:red\n}\n.prescription .medicine .add .pop[data-v-58970001]{padding:0 0 .26667rem 0;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.prescription .medicine .add .pop span[data-v-58970001]{display:block;width:2.13333rem;height:.86667rem;border:1px solid #2a6dc9;color:#2a6dc9;text-align:center;border-radius:20px;margin-right:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.prescription .medicine .add .operate[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:28%\n}\n.prescription .medicine .add .operate .b[data-v-58970001]{min-width:.6rem;min-height:.6rem;border-radius:50%;background:#306bce;color:#fff;font-size:.4rem;text-align:center;font-weight:bold;padding:0\n}\n.prescription .medicine .add .operate .number[data-v-58970001]{display:block;width:.93333rem;text-align:center;border:1px solid #cccccc;border-radius:5px;margin:0 .13333rem\n}\n.prescription .medicine .add .operate .del[data-v-58970001]{background:url("+t(n("JV88"))+") no-repeat center;background-size:70%;background-color:#306bce\n}\n.prescription .medicine .add .operate .add[data-v-58970001]{background:url("+t(n("R7Cy"))+") no-repeat center;background-size:70%;background-color:#306bce\n}\n.prescription .medicine .add .operate .disable[data-v-58970001]{background-color:#c0d2ef\n}\n.prescription .medicine .add.add-gay[data-v-58970001]{color:#999999\n}\n.prescription .medicine .add.add-gay span[data-v-58970001]{color:#999999\n}\n.prescription .medicine .add.add-gay .pop span[data-v-58970001]{color:#2a6dc9\n}\n.prescription .medicine .add.add-gay span.red[data-v-58970001]{color:red;font-size:12px\n}\n.prescription .medicine .MedicationCompany[data-v-58970001]{display:block;width:100%;text-align:center;font-size:13px;color:#2a6dc9;padding-top:.26667rem\n}\n.prescription .sign[data-v-58970001]{background:#fff;margin:.13333rem .4rem;padding:.4rem\n}\n.prescription .sign p[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end\n}\n.prescription .sign .verify[data-v-58970001]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start\n}\n.prescription .sign .verify span[data-v-58970001]{margin-left:.4rem;color:#ffa113\n}\n.prescription .tip[data-v-58970001]{font-size:13px;text-align:center;color:#9c9c9c;margin:.4rem\n}\n.prescription .btn[data-v-58970001]{color:#306bce;border:1px solid #306bce;border-radius:.53333rem;height:1.06667rem;line-height:1.06667rem;text-align:center;margin:.4rem 0;font-size:16px\n}\n.prescription .button[data-v-58970001]{background:#306bce;color:#fff;border-radius:.53333rem;width:80%;height:1.06667rem;line-height:1.06667rem;text-align:center;margin:.4rem auto;font-size:16px\n}\n.detail .info[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.4rem 0\n}\n.detail .info p[data-v-58970001]{padding:.06667rem .4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.detail .info p span[data-v-58970001]{min-width:30%\n}\n.detail .medicine[data-v-58970001]{margin-top:0;border-top:1px solid #f6f6f6;border-bottom:1px solid #f6f6f6;padding-top:0\n}\n.detail .appeal[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem\n}\n.detail .appeal p[data-v-58970001]{color:#676767;padding-bottom:.4rem\n}\n.detail .appeal textarea[data-v-58970001]{width:95%;display:block;margin:auto;border:1px solid #e5e5e5;resize:none;height:3rem;border-radius:.26667rem;padding:.4rem\n}\n.detail .btnBox[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px\n}\n.detail .btnBox span[data-v-58970001]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px\n}\n.detail .btnCont[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px\n}\n.detail .btnCont span[data-v-58970001]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 .13333rem;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px\n}\n.detail .btnCont span[data-v-58970001]:first-child{background:#e4e4e4;color:#6a6a6a;margin-right:.4rem\n}\n.detail .send[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.detail .send span[data-v-58970001]{display:block;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px;width:50%\n}\n.detail .tip[data-v-58970001]{background:#fff;margin:0 .4rem;text-align:left;padding:.4rem .4rem 1.06667rem;font-size:15px;color:#636363\n}\n.detail .time[data-v-58970001]{background:#fff;margin:0 .4rem;border-top:1px solid #f6f6f6;border-bottom:1px solid #f6f6f6;padding:.4rem\n}\n.detail .time p[data-v-58970001]{margin-bottom:.4rem\n}\n.detail .time .appointment[data-v-58970001]{color:#fba319;font-size:13px\n}\n.deadline[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.26667rem .4rem;min-height:1.86667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.deadline p[data-v-58970001]{margin-bottom:.13333rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.deadline p .mod[data-v-58970001]{color:#2a6dc9;font-size:15px\n}\n.deadline p span[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.deadline p input[data-v-58970001]{border:1px solid #ccc;width:1.33333rem;text-align:center;border-radius:5px\n}\n.deadline .days[data-v-58970001]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n}\n.deadline textarea[data-v-58970001]{margin:.26667rem 0;font-size:15px;resize:none;height:2rem;border-radius:10px;padding:.26667rem .4rem;border:1px solid #ececec;outline:none\n}\n.moneyShow[data-v-58970001]{padding:.4rem;margin:.13333rem .4rem;background-color:#fff\n}\n.moneyShow p[data-v-58970001]{margin-top:.06667rem\n}\n.moneyShow p[data-v-58970001]:nth-child(3){color:#999999\n}\n.totalMoney[data-v-58970001]{padding:.4rem;margin:.13333rem .4rem;background-color:#fff\n}\n.totalMoney p[data-v-58970001]{color:red;margin-top:.06667rem\n}\n.totalMoney p[data-v-58970001]:nth-child(1){color:#555555\n}\n.transformation[data-v-58970001]{position:fixed;left:50%;padding:0 .26667rem;height:.66667rem;border:1px #eee solid;z-index:100001;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px #306bce solid;border-radius:.4rem;display:none\n}\n.transformation i[data-v-58970001]{background:url("+t(n("jLRz"))+") no-repeat;width:.42667rem;height:.4rem;display:inline-block;background-size:.4rem\n}\n.transformation span[data-v-58970001]{color:#306bce;font-size:12px\n}\n.vuxPopupDialog[data-v-58970001]{display:none\n}\n","",{version:3,sources:["E:/project/NetHosp/xqdMedical/src/style/page/prescription.scss"],names:[],mappings:"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",file:"prescription.scss",sourcesContent:['\n.container[data-v-58970001]{padding-bottom:.4rem\n}\n.title[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;height:1.06667rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff;padding-right:.4rem\n}\n.title i[data-v-58970001]{display:block;height:.46667rem;width:.26667rem;background:url("~assets/back.png") no-repeat center;background-size:cover\n}\n.title input[data-v-58970001]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:70%;background:#f4f4f4;border-radius:20px;padding:0 1.06667rem\n}\n.title b[data-v-58970001]{display:block;width:.53333rem;height:.53333rem;background:url("~assets/Continuation/search.png") no-repeat center;position:absolute;left:1.33333rem\n}\n.title a[data-v-58970001]{white-space:nowrap;color:#306bce;width:1.86667rem\n}\n.title.inspectTitle a[data-v-58970001]{width:2.13333rem\n}\n.gray[data-v-58970001]{color:#9c9c9c\n}\n.archives[data-v-58970001]{font-size:13px;color:#3A66FF;background:#D6E4FF;padding:.13333rem .33333rem;border-radius:.4rem\n}\n.card[data-v-58970001]{background:#fff;margin:.26667rem .4rem 0;padding:.4rem 0;border-radius:5px\n}\n.card div[data-v-58970001]{height:2.46667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;padding:0 .4rem;border-bottom:1px solid #f6f6f6\n}\n.card p[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.card span[data-v-58970001]{min-width:35%\n}\n.card h2[data-v-58970001]{padding:0 .4rem;font-weight:bold\n}\n.card .btnLine[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end\n}\n.card .btn[data-v-58970001]{display:block;width:2.66667rem;height:.8rem;line-height:.8rem;background:#306bce;color:#fff;border-radius:.53333rem;text-align:center;margin:.26667rem .4rem 0 0\n}\n.card .medicine span[data-v-58970001]{min-width:0\n}\n.card .medicine .specifications[data-v-58970001]{font-size:13px;color:#626262;font-weight:normal\n}\n.prescription[data-v-58970001]{font-size:13px;padding-bottom:.4rem\n}\n.prescription .date[data-v-58970001]{color:#626262;font-size:15px;background:#fff;padding:.26667rem .4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:.26667rem .4rem 0;border-radius:5px\n}\n.prescription .info[data-v-58970001]{background:#fff;margin:1px .4rem 0;padding:.4rem 0 .4rem;border-radius:5px 5px 0 0;font-size:15px\n}\n.prescription .info .infoData[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.prescription .info .infoData span[data-v-58970001]{width:32%;background-color:#fff;box-shadow:0 0 4px #ddd;display:inline-block;font-size:16px;text-align:center;padding:.4rem 0;border-radius:.10667rem\n}\n.prescription .info .infoData span em[data-v-58970001]{display:block;font-style:normal;margin-bottom:.13333rem\n}\n.prescription .info .infoData span input[data-v-58970001]{display:block;width:100%;text-align:center;line-height:.66667rem\n}\n.prescription .info p[data-v-58970001]{padding:.13333rem .4rem\n}\n.prescription .info .clinical[data-v-58970001]{position:relative\n}\n.prescription .info .clinical span[data-v-58970001]{white-space:nowrap;display:block;width:100%;padding:.26667rem 0\n}\n.prescription .info .clinical input[data-v-58970001]{height:100%;border-radius:10px;padding-left:.26667rem;height:1.06667rem;border:1px #eee solid\n}\n.prescription .info .clinical .main[data-v-58970001]{border:1px solid #ffa113\n}\n.prescription .info .clinical textarea[data-v-58970001]{width:100%;font-size:14px;resize:none;height:1.6rem;border-radius:10px;padding:.13333rem;border:1px solid #ececec;display:block;outline:none\n}\n.prescription .info .clinical ul[data-v-58970001]{width:100%;padding:.13333rem 5%;display:block;position:absolute;left:0%;top:2.29333rem;background-color:#fff;border-radius:.13333rem;box-shadow:0px 1px 4px #ccc\n}\n.prescription .info .clinical ul li[data-v-58970001]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1.2rem;border-bottom:1px #eee solid;text-align:left\n}\n.prescription .info .clinical ul li i[data-v-58970001]{display:inline-block;height:.32rem;width:.32rem;background:url("~assets/Continuation/icon.png") no-repeat center;background-size:cover;margin-right:.13333rem\n}\n.prescription .info .clinical ul li b[data-v-58970001]{display:inline-block;height:.8rem;width:.8rem;background:url("~assets/Continuation/close.png") no-repeat center;background-size:.26667rem;float:right;margin-top:.26667rem\n}\n.prescription .medicine[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.26667rem .4rem\n}\n.prescription .medicine .RP[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:.06667rem\n}\n.prescription .medicine .RP h2[data-v-58970001]{font-weight:bold\n}\n.prescription .medicine .RP span[data-v-58970001]{color:#306bce;font-size:15px\n}\n.prescription .medicine .RP h3[data-v-58970001]{font-size:16px;font-weight:normal;color:#000\n}\n.prescription .medicine .add[data-v-58970001]{border-bottom:1px solid #ececec;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:15px\n}\n.prescription .medicine .add p[data-v-58970001]{padding:.26667rem 0;display:-webkit-box;display:-webkit-flex;display:flex;width:100%\n}\n.prescription .medicine .add p span.close_style[data-v-58970001]{text-align:left;margin-left:1%;color:#777\n}\n.prescription .medicine .add span[data-v-58970001]{padding:.06667rem 0\n}\n.prescription .medicine .add span i[data-v-58970001]{display:inline-block;float:right;padding:.06667rem .4rem;background-color:#fba319;color:#fff;font-size:11px;border-radius:.33333rem;font-style:normal\n}\n.prescription .medicine .add .close_icon[data-v-58970001]{background:url("~assets/images/close.png") no-repeat 0 .13333rem;width:.45333rem;height:.8rem;display:inline-block;background-size:.37333rem;padding-top:.13333rem\n}\n.prescription .medicine .add .specifications[data-v-58970001]{font-size:14px;color:#626262;width:15%;text-align:right\n}\n.prescription .medicine .add .specifications strong[data-v-58970001]{font-weight:normal\n}\n.prescription .medicine .add .specifications .red[data-v-58970001]{color:red\n}\n.prescription .medicine .add .pop[data-v-58970001]{padding:0 0 .26667rem 0;display:-webkit-box;display:-webkit-flex;display:flex\n}\n.prescription .medicine .add .pop span[data-v-58970001]{display:block;width:2.13333rem;height:.86667rem;border:1px solid #2a6dc9;color:#2a6dc9;text-align:center;border-radius:20px;margin-right:.26667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.prescription .medicine .add .operate[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:28%\n}\n.prescription .medicine .add .operate .b[data-v-58970001]{min-width:.6rem;min-height:.6rem;border-radius:50%;background:#306bce;color:#fff;font-size:.4rem;text-align:center;font-weight:bold;padding:0\n}\n.prescription .medicine .add .operate .number[data-v-58970001]{display:block;width:.93333rem;text-align:center;border:1px solid #cccccc;border-radius:5px;margin:0 .13333rem\n}\n.prescription .medicine .add .operate .del[data-v-58970001]{background:url("~assets/pharmacy/del.png") no-repeat center;background-size:70%;background-color:#306bce\n}\n.prescription .medicine .add .operate .add[data-v-58970001]{background:url("~assets/pharmacy/add.png") no-repeat center;background-size:70%;background-color:#306bce\n}\n.prescription .medicine .add .operate .disable[data-v-58970001]{background-color:#c0d2ef\n}\n.prescription .medicine .add.add-gay[data-v-58970001]{color:#999999\n}\n.prescription .medicine .add.add-gay span[data-v-58970001]{color:#999999\n}\n.prescription .medicine .add.add-gay .pop span[data-v-58970001]{color:#2a6dc9\n}\n.prescription .medicine .add.add-gay span.red[data-v-58970001]{color:red;font-size:12px\n}\n.prescription .medicine .MedicationCompany[data-v-58970001]{display:block;width:100%;text-align:center;font-size:13px;color:#2a6dc9;padding-top:.26667rem\n}\n.prescription .sign[data-v-58970001]{background:#fff;margin:.13333rem .4rem;padding:.4rem\n}\n.prescription .sign p[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end\n}\n.prescription .sign .verify[data-v-58970001]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start\n}\n.prescription .sign .verify span[data-v-58970001]{margin-left:.4rem;color:#ffa113\n}\n.prescription .tip[data-v-58970001]{font-size:13px;text-align:center;color:#9c9c9c;margin:.4rem\n}\n.prescription .btn[data-v-58970001]{color:#306bce;border:1px solid #306bce;border-radius:.53333rem;height:1.06667rem;line-height:1.06667rem;text-align:center;margin:.4rem 0;font-size:16px\n}\n.prescription .button[data-v-58970001]{background:#306bce;color:#fff;border-radius:.53333rem;width:80%;height:1.06667rem;line-height:1.06667rem;text-align:center;margin:.4rem auto;font-size:16px\n}\n.detail .info[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.4rem 0\n}\n.detail .info p[data-v-58970001]{padding:.06667rem .4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.detail .info p span[data-v-58970001]{min-width:30%\n}\n.detail .medicine[data-v-58970001]{margin-top:0;border-top:1px solid #f6f6f6;border-bottom:1px solid #f6f6f6;padding-top:0\n}\n.detail .appeal[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem\n}\n.detail .appeal p[data-v-58970001]{color:#676767;padding-bottom:.4rem\n}\n.detail .appeal textarea[data-v-58970001]{width:95%;display:block;margin:auto;border:1px solid #e5e5e5;resize:none;height:3rem;border-radius:.26667rem;padding:.4rem\n}\n.detail .btnBox[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px\n}\n.detail .btnBox span[data-v-58970001]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px\n}\n.detail .btnCont[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px\n}\n.detail .btnCont span[data-v-58970001]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 .13333rem;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px\n}\n.detail .btnCont span[data-v-58970001]:first-child{background:#e4e4e4;color:#6a6a6a;margin-right:.4rem\n}\n.detail .send[data-v-58970001]{background:#fff;margin:0 .4rem;padding:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:0 0 5px 5px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.detail .send span[data-v-58970001]{display:block;background:#306bce;color:#fff;height:1.06667rem;line-height:1.06667rem;text-align:center;border-radius:1.06667rem;font-size:17px;width:50%\n}\n.detail .tip[data-v-58970001]{background:#fff;margin:0 .4rem;text-align:left;padding:.4rem .4rem 1.06667rem;font-size:15px;color:#636363\n}\n.detail .time[data-v-58970001]{background:#fff;margin:0 .4rem;border-top:1px solid #f6f6f6;border-bottom:1px solid #f6f6f6;padding:.4rem\n}\n.detail .time p[data-v-58970001]{margin-bottom:.4rem\n}\n.detail .time .appointment[data-v-58970001]{color:#fba319;font-size:13px\n}\n.deadline[data-v-58970001]{background:#fff;margin:.13333rem .4rem 0;padding:.26667rem .4rem;min-height:1.86667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.deadline p[data-v-58970001]{margin-bottom:.13333rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}\n.deadline p .mod[data-v-58970001]{color:#2a6dc9;font-size:15px\n}\n.deadline p span[data-v-58970001]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.deadline p input[data-v-58970001]{border:1px solid #ccc;width:1.33333rem;text-align:center;border-radius:5px\n}\n.deadline .days[data-v-58970001]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n}\n.deadline textarea[data-v-58970001]{margin:.26667rem 0;font-size:15px;resize:none;height:2rem;border-radius:10px;padding:.26667rem .4rem;border:1px solid #ececec;outline:none\n}\n.moneyShow[data-v-58970001]{padding:.4rem;margin:.13333rem .4rem;background-color:#fff\n}\n.moneyShow p[data-v-58970001]{margin-top:.06667rem\n}\n.moneyShow p[data-v-58970001]:nth-child(3){color:#999999\n}\n.totalMoney[data-v-58970001]{padding:.4rem;margin:.13333rem .4rem;background-color:#fff\n}\n.totalMoney p[data-v-58970001]{color:red;margin-top:.06667rem\n}\n.totalMoney p[data-v-58970001]:nth-child(1){color:#555555\n}\n.transformation[data-v-58970001]{position:fixed;left:50%;padding:0 .26667rem;height:.66667rem;border:1px #eee solid;z-index:100001;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px #306bce solid;border-radius:.4rem;display:none\n}\n.transformation i[data-v-58970001]{background:url("~assets/images/transformation.png") no-repeat;width:.42667rem;height:.4rem;display:inline-block;background-size:.4rem\n}\n.transformation span[data-v-58970001]{color:#306bce;font-size:12px\n}\n.vuxPopupDialog[data-v-58970001]{display:none\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=115.96db7c231e63c296e401.js.map