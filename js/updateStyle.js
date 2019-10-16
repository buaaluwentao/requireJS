define(function(){
	function updateUI(){
        $(document).ready(function(){
            $("#onClick").on("click", function(){
                $("#hello").html("hello, world");
            });
        });
    }

    return {
        updateUI : updateUI
    };
});