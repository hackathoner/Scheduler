$( document ).ready(function() {
	div_1 = '<label for="inputTeacher" class="col-lg-1 control-label" id="teacherName">Teacher</label><div class="col-lg-2"><input type="text" class="form-control" id="inputTeacher" placeholder="Ms. Smith"></div><label for="inputName" class="col-lg-1 control-label" id="className">Class Name</label><div class="col-lg-2"><input type="text" class="form-control" id="inputName" placeholder="Calculus"></div></div>';
	$('.plus_sign').click(function(){
		alert($('input[name=schoolLevel]:radio:checked').val()=='highschool');
		if($('input[name=schoolLevel]:radio:checked').val()=='highschool'){
			div_2 = '<div class="newclass col-lg-12"><div><label for="inputPeriod" class="col-lg-2 control-label" id="periodNumber">Period</label><div class="col-lg-1"><input type="text" class="form-control" id="inputPeriod" placeholder="14"></div>'+div_1;    
		}else if($('input[name=schoolLevel]:radio:checked').val()=='college'){
			div_2 = '<div class="newclass  col-lg-12"><div><label for="inputStartTime" class="col-lg-2 control-label" id="startTime">Start Time</label><div class="col-lg-1"><input type="text" class="form-control" id="inputStartTime" placeholder="14"></div><div><label for="inputEndTime" class="col-lg-1 control-label" id="endTime">End Time</label><div class="col-lg-1"><input type="text" class="form-control" id="inputEndTime" placeholder="14"></div>'+div_1;
		}else{
			div_2 = '<div class="noschool alert alert-danger alert-dismissable col-lg-9 col-lg-offset-2" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Please enter your level of education</div>';
		}
	    $(div_2).insertBefore('.plus_sign');
    })
});