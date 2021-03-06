routes = [
  {
    path: '/home/',
    componentUrl: './pages/home/home.html',
    on: {
      pageInit: function (event, page) {
        console.log('routes.js', 'home.html pageInit');
      }
    }
  },
  {
    path: '/home/wl-add/',
    componentUrl: './pages/home/wl-add.html',
  },
  {
    path: '/home/wl-edit/:id/',
    componentUrl: './pages/home/wl-edit.html',
  },
  {
    path: '/home/wl-view/:id/',
    componentUrl: './pages/home/wl-view.html',
  },
  {
    path: '/task/',
    componentUrl: './pages/task/task.html',
  },
  {
    path: '/my/',
    componentUrl: './pages/my/my.html',
  },
  {
    path: '/login/',
    componentUrl: './pages/login/login.html',
  },
  {
    path: '/mics/net-err/',
    componentUrl: './pages/mics/net-err.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },

  
  {
    path: '/login-ways/',
    componentUrl: './pages/login-ways.html',
  },
  {
    path: '/wl-add/',
    componentUrl: './pages/wl-add.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/mics/404.html',
  },
];
