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
      //gavin https://www.j2eecn.com
      baseURL: '',
      p_auth: '',
      companyId: 20155,
      groupId: 0,
      userId: '',
      userName: '刘洪义',
      account: '',
      password: '',
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
      console.log("app.js", e.name);
     if(e.name=="net-error" || e.name=="login" || e.name=="wl-add")
      {
        //app.toolbar.hide('.toolbar');
      }
    },
    pageAfterIn: function (e, page) {
      // do something after page gets into the view
      console.log("app.js", "pageAfterIn");
     
    },
  },
  // App routes
  routes: routes,
});

//set up request
app.request.setup({
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});
// Init/Create views
app.toolbar.hide('.toolbar');

var homeURL = "/home/";
app.preloader.show();
initSys();
app.preloader.hide();

app.data.homeView = app.views.create('#view-home', {
  url: homeURL
});

if (homeURL == "/home/") {
  app.data.taskView = app.views.create('#view-task', {
    url: '/task/'
  });
  app.data.myView = app.views.create('#view-my', {
    url: '/my/'
  });
}


//----------------------------------------------
function initSys() {
  if (!navigator.onLine) {
    homeURL = "/mics/net-err/";
    return;
  }
  var account = localStorage.getItem('account');
  var password = localStorage.getItem('password');
  if (account == null || account == '' || password == null || password == '') {
    homeURL = "/login/";
    return;
  }
  var params = {
    companyId: app.data.companyId,
    account: account,
    password: password
  };
  Framework7.request({
    method: "post",
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    url: "https://www.j2eecn.com/j2-api/login/account_login",
    async: false,
    data: params,
    success: function (data, status, xhr) {
      var res = JSON.parse(data);
      if (res.uesrId && res.uesrId != '') {
        localStorage.setItem('userId', res.uesrId);
        localStorage.setItem('p_auth', res.p_auth);
        localStorage.setItem('account', account);
        localStorage.setItem('password', password);
        app.data.p_auth = res.p_auth;
        app.data.userId = res.uesrId;
        app.data.account = account;
        app.data.password = password;
        //to do need relogin
        homeURL = "/home/";
      } else {//to login
        homeURL = "/login/";
      }
    },
    error: function (xhr, status) {
      homeURL = "/login/";
      return;
    },
    statusCode: {
      404: function (xhr) {
      }
    }
  });
}

//------------------------------------------------------
function getSession() {
  var account = localStorage.getItem('account');
  var password = localStorage.getItem('password');
  if (account == null || account == '' || password == null || password == '') {
    console.log("no account in localStorage");
    return;
  }
  var params = {
    companyId: app.data.companyId,
    account: account,
    password: password
  };

  j2API.postAPI("accountLogin", params, function (data) {
    if (data.statusCode == 200 && data.userId && data.userId != '') {
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('p_auth', data.p_auth);
      localStorage.setItem('account', account);
      localStorage.setItem('password', password);
      app.data.p_auth = data.p_auth;
      app.data.userId = data.userId;
      app.data.account = account;
      app.data.password = password;
      console.log("app.js", "accountLogin ok");
    } else {
      console.log("app.js", "accountLogin error");
    }
  });
}
//----------------------------------

var sessionKeeper = setInterval(getSession, 10000);

//clearInterval(myRoll);














