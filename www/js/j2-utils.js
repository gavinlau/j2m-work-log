J2Utils.prototype={
   login:function(companyId,userId,password)
   {
      	   app.request.post(app.data.baseURL+'/j2-api/login/account_login', params, function (data) {
					   var res=JSON.parse(data);
					   if(res.uesrId && res.uesrId!='')
					   {
						     
							   localStorage.setItem('userId',res.uesrId);
							   localStorage.setItem('p_auth',res.p_auth);
							   app.request.post(app.data.baseURL, {}, function (data) {
								  app.loginScreen.close();
								  router.back();
							   });
					     
					   }else
					   {
					        app.dialog.alert('user name or password not correct', function () {
					           
						    });
					   }
			   });
   },
   logout:function()
   {
         app.data.userId='';
         app.data.p_auth='';
         localStorage.clear();
   },
   checkAutoLoginAble:function()
   {
		var username=localStorage.getItem('account',username);
        var password=localStorage.getItem('password',password);
        if(username==null || username=='' || password==null || password=='')
		 {
		    return false;
		 }else
		 {
		   return true;
		 } 
   },
   getWeekDays:function(date)
	 {
	    
		var currentDate=moment({ year :date.getFullYear(), month :date.getMonth(), day :date.getDate(), hour :0, minute :0, second :0, millisecond :0});
		var dayOfWeek=moment(date).format('e');
		var startDay=moment(currentDate).add(-dayOfWeek, 'days');
		var weekdays =[];
		for(var i=0; i<7;i++)
		{
			var day = {week:moment(startDay).add(i, 'days').format('dddd'),day:moment(startDay).add(i, 'days'),color:''};
			weekdays.push(day);
		}
		return weekdays;
	 },
}
J2Utils.prototype.monthNames=['01', '02', '03', '04', '05', '06', '07', '08' , '09' , '10', '11', '12'];
J2Utils.prototype.dayNames=[ '日','一', '二', '三', '四', '五', '六'];
J2Utils.prototype.logFlag='#########################################';
function J2Utils()
{
     
}
var j2Utils=new J2Utils();