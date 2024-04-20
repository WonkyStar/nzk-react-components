"use strict";(self.webpackChunknzk_react_components=self.webpackChunknzk_react_components||[]).push([[997],{"./src/hooks/useCloudinary/useCloudinary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,base64ImagePromiseUpload:()=>base64ImagePromiseUpload,base64ImageUpload:()=>base64ImageUpload,default:()=>useCloudinary_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}var DefaultProps_cloudName="nzk",DefaultProps_unsignedUploadPreset="juz5g1j1";const hooks_useCloudinary=function(props){var cloudName=props&&props.cloudName||DefaultProps_cloudName,unsignedUploadPreset=props&&props.unsignedUploadPreset||DefaultProps_unsignedUploadPreset,uploadTag=props&&props.uploadTag;return{uploadImage:function(file,onComplete){var url="https://api.cloudinary.com/v1_1/".concat(cloudName,"/upload"),xhr=new XMLHttpRequest,fd=new FormData;xhr.open("POST",url,!0),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.onreadystatechange=function(){if(4===xhr.readyState&&200===xhr.status){var response=JSON.parse(xhr.responseText);onComplete&&onComplete(response.secure_url)}},fd.append("upload_preset",unsignedUploadPreset),uploadTag&&fd.append("tags",uploadTag),_instanceof(file,Blob)?(fd.append("file",file),xhr.send(fd)):fetch(file).then((function(response){response.blob().then((function(blobFile){fd.append("file",blobFile),xhr.send(fd)}))}))},promiseUploadImage:function(file){return new Promise((function(resolve,reject){var url="https://api.cloudinary.com/v1_1/".concat(cloudName,"/upload"),xhr=new XMLHttpRequest,fd=new FormData;xhr.addEventListener("error",(function(){return reject(new Error("Couldn't reach cloudinary to upload image"))})),xhr.open("POST",url,!0),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.onreadystatechange=function(){if(4===xhr.readyState&&xhr.status>=200&&xhr.status<300){var response=JSON.parse(xhr.responseText);return response.secure_url?resolve(response.secure_url):reject(new Error("No secure_url returned by cloudinary"))}return 4===xhr.readyState&&xhr.status>=300?reject(new Error("Cloudinary returned error code: ".concat(xhr.status))):null},fd.append("upload_preset",unsignedUploadPreset),uploadTag&&fd.append("tags",uploadTag),_instanceof(file,Blob)?(fd.append("file",file),xhr.send(fd)):fetch(file).then((function(response){response.blob().then((function(blobFile){fd.append("file",blobFile),xhr.send(fd)}))}))}))}}};var Button=__webpack_require__("./src/components/Button/index.ts");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([""]);return _templateObject=function _templateObject(){return data},data}var b64Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMkEwRkYxMTA1RUUxMUUzOTkwODgwRUU1QTkwOENFMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMkEwRkYxMjA1RUUxMUUzOTkwODgwRUU1QTkwOENFMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRjk3RjA4MDVFRTExRTM5OTA4ODBFRTVBOTA4Q0UwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyQTBGRjEwMDVFRTExRTM5OTA4ODBFRTVBOTA4Q0UwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+POcPHQAAAZtJREFUeNrs27FOwlAUBuDTG0w0DkZjlIdwcdPFkTipC7honBDeyKITxsHg5IQ66uLm4kuQWESTxoEEOEduG0lbJZFbqvf/kz8kLQH6pb09IeB4xTJ9yTa3wt3grnId+t/pc1vcR26NexPsUPpxlnvJbXL3uHkLUEgfY14fc1MbzMmOnH7CGXefEDHocg/ljClwD2ASRiwKSq8pyGiqArMFh0g2BWYZDpGsKBjERgEmSQYEgAHMJJKb5pvPrK/RfPWI1OLCyPbe6xv5bp26T892njFxKJ8firfJPmsvpTiUcfZhjQEMYAADGMwxk5tTxs1S4zR2expzjtEz5jcoP93mTc85RmFMziKm5xysMYABTPZh5O5h7LU7738XxnfPjRxAr90h/6RuFMbxiuX+tE7XpDklSLt0jDUGiy9gAAMYwKSU7+Yc03NKpmGS5pw05pRMzzG4lAADGMDYDPMChkg8gXmAQyT3AuPCIZKawNxxL2ARRixug8VXvhFqwISutEV4V/qg4e/od7jXNPxHhi1p6WPe5Za0BQ0EGABbVF9+vim/XAAAAABJRU5ErkJggg==",Wrapper=styled_components_browser_esm.Ay.div(_templateObject());const useCloudinary_stories={title:"Hooks/useCloudinary"};var base64ImageUpload=function(){var uploadImage=hooks_useCloudinary({uploadTag:"storybook"}).uploadImage;return react.createElement(Wrapper,null,react.createElement(Button.A,{size:"x-small",theme:"primary",onClick:function(){uploadImage(b64Image,(function(url){alert(url)}))}},"Upload a b64 image"))},base64ImagePromiseUpload=function(){var promiseUploadImage=hooks_useCloudinary({uploadTag:"storybook"}).promiseUploadImage;return react.createElement(Wrapper,null,react.createElement(Button.A,{size:"x-small",theme:"primary",onClick:function(){promiseUploadImage(b64Image).then((function(url){alert(url)})).catch((function(err){console.log(err)}))}},"Upload a b64 image"))};base64ImageUpload.parameters={...base64ImageUpload.parameters,docs:{...base64ImageUpload.parameters?.docs,source:{originalSource:"() => {\n  const {\n    uploadImage\n  } = useCloudinary({\n    uploadTag: 'storybook'\n  });\n  return <Wrapper>\n  <Button size='x-small' theme='primary' onClick={() => {\n      uploadImage(b64Image, url => {\n        alert(url);\n      });\n    }}>Upload a b64 image</Button>\n  </Wrapper>;\n}",...base64ImageUpload.parameters?.docs?.source}}},base64ImagePromiseUpload.parameters={...base64ImagePromiseUpload.parameters,docs:{...base64ImagePromiseUpload.parameters?.docs,source:{originalSource:"() => {\n  const {\n    promiseUploadImage\n  } = useCloudinary({\n    uploadTag: 'storybook'\n  });\n  return <Wrapper>\n  <Button size='x-small' theme='primary' onClick={() => {\n      promiseUploadImage(b64Image).then(url => {\n        alert(url);\n      }).catch(err => {\n        console.log(err);\n      });\n    }}>Upload a b64 image</Button>\n  </Wrapper>;\n}",...base64ImagePromiseUpload.parameters?.docs?.source}}};const __namedExportsOrder=["base64ImageUpload","base64ImagePromiseUpload"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    box-shadow:\n      0 ","px 0 ",",\n      0 ","px 0 ",",\n      inset 0 0px 0px ","px ",";\n\n    &:active {\n      transform: translateY(","px);\n      box-shadow:\n        0 ","px 0 ",",\n        inset 0 0px 0px ","px ",";\n    }\n  "]);return _templateObject=function _templateObject(){return data},data}var getTextSize=function(props){return function(props){return Boolean(props.fontSize)}(props)?props.fontSize:"".concat(props.height/2.5,"px")},getSizeComparedToBase=function(props,originalValue){return props.height*originalValue/64},constants=__webpack_require__("./src/components/Button/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Button_styles_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Button_styles_templateObject(){var data=Button_styles_tagged_template_literal(['\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-family: "Rammetto One";\n    border-radius: 1000px;\n    cursor: pointer;\n    user-select: none;\n    text-decoration: none;\n  ']);return Button_styles_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=Button_styles_tagged_template_literal(["\n      width: ","px;\n      padding: 0;\n      flex-shrink: 0;\n    "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=Button_styles_tagged_template_literal(["\n    outline: none;\n    border: none;\n    height: ","px;\n    font-size: ",";\n    margin-bottom: ","px;\n    padding: ",";\n    ","\n  "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Button_styles_tagged_template_literal(["\n      // Base\n      ","\n      // COLORS\n      background-color: ",";\n      ",";\n      color: ",";\n      filter: ",";\n\n      // Dimensions\n      ","\n    "]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Button_styles_tagged_template_literal(["\n  ","\n\n  svg {\n    height: 100%;\n    width: 100%;\n  }\n\n"]);return _templateObject4=function _templateObject(){return data},data}var buttonProps=["backgroundColor","height","fullWidth","color","strokeColor","dropShadowColor","shadowColor","fontSize","round","disabled","wiggle","size","theme"],StyledSpanButton=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:function(prop){return!buttonProps.includes(prop)}}).attrs((function(props){return{role:"button"}}))(_templateObject4(),(function(props){var colors=function(props){var theme=props.theme?constants.z[props.theme]:void 0,fallback=constants.z.primary;return{backgroundColor:(null==theme?void 0:theme.backgroundColor)||props.backgroundColor||fallback.backgroundColor,color:(null==theme?void 0:theme.color)||props.color,strokeColor:(null==theme?void 0:theme.strokeColor)||props.strokeColor,shadowColor:(null==theme?void 0:theme.shadowColor)||props.shadowColor}}(props),height=function(props){return(props.size?constants.F[props.size]:void 0)||props.height||constants.F.regular}(props);return(0,styled_components_browser_esm.AH)(_templateObject3(),(0,styled_components_browser_esm.AH)(Button_styles_templateObject()),colors.backgroundColor,function(props){var light=(0,polished_esm.J1)(props.backgroundColor),shadowColor=props.shadowColor||light&&(0,polished_esm.e$)(.2,props.backgroundColor)||!light&&(0,polished_esm.a)(.2,props.backgroundColor),dropShadowColor=props.dropShadowColor||"rgba(0,0,0,0.3)",strokeColor=props.strokeColor||light&&(0,polished_esm.a)(.1,props.backgroundColor)||!light&&(0,polished_esm.e$)(.1,props.backgroundColor);return(0,styled_components_browser_esm.AH)(_templateObject(),getSizeComparedToBase(props,5),shadowColor,getSizeComparedToBase(props,12),dropShadowColor,getSizeComparedToBase(props,5),strokeColor,getSizeComparedToBase(props,7),getSizeComparedToBase(props,5),shadowColor,getSizeComparedToBase(props,5),strokeColor)}(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},colors),{height})),function(props){return props.color?props.color:props.backgroundColor&&(0,polished_esm.J1)(props.backgroundColor)<=.5?"#fff":"#000"}(colors),props.disabled?"grayscale(100%)":"none",function(props){return(0,styled_components_browser_esm.AH)(_templateObject2(),props.height,getTextSize(props),getSizeComparedToBase(props,12),function(props){return"".concat(.001*props.height,"px ").concat(props.height/2,"px")}(props),props.round&&(0,styled_components_browser_esm.AH)(_templateObject1(),props.height))}({height,round:props.round}))}));const Button_Button=StyledSpanButton},"./src/components/Button/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>SIZES,z:()=>THEMES});var THEMES={primary:{backgroundColor:"#009EE2",color:"#fff",strokeColor:"#00C5ED",shadowColor:"#025899"},confirm:{backgroundColor:"#8CC63F",color:"#fff",strokeColor:"#AFD752",shadowColor:"#579800"},"the-pink":{backgroundColor:"#E40071",color:"",shadowColor:"",strokeColor:""},purple:{backgroundColor:"#701EA8",color:"",shadowColor:"#4E1B6D",strokeColor:"#9026C1"},red:{color:"white",backgroundColor:"#E20514",strokeColor:"#F60A21",shadowColor:"#931120"},orange:{color:"white",backgroundColor:"#F29226",strokeColor:"#F6B230",shadowColor:"#CB6217"},green:{color:"white",backgroundColor:"#8DC63F",strokeColor:"#AED752",shadowColor:"#58981F"},yellow:{color:"white",backgroundColor:"#FEC532",strokeColor:"#FEE13A",shadowColor:"#C59928"},white:{color:"",backgroundColor:"#EEEEEE",strokeColor:"#D9D9D9",shadowColor:"#8E9197"}},SIZES={"xx-large":142,"x-large":109,large:71,regular:50,small:39,"x-small":30}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/Button/Button.tsx").A}}]);