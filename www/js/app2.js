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
      //gavin https://www.j2eecn.com
      baseURL: '',
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
      console.log('app.js', 'init');


    },
    pageAfterIn: function (e, page) {
      // do something after page gets into the view
      console.log("app.js", "pageAfterIn");


    },
    pageInit: function (e, page) {
      // do something when page initialized
      console.log("app.js", "pageInit");
    },
  },
  // App routes
  routes: routes,
});
app.toolbar.hide('.toolbar');
//
var homeView;
var catalogView;
var myView;

//set up request
app.request.setup({
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});




// Init/Create views
homeView = app.views.create('#view-home', {
  url: '/'
});
var taskView = app.views.create('#view-task', {
  url: '/task/'
});
var myView = app.views.create('#view-my', {
  url: '/my/'
});








