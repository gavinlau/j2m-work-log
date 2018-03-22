### j2m-work-log

 Framework7.request({
        method:"get",
        contentType:"text",
        url:"/",
        async:false,
        success:function(data, status, xhr)
        {
          console.log('app.js','net work is ok');
          console.log(status);
        },
        error:function(xhr, status){
          console.log('app.js','net work is not good');
          console.log(status);
        },
        statusCode: {
          404: function (xhr) {
            console.log(404);
          }
        }
      });