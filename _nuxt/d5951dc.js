(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{268:function(t,e,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("1b7833da",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";o(268)},281:function(t,e,o){var c=o(29)(!1);c.push([t.i,'*{box-sizing:border-box}img{vertical-align:middle;height:auto}.key-back{background-color:#003557;position:relative;margin-bottom:150px}.key-back:after{box-sizing:border-box;display:block;content:"";position:absolute;bottom:-200px;left:0;width:0;height:0;border-color:#003557 transparent transparent;border-style:solid;border-width:200px 0 0 100vw;z-index:1}.key-back .catch{position:absolute;width:600px;z-index:100;top:600px;right:10px}.key-back .catch span{display:block;background:#fff;margin-bottom:10px;font-size:2em;line-height:1.8;letter-spacing:.08em}body{background-color:#f6f6f6}.sect-header{width:380px;margin-bottom:45px;display:flex;align-items:center}.sect-header:before{content:"";display:block;height:4px;width:80px;background-color:#000;margin-right:20px}.contact-bg{background-color:#d9dadc;padding:45px}.about-sect,.contact-sect,.policy-sect,.profile-sect,.works-sect{width:980px;margin-left:auto;margin-right:auto}.about-sect,.policy-sect,.profile-sect,.works-sect{margin-bottom:80px}.about-dsc{width:680px;margin-left:300px;line-height:1.8}.policy-list{display:flex;justify-content:space-between}.policy-sect .policy-item{width:313px;background-color:#fff;padding:18px 32px}.policy-sect .policy-item .policy-item-title{text-align:center;margin-bottom:8px}.policy-sect .policy-item .policy-item-text{font-size:.9em;line-height:1.9}.works-sect .works-slider{width:580px;margin:0 auto 60px}.works-sect .works-link{text-align:right}.works-sect .works-link a{text-decoration:none;display:inline-block;font-size:.8em;line-height:28px;padding-right:20px;padding-left:20px;margin-right:100px;border-bottom:1px solid #000}.works-sect .works-link a:link,.works-sect .works-link a:visited{color:#000}.works-sect .works-link a:hover{opacity:.6}.profile-sect .profile-card{width:780px;background-color:#fff;padding:40px;margin:0 auto;display:flex;justify-content:space-between;align-items:center}.profile-sect .profile-card .profile-img{width:280px;padding-right:20px;padding-left:20px;margin-right:20px}.profile-sect .profile-card .profile-text{width:480px;padding:28px}.profile-sect .profile-card .my-name{font-weight:700;position:static}.profile-sect .profile-card .my-comment{font-size:.8em;line-height:1.7;margin-bottom:18px}.profile-sect .profile-card .my-name:after{content:"";display:block;position:relative;top:5px;width:38px;height:2px;border-radius:10px;background-color:#000;margin-bottom:28px}.profile-sect .profile-link{text-align:right}.profile-sect .profile-link a{text-decoration:none;font-size:.8em;line-height:28px;display:inline-block;padding-right:20px;padding-left:20px;border-bottom:1px solid #000}.profile-sect .profile-link a:link,.profile-sect .profile-link a:visited{color:#000}.profile-sect .profile-link a:hover{opacity:.6}.contact-sect .contact-gr{text-align:center}.contact-sect .contact-dsc:first-child{margin-bottom:28px}.contact-sect .contact-link{display:inline-block;padding:0 30px;background-color:#fff;border-radius:50px;line-height:48px;text-decoration:none;font-weight:700}.contact-sect .contact-link:link,.contact-sect .contact-link:visited{color:#000}.contact-sect .contact-link:hover{opacity:.6}.fadein{opacity:0;transform:translateY(10px);transition:all 1.5s cubic-bezier(.39,.575,.565,1)}.fadein.policy1{transition-delay:0ms}.fadein.policy2{transition-delay:.5s}.fadein.policy3{transition-delay:1s}',""]),t.exports=c},300:function(t,e,o){"use strict";o.r(e);var c={data:function(){return{swiperOptions:{loop:!0,slidePerView:1,speed:1200,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}}},methods:{handleScroll:function(t,e){e.getBoundingClientRect().top<window.innerHeight/1.5&&e.setAttribute("style","opacity: 1; transform: translateY(0px)")}}},l=(o(280),o(19)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"testback"}),t._v(" "),o("div",[t._m(1),t._v(" "),o("section",{staticClass:"policy-sect"},[o("h2",{staticClass:"sect-header"},[t._v("大事にしていること")]),t._v(" "),o("div",{staticClass:"policy-list"},[o("section",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"policy-item fadein policy1"},[o("h3",{staticClass:"policy-item-title"},[t._v("サイトの目的設定")]),t._v(" "),o("p",{staticClass:"policy-item-text"},[t._v("\n            どんな人に届けたいか、目的や目標を立てることがサイト制作にもその後の改善を行う際にも役立つと考えています。\n          ")])]),t._v(" "),o("section",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"policy-item fadein policy2"},[o("h3",{staticClass:"policy-item-title"},[t._v("内部性能・保守性")]),t._v(" "),o("p",{staticClass:"policy-item-text"},[t._v("\n            ローディング時間が長いとユーザーが離れてしまったり、コードが汚いと修正時に工数がかかるため、コーディング時は内部の設計にも気をつけています。\n          ")])]),t._v(" "),o("section",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"policy-item fadein policy3"},[o("h3",{staticClass:"policy-item-title"},[t._v("ユーザー目線の設計")]),t._v(" "),o("p",{staticClass:"policy-item-text"},[t._v("\n            おしゃれなデザインはもとより、誰にでもわかりやすく誤解のないサイト作りを目指しています。\n          ")])])])]),t._v(" "),o("section",{staticClass:"works-sect"},[o("h2",{staticClass:"sect-header"},[t._v("最新の制作実績")]),t._v(" "),o("swiper",{staticClass:"works-slider",attrs:{options:t.swiperOptions}},[o("swiper-slide",[o("img",{attrs:{src:"/images/works.png"}})]),t._v(" "),o("swiper-slide",[o("img",{attrs:{src:"/images/works.png"}})]),t._v(" "),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),t._v(" "),o("div",{staticClass:"works-link"},[o("nuxt-link",{attrs:{to:"/works"}},[t._v("もっと見る→")])],1)],1),t._v(" "),o("section",{staticClass:"profile-sect"},[o("h2",{staticClass:"sect-header"},[t._v("私について")]),t._v(" "),o("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"profile-card fadein"},[t._m(2),t._v(" "),o("div",{staticClass:"profile-text"},[t._m(3),t._v(" "),t._m(4),t._v(" "),o("p",{staticClass:"profile-link"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("詳しく→")])],1)])])]),t._v(" "),t._m(5)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"key-back"},[o("img",{attrs:{src:"/images/key_top.jpg"}}),t._v(" "),o("p",{staticClass:"catch"},[o("span",[t._v("どんなにいいサービスも、")]),t._v(" "),o("span",[t._v("知ってもらわなきゃ届かない。")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about-sect"},[o("h2",{staticClass:"sect-header"},[t._v("このサイトについて")]),t._v(" "),o("p",{staticClass:"about-dsc"},[t._v("\n        本サイトは就職活動用に作成したポートフォリオサイトです。"),o("br"),t._v("\n        私にとってデザインとは「届けること」です。"),o("br"),t._v("\n        いいものやサービスを、必要としている人のところに届ける、そして同時に依頼主の想いを届けることを大事にしたいと思い、\n        当サイトのモチーフには紙飛行機を選びました。\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"profile-img"},[e("img",{attrs:{src:"/images/profile.png"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"my-name"},[o("a",{attrs:{href:"https://github.com/irimemiri"}},[t._v("@irimemiri")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"my-comment"},[t._v("絵とロックバンドとスプラトゥーンが好きです。"),o("br"),t._v("サークル活動がきっかけで広告に興味を持ち、広告系の企業でWebエンジニアとして働いていましたが、2020年の退職を機にデザインを学び始めました。")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-bg"},[o("section",{staticClass:"contact-sect"},[o("h2",{staticClass:"sect-header"},[t._v("お問い合わせ")]),t._v(" "),o("div",{staticClass:"contact-gr"},[o("p",{staticClass:"contact-dsc"},[t._v("ご質問や本サイトへのご意見・ご感想などお待ちしております。")]),t._v(" "),o("a",{staticClass:"contact-link",attrs:{href:"https://forms.gle/KSYc1iwvHBYrxwnd9"}},[t._v("お問い合わせ")])])])])}],!1,null,null,null);e.default=component.exports}}]);