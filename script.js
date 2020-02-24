$(function() {
        $(".container").scrollTop(500);
      });

      function myFunction() {
        location.reload();
      }
      //------------------------------------------------------
      setTimeout(function() {
        location.reload();
      }, 900000);
      //------------------------------------------------------
function GetTimeStamp()
{
        document.getElementById('demo').innerHTML = Date();
}