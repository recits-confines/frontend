(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{320:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""}}},o=n(13),l={components:{Header:Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow flex flex-col"},[t.title?n("Header",{attrs:{title:t.title}}):t._e(),t._v(" "),n("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[t._t("default")],2)],1)}),[],!1,null,"4edaf638",null);e.a=c.exports},348:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(25),{components:{Page:n(320).a},data:function(){return{stories:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$db.stories.getAll();case 2:t.stories=e.sent.reverse();case 3:case"end":return e.stop()}}),e)})))()}}),l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{attrs:{title:"Mes anecdotes confinées"}},[n("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/user/stories/create"}},[t._v("\n    + Nouvelle anecdote\n  ")]),t._v(" "),t._l(t.stories,(function(e){return n("div",{key:e.date.toString(),staticClass:"bg-white rounded-lg shadow-lg p-10 min-h-5 my-4"},[n("p",{staticClass:"text-xs font-semibold text-center"},[t._v("\n      Le "),n("time",[t._v(t._s(new Intl.DateTimeFormat(void 0,{dateStyle:"full"}).format(e.date)))])]),t._v(" "),n("h3",{staticClass:"text-2xl font-light text-center"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(e.body)+"\n    ")])])}))],2)}),[],!1,null,"9375565a",null);e.default=component.exports}}]);