(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{7913:function(e,r,s){Promise.resolve().then(s.bind(s,971))},4947:function(e,r,s){"use strict";function t(e){return e=(e=(e=e.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g," ").toLowerCase()).replace(/^\s+|\s+$/gm,"")).replace(/\s+/g,"-")}s.d(r,{G:function(){return t}})},971:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return h}});var t=s(7437),a=s(2333),c=s(1396),i=s.n(c),n=s(4947),o=s(316),l=s.n(o);let d=e=>fetch(e,{next:{revalidate:3600}}).then(e=>e.json());function h(e){let{params:r}=e,{data:s,isLoading:c,isError:o}=(0,a.ZP)("https://wasimhere.github.io/api/categories",d),{data:h,isLoading:m,isError:u}=(0,a.ZP)("https://wasimhere.github.io/api/projects",d);return o||u?"Failed to fetch":c||m?(0,t.jsx)("div",{className:"loading-sec",children:(0,t.jsx)("div",{className:"loader"})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"breadcrumb",children:[(0,t.jsx)(i(),{href:"/",className:"breadcrumb-item",children:"Home"}),(0,t.jsx)("div",{className:"breadcrumb-item-separator",children:"/"}),(0,t.jsx)("div",{className:"breadcrumb-item breadcrumb-current",children:"My Work"})]}),(0,t.jsx)("h1",{className:"page-title",children:"My Work"}),(0,t.jsxs)("div",{className:l().categories,children:[(0,t.jsx)(i(),{className:l().category+" "+l().active,href:"/work",children:"All"}),s.map((e,r)=>(0,t.jsx)(i(),{className:l().category,href:"/work/category/"+(0,n.G)(e.title),children:e.title},e.id))]}),(0,t.jsx)("div",{className:l().projects,children:h.map((e,r)=>(0,t.jsx)("div",{className:l().project,children:(0,t.jsx)(i(),{href:"/work/"+(0,n.G)(e.title),children:(0,t.jsx)("img",{src:"/images/projects/"+(0,n.G)(e.title)+"-featured.webp"})})},(0,n.G)(e.title)))})]})})}},316:function(e){e.exports={projects:"work_projects__kUk_V",project:"work_project__kZXia",categories:"work_categories__ebRLj",category:"work_category__nCVtU",active:"work_active__le2ma"}}},function(e){e.O(0,[176,333,971,864,744],function(){return e(e.s=7913)}),_N_E=e.O()}]);