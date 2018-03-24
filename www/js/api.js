var j2APIS = [
    {
        "name": "getTeamUsers",
        "params": {
            "cmd": "{'/J2eecn-Api-hook.japi/get-users-and-teams-by-group-id':{}}",
            "p_auth": "",
            "qName": "",
            "groupId": 249479,
            "page": 1,
            "rows": 200
        },
		"mustLocal":false,
		"index":1,
		"type":"cmd",
        "desc": "Get team user of the",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "getDefaultCalendarBookingByDate",
        "params": {
            "cmd": "{'/j2-easyui-encalendar-portlet.encalendar/get-default-calendar-booking-by-date':{}}",
            "p_auth": "",
            "userId": "",//For no selected user,It will be override by userDg loadSuccess  20434
            "startTime": 0,
            "endTime": 10000000000000,
            "locale": "",
            "page": 1,
            "rows": 200
        },
		"mustLocal":false,
		"index":2,
		"type":"cmd",
        "desc": "Get default calendar booking by date and userId",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "addCalendarBooking",
        "params": {
            "cmd": "{'/j2-easyui-encalendar-portlet.encalendar/add-calendar-booking':{}}",
            "p_auth": "",
            "userId": "",//For no selected user,It will be override by userDg loadSuccess  20434
            "title": "",
            "description": "",
            "startTime": 0,
            "endTime": 10000000000000,
            "locale": "zh_CN"
        },
		"mustLocal":false,
		"index":3,
		"type":"cmd",
        "desc": "Add worklog",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "deleteCalendarBookingById",
        "params": {
            "cmd": "{'/j2-easyui-encalendar-portlet.encalendar/delete-calendar-booking-by-id':{}}",
            "p_auth": "",
            "calendarBookingId":""
        },
		"mustLocal":false,
		"index":4,
		"type":"cmd",
        "desc": "delete worklog",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "getCalendarBookingById",
        "params": {
            "cmd": "{'/j2-easyui-encalendar-portlet.encalendar/get-calendar-booking-by-id':{}}",
            "p_auth": "",
            "calendarBookingId":""
        },
		"mustLocal":false,
		"index":5,
		"type":"cmd",
        "desc": "get worklog",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "updateCalendarBooking",
        "params": {
            "cmd": "{'/j2-easyui-encalendar-portlet.encalendar/update-calendar-booking':{}}",
            "p_auth": "",
            "userId":0,
            "calendarBookingId":"",
            "locale":"",
            "startTime": 0,
            "endTime": 10000000000000,
        },
		"mustLocal":false,
		"index":6,
		"type":"cmd",
        "desc": "update worklog",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
	{
        "name": "accountLogin",
		"url":"/j2-api/login/account_login",
        "params": {
            "companyId":0,
            "account": "",
            "password":""
        },
		"mustLocal":false,
		"index":7,
		"type":"url",
        "desc": "account login",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    },
    {
        "name": "accountLogin",
        "params": {
            "cmd": "{'/J2eecn-Api-hook.japi/account-login':{}}",
            "companyId":0,
            "account": "",
            "password":""
        },
		"mustLocal":true,
		"index":8,
		"type":"cmd",
        "desc": "account login",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    }
    
];


J2API.prototype = {
    getAPIJson: function (name) {
	    var items=[];
        var api;
        j2APIS.forEach(function (v, i) {
			   if (v.name == name) {
				   items.push(v);
                }
        });
		api=(items.length==2 && app.data.dev)?items[1]:items[0];
        return api;
    },
	getAPIURLAndParams:function(name,params){
	    var urlAndParams={url:'',params:{}};
	    var apiURL="";
	    var apiJSON=j2API.getAPIJson(name);
		apiURL=(app.data.dev)?"/api/jsonws/invoke/" + name + ".json":"/api/jsonws/invoke";
		apiURL=(apiJSON.type=="url")?apiJSON.url:apiURL;
		apiURL=app.data.baseURL+apiURL;
		console.log("api.js",apiURL);
		var apiParams=apiJSON.params;
        apiParams.p_auth=app.data.p_auth;
        for(var item in params){
            apiParams[item]=params[item];
        }
		urlAndParams.url=apiURL;
		urlAndParams.params=apiParams;
		return urlAndParams;
	},
    postAPI: function (name, params,callback) {
	    var uap=this.getAPIURLAndParams(name,params);
         console.log(uap.params);
       app.data.dev?
        Framework7.request.get(uap.url,uap.params, function (data) {
            var ret = JSON.parse(data);
            callback(ret);
        }):
        Framework7.request.post(uap.url,uap.params, function (data) {
            var ret = JSON.parse(data);
            callback(ret);
        });
		
    },
    getAPI: function (name,params,callback) {
        Framework7.request.get(app.data.baseURL+'/api/jsonws/invoke/' + name + ".json", j2API.getAPIJson(name).params, function (data) {
            var ret = JSON.parse(data);
            var rows = ret.rows;
            callback(ret);
        });
    },
	login:function(params,callback)
	{ 
	         
		      this.postAPI("accountLogin",params,function(data){
				  if (data.statusCode==200 && data.userId && data.userId != '') {
					localStorage.setItem('userId', data.userId);
					localStorage.setItem('p_auth', data.p_auth);
					localStorage.setItem('account', params.account);
					localStorage.setItem('password', params.password);
					localStorage.setItem('userName', data.userName);
					app.data.p_auth = data.p_auth;
					app.data.userId = data.userId;
					app.data.account = data.account;
					app.data.password = data.password;
					app.data.userName = data.userName;
					
					//need view the page again
					    callback(true);
				  } else {
						callback(false);
				  }
				});
	}
}
function J2API() {

}
var j2API = new J2API();

