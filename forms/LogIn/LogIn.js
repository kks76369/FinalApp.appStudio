let req1 = []

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUsername.value + "&j_password=" + inptPassword.value)
if (req1.status == 200) { //everthing worked
     lblResponse.hidden = false
     lblResponse.value = (`Your LDAP return code was ` + req1.responseText) //1 good, 0 bad
     NSB.MsgBox(lblResponse.value)
     ChangeForm(HomePage)
} else {
     // had problem with AJAX request
     lblResponse.hidden = false
     lblResponse.value = (`Error: ` + req1.status)
     NSB.MsgBox(lblResponse.value)
     }
}

btnHomePage.onclick=function(){
  ChangeForm(HomePage)
}
