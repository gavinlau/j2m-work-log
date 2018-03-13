F7J2Utils.prototype={
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
   checkLogin:function()
   {
		var userId=localStorage.getItem('userId');
		var p_auth=localStorage.getItem('p_auth');
        if(p_auth==null || p_auth=='')
		 {
		    return false;
		 }else
		 {
		   return true;
		 } 
   }
}
function F7J2Utils()
{
     
}
var f7J2Utils=new F7J2Utils();