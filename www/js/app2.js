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
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      //gavin
      baseURL: 'https://www.j2eecn.com',
      //
      p_auth: '',
      userId: '',

      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      //app.dialog.alert('Hello World!');
      console.log('hello');
    },

  },
  on: {
    init: function () {
      //do init
      console.log('F7', 'app2.js');


    },
    pageAfterIn: function (e, page) {
      // do something after page gets into the view
      console.log("F7", "app2.js pageAfterIn");


    },
    pageInit: function (e, page) {
      // do something when page initialized
      console.log("F7", "app.js pageInit");
    },
  },
  // App routes
  routes: routes,
});
app.toolbar.hide('.toolbar');
//
var homeView;
var catalogView;
var settingsView;

//set up request
app.request.setup({
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});

if (j2Utils.checkAutoLoginAble) {
  var username = localStorage.getItem('account', username);
  var password = localStorage.getItem('password', password);
  var params = { companyId: 20155, account: username, password: password };
  app.request.post(app.data.baseURL + '/j2-api/login/account_login', params, function (data) {
    var res = JSON.parse(data);
    if (res.uesrId && res.uesrId != '') {
      localStorage.setItem('userId', res.uesrId);
      localStorage.setItem('p_auth', res.p_auth);
      localStorage.setItem('account', username);
      localStorage.setItem('password', password);
      app.data.p_auth = res.p_auth;
      app.data.userId = res.uesrId;
      app.request.post(app.data.baseURL, {}, function (data) {
        //view normal
        app.toolbar.show('.toolbar');
        homeView = app.views.create('#view-home', {
          url: '/'
        });
      });

    } else {//to login
      app.toolbar.hide('.toolbar');
      homeView = app.views.create('#view-home', {
        url: '/login-ways/'
      });
    }
  });
} else//login
{
  app.toolbar.hide('.toolbar');
  homeView = app.views.create('#view-home', {
    url: '/login-ways/'
  });
}

// Init/Create views
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});








