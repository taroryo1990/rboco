var ua = navigator.userAgent;
var chkFF = ua.indexOf("Firefox",0);
if(chkFF>0){
  if($("#Map area").length){
    $("#Map area").attr("onFocus","");
  }
}
