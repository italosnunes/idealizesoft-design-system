"use strict";(self.webpackChunk_idealizesoft_ui_docs=self.webpackChunk_idealizesoft_ui_docs||[]).push([[387],{"./src/stories/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithFallback:()=>WithFallback,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Data display/Avatar",component:__webpack_require__("../react/dist/index.mjs").qE,args:{src:"https://github.com/italosnunes.png",alt:"Italo Nunes"}},Primary={},WithFallback={args:{src:void 0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},WithFallback.parameters={...WithFallback.parameters,docs:{...WithFallback.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: undefined\n  }\n}",...WithFallback.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","WithFallback"]},"../react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kx:()=>TextArea,X6:()=>Heading,XZ:()=>Checkbox2,oi:()=>TextInput,qE:()=>Avatar2,xu:()=>Box,xv:()=>Text,zx:()=>Button});var _stitches_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@stitches/react/dist/index.mjs"),phosphor_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/phosphor-react/dist/icons/User.esm.js"),_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-avatar/dist/index.module.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/index.js"),phosphor_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/phosphor-react/dist/icons/Check.esm.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-checkbox/dist/index.module.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},{styled,css,globalCss,keyframes,getCssText,theme,createTheme,config}=(0,_stitches_react__WEBPACK_IMPORTED_MODULE_0__.Th)({themeMap:__spreadProps(__spreadValues({},_stitches_react__WEBPACK_IMPORTED_MODULE_0__.E6),{height:"space",width:"space"}),theme:{colors:{white:"#FFF",black:"#000",purple100:"#F2D9F2",purple200:"#D98CD9",purple300:"#BF40BF",purple400:"#7F0080",purple500:"#660066",purple600:"#4C004D",purple700:"#330033",purple800:"#220022",gray200:"#F0F2F4",gray300:"#E2E5E9",gray400:"#C4CCD4",gray500:"#8999A9",gray600:"#566676",gray700:"#2B333B",gray800:"#29292e",gray900:"#202024",alertSuccess:"#56D681",alertError:"#F86E6E",alertWarning:"#F5BC3D"},fontSizes:{xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},fontWeights:{regular:"400",medium:"500",bold:"700"},fonts:{default:"Ubuntu, sans-serif",code:"monospace"},lineHeights:{shorter:"125%",short:"140%",base:"160%",tall:"180%"},radii:{px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},space:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"}},utils:{linearGradient:value=>({backgroundImage:`linear-gradient(${value})`})}}),Box=styled("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray600",border:"1px solid $gray500"});Box.displayName="Box";var Button=styled("button",{all:"unset",fontSize:"$md",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",borderRadius:"$xs",minWidth:120,boxSizing:"border-box",padding:"$4 $8",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:hover":{},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",linearGradient:"82.44deg, $purple600 3.25%, $purple400 100%","&:not(:disabled):hover":{backgroundImage:"none",backgroundColor:"$purple400"},"&:disabled":{opacity:.32}},secondary:{color:"$purple500",border:"1px solid $purple500","&:not(:disabled):hover":{border:"1px solid $purple400",color:"$purple400"},"&:disabled":{opacity:.32}},outline:{color:"$purple500",border:"none","&:not(:disabled):hover":{color:"$purple400"},"&:disabled":{opacity:.32}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Button.displayName="Button";var Text=styled("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray700",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Text.displayName="Text";var Heading=styled("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray700",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Heading.displayName="Heading";var AvatarContainer=styled(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__.fC,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),AvatarImage=styled(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__.Ee,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),AvatarFallback=styled(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__.NY,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray500",color:"$gray700",svg:{width:"$6",height:"$6"}});function Avatar2(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(AvatarContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AvatarImage,__spreadValues({},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AvatarFallback,{delayMs:600,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.Z,{})})]})}Avatar2.displayName="Avatar";var DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react__WEBPACK_IMPORTED_MODULE_4__.createContext&&react__WEBPACK_IMPORTED_MODULE_4__.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react__WEBPACK_IMPORTED_MODULE_4__.createElement("title",null,title),props.children)};return void 0!==IconContext?react__WEBPACK_IMPORTED_MODULE_4__.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}function FiEyeOff(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(props)}function FiEye(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(props)}var Container=styled("div",{display:"flex",flexDirection:"column",gap:"$1",variants:{marginContainer:{undefined:{margin:"0 0"},sm:{margin:"$1 0"},md:{margin:"$2 0"},lg:{margin:"$3 0"}}},defaultVariants:{marginContainer:"undefined"}}),TextInputLabel=styled("strong",{fontFamily:"$default",color:"$gray600",fontWeight:"$medium",padding:"0 $2",variants:{sizeContainer:{sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"}}},defaultVariants:{sizeContainer:"md"}}),TextInputContainer=styled("div",{backgroundColor:"$white",borderRadius:"$md $md 0 0",boxSizing:"border-box",border:"1px solid $gray300",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"$1 $3",variants:{sizeContainer:{sm:{height:"$8"},md:{height:"$10"},lg:{height:"$12"}}},"&:focus-within":{borderBottom:"2px solid $gray400"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{sizeContainer:"md"}}),Prefix=styled("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray600",fontWeight:"$regular"}),ButtonEyes=styled("button",{maxWidth:32,maxheight:32,width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",border:0,background:"transparent","& svg":{color:"$gray500"}}),Input=styled("input",{fontFamily:"$default",fontSize:"$sm",color:"$gray700",fontWeight:"$regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"},variants:{mask:{default:{type:"text"},password:{type:"password"}}},defaultVariants:{mask:"default"}}),TextInput=(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(((_a,ref)=>{var _b=_a,{prefix,label,mask="default",sizeContainer,marginContainer}=_b,props=__objRest(_b,["prefix","label","mask","sizeContainer","marginContainer"]);const[iconPassword,setIconPassword]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),changeIconPassword=(0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((()=>{setIconPassword(!iconPassword)}),[iconPassword]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{marginContainer,children:[!!label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextInputLabel,{sizeContainer,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TextInputContainer,{sizeContainer,children:[!!prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Prefix,{children:prefix}),"default"===mask&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Input,__spreadValues({ref,mask},props)),"password"===mask&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Input,__spreadValues({ref,type:iconPassword?"text":"password"},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ButtonEyes,{type:"button",onClick:changeIconPassword,children:[iconPassword&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FiEye,{size:20}),!iconPassword&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FiEyeOff,{size:20})]})]})]})]})}));TextInput.displayName="TextInput";var Container2=styled("div",{display:"flex",flexDirection:"column",gap:"$1"}),TextAreaLabel=styled("strong",{fontFamily:"$default",fontSize:"$md",color:"$gray600",fontWeight:"$medium",padding:"0 $2"}),TextAreaInput=styled("textarea",{padding:"$2 $4",borderRadius:"$md $md 0 0",boxSizing:"border-box",border:"1px solid $gray300",fontFamily:"$default",fontSize:"$sm",color:"$gray700",backgroundColor:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderBottom:"2px solid $gray400"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function TextArea(_a){var _b=_a,{label}=_b,props=__objRest(_b,["label"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container2,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextAreaLabel,{children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextAreaInput,__spreadValues({},props))]})}TextArea.displayName="TextArea";var CheckBoxContainer=styled(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_5__.fC,{width:"$6",height:"$6",backgroundColor:"$white",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"1.5px solid $gray500",'&[data-state="checked"]':{backgroundColor:"$purple500",borderColor:"$purple500"},'&[data-state="unchecked"]':{backgroundColor:"transparent",borderColor:"$gray500"},"&:disabled":{opacity:.32}}),slideIn=keyframes({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),slideOut=keyframes({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),CheckBoxIndicator=styled(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_5__.z$,{color:"$white",width:"$6",height:"$6",'&[data-state="checked"]':{animation:`${slideIn} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${slideOut} 200ms ease-out`}}),CheckboxLabel=styled("span",{fontSize:"$md",fontWeight:"$medium",fontFamily:"$default",lineHeight:"$shorter",color:"$white"}),CheckboxWrapper=styled("div",{padding:"$2",borderRadius:"$md","&:not(:disabled):hover":{backgroundColor:"$gray200"}}),Content=styled("div",{display:"flex",justifyContent:"center",alignItems:"center",variants:{labelLocation:{undefined:{},right:{flexDirection:"row",gap:"$2"},down:{gap:"$1",flexDirection:"column"}}},defaultVariants:{labelLocation:void 0}});function Checkbox2(_a){var _b=_a,{labelLocation,label}=_b,props=__objRest(_b,["labelLocation","label"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Content,{labelLocation,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckboxWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckBoxContainer,__spreadProps(__spreadValues({},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckBoxIndicator,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Z,{weight:"bold",fontSize:"$md"})})}))}),!!labelLocation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckboxLabel,{children:label})]})}Checkbox2.displayName="Checkbox",TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput"}}}]);