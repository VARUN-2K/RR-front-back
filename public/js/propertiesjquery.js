$(function(){

    let fullname1 = $('#name98')
    let email1 = $('#email98')
    let phone1 = $('#phone98')
    let message1 = $('#dlfcrestheading').html()

    let btnsubmit = $('#submitButton98')
    btnsubmit.click(function(e){
        e.preventDefault()
        console.log("Button was clicked")
        // $('#wait98').html('Waiting..')
        fullname1 = $('#name98').val()
        email1 = $('#email98').val()
        phone1 = $('#phone98').val()

        if(fullname1 === "" || email1 === "" || phone1 === ""){
            $('#error_message98').fadeIn('slow').html('Fill Form')
            setTimeout(function(){
                $('#error_message98').fadeOut('slow')
            } , 2500 )
            // $('#wait98').hide('fast')
            return ;
        }

        $.post('/api/contactinfo' , {name : fullname1 , email : email1 , phone : phone1 , message : message1} , function(data){
            console.log("This is a jquery callback "+data)
        }).fail(function(){
            // $('#wait98').hide('fast')
            $('#error_message98').fadeIn('fast').html('Failed!')
            setTimeout(function(){
                $('#error_message98').fadeOut('slow')
            } , 4000)
        }).done(function(){
            $('#contact_agent_12')[0].reset('slow')
            // $('#wait98').hide('fast')
            $('#success_message98').fadeIn('fast').html('Message Sent')
            setTimeout(function(){
                $('#success_message98').fadeOut('slow')
            } , 4000 )
        })
        // $('#wait98').hide('fast')
    })

})