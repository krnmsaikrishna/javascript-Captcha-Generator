function captchagen(){
var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var captchas=" ";
for(var index=0;index<6;index++){
captchas+=chars.charAt(Math.floor(Math.random()*chars.length));}
$("#captcha").attr("type","text");
$("#captcha").val(captchas);
$("#captcha").attr("type","image");};

function submit(){
var captcha=$("#captcha").val();
var inputcaptcha=$("#inputcaptcha").val();
if(inputcaptcha=="")
{alert ("Please Enter Captcha First.");}
else{
captcha=captcha.replace(/\s/igm,"");
if(captcha==inputcaptcha)
{$("#captchastatus").val("true"); alert("Ok Correct Captcha entered.");}
else{$("#captchastatus").val("false"); alert ("Wrong Captcha entered.");}}};

function recaptcha(){
captchagen();
$("#inputcaptcha").val("");}
