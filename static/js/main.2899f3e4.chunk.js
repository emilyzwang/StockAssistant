(this.webpackJsonpstocks=this.webpackJsonpstocks||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),r=a.n(o),c=(a(29),a(30),a(31),a(11)),l=a(2),s=a(3),u=a(5),d=a(4),h=a(7),m=a(6),g=a(21),p=a.n(g),f=null,b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).countdown=a.countdown.bind(Object(h.a)(a)),a.restart=a.restart.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.initializeChart=a.initializeChart.bind(Object(h.a)(a)),a.state={timer:20,date:a.getRandomDate(),interval:setInterval(a.countdown,1e3),stock:"",balance:1e3,displayStock:"",displayDate:void 0,startPrice:0,endPrice:0,prices:[],days:[],chart:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"restart",value:function(){clearInterval(this.state.interval),this.setState({timer:20,date:this.getRandomDate(),interval:setInterval(this.countdown,1e3)})}},{key:"countdown",value:function(){0===this.state.timer?this.restart():this.setState({timer:this.state.timer-1})}},{key:"getRandomDate",value:function(){return new Date(Math.floor(2471904e5*Math.random())+1325376e6)}},{key:"handleChange",value:function(e){this.setState({stock:e.target.value})}},{key:"handleInput",value:function(){var e=this,t=this.state.stock.toUpperCase(),a=this.state.date.getFullYear(),n=this.state.date.getMonth(),i=new Date(a,n,1).valueOf()/1e3,o=new Date(a,n%12+1,1).valueOf()/1e3;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-histories?region=US&lang=en&symbol="+t+"&from="+i+"&to="+o+"&events=div&interval=1d",{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(i){console.log(i),i.json().then((function(i){var o=i.chart.result[0].indicators.quote[0].open,r=o[0],c=o[o.length-1],l=e.state.balance+(c-r)/r*e.state.balance;e.setState({balance:Math.floor(100*l)/100,displayStock:t,displayDate:new Date(a,n,1),startPrice:Math.floor(100*r)/100,endPrice:Math.floor(100*c)/100,prices:o,days:Array.from(Array(o.length-1),(function(e,t){return t+1}))}),e.initializeChart()})).catch((function(e){console.log(e),alert("Invalid Stock Symbol")}))})).catch((function(e){console.log(e)})),this.restart()}},{key:"initializeChart",value:function(){var e=document.getElementById("myChart");null!=f&&f.destroy(),f=new p.a(e,{type:"line",data:{labels:this.state.days,datasets:[{label:"Price",data:this.state.prices,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]}}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"ui three column grid"},i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"ui segment"},i.a.createElement("h1",null,"$",this.state.balance))),i.a.createElement("div",{className:"two wide column"},i.a.createElement("div",{className:"ui segment"},i.a.createElement("h1",null,this.state.timer))),i.a.createElement("div",{className:"eight wide column"},i.a.createElement("div",{className:"ui segment"},i.a.createElement("h1",null,this.state.date.toLocaleString("default",{month:"long"})," ",this.state.date.getFullYear()),i.a.createElement("div",{className:"ui action input"},i.a.createElement("input",{placeholder:"Stock Name",onChange:function(t){return e.handleChange(t)}}),i.a.createElement("button",{className:"ui button",onClick:this.handleInput},"Submit"))))),i.a.createElement("br",null),i.a.createElement("div",null,this.state.displayDate?i.a.createElement("div",{className:"ui centered raised teal card"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,this.state.displayStock)),i.a.createElement("div",{className:"meta"},i.a.createElement("h4",null,this.state.displayDate.toLocaleString("default",{month:"long"})," ",this.state.displayDate.getFullYear())),i.a.createElement("div",{className:"description"},i.a.createElement("div",{className:"ui two tiny teal statistics"},i.a.createElement("div",{className:"statistic"},i.a.createElement("div",{className:"value"},"$",this.state.startPrice),i.a.createElement("div",{className:"label"},"Start Price")),i.a.createElement("div",{className:"statistic"},i.a.createElement("div",{className:"value"},"$",this.state.endPrice),i.a.createElement("div",{className:"label"},"End Price"))),i.a.createElement("canvas",{id:"myChart",width:"400",height:"400"})))):i.a.createElement("div",null)))}}]),t}(i.a.Component),v=function e(t,a,n){Object(l.a)(this,e),this.name=t,this.header=a,this.rows=n},y=["-","-","-","-","-"],E=[y,y,y,y,y],k=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(u.a)(this,Object(d.a)(t).call(this,e)),console.log(e),a.changeTable=a.changeTable.bind(Object(h.a)(a)),a.state={data:e.data},console.log(a.state.data),console.log("New table made"),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"changeTable",value:function(e){this.setState({data:e})}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.state.data&&this.setState({data:e.data})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,console.log("table rendered"),console.log(this.state.data),this.generateTable(this.state.data.name,this.state.data.header,this.state.data.rows)))}},{key:"generateTable",value:function(e,t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("body",{style:S},i.a.createElement("h2",{style:j},e),i.a.createElement("table",{class:"ui fixed five column celled table"},i.a.createElement("thead",null,this.generateHeader(t)),i.a.createElement("tbody",null,this.generateRows(a)))))}},{key:"generateRow",value:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,e.map((function(e){return i.a.createElement("td",{class:"center aligned",style:w},e)}))))}},{key:"generateRows",value:function(e){var t=this;return i.a.createElement(i.a.Fragment,null,e.map((function(e){return i.a.createElement(i.a.Fragment,null,t.generateRow(e))})))}},{key:"generateHeader",value:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{class:"ui inverted blue center aligned table",style:{"font-weight":"bold"}},e.map((function(e){return i.a.createElement("th",null,e)}))))}}]),t}(i.a.Component),j={color:"#1b71b1","text-align":"center"},w={color:"#1b71b1","font-weight":"bold"},S={marginTop:"30px",marginLeft:"100px",marginRight:"100px",marginBottom:"30px"},N=["Symbol","Name","Price","Change","% Change"],I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).data=[new v("Top Gainers",N,E),new v("Top Losers",N,E),new v("Highest Volume Traded",N,E)],a.state={tables:[i.a.createElement(k,{key:0,data:a.data[0]}),i.a.createElement(k,{key:1,data:a.data[1]}),i.a.createElement(k,{key:2,data:a.data[2]})]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.makeAPICall()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.state.tables)}},{key:"makeAPICall",value:function(){var e=this,t=this;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?region=US&lang=en",{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(a){a.json().then((function(a){for(var n=function(n){!function(e){var n=a.finance.result[e].quotes,i=[];console.log(n);for(var o=0;o<n.length;o++){var r=n[o];i.push([r.symbol])}t.data[e].rows=i}(n),r="",console.log(e.data),console.log(n),console.log(e.data[n].rows);for(var o=0,c=e.data[n].rows.length-1;o<c;o++)r+=e.data[n].rows[o]+",";r+=e.data[n].rows[e.data[n].rows.length-1],fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols="+r,{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(t){console.log(t),t.json().then((function(t){console.log(t);for(var a=0,o=e.data[n].rows.length;a<o;a++){var r=t.quoteResponse.result[a];e.data[n].rows[a]=[e.data[n].rows[a][0],r.shortName,O(r.regularMarketPrice),O(r.regularMarketChange),O(r.regularMarketChangePercent)]}e.setState({tables:[i.a.createElement(k,{key:0,data:e.data[0]}),i.a.createElement(k,{key:1,data:e.data[1]}),i.a.createElement(k,{key:2,data:e.data[2]})]})}))})).catch((function(e){console.log(e)}))},o=0;o<e.data.length;o++){var r;n(o)}}))})).catch((function(e){console.log(e)}))}}]),t}(i.a.Component);function O(e){return parseFloat(Math.round(100*e)/100).toFixed(2)}var x,C=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"fixedH"},i.a.createElement("a",{href:this.props.link,target:"_blank"},i.a.createElement("div",{class:"ui card"},i.a.createElement("div",{class:"image"},i.a.createElement("img",{src:this.props.imageURL})),i.a.createElement("div",{class:"content"},i.a.createElement("a",{class:"header"},this.props.heading)))))}}]),t}(i.a.Component),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={newsData:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"APIcall",value:function(){var e=this;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=NBEV",{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(t){console.log(t),t.json().then((function(t){var a=t.items.result;e.setState({newsData:a})}))})).catch((function(e){console.log(e)}))}},{key:"mapping",value:function(){return this.state.newsData.map((function(e){return null==e.main_image?i.a.createElement(C,{heading:e.title,imageURL:"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png",link:e.link}):i.a.createElement(C,{heading:e.title,imageURL:e.main_image.original_url,link:e.link})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{align:"center",padding:"20%",margin:"30%"},i.a.createElement("div",{class:"ui search"},i.a.createElement("div",{class:"ui icon input"},i.a.createElement("input",{class:"prompt",type:"text",placeholder:"Search news..."}),i.a.createElement("i",{class:"search icon"})),i.a.createElement("div",{class:"results"}))),i.a.createElement("div",{className:"ui grid container"},this.APIcall(),this.mapping()))}}]),t}(i.a.Component),P=["Symbol","Name","Price","Change","% Change"],D={marginTop:"30px",marginLeft:"100px",marginRight:"100px",marginBottom:"30px"},M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).ceilingInput=0,a.flootInput=0,a.notificationTicker="",a.intervalID=11214214,a.inputBox=i.a.createElement("div",{class:"ui transparent fluid input"},i.a.createElement("input",{onKeyPress:a.handleWatchlistTickerInput,type:"text",placeholder:"Add Ticker..."})),a.inputRow=[a.inputBox,i.a.createElement("button",{onClick:a.clearStorage,class:"ui basic blue fluid button"},"Clear List"),"","",""],a.loadingInputRow=[a.inputBox,i.a.createElement("button",{class:"ui basic loading blue fluid button"},"Clear List"),"","",""],a.notificationTickerInput=i.a.createElement("div",{onKeyPress:function(e){this.notificationTicker=e.target.value.toUpperCase()}.bind(Object(h.a)(a)),class:"ui input"},i.a.createElement("input",{type:"text",placeholder:"Add Notification Ticker..."})),a.notificationCeilingInput=i.a.createElement("div",{onKeyPress:function(e){this.ceilingInput=e.target.value}.bind(Object(h.a)(a)),class:"ui input"},i.a.createElement("input",{type:"text",placeholder:"Add Ceiling..."})),a.notificationFloorInput=i.a.createElement("div",{onKeyPress:function(e){this.flootInput=e.target.value}.bind(Object(h.a)(a)),class:"ui input"},i.a.createElement("input",{type:"text",placeholder:"Add Floor..."})),a.submitNotification=i.a.createElement("button",{onClick:a.handleNotificationInput,class:"ui basic button"},"Submit Notification"),a.notificationInput=i.a.createElement("div",{style:D},a.notificationTickerInput,a.notificationCeilingInput,a.notificationFloorInput,a.notificationAmountInput,a.submitNotification),a.state={data:new v("Watchlist",P,[a.inputRow])},x=Object(h.a)(a),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){"granted"!==!Notification.permission&&Notification.requestPermission(),this.grabStockData(),this.intervalID=setInterval(this.checkNotifications,3e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"componentDidUpdate",value:function(e,t){t.data!==this.state.data&&this.setState({data:this.state.data})}},{key:"checkNotifications",value:function(){console.log(localStorage.getItem("notification")),localStorage.getItem("notification")&&function(){for(var e=JSON.parse(localStorage.getItem("notification")),t=function(t,a){var n=e[t],i=n.symbol;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol="+i,{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(t){t.json().then((function(t){console.log(t);var a=t.price.regularMarketPrice.fmt,i=t.price.shortName;if(a>=n.ceiling)new Notification(i+" has gone over $"+n.ceiling);else if(a<e.min)new Notification(i+" has gone under $"+n.floor)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},a=0,n=e.length;a<n;a++)t(a)}()}},{key:"handleNotificationInput",value:function(){"granted"!==!Notification.permission&&Notification.requestPermission();var e=x.notificationTicker;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol="+e,{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(t){t.json().then((function(t){console.log(t);var a=new R(e,x.notificationCeilingInput.toString(2),x.notificationFloorInput.toString(2));if(localStorage.getItem("notification")){var n=localStorage.getItem("notification"),i=JSON.parse(n);i.push(n),localStorage.setItem("notification",JSON.stringify(i))}else localStorage.setItem("notification",JSON.stringify([a]));alert("Notification Added.")})).catch((function(e){console.log(e),new Notification("Failed to Add Notification")}))})).catch((function(e){console.log(e),new Notification("Failed to Add Notification: Incorrect Symbol")}))}},{key:"grabStockData",value:function(){var e=this,t=localStorage.getItem("symbols");if(t){var a=this.getSymbols(t);this.setWatchlistLoading(),fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols="+t,{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(t){console.log(t),t.json().then((function(t){console.log(t);for(var n=[],i=0,o=a.length;i<o;i++){var r=t.quoteResponse.result[i];n.push([a[i],r.shortName,F(r.regularMarketPrice),F(r.regularMarketChange),F(r.regularMarketChangePercent)])}n.push(x.inputRow),console.log(n),console.log("SET STATE CALLED");var c=new v("Watchlist",P,n);console.log(e),e.setState({data:c}),console.log(e)}))})).catch((function(e){console.log(e)}))}}},{key:"getSymbols",value:function(e){for(var t=[],a=e.indexOf(",");-1!==a;)t.push(e.slice(0,a)),a=(e=e.slice(a+1,e.length)).indexOf(",");return t}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,console.log("Watchlist Rendered"),console.log("Watchlist data",this.state.data),i.a.createElement(k,{data:this.state.data}),this.notificationInput)}},{key:"setWatchlistLoading",value:function(){var e=x.state.data.rows;e.pop(),e.push(x.loadingInputRow),x.setState({tables:new v("Watchlist",P,e)})}},{key:"handleWatchlistTickerInput",value:function(e){var t=e.key,a=e.target.value.toUpperCase();"Enter"===t&&(console.log(t,a),!function(e){if(!e)return[];var t=[],a=e.indexOf(",");for(;-1!==a;)t.push(e.slice(0,a)),e=e.slice(a+1,e.length),a=e.indexOf(",");return t}(localStorage.getItem("symbols")).includes(a)?(x.setLoading(),fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol="+a,{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"179a5f1cc4msh944e7e33a8ffef8p1c41eajsn6134a9507ef9"}}).then((function(e){e.json().then((function(e){console.log(e);var t=e.price;console.log(t);var n=[a,t.shortName,t.regularMarketPrice.fmt,t.regularMarketChange.fmt,t.regularMarketChangePercent.fmt],i=x.state.data.rows;console.log(i),i.pop(),i.push(n),i.push(x.inputRow),console.log(i);var o=new v("Watchlist",P,i);x.setState({data:o}),localStorage.getItem("symbols")?localStorage.setItem("symbols",localStorage.getItem("symbols")+a+","):(console.log("SET"),localStorage.setItem("symbols",a+",")),console.log(localStorage.getItem("symbols"))})).catch((function(e){console.log(e),alert("Invalid Stock Symbol")}))})).catch((function(e){console.log(e)}))):alert("Ticker Already Added"),e.target.value="")}},{key:"setLoading",value:function(){var e=x.state.data.rows;e.pop(),e.push(x.loadingInputRow),x.setState({tables:new v("Watchlist",P,e)})}},{key:"clearStorage",value:function(){localStorage.setItem("symbols",""),x.setState({data:new v("Watchlist",P,[x.inputRow])})}}]),t}(i.a.Component),R=function(){function e(t,a,n){Object(l.a)(this,e),this.symbol=t,this.ceiling=a,this.floor=n}return Object(s.a)(e,[{key:"toString",value:function(){return JSON.stringify(this)}}]),e}();function F(e){return parseFloat(Math.round(100*e)/100).toFixed(2)}function A(){return i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:b}),i.a.createElement(c.a,{path:"/Movers",component:I}),i.a.createElement(c.a,{path:"/News",component:T}),i.a.createElement(c.a,{path:"/Watchlist",component:M}))}var W=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{class:"ui menu"},i.a.createElement("a",{class:"active item",href:"/"},"Game"),i.a.createElement("a",{class:"item",href:"/Movers"},"Movers"),i.a.createElement("a",{class:"item",href:"/Watchlist"},"Watchlist"),i.a.createElement("a",{class:"item",href:"/News"},"News")))}}]),t}(i.a.Component);var U=function(){return i.a.createElement("div",null,i.a.createElement(W,null),i.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(14);r.a.render(i.a.createElement(L.a,null,i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2899f3e4.chunk.js.map