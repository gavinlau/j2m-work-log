// Dom7
var $$ = Dom7;
// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'com.j2.worklog', // App bundle ID
  name: '多彩日志', // App name
  theme: 'auto', // Automatic theme detection
  //precompileTemplates: true,
  language: 'zh_CN',
  // App root data
  data: function () {
    return {
      baseURL: 'https://www.j2eecn.com',
      p_auth: '',
      companyId: 20155,
      groupId: 0,
      userId: '',
      userName: '',
      account: '',
      password: '',
	  dev:true,
	  version:'v1.0.1',
	  webCtx:'',
	  defaultCT:'application/x-www-form-urlencoded;charset=UTF-8',
      //UI
      homeView: '',
      taskView: '',
      myView: ''
    };
  },
  // App root methods
  methods: {

  },
  on: {
    init: function () {
      console.log('app.js', 'init');
    },
    pageInit: function (e, page) {
      // do something when page initialized
      console.log("app.js", "pageInit");
    },
    pageBeforeIn: function (e, page) {
      // do something after page gets into the view
      console.log("app.js", "pageBeforeIn");
    },
    pageAfterIn: function (e, page) {
      // do something after page gets into the view
      console.log("app.js", "pageAfterIn");
     
    },
  },
  // App routes
  routes: routes,
});













