$(function(){

    let fullname1 = $('#fullname_12')
    let email1 = $('#email_12')
    let phone1 = $('#phone_12')
    let message1 = $('#message_12')

    let btnsubmit = $('#submitButton')
    btnsubmit.click(function(e){
        e.preventDefault()
        console.log("Button was clicked")
        $('#wait').html('Waiting..')
        fullname1 = $('#fullname_12').val()
        email1 = $('#email_12').val()
        phone1 = $('#phone_12').val()
        message1 = $('#message_12').val()

        $.post('/api/contactinfo' , {name : fullname1 , email : email1 , phone : phone1 , message : message1} , function(data){
            console.log("This is a jquery callback "+data)
        }).fail(function(){
            $('#wait').hide('fast')
            $('#error_message').fadeIn('fast').html('Failed!')
            setTimeout(function(){
                $('#error_message').fadeOut('slow')
            } , 4000)
        }).done(function(){
            $('#contact_section_form')[0].reset('slow')
            $('#wait').hide('fast')
            $('#success_message').fadeIn('fast').html('Message Sent')
            setTimeout(function(){
                $('#success_message').fadeOut('slow')
            } , 4000 )
        })

    })

})