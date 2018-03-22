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
        "desc": "update worklog",
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
        "desc": "account login",
        "author": "redwing",
        "create-date": "2018-03-14",
        "update-date": "2018-03-14 09:21"
    }
    
];


J2API.prototype = {
    getAPIJson: function (name) {
        var api;
        j2APIS.forEach(function (v, i) {
            if (v.name == name) {
                api = v;
            }
        });
        return api;
    },
    postAPI: function (name, params,callback) {
        var apiURL="/api/jsonws/invoke"
        apiURL="/api/jsonws/invoke/" + name + ".json";

        var apiJSON=j2API.getAPIJson(name);
        var apiParams=apiJSON.params;
        apiParams.p_auth=app.data.p_auth;
        for(var item in params){
            apiParams[item]=params[item];
           }

        Framework7.request.get(apiURL,apiParams, function (data) {
            var ret = JSON.parse(data);
            callback(ret);
        });
    },
    getAPI: function (name,params,callback) {
        Framework7.request.get('/api/jsonws/invoke/' + name + ".json", j2API.getAPIJson(name).params, function (data) {
            var ret = JSON.parse(data);
            var rows = ret.rows;
            callback(ret);
        });
    },
}
function J2API() {

}
var j2API = new J2API();

