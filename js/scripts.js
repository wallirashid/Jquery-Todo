jQuery(document).ready(function(){
	jQuery("#input-text").on("keyup",function(e){
		if(e.keyCode === 13){
			var inputVal = jQuery("#input-text").val();
	        var ulContainer = jQuery(".ul-styling");
	        ulContainer.append("<li><span><i class='fa fa-times cross' aria-hidden='true'></i>"+inputVal+"</span></li>");
	        jQuery("#input-text").val("");
        }
    });
    
    	jQuery("#remove-data").on("click",function(){
        jQuery(this).parents(".todo-app").find(".ul-styling li").remove();
        });
		
	
    jQuery("#add-data").on("click",function(){
        var inputVal = jQuery("#input-text").val();
        var ulContainer = jQuery(".ul-styling");
        ulContainer.append("<li><span><i class='fa fa-times cross' aria-hidden='true'></i>"+inputVal+"</span></li>");
        jQuery("#input-text").val("");
        });
    
    	jQuery("#remove-data").on("click",function(){
        jQuery(this).parents(".todo-app").find(".ul-styling li").remove();
        });
    });

jQuery(document).on("click",".cross",function(){
    $(this).parents("li").remove();
});
