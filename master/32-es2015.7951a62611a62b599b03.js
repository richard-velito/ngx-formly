(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+bR9":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-default"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"options.resetModel()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"6l86":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-custom-input\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input [type]="type" [formControl]="formControl" [formlyAttributes]="field"&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldCustomInput <span class="hljs-keyword">extends</span> FieldType {\n  <span class="hljs-keyword">get</span> <span class="hljs-keyword">type</span>() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.to.type || <span class="hljs-string">\'text\'</span>;\n  }\n}\n'},"9/7c":function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  <button type="button" class="btn btn-default" (click)="options.resetModel()">Reset</button>\n</form>\n'},Cfm1:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: <span class="hljs-literal">false</span>,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Text\'</span>,\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'nested.story\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some sweet story\'</span>,\n        placeholder: <span class="hljs-string">\'It allows you to build and maintain your forms with the ease of JavaScript :-)\'</span>,\n        description: <span class="hljs-string">\'\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.focus\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.description\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'And look! This field magically got focus!\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'awesome\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: { label: <span class="hljs-string">\'\'</span> },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad, formly is really awesome...\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Is formly totally awesome? (uncheck this and see what happens)\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'whyNot\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.placeholder\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad... It really is awesome! Wasn\\\'t that cool?\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Type in here... I dare you\'</span>;\n          }\n        },\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n      },\n      hideExpression: <span class="hljs-string">\'model.awesome\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Why Not?\'</span>,\n        placeholder: <span class="hljs-string">\'Type in here... I dare you\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'custom\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'custom\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Custom inlined\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},OmXP:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldCustomInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./custom-input.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      extras: { immutable: <span class="hljs-literal">true</span> },\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n      types: [\n        { name: <span class="hljs-string">\'custom\'</span>, component: FormlyFieldCustomInput, wrappers: [<span class="hljs-string">\'form-field\'</span>] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},jqub:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: false,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Text',\n        placeholder: 'Formly is terrific!',\n        required: true,\n      },\n    },\n    {\n      key: 'nested.story',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Some sweet story',\n        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',\n        description: '',\n      },\n      expressionProperties: {\n        'templateOptions.focus': 'formState.awesomeIsForced',\n        'templateOptions.description': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'And look! This field magically got focus!';\n          }\n        },\n      },\n    },\n    {\n      key: 'awesome',\n      type: 'checkbox',\n      templateOptions: { label: '' },\n      expressionProperties: {\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n        'templateOptions.label': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad, formly is really awesome...';\n          } else {\n            return 'Is formly totally awesome? (uncheck this and see what happens)';\n          }\n        },\n      },\n    },\n    {\n      key: 'whyNot',\n      type: 'textarea',\n      expressionProperties: {\n        'templateOptions.placeholder': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad... It really is awesome! Wasn\\'t that cool?';\n          } else {\n            return 'Type in here... I dare you';\n          }\n        },\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n      },\n      hideExpression: 'model.awesome',\n      templateOptions: {\n        label: 'Why Not?',\n        placeholder: 'Type in here... I dare you',\n      },\n    },\n    {\n      key: 'custom',\n      type: 'custom',\n      templateOptions: {\n        label: 'Custom inlined',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},jwkX:function(s,n,a){"use strict";a.r(n);var l=a("Mlb/"),e=a("QZuW");class o{constructor(){this.form=new e.FormGroup({}),this.model={},this.options={formState:{awesomeIsForced:!1}},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Formly is terrific!",required:!0}},{key:"nested.story",type:"textarea",templateOptions:{label:"Some sweet story",placeholder:"It allows you to build and maintain your forms with the ease of JavaScript :-)",description:""},expressionProperties:{"templateOptions.focus":"formState.awesomeIsForced","templateOptions.description":(s,n)=>{if(n.awesomeIsForced)return"And look! This field magically got focus!"}}},{key:"awesome",type:"checkbox",templateOptions:{label:""},expressionProperties:{"templateOptions.disabled":"formState.awesomeIsForced","templateOptions.label":(s,n)=>n.awesomeIsForced?"Too bad, formly is really awesome...":"Is formly totally awesome? (uncheck this and see what happens)"}},{key:"whyNot",type:"textarea",expressionProperties:{"templateOptions.placeholder":(s,n)=>n.awesomeIsForced?"Too bad... It really is awesome! Wasn't that cool?":"Type in here... I dare you","templateOptions.disabled":"formState.awesomeIsForced"},hideExpression:"model.awesome",templateOptions:{label:"Why Not?",placeholder:"Type in here... I dare you"}},{key:"custom",type:"custom",templateOptions:{label:"Custom inlined"}}]}submit(){this.form.valid&&alert(JSON.stringify(this.model))}}const t={examples:[{title:"Introduction Example",description:"This is a small subset of the things that formly can do :-) See the other examples and the documentation for more.",component:o,files:[{file:"app.component.html",content:a("+bR9"),filecontent:a("9/7c")},{file:"app.component.ts",content:a("Cfm1"),filecontent:a("jqub")},{file:"app.module.ts",content:a("OmXP"),filecontent:a("qvms")},{file:"custom-input.component.ts",content:a("6l86"),filecontent:a("sJAj")}]}]};class p{}var r=a("n91+"),m=a("aUi8"),i=a("xRU+"),c=a("l9Gt"),d=a("tb2p"),u=a("5swT"),f=a("rGUg"),h=a("qEw3"),y=a("KL5v"),g=a("WPgD"),j=a("wR1y"),w=a("AhFg"),b=a("vk2e"),k=a("B/Is");class F extends k.b{get type(){return this.to.type||"text"}}var v=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,6,"input",[],[[8,"type",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"change"],[null,"keypress"]],(function(s,n,a){var e=!0;return"input"===n&&(e=!1!==l["\u0275nov"](s,1)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==l["\u0275nov"](s,1).onTouched()&&e),"compositionstart"===n&&(e=!1!==l["\u0275nov"](s,1)._compositionStart()&&e),"compositionend"===n&&(e=!1!==l["\u0275nov"](s,1)._compositionEnd(a.target.value)&&e),"focus"===n&&(e=!1!==l["\u0275nov"](s,6).onFocus(a)&&e),"blur"===n&&(e=!1!==l["\u0275nov"](s,6).onBlur(a)&&e),"keyup"===n&&(e=!1!==(l["\u0275nov"](s,6).to.keyup&&l["\u0275nov"](s,6).to.keyup(l["\u0275nov"](s,6).field,a))&&e),"keydown"===n&&(e=!1!==(l["\u0275nov"](s,6).to.keydown&&l["\u0275nov"](s,6).to.keydown(l["\u0275nov"](s,6).field,a))&&e),"click"===n&&(e=!1!==(l["\u0275nov"](s,6).to.click&&l["\u0275nov"](s,6).to.click(l["\u0275nov"](s,6).field,a))&&e),"change"===n&&(e=!1!==l["\u0275nov"](s,6).onChange(a)&&e),"keypress"===n&&(e=!1!==(l["\u0275nov"](s,6).to.keypress&&l["\u0275nov"](s,6).to.keypress(l["\u0275nov"](s,6).field,a))&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,e.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275prd"](1024,null,e.NG_VALUE_ACCESSOR,(function(s){return[s]}),[e.DefaultValueAccessor]),l["\u0275did"](3,540672,null,0,e.FormControlDirective,[[8,null],[8,null],[6,e.NG_VALUE_ACCESSOR],[2,e["\u0275angular_packages_forms_forms_q"]]],{form:[0,"form"]},null),l["\u0275prd"](2048,null,e.NgControl,null,[e.FormControlDirective]),l["\u0275did"](5,16384,null,0,e.NgControlStatus,[[4,e.NgControl]],null,null),l["\u0275did"](6,933888,null,0,w.a,[l.Renderer2,l.ElementRef,b.DOCUMENT],{field:[0,"field"]},null)],(function(s,n){var a=n.component;s(n,3,0,a.formControl),s(n,6,0,a.field)}),(function(s,n){s(n,0,0,n.component.type,l["\u0275nov"](n,5).ngClassUntouched,l["\u0275nov"](n,5).ngClassTouched,l["\u0275nov"](n,5).ngClassPristine,l["\u0275nov"](n,5).ngClassDirty,l["\u0275nov"](n,5).ngClassValid,l["\u0275nov"](n,5).ngClassInvalid,l["\u0275nov"](n,5).ngClassPending)}))}function x(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-field-custom-input",[],null,null,null,C,v)),l["\u0275did"](1,49152,null,0,F,[],null,null)],null,null)}var S=l["\u0275ccf"]("formly-field-custom-input",F,x,{field:"field"},{},[]),I=a("fYis"),O=a("mSm0"),M=a("g/x9"),_=a("Ea/l"),T=a("kY9M"),R=a("cXvR"),N=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var e=!0,o=s.component;return"submit"===n&&(e=!1!==l["\u0275nov"](s,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==l["\u0275nov"](s,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),l["\u0275prd"](512,null,_.a,_.a,[T.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275did"](7,966656,null,0,R.a,[_.a,T.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"])),(s()(),l["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],(function(s,n,a){var l=!0;return"click"===n&&(l=!1!==s.component.options.resetModel()&&l),l}),null,null)),(s()(),l["\u0275ted"](-1,null,["Reset"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)}),(function(s,n){s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending)}))}function P(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,A,N)),l["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var q=l["\u0275ccf"]("formly-app-example",o,P,{},{},[]),E=a("o3+a"),G=a("9b0e"),D=a("6YJn"),U=a("dvHj"),J=a("C0xW"),L=a("W9sv"),W=a("m6lo"),V=a("S6Ld"),B=a("cTZo"),X=a("Kfqh"),K=a("Ienz"),Y=a("KuLc"),z=a("Z7++"),Z=a("2lML"),H=a("pgVP"),Q=a("pk7F"),$=a("T8+l"),ss=a("0hby"),ns=a("tVba"),as=a("XX7/"),ls=a("pLrJ"),es=a("U5/R"),os=a("TqxR"),ts=a("soK0"),ps=a("1k+g"),rs=a("pAed"),ms=a("VtvF"),is=a("lN7U"),cs=a("NPi3"),ds=a("PCNd"),us=a("WCiw"),fs=a("Vtge"),hs=a("+5Wd"),ys=a("+R4m"),gs=a("SSYk"),js=a("KJU8"),ws=a("eTA3"),bs=a("o12O"),ks=a("iWYX"),Fs=a("h18T");class vs{}var Cs=a("qk26"),xs=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return Ss}));var Ss=l["\u0275cmf"](p,[],(function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,y.a,g.a,j.a,S,I.a,O.a,q]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[l.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,E.c,E.c,[]),l["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,l.ComponentFactoryResolver,G.h,G.f,l.Injector,l.NgZone,b.DOCUMENT,D.b,[2,b.Location]]),l["\u0275mpd"](5120,G.j,G.k,[G.c]),l["\u0275mpd"](5120,U.b,U.c,[G.c]),l["\u0275mpd"](4608,J.e,L.c,[[2,L.g],[2,L.l]]),l["\u0275mpd"](5120,W.c,W.j,[G.c]),l["\u0275mpd"](4608,V.a,V.a,[]),l["\u0275mpd"](4608,B.a,B.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,_.a,_.a,[T.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),l["\u0275mpd"](1073742336,X.b,X.b,[]),l["\u0275mpd"](1073742336,E.d,E.d,[]),l["\u0275mpd"](1073742336,K.a,K.a,[]),l["\u0275mpd"](1073742336,D.a,D.a,[]),l["\u0275mpd"](1073742336,Y.g,Y.g,[]),l["\u0275mpd"](1073742336,z.ScrollingModule,z.ScrollingModule,[]),l["\u0275mpd"](1073742336,G.g,G.g,[]),l["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,J.f]]),l["\u0275mpd"](1073742336,U.e,U.e,[]),l["\u0275mpd"](1073742336,L.v,L.v,[]),l["\u0275mpd"](1073742336,Z.j,Z.j,[]),l["\u0275mpd"](1073742336,W.i,W.i,[]),l["\u0275mpd"](1073742336,W.f,W.f,[]),l["\u0275mpd"](1073742336,H.c,H.c,[]),l["\u0275mpd"](1073742336,Q.c,Q.c,[]),l["\u0275mpd"](1073742336,$.b,$.b,[]),l["\u0275mpd"](512,T.b,T.b,[]),l["\u0275mpd"](1024,T.a,(function(s){return[{wrappers:[{name:"form-field",component:ss.a}]},{types:[{name:"input",component:ns.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:as.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:ls.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:es.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:os.a,wrappers:["form-field"]}]},{types:[{name:"select",component:ts.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ps.a}],extensions:[{name:"addons",extension:{postPopulate:rs.a}}]},ms.b(s),{extras:{immutable:!0},validationMessages:[{name:"required",message:"This field is required"}],types:[{name:"custom",component:F,wrappers:["form-field"]}]}]}),[T.b]),l["\u0275mpd"](1073742336,ms.a,ms.a,[T.b,[2,T.a]]),l["\u0275mpd"](1073742336,is.h,is.h,[]),l["\u0275mpd"](1073742336,cs.b,cs.b,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,hs.a,hs.a,[]),l["\u0275mpd"](1073742336,ys.a,ys.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,js.a,js.a,[]),l["\u0275mpd"](1073742336,ws.a,ws.a,[]),l["\u0275mpd"](1073742336,bs.a,bs.a,[]),l["\u0275mpd"](1073742336,ks.a,ks.a,[]),l["\u0275mpd"](1073742336,Fs.a,Fs.a,[]),l["\u0275mpd"](1073742336,vs,vs,[]),l["\u0275mpd"](1073742336,Cs.t,Cs.t,[[2,Cs.y],[2,Cs.p]]),l["\u0275mpd"](1073742336,p,p,[]),l["\u0275mpd"](1024,Cs.n,(function(){return[[{path:"",component:xs.a,data:t}]]}),[])])}))},qvms:function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldCustomInput } from './custom-input.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      extras: { immutable: true },\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n      types: [\n        { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field'] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\nexport class AppModule { }\n"},sJAj:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-custom-input',\n  template: `\n    <input [type]=\"type\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n  `,\n})\nexport class FormlyFieldCustomInput extends FieldType {\n  get type() {\n    return this.to.type || 'text';\n  }\n}\n"}}]);