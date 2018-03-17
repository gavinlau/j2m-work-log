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
        for(var item in params){
            apiParams[item]=params[item];
           }
           
        Framework7.request.get(apiURL,apiParams, function (data) {
            var ret = JSON.parse(data);
            var rows = ret.rows;
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

