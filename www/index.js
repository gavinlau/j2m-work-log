// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  //precompileTemplates: true,
 
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
	  //gavin
	  baseURL:'https://www.j2eecn.com',
	  //
	  p_auth:'',
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
        pageAfterIn: function (e, page) {
          // do something after page gets into the view
        },
        pageInit: function (e, page) {
          // do something when page initialized
        },
      },
  // App routes
  routes: routes,
});


$$(document).on('page:init', '.page[data-name="home"]', function (e) {

  //
  // Dummy items array
var items = [];
for (var i = 1; i <= 10; i++) {
  items.push({
    title: 'Item ' + i,
    subtitle: 'Subtitle ' + i
  });
}
    var virtualList = app.virtualList.create({
		  // List Element
		  el: '.virtual-list',
		  // Pass array with items
		  items: items,
		  // Custom search function for searchbar
		  searchAll: function (query, items) {
			var found = [];
			for (var i = 0; i < items.length; i++) {
			  if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
			}
			return found; //return array with mathced indexes
		  },
		  // List item Template7 template
		  itemTemplate:
			'<li>' +
			  '<a href="#" class="item-link item-content">' +
				'<div class="item-inner">' +
				  '<div class="item-title-row">' +
					'<div class="item-title">{{title}}</div>' +
				  '</div>' +
				  '<div class="item-subtitle">{{subtitle}}</div>' +
				'</div>' +
			  '</a>' +
			'</li>',
		  // Item height
		  height: app.theme === 'ios' ? 63 : 73,
		});
  //
  console.log('home page init'+e.detail);
})
 // Compile templates once on app load/init
		

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
var data1={
			  items : [
				{
				  firstName: 'John',
				  lastName: 'Doe'
				},
				{
				  firstName: 'Mark',
				  lastName: 'Johnson'
				},
			  ]
		} 
function bindAndRefreshUI(holderID,template,data)
{
		var output = Template7.compile($$(template).html())(data);
		$$(holderID).html('');
	    $$(holderID).html(output);
}



			

	


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


$$('#my-login-screen1').on('click', function () {
  // app.dialog.alert(html);
 
   console.log(moment());
   console.log(Template7+'abcilci'); 
    app.dialog.alert('pluginn2 nb');
	app.dialog.alert(navigator.device);
      var params= {
					 companyId:20155,
					 account:'a13961879161',
					 password:'~Admin123'
				  };
       app.request.post(app.data.baseURL+'/j2-api/login/account_login', params, function (data) {
	   var res=JSON.parse(data);
	   app.data.p_auth=res.p_auth;
	   app.dialog.alert(res.p_auth);
	   console.log(res.message);
	   checkLogin();
	  
   });   
   
 
});
function checkLogin()
{
       app.request.get(app.data.baseURL, {}, function (data) {
	   var res=JSON.parse(data);
	   console.log(data);
   });
}


$$('#my-login-screen2').on('click', function () {
   console.log('abcilci999x'); 
   alert(app.data.p_auth);
		var params2= {
					 cmd:"{'/J2eecn-Api-hook.japi/get-users-and-teams-by-group-id':{}}",
						 p_auth:app.data.p_auth,
						 qName:'',
						 groupId:249479,
						 page:1,
						 rows:20
				  };
	   app.request.post(app.data.baseURL+'/api/jsonws/invoke', params2, function (data) {
	      var res=JSON.parse(data);
	      app.dialog.alert(res.message);
		   console.log(data);
	   }); 
});


var monthNames = ['流程', 'February2', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
var calendarInline = app.calendar.create({
  containerEl: '#demo-calendar-inline-container',
  value: [new Date()],
  weekHeader: true,
  renderToolbar: function () {
    return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
      '<div class="toolbar-inner">' +
        '<div class="left">' +
          '<a href="#" class="link icon-only"><i class="icon icon-back ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
        '</div>' +
        '<div class="center"></div>' +
        '<div class="right">' +
          '<a href="#" class="link icon-only"><i class="icon icon-forward ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
        '</div>' +
      '</div>' +
    '</div>';
  },
  on: {
    init: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
      $$('.calendar-custom-toolbar .left .link').on('click', function () {
        calendarInline.prevMonth();
      });
      $$('.calendar-custom-toolbar .right .link').on('click', function () {
        calendarInline.nextMonth();
      });
    },
    monthYearChangeStart: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
    }
  }
});








