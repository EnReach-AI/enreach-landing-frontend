(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{3362:(e,t,a)=>{Promise.resolve().then(a.bind(a,5843))},5843:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var l=a(5286),n=a(540),o=a(8931),s=a(310),r=a(4475),i=a(8468),c=a(9540),m=a(8237),d=a(2166),x=a(5165),p=a(4728),u=a(3566),h=a(2437);let b=e=>{let{fields:t,ref:a,onSubmit:n,submitButtonText:o="Submit"}=e,{register:r,reset:i,handleSubmit:c,clearErrors:m,formState:{errors:d}}=(0,h.mN)();return(0,s.useImperativeHandle)(a,()=>({resetAllField:()=>i()}),[]),(0,l.jsx)("div",{className:"llg:px-[148px]  md:w-full mo:w-full mo:px-0 mt-5",children:(0,l.jsxs)("form",{onSubmit:c(n),children:[t.map((e,t)=>{var a;return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"bg-[#313131] rounded-[50px] mo:rounded-[30px] flex px-[50px] mo:p-[30px] py-[44px] flex-col mt-5",children:[(0,l.jsx)("label",{className:"text-[#FFF] text-[26px] mo:text-base font-medium leading-normal text-left",children:e.label}),"text"===e.type&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("input",{maxLength:e.maxLength,type:"text",className:"noBorder  bg-[#313131] border-b border-[#FFFFFF4D] w-full",placeholder:e.placeholder||"",...r(e.name,{})})}),"email"===e.type&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{className:"noBorder bg-[#313131] border-b border-[#FFFFFF4D] w-full",placeholder:e.placeholder||"",...r(e.name,{required:"".concat(e.label," is required")}),maxLength:e.maxLength,onChange:t=>{""!==t.target.value.trim()&&m(e.name)}}),d[e.name]&&(0,l.jsx)("span",{className:"text-red-500 text-sm mt-2",children:"Please provide your email"})]}),"textarea"===e.type&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("textarea",{placeholder:e.placeholder||"",className:"noBorder bg-[#313131] max-h-[200px] border-b border-[#FFFFFF4D] w-full",...r(e.name,{})})}),"checkbox"===e.type&&e.options&&(0,l.jsx)("div",{className:"mt-10 flex flex-col gap-5",children:e.options.map((t,a)=>(0,l.jsxs)("label",{htmlFor:"checkbox_".concat(e.name,"_").concat(a),className:"flex flex-row gap-4 mo:gap-2 items-center cursor-pointer ",children:[(0,l.jsx)("input",{id:"checkbox_".concat(e.name,"_").concat(a),type:"checkbox",className:"w-6 h-6  custom-checkbox",...r(e.allowMultiple?"".concat(e.name,"[").concat(a,"]"):e.name,{validate:t=>!(!e.allowMultiple&&Array.isArray(t))||t.length<=1}),value:t.value,onChange:t=>{e.allowMultiple||document.getElementsByName(e.name).forEach(e=>{e!==t.target&&(e.checked=!1)})}}),(0,l.jsx)("div",{className:"checkbox-text text-xl mo:text-base mo:w-[250px]",children:t.label})]},"check_".concat(a)))}),"radio"===e.type&&e.options&&(0,l.jsxs)("div",{children:[e.options.map((t,a)=>(0,l.jsxs)("label",{className:"flex items-center gap-2",children:[(0,l.jsx)("input",{type:"radio",...r(e.name,{required:"".concat(e.label," is required")}),value:t.value}),t.label]},a)),d[e.name]&&(0,l.jsx)("span",{className:"text-red-500 text-sm mt-2",children:null===(a=d[e.name])||void 0===a?void 0:a.message})]})]})},"form_".concat(t))}),(0,l.jsx)("div",{className:"w-full text-center",children:(0,l.jsx)("button",{type:"submit",className:"bg-[#4281FF] my-[60px] btn items-center mo:!justify-center text-[#FFFFFF] rounded-[33.5px] w-[198px] mo:w-[204px] h-[67px] mo:h-[38px] text-[25px] mo:text-base font-semibold leading-normal",children:o})})]})})};var f=a(1007),g=a(5185);let y=()=>{let e=(0,s.useRef)(null),t=async()=>{r.RR("AM5M-7163-0147-1745-7749");let e=i.b.new("bgChart");e.setThemes([p.A.new(e)]);let t=e.container.children.push(m.X.new(e,{projection:d.A(),panX:"rotateX",panY:"rotateY",wheelX:"none",wheelY:"none"}));t.set("zoomLevel",1),t.series.push(x.k.new(e,{geoJSON:u.A})).mapPolygons.template.setAll({tooltipText:"{name}",fill:c.yW("#151515"),stroke:c.yW("#151515"),strokeWidth:1.5}),t.animate({key:"rotationX",to:360,duration:3e4,loops:1/0})};(0,s.useEffect)(()=>{t()},[]);let a=!1;return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.A,{}),(0,l.jsxs)("div",{className:" llg:w-container m-auto llg:px-0 w-full px-[30px] ",children:[(0,l.jsx)("div",{className:"mt-[80px] text-[#FFF] text-[60px]   mo:text-[28px] font-bold leading-normal text-center",children:"EnReach Edge Node"}),(0,l.jsx)("div",{className:" mt-[30px]  llg:w-full text-[30px] md:text-2xl font-medium leading-normal llg:px-[160px] w-full  md:text-center mo:text-lg",children:"EnReach is an Edge Cloud that allows everyone to contribute resources from the edge in global regions. Tell us more about your information if you are interested in running an EnReach Edge Node in the coming mainnet."}),(0,l.jsx)(b,{fields:[{name:"email",maxLength:50,label:"Your Email",type:"email",validation:{required:"Email is required"}},{name:"account",maxLength:50,label:"If you have an EnReach account, please specify:",type:"text"},{name:"resources",label:"What type of resources do you have to run an Edge Node?",type:"checkbox",allowMultiple:!1,options:[{label:"Idle bandwidth and devices at home",value:"home"},{label:"Dedicated servers (on cloud, workstation, etc.)",value:"dedicated"},{label:"I don’t currently have any resource",value:"none"}]},{name:"location",label:"Please specify your location if you have resources available:",type:"text"},{name:"testnet",label:"Are you interested in participating in EnReach testnet?",type:"checkbox",allowMultiple:!1,options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],validation:{required:"Please select an option"}},{name:"experience",label:"If you have past experiences in similar node operation activities, please specify:",type:"textarea"}],onSubmit:t=>{!a&&t.email&&(a=!0,t.resources="boolean"==typeof t.resources?[""]:t.resources.filter(e=>e),fetch(f.pc+"/suggest/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({suggest:t})}).then(e=>e.json()).then(()=>{var t;g.o.success("Submit  successfully！"),null===(t=e.current)||void 0===t||t.resetAllField()}).catch(()=>{g.o.error("Submit  failed, please try again later!")}).finally(()=>{a=!1}))},submitButtonText:"Submit",ref:e})]}),(0,l.jsx)("div",{className:" w-container m-auto md:w-full",children:(0,l.jsx)("div",{className:" w-full h-[70vw] left-[50px]    translate-y-[-1900px]   fixed z-[-10000]",id:"bgChart"})}),(0,l.jsx)(n.A,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[80,970,185,988,29,437,833,453,819,358],()=>t(3362)),_N_E=e.O()}]);