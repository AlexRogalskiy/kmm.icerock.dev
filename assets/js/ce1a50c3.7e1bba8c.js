"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[9895],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),m=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=m(t.components);return o.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=m(n),k=a,u=h["".concat(p,".").concat(k)]||h[k]||s[k]||i;return n?o.createElement(u,r(r({ref:e},c),{},{components:n})):o.createElement(u,r({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5566:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r={sidebar_position:2},l="Kotlin/Native",p={unversionedId:"basics/kotlin-native",id:"basics/kotlin-native",isDocsHomePage:!1,title:"Kotlin/Native",description:'\u041e\u0431\u0449\u0435\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "\u0447\u0442\u043e \u044d\u0442\u043e \u0442\u0430\u043a\u043e\u0435" -',source:"@site/docs/basics/kotlin-native.md",sourceDirName:"basics",slug:"/basics/kotlin-native",permalink:"/docs/basics/kotlin-native",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/docs/basics/kotlin-native.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Kotlin Multiplatform \u0441 \u043d\u0443\u043b\u044f",permalink:"/docs/basics/getting-started"},next:{title:"Kotlin \u0441 \u043d\u0443\u043b\u044f",permalink:"/docs/for-ios-devs/getting-started"}},m=[{value:"runtime",id:"runtime",children:[]},{value:"compilation",id:"compilation",children:[]}],c={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kotlinnative"},"Kotlin/Native"),(0,i.kt)("p",null,'\u041e\u0431\u0449\u0435\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "\u0447\u0442\u043e \u044d\u0442\u043e \u0442\u0430\u043a\u043e\u0435" -\xa0',(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/native-overview.html"},"https://kotlinlang.org/docs/native-overview.html")),(0,i.kt)("p",null,"\u0412\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0418\u0433\u043e\u0442\u0442\u0438 \u043f\u0440\u043e \u0432\u043d\u0443\u0442\u0440\u044f\u043d\u043a\u0443 K/N -\xa0",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/DqsYo_4QWSg"},"https://youtu.be/DqsYo_4QWSg")),(0,i.kt)("h2",{id:"runtime"},"runtime"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0418\u043d\u0442\u0435\u0440\u043e\u043f Kotlin \u0438 ObjectiveC -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-objc-interop.html"},"https://kotlinlang.org/docs/native-objc-interop.html"),"\xa0\u0442\u0443\u0442 \u0432\u0441\u044f \u0432\u0430\u0436\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0442\u044b\u043a\u0435 iOS \u043c\u0438\u0440\u0430 \u0438 Kotlin. \u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0434\u043b\u044f \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043a\u0430\u043a\u043e\u0439 \u043a\u043e\u0434 \u0438\u0437 common \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u043d \u0432 ios \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u043c \u043c\u0438\u0440\u0435 \u0438\u0437 swift"),(0,i.kt)("li",{parentName:"ol"},"\u0418\u043c\u043c\u0443\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u0435 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-immutability.html"},"https://kotlinlang.org/docs/native-immutability.html"),"\xa0\u044d\u0442\u043e \u0432\u0430\u0436\u043d\u044b\u0439 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0430\u0441\u043f\u0435\u043a\u0442 K/N \u0441\u0438\u043b\u044c\u043d\u043e \u0432\u043b\u0438\u044f\u044e\u0449\u0438\u0439 \u043d\u0430 \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434, \u0435\u0441\u043b\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c. \u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u0434\u0435\u044f \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f \u0432 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 memory management'\u0430 K/N \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430."),(0,i.kt)("li",{parentName:"ol"},"\u0421\u0431\u043e\u0440\u0449\u0438\u043a \u043c\u0443\u0441\u043e\u0440\u0430",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u041a\u0440\u0430\u0442\u043a\u043e \u043f\u0440\u043e \u043d\u0435\u0433\u043e \u0441\u043a\u0430\u0437\u0430\u043d\u043e \u0442\u0443\u0442 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-faq.html#what-is-kotlin-native-memory-management-model"},"https://kotlinlang.org/docs/native-faq.html#what-is-kotlin-native-memory-management-model")),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0430 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/kotlin/2020/07/kotlin-native-memory-management-roadmap/"},"https://blog.jetbrains.com/kotlin/2020/07/kotlin-native-memory-management-roadmap/")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/f-e-SdAugOs"},"https://youtu.be/f-e-SdAugOs"),"\xa0- \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0418\u0433\u043e\u0442\u0442\u0438 \u043f\u0440\u043e \u0441\u0431\u043e\u0440\u0449\u0438\u043a"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/apple-framework.html#garbage-collection-and-reference-counting"},"https://kotlinlang.org/docs/apple-framework.html#garbage-collection-and-reference-counting"),"\xa0- \u043f\u0440\u043e \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u0432 \u043a\u043e\u0442\u043b\u0438\u043d \u043d\u0430 \u0430\u0439\u043e\u0441\u0435. \u043a\u043e\u0440\u043e\u0442\u043a\u043e."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://discuss.kotlinlang.org/t/kotlin-native-1-3-50-relaxed-mode/13586"},"https://discuss.kotlinlang.org/t/kotlin-native-1-3-50-relaxed-mode/13586"),"\xa0- \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e relaxed \u0440\u0435\u0436\u0438\u043c \u043f\u0430\u043c\u044f\u0442\u0438 K/N, \u043d\u043e \u043d\u043e\u0432\u044b\u0439 \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u043c\u0443\u0441\u043e\u0440\u0430 \u043d\u0435 \u043d\u0430 \u043d\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u0430\u043d, \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u043f\u0446\u0438\u044f \u043f\u0440\u043e \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u0430\u043b\u043e \u0447\u0442\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0438 \u044f \u0434\u0430\u0436\u0435 \u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0440\u0435\u0436\u0438\u043c \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0434\u043e\u0434\u0435\u043b\u0430\u043b\u0438."))),(0,i.kt)("li",{parentName:"ol"},"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-concurrency.html"},"https://kotlinlang.org/docs/native-concurrency.html"),"\xa0\u0442\u0435\u0441\u043d\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u0430\u044f \u0441 \u043f\u0443\u043d\u043a\u0442\u043e\u043c \u043f\u0440\u043e \u0438\u043c\u043c\u0443\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0442\u0435\u043c\u0430 - \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c. \u041a\u0430\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438 \u043a\u0430\u043a \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nw6YTfEyfO0"},"https://www.youtube.com/watch?v=nw6YTfEyfO0"),"\xa0- \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0418\u0433\u043e\u0442\u0442\u0438 \u043e \u0442\u043e\u043c \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0438 \u0438\u043c\u043c\u0443\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432 K/N"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=oxQ6e1VeH4M"},"https://www.youtube.com/watch?v=oxQ6e1VeH4M"),"\xa0- \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0413\u0430\u043b\u043b\u0438\u0433\u0430\u043d\u0430 \u0441 \u0440\u0430\u0437\u0436\u0435\u0432\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u043c\u044b \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u0441\u043e\u0442\u0438"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/touchlab/practical-kotlin-native-concurrency-ac7"},"https://dev.to/touchlab/practical-kotlin-native-concurrency-ac7"),"\xa0- \u0442\u0440\u0438 \u0441\u0442\u0430\u0442\u044c\u0438 \u043e\u0442 \u0413\u0430\u043b\u043b\u0438\u0433\u0430\u043d\u0430 \u0441 \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u0440\u0430\u0437\u043e\u0431\u043e\u0440\u043e\u043c \u0442\u0435\u043c\u044b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mobile/concurrent-mutability.html"},"https://kotlinlang.org/docs/mobile/concurrent-mutability.html"),"\xa0- \u0440\u0430\u0437\u0434\u0435\u043b Working with concurrency \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 KMM \u0442\u043e\u0436\u0435 \u0441 \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u043e\u043c \u043e\u0442 \u0413\u0430\u043b\u043b\u0438\u0433\u0430\u043d\u0430"),(0,i.kt)("li",{parentName:"ol"},"\u041a\u043e\u043b\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0448\u0442\u0443\u043a\u0430-\u0445\u0430\u043a\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.native.concurrent/-worker-bound-reference/"},"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.native.concurrent/-worker-bound-reference/"),"\xa0\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0448\u0430\u0440\u0438\u0442\u044c \u0447\u0442\u043e-\u043b\u0438\u0431\u043e \u0431\u0435\u0437 \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u043a\u0438."),(0,i.kt)("li",{parentName:"ol"},"Touchlab \u0433\u0430\u0439\u0434 \u043f\u043e \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 + \u0432\u0438\u0434\u0435\u043e - ",(0,i.kt)("a",{parentName:"li",href:"https://touchlab.co/kotlin-native-concurrency/"},"https://touchlab.co/kotlin-native-concurrency/")))),(0,i.kt)("li",{parentName:"ol"},"\u041e\u0442\u043b\u0430\u0434\u043a\u0430 K/N -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-debugging.html"},"https://kotlinlang.org/docs/native-debugging.html"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u044b \u0435\u0441\u0442\u044c\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/touchlab/xcode-kotlin"},"https://github.com/touchlab/xcode-kotlin")),(0,i.kt)("li",{parentName:"ol"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u044c\xa0",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile"},"https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile")),(0,i.kt)("li",{parentName:"ol"},"\u0418 AppCode -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/kotlin/2019/04/kotlinnative-support-for-appcode-2019-1/"},"https://blog.jetbrains.com/kotlin/2019/04/kotlinnative-support-for-appcode-2019-1/")))),(0,i.kt)("li",{parentName:"ol"},"Coroutines -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md"},"https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md"),"\xa0\u043f\u0440\u043e native-mt \u0432\u0435\u0442\u043a\u0443 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0440\u0443\u0442\u0438\u043d \u0438\u0437-\u0437\u0430 \u0438\u043c\u043c\u0443\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438")),(0,i.kt)("h2",{id:"compilation"},"compilation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e \u0433\u0440\u0430\u0434\u043b \u043f\u043b\u0430\u0433\u0438\u043d K/N -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/kotlin-native/blob/master/GRADLE_PLUGIN.md"},"https://github.com/JetBrains/kotlin-native/blob/master/GRADLE_PLUGIN.md")),(0,i.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0441 \u0433\u0440\u0430\u0434\u043b \u043f\u043b\u0430\u0433\u0438\u043d\u0430 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mpp-dsl-reference.html"},"https://kotlinlang.org/docs/mpp-dsl-reference.html")),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e \u0441\u0431\u043e\u0440\u043a\u0443 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0445 \u0431\u0438\u043d\u0430\u0440\u043d\u0438\u043a\u043e\u0432 K/N -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mpp-build-native-binaries.html"},"https://kotlinlang.org/docs/mpp-build-native-binaries.html"),"\xa0\u0434\u043b\u044f \u0430\u0439\u043e\u0441\u0430 \u0432\u0430\u0436\u0435\u043d \u0431\u0438\u043d\u0430\u0440\u044c framework \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438 (\u043d\u043e \u043c\u044b \u0438\u0445 \u043d\u0435 \u044e\u0437\u0430\u0435\u043c)"),(0,i.kt)("li",{parentName:"ol"},"\u0413\u0438\u0431\u043a\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438, \u0434\u0435\u0442\u0430\u043b\u0438 \u043f\u0440\u043e cinterop -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mpp-configure-compilations.html"},"https://kotlinlang.org/docs/mpp-configure-compilations.html")),(0,i.kt)("li",{parentName:"ol"},"\u0421\u0442\u0430\u0442\u044c\u044f \u043f\u0440\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e swift \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 cinterop \u0432 kotlin (\u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438) - ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/kodein-koders/create-a-kotlin-multiplatform-library-with-swift-1a818b2dc1b0"},"Create a Kotlin/Multiplatform library with Swift")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/5QPPZV04-50"},"https://youtu.be/5QPPZV04-50"),"\xa0- \u0437\u0430\u043f\u0438\u0441\u044c \u0441 Kotlin 1.4 online event \u043f\u0440\u043e \u043c\u043f\u043f \u0434\u0435\u0442\u0430\u043b\u0438"),(0,i.kt)("li",{parentName:"ol"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 cocoapods (\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043b\u0430\u0433\u0438\u043d) -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-cocoapods.html"},"https://kotlinlang.org/docs/native-cocoapods.html")),(0,i.kt)("li",{parentName:"ol"},"\u0414\u0435\u0431\u0430\u0436\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043b\u044f \u043a\u0440\u0435\u0448\u0440\u0435\u043f\u043e\u0440\u0442\u043e\u0432 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0445 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-ios-symbolication.html"},"https://kotlinlang.org/docs/native-ios-symbolication.html")),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e \u0432\u043d\u0443\u0442\u0440\u044f\u043d\u043a\u0443 klib'\u043e\u0432 \u0438 K/N lib -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-libraries.html"},"https://kotlinlang.org/docs/native-libraries.html")),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e \u0440\u0430\u0437\u043c\u0435\u0440 \u0431\u0438\u043d\u0430\u0440\u043d\u0438\u043a\u0430 \u043d\u0430 iOS - ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/hrRqX7NYg3Q?t=1895"},"https://youtu.be/hrRqX7NYg3Q?t=1895")),(0,i.kt)("li",{parentName:"ol"},"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0430\u043a\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/kotlin-native/blob/master/HACKING.md"},"https://github.com/JetBrains/kotlin-native/blob/master/HACKING.md"),"\xa0(\u043e\u0447\u0435\u043d\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f)"),(0,i.kt)("li",{parentName:"ol"},"\u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 -\xa0",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-improving-compilation-time.html"},"https://kotlinlang.org/docs/native-improving-compilation-time.html"))))}s.isMDXComponent=!0}}]);