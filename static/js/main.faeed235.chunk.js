(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{23:function(e,a,s){"use strict";s.r(a);var t=s(3),c=s.n(t),r=s(11),n=s.n(r),i=s(25),l=(s(9),s(1));const o=["Los Angeles","New York","Miami","Paris","London","Madrid"],d=e=>{let{type:a}=e;return Object(l.jsx)("svg",{className:"weather-icon",viewBox:"0 0 24 24",fill:"currentColor",children:(()=>{switch(a.toLowerCase()){case"clear":case"clear sky":return Object(l.jsx)("path",{d:"M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-7a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm.64-6.36a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 0 1-1.42 1.42L5.64 7.06a1 1 0 0 1 0-1.42zm12.72 12.72a1 1 0 0 1 0 1.42l-1.42 1.42a1 1 0 1 1-1.42-1.42l1.42-1.42a1 1 0 0 1 1.42 0zm0-12.72a1 1 0 0 1 0 1.42l-1.42 1.42a1 1 0 1 1-1.42-1.42l1.42-1.42a1 1 0 0 1 1.42 0zM7.06 18.36a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 1 1 1.42 1.42l-1.42 1.42a1 1 0 0 1-1.42 0zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"});case"clouds":case"few clouds":case"scattered clouds":case"broken clouds":case"overcast clouds":return Object(l.jsx)("path",{d:"M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM12 4a4 4 0 0 0-3.87 3.02A2 2 0 0 0 6 9a2 2 0 0 0 0 4h13a2 2 0 1 0-.15-3.99A4 4 0 0 0 12 4z"});case"rain":case"light rain":case"moderate rain":case"heavy rain":return Object(l.jsx)("path",{d:"M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM8 20a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0zm5 0a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0zm5 0a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0z"});case"thunderstorm":return Object(l.jsx)("path",{d:"M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zm-9 0l2-4h-3l1-3-2 4h3l-1 3z"});case"snow":return Object(l.jsx)("path",{d:"M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM8 20h.01M12 20h.01M16 20h.01M8 16h.01M12 16h.01M16 16h.01",strokeWidth:"2",strokeLinecap:"round"});default:return Object(l.jsx)("path",{d:"M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"})}})()})},h=()=>{const e=Array.from({length:100}).map(((e,a)=>({id:a,left:100*Math.random()+"%",animationDuration:.5*Math.random()+.7+"s",animationDelay:2*Math.random()+"s"})));return Object(l.jsx)("div",{className:"rain-container",children:e.map((e=>Object(l.jsx)("div",{className:"rain-drop",style:{left:e.left,animationDuration:e.animationDuration,animationDelay:e.animationDelay}},e.id)))})},j=e=>{let{windSpeed:a,windDegree:s}=e;const t=Array.from({length:20}).map(((e,a)=>({id:a,top:100*Math.random()+"%",animationDuration:2*Math.random()+3+"s",animationDelay:2*Math.random()+"s",transform:`rotate(${s}deg)`})));return Object(l.jsx)("div",{className:"wind-signs",children:t.map((e=>Object(l.jsx)("div",{className:"wind-sign",style:{top:e.top,animationDuration:e.animationDuration,animationDelay:e.animationDelay,transform:e.transform}},e.id)))})},m=e=>{let{pressure:a}=e;const s=(e=>e>1022?"high":e<1009?"low":"normal")(a);return Object(l.jsx)("div",{className:"pressure-indicator",children:Object(l.jsxs)("div",{className:`pressure-circle pressure-${s}`,children:[Object(l.jsx)("div",{className:"pressure-marks",children:(()=>{const e=[];for(let a=0;a<24;a++){const s=15*a,t=a%3===0;e.push(Object(l.jsx)("div",{className:"pressure-mark "+(t?"major":""),style:{transform:`rotate(${s}deg)`}},a))}return e})()}),Object(l.jsx)("div",{className:"pressure-arrow"}),Object(l.jsx)("span",{className:"pressure-label high",children:"High"}),Object(l.jsx)("span",{className:"pressure-label normal",children:"Normal"}),Object(l.jsx)("span",{className:"pressure-label low",children:"Low"})]})})};var p=()=>{const[e,a]=Object(t.useState)([]),[s,c]=Object(t.useState)([]),[r,n]=Object(t.useState)(0),p="your_openweather_api_key_here",u="your_google_maps_api_key_here";Object(t.useEffect)((()=>{(async()=>{try{const e=await Promise.all(o.map((e=>i.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:e,appid:p,units:"imperial"}}))));a(e.map((e=>e.data)));const s=await i.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:o[r],appid:p,units:"imperial"}}),t=b(s.data.list);if(c(t),e.length>0){const a=e[r].data.clouds.all;document.body.classList.toggle("rainy-theme",a>=70)}}catch(e){console.error("Error fetching the weather data",e)}})()}),[p,r]),Object(t.useEffect)((()=>{u&&(()=>{const e=document.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?key=${u}`,e.async=!0,e.defer=!0,document.head.appendChild(e)})()}),[u]);const b=e=>{const a=[],s=new Date;for(let t=1;t<=7;t++){const c=new Date(s);c.setDate(s.getDate()+t);const r=e.filter((e=>new Date(1e3*e.dt).getDate()===c.getDate()));if(r.length>0){const e=r.reduce(((e,a)=>{const s=new Date(1e3*e.dt).getHours(),t=new Date(1e3*a.dt).getHours();return Math.abs(s-12)<Math.abs(t-12)?e:a}));a.push({date:c.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),temp:Math.round(e.main.temp),weather:e.weather[0].main,icon:e.weather[0].icon})}}return a};if(!e.length)return Object(l.jsx)("div",{className:"weather-container",children:Object(l.jsx)("p",{children:"Loading..."})});const x=e[r],g=x.clouds.all>=70,O=x.wind.speed>9;return Object(l.jsxs)(l.Fragment,{children:[g&&Object(l.jsx)(h,{}),O&&Object(l.jsx)(j,{windSpeed:x.wind.speed,windDegree:x.wind.deg}),Object(l.jsxs)("div",{className:"app-cloud-bg",children:[Object(l.jsx)("div",{className:"app-cloud app-cloud-1"}),Object(l.jsx)("div",{className:"app-cloud app-cloud-2"}),Object(l.jsx)("div",{className:"app-cloud app-cloud-3"})]}),Object(l.jsxs)("div",{className:"weather-container",children:[Object(l.jsx)("svg",{style:{position:"absolute",width:0,height:0},children:Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{id:"uv-gradient",gradientTransform:"rotate(90)",children:[Object(l.jsx)("stop",{offset:"0%",stopColor:"#3EA72D"}),Object(l.jsx)("stop",{offset:"25%",stopColor:"#FFF300"}),Object(l.jsx)("stop",{offset:"50%",stopColor:"#F18B00"}),Object(l.jsx)("stop",{offset:"75%",stopColor:"#E53210"}),Object(l.jsx)("stop",{offset:"100%",stopColor:"#B567A4"})]})})}),Object(l.jsxs)("div",{className:"weather-content",children:[Object(l.jsxs)("div",{className:"main-weather",children:[Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)("svg",{className:"location-icon",viewBox:"0 0 24 24",fill:"currentColor",children:Object(l.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})}),Object(l.jsxs)("div",{className:"city-navigation",children:[Object(l.jsx)("button",{className:"nav-arrow",onClick:()=>{n((e=>0===e?o.length-1:e-1))},"aria-label":"Previous city",children:Object(l.jsx)("svg",{viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),Object(l.jsx)("span",{className:"city-name",children:x.name}),Object(l.jsx)("button",{className:"nav-arrow",onClick:()=>{n((e=>e===o.length-1?0:e+1))},"aria-label":"Next city",children:Object(l.jsx)("svg",{viewBox:"0 0 24 24",children:Object(l.jsx)("path",{d:"M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"})})})]}),Object(l.jsx)("span",{className:"current-time",children:(new Date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})})]}),Object(l.jsxs)("div",{className:"temperature-display",children:[Math.round(x.main.temp),"\xb0"]}),Object(l.jsx)("div",{className:"weather-description",children:x.weather[0].description}),Object(l.jsxs)("div",{className:"weather-stats",children:[Object(l.jsxs)("span",{children:[x.main.pressure,"hpa"]}),Object(l.jsxs)("span",{children:[x.main.humidity,"%"]}),Object(l.jsxs)("span",{children:[x.wind.speed,"km/h"]})]})]}),Object(l.jsxs)("div",{className:"stats-grid",children:[Object(l.jsxs)("div",{className:"stat-card",children:[Object(l.jsx)("h3",{children:"Wind"}),Object(l.jsxs)("div",{className:"compass",children:[Object(l.jsx)("div",{className:"compass-arrow",style:{transform:"translate(-50%, -100%) "+(w=x.wind.deg,`rotate(${w}deg)`)}}),Object(l.jsxs)("div",{className:"compass-labels",children:[Object(l.jsx)("span",{className:"compass-label n",children:"N"}),Object(l.jsx)("span",{className:"compass-label e",children:"E"}),Object(l.jsx)("span",{className:"compass-label s",children:"S"}),Object(l.jsx)("span",{className:"compass-label w",children:"W"})]})]}),Object(l.jsxs)("div",{className:"stat-value",children:[x.wind.speed,"km/h"]})]}),Object(l.jsxs)("div",{className:"stat-card",children:[Object(l.jsx)("h3",{children:"Rain Chance"}),Object(l.jsxs)("svg",{className:"gauge",viewBox:"0 0 120 120",children:[Object(l.jsx)("circle",{className:"gauge-circle",cx:"60",cy:"60",r:"54"}),Object(l.jsx)("circle",{className:"gauge-progress",cx:"60",cy:"60",r:"54",strokeDasharray:"339.292",strokeDashoffset:339.292*(1-x.clouds.all/100)}),Object(l.jsxs)("text",{className:"gauge-text",x:"60",y:"60",children:[x.clouds.all,"%"]})]})]}),Object(l.jsxs)("div",{className:"stat-card",children:[Object(l.jsx)("h3",{children:"Pressure"}),Object(l.jsx)(m,{pressure:x.main.pressure}),Object(l.jsxs)("div",{className:"stat-value",children:[x.main.pressure,"hpa"]})]}),Object(l.jsxs)("div",{className:"stat-card",children:[Object(l.jsx)("h3",{children:"UV Index"}),Object(l.jsxs)("svg",{className:"gauge uv-gauge "+(v=2,v<=2?"low":v<=5?"moderate":v<=7?"high":v<=10?"very-high":"extreme"),viewBox:"0 0 120 120",children:[Object(l.jsx)("circle",{className:"gauge-circle",cx:"60",cy:"60",r:"54"}),Object(l.jsx)("circle",{className:"gauge-progress",cx:"60",cy:"60",r:"54",strokeDasharray:"339.292",strokeDashoffset:271.4336}),Object(l.jsx)("text",{className:"gauge-text",x:"60",y:"60",fontSize:"16",textAnchor:"middle",dominantBaseline:"middle",children:(e=>e<=2?"Low":e<=5?"Moderate":e<=7?"High":e<=10?"Very High":"Extreme")(2)})]})]})]})]}),Object(l.jsxs)("div",{className:"forecast-panel",children:[Object(l.jsx)("h3",{children:"7-Day Forecast"}),s.map(((e,a)=>Object(l.jsxs)("div",{className:"forecast-day",children:[Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)("div",{className:"forecast-icon-wrapper",children:Object(l.jsx)(d,{type:e.weather})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"forecast-date",children:e.date}),Object(l.jsxs)("div",{className:"forecast-temp",children:[e.temp,"\xb0F"]})]})]}),Object(l.jsx)("div",{className:"forecast-weather",children:e.weather})]},a))),Object(l.jsxs)("div",{className:"week-summary",children:[Object(l.jsx)("h4",{children:"Summary of the Week"}),Object(l.jsx)("p",{children:(e=>{const a=e.map((e=>e.weather.toLowerCase())),s=e.map((e=>e.temp)),t=Math.round(s.reduce(((e,a)=>e+a),0)/s.length),c=a.filter((e=>e.includes("clear"))).length,r=a.filter((e=>e.includes("rain"))).length,n=a.filter((e=>e.includes("cloud"))).length;let i="";return i=c>=5?`Looks like we're in for a sun-tastic week! \u2600\ufe0f Pack your shades and get ready for ${c} days of vitamin D overload. Average temp: ${t}\xb0F`:r>=4?`Umbrella alert! \ud83c\udf27\ufe0f We've got ${r} days of rain coming up. Perfect excuse for indoor movie marathons! Average temp: ${t}\xb0F`:n>=4?`The clouds are having a party this week! \ud83c\udf25\ufe0f ${n} days of mood lighting courtesy of Mother Nature. Average temp: ${t}\xb0F`:`A bit of everything this week - nature's keeping us on our toes! \ud83c\udfad Mix of sun, clouds, and maybe some rain. Average temp: ${t}\xb0F`,i})(s)})]}),Object(l.jsxs)("div",{className:"outfit-suggestions",children:[Object(l.jsx)("h4",{children:"Outfit Suggestions"}),Object(l.jsx)("p",{children:(e=>{const a=e.map((e=>e.temp)),s=Math.round(a.reduce(((e,a)=>e+a),0)/a.length),t=e.map((e=>e.weather.toLowerCase())),c=t.some((e=>e.includes("rain"))),r=t.some((e=>e.includes("clear"))),n=[];return s<40?n.push("\ud83e\udde5 Heavy winter coat, thermal layers, and warm sweaters"):s<55?n.push("\ud83e\udde5 Light jacket or coat, layered with sweaters"):s<70?n.push("\ud83d\udc55 Light layers, long sleeves, and a light jacket"):s<85?n.push("\ud83d\udc55 T-shirts, short sleeves, and light fabrics"):n.push("\ud83d\udc55 Breathable, light clothing and shorts"),c&&n.push("\u2614 Keep a raincoat or umbrella handy"),r&&n.push("\ud83d\udd76\ufe0f Don't forget sunglasses and sunscreen"),s>75&&r&&n.push("\ud83e\udde2 A hat or cap for sun protection"),s<45&&n.push("\ud83e\udde3 Don't forget gloves, scarf, and warm hat"),n.join(" \u2022 ")})(s)})]})]})]})]});var v,w};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},9:function(e,a,s){}},[[23,1,2]]]);
//# sourceMappingURL=main.faeed235.chunk.js.map