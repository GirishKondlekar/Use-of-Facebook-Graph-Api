$( document ).ready(function() {
	$("#personal").hide();
	$("#feed").hide();
    var myFacebookToken = 'EAACEdEose0cBAOhNFOpyTOza9jRs70cvn7ZAXRftDfDcdT40dhCoSZAGz60aZBnC3Ujjoy9zDtepPrrPs1xMjUSEWa51i7glVhcbVxoihkLVi1Y9SPf0ZCDT9OZBDW9JRRq02ilRSUJVT1NTTxPqtR5iUB3ibkECSIhd8M1eqFGuACH3mMoCMtUq5KdOoxxtLpkyLoNObhZAcvv4LezDbq4ZBcQfZB9ZA43yL4ZCSqFOvAKAZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
					$("#personalBtn").hide(1000);
					$("#personal").show(1000);
                    console.log(response);
                    console.log(typeof(response));
					$("#myId").text(response.id);
					$("#myName").text(response.name);
					$("#myBirthdate").text(response.birthday);
					$("#myGender").text(response.gender);
					$("#myHomeTown").text(response.hometown.name);
                    $("#myEmail").text(response.email);
                  
                    

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

function getFeed(){

        $.ajax('https://graph.facebook.com/me/feed?field=id,name&access_token='+myFacebookToken,{

                success : function(response){
					$("#fdBtn").hide(1000);
					$("#feed").show(1000);
                    console.log(response.data[0].name);
                    console.log(typeof(response));
					$("#myFeed").text(response.data[0].name);
					$("#myCreatedTime").text(response.data[0].created_time);
                }
            }//end argument list 



        );// end ajax call 


    }

    $("#facebookBtn").on('click',getFacebookInfo)
	$("#feedBtn").on('click',getFeed)

  });
  
