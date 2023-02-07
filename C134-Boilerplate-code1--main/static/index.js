var date = new Date()
let display_date = date.toLocaleDateString()



$(document).ready(function(){
    $("#display_date").html(display_date)
})

let predicted_emotion







$(function () {
    $("#predict_button").click(function () {
        let input_data = {
            "text":$("#text").val()
        }

        $.ajax({
            type:"POST",
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            
            
              success:function(result){
                predicted_emotion = result.data.predicted_emotion
                
                
                
                // Display Result Using JavaScript----->HTML
                
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
            
        });
    });
})

