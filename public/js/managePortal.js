$(function(){

    let append_12 = $('#append')
    let delBtn = $('#deleteButton')
    let finalRes_12 = $('#finalRes_12')

    let len = 0;

    

    $.fn.delBox = function(id) {
        console.log("we are inside delBox")
        let bool = confirm("Are you sure you want to delete "+id+ " element")
        if(bool == true){
            $.post('/api/contactinfo/delete' , {id : id} , location.reload(true) )
        }
    };
    

    $.get('/api/contactinfo' , function(data){

        console.log(data)


        append_12.empty()
        len = data.length;
        for(let i=0 ; i<data.length ; i++){
            append_12.append(
                `
                
          
                    <div class="col-xs-12 col-sm-4" style="border : 1px black solid">
                            <div style="padding : 3%;">
                                ${data[i].id}
                            </div>
                            <div style="padding : 3%;">
                                ${data[i].name}
                            </div>
                            <div style="padding: 3%;">
                                ${data[i].email}
                            </div>
                            <div style="padding : 3%;">
                                ${data[i].phone}
                            </div>
                            <div style="padding: 3% ;">
                                ${data[i].message}
                            </div>
                            <button class="btn btn-primary id="${data[i].id}"  style="margin-bottom : 2%" onclick="$().delBox(${data[i].id});">Submit</button>
                    </div>
        
                `
                )
        }
    })

   

})

