$(document).ready(function(){
    $('.add-cart').click(function(){
        var id= $(this).attr('data-id');
      
        var name = $(this).attr('data-name');
      
        var route = "{{route('add-to-cart',['id','name'])}}";

        route = route.replace('id',id)
        route = route.replace('name',name)
        if(id != '' && name!= ''){
            $.ajax({
                type: "GET",
                url: route,
                success:function(data){
                    console.log(data);
                   if($.trim(data) == "ok")
                   {
                        
                   }
                }
            })
        }
    })
})