var openBox     =   false;
function savePos(){
var url    =   $("#memberPos #url").val();

    if($("#memberPos #department").val()==''){
        alert("Please select the department");
        return false;
    }
    
    if($("#memberPos #position").val()==''){
        alert("Please select the position");
        return false;
    }
    if($("#memberPos #year_from").val()==''){
        alert("Please select the year from");
        return false;
    }
    if($("#memberPos #year_to").val()==''){
        alert("Please select the year to");
        return false;
    }
    url+=$("#memberPos #member_id").val()+'&department=';
    url+=$("#memberPos #department").val()+'&position=';
    url+=$("#memberPos #position").val()+'&year_from=';
    url+=$("#memberPos #year_from").val()+'&year_to=';
    url+=$("#memberPos #year_to").val()+'&';
    $.get( unescape(url), function( data ) {alert("Position saved");$('#memberPos').modal('hide');});    
}
function saveNotes(){
    var url    =   $("#memberNote #url").val();
    if($("#memberNote #title").val()==''){
        alert("Please enter the title");
        return false;
    }
    if($("#memberNote #report").val()==''){
        alert("Please enter the note");
        return false;
    }
    if($("#memberNote #date").val()==''){
        alert("Please enter the date");
        return false;
    }
    url+=$("#memberNote #member_id").val()+'&title=';
    url+=$("#memberNote #title").val()+'&report=';
    url+=$("#memberNote #report").val()+'&date=';
    url+=$("#memberNote #date").val()+'&';
    $.get( unescape(url), function( data ) {alert("Note saved");$('#memberNote').modal('hide');});
}   
function savePayment(){
    var url    =   $("#memberPay #url").val();
    if($("#memberPay #payment_category").val()==''){
        alert("Please select the category");
        return false;
    }
    if($("#memberPay #title").val()==''){
        alert("Please enter the title");
        return false;
    }
    if($("#memberPay #desc").val()==''){
        alert("Please enter the desc");
        return false;
    }
    if($("#memberPay #amount").val()==''){
        alert("Please enter the amount");
        return false;
    }
    if($("#memberPay #amount_text").val()==''){
        alert("Please enter the amount in text");
        return false;
    }
    if($("#memberPay #pekerjaan").val()==''){
        alert("Please enter the pekerjaan");
        return false;
    }
    //alert($("#memberPay #form_help").val());
    //alert($("#memberPay #form_cat").val());
    //return false;
    
    url+=$("#memberPay #member_id").val()+'&date_added='; 
    url+=$("#memberPay #date_added").val()+'&payment_category='; 
    url+=$("#memberPay #payment_category").val()+'&form_help='; 
    url+=$("#memberPay #form_help").val()+'&form_cat='; 
    url+=$("#memberPay #form_cat").val()+'&title='; 
    url+=$("#memberPay #title").val()+'&desc='; 
    url+=$("#memberPay #desc").val()+'&amount='; 
    url+=$("#memberPay #amount").val()+'&amount_text='; 
    url+=$("#memberPay #amount_text").val()+'&pekerjaan='; 
    url+=$("#memberPay #pekerjaan").val()+'&tang='; 
    url+=$("#memberPay #tang").val()+'&'; 
    $.get( unescape(url), function( data ) {alert("Payment saved");$('#memberPay').modal('hide');});
}
function AddNote(){    

        $('#memberNote #title').val('');
        $('#memberNote #report').val('');
        $('#memberNote #date').val('');        
        $('#memberNote').modal('show');
        $('.modal-backdrop').hide();        

}
function AddPosition(){    

        $('#memberPos #department').val('');
        $('#memberPos #position').val('');
        $('#memberPos #year_from').val('');
        $('#memberPos #year_to').val('');        
        $('#memberPos').modal('show');
        $('.modal-backdrop').hide();        

}
function AddPayment(){    

        $('#memberPay #title').val('');
        $('#memberPay #amount').val('');
        $('#memberPay #amount_text').val('');
        $('#memberPay #desc').text('');
        $('#memberPay #pekerjaan').val('');
        $('#memberPay #tang').val('');
        $('#memberPay #date').val('');        
        $('#memberPay #payment_category').val('');        
        $('#memberPay #form_help').val('');        
        $('#memberPay #form_cat').val('');        
        $('#memberPay').modal('show');
        $('.modal-backdrop').hide();        

}

function delDetails(){
    var idi    = document.getElementById("recId").value;
    var answer =    confirm("Are you sure you want to delete the map plot?");
    if(answer==true){
        $("#house_no_"+idi).val('');
        $("#ref_name_"+idi).val('');
        $("#cord_x_"+idi).val('');
        $("#cord_y_"+idi).val('');
		$("#width_"+idi).val('');
		$("#height_"+idi).val('');
        $('.mapPlot_'+idi+'').hide();
        $('#myModal').modal('hide');
    }
    return false;
}
function saveDetails(){
    var idi    = document.getElementById("recId").value;
    $('#myModal #recId').val(idi);    
    $("#house_no_"+idi).val($('#myModal #house_number').val());
    $("#ref_name_"+idi).val($('#myModal #ref_name').val()); 
    $("#house_phone_"+idi).val($('#myModal #house_phone').val());
    //alert($('#myModal #house_phone').val());
    $("#mapPlot_"+idi).html($('#myModal #house_number').val());     
    $('#myModal').modal('hide');
    return false;
}
function openModalNew(idi){    
    openBox =   true;
    openModal(idi);
}
function openModal(idi){    
    if(openBox==true){
        $('#myModal #recId').val(idi);
        $('#myModal #house_number').val($("#house_no_"+idi).val());
        $('#myModal #ref_name').val($("#ref_name_"+idi).val());    
        $('#myModal #house_phone').val($("#house_phone_"+idi).val());    
        $('#myModal').modal('show');
        $('.modal-backdrop').hide();
        openBox = false;
    }
}
function openModalNewView(idi,mapid,url,pth){
    var house_number    =   $("#house_no_"+idi).val();
    $.get(url,{house_number:house_number,mapid:mapid})
    .done(function( data ) {
        
        if(data == 0){
            $("#viewModal .modal-body").html('<div class="alert alert-danger">No member found!</div>');
        }else{
            $("#viewModal .modal-body").html(data);
        }
        $('#viewModal').modal('show');
        $('.modal-backdrop').hide();
    });
}
/*function openModalNewView(idi,mapid,url,pth){
    var house_number    =   $("#house_no_"+idi).val();
    $.getJSON(url,{house_number:house_number,mapid:mapid})
    .done(function( data ) {
        var totalResults    =   data.length;
        if(totalResults <= 0){
            $("#viewModal .modal-body").html('<div class="alert alert-danger">No member found!</div>');
        }else{
           var i = 0 ;
           var tabsBtns =   '';
           var tabsCont  =   '<div class="tab-content">';
           for(i=0;i<totalResults;i++){
               var cls  =   '';
               if(i==0){cls='active';}
               tabsBtns+='<li class="'+cls+'"><a href="#tab'+(i+1)+'" data-toggle="tab">'+data[i].full_name+'</a></li>';
           } 
           
           for(i=0;i<totalResults;i++){                              
               var cls  =   '';
               if(i==0){cls='active';}
               tabsCont+='<div class="tab-pane '+cls+'" id="tab'+(i+1)+'">';
               tabsCont+='<div class="table-responsive">';
               tabsCont+='<table class="table table-striped table-hover">';
               tabsCont+='<tbody>';
               
               tabsCont+='<tr>';
               tabsCont+='<td colspan="2"><h3>'+data[i].full_name+'</h3></td>';
               tabsCont+='<td colspan="2"><img src="'+pth+data[i].photo+'" height="100" width="100"></td>';               
               tabsCont+='</tr>';

               tabsCont+='<tr>';
               tabsCont+='<th>DOB</th><td>'+data[i].dob+'</td>';
               tabsCont+='<th>IC number</th><td>'+data[i].ic_number+'</td>';
               tabsCont+='</tr>';
               
               
               tabsCont+='<tr>';
               tabsCont+='<th>House number</th><td>'+data[i].house_number+'</td>';
               tabsCont+='<th>Passport number</th><td>'+data[i].passport_number+'</td>';
               tabsCont+='</tr>';
               
               
               tabsCont+='<tr>';
               tabsCont+='<th>State</th><td>'+data[i].state_text+'</td>';
               tabsCont+='<th>K/P number</th><td>'+data[i].kp_number+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Parliamen</th><td>'+data[i].parliment_text+'</td>';
               tabsCont+='<th>Serial number</th><td>'+data[i].serial_number+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Region</th><td>'+data[i].region_text+'</td>';
               tabsCont+='<th>Phone 1</th><td>'+data[i].phone1+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Daerah Mengundi</th><td>'+data[i].daram_text+'</td>';
               tabsCont+='<th>Phone 2</th><td>'+data[i].phone2+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Locality</th><td>'+data[i].locality_text+'</td>';
               tabsCont+='<th>Gender</th><td>'+data[i].gender+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Cawangan</th><td>'+data[i].cawangan_text+'</td>';
               tabsCont+='<th>Bahagian</th><td>'+data[i].bahagian_text+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Tempat mengundi</th><td>'+data[i].tempat_mengundi_text+'</td>';
               tabsCont+='<th>Features</th><td>'+data[i].features+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Address</th><td>'+data[i].Address+'</td>';
               tabsCont+='<th>Marital status</th><td>'+data[i].marital_status+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Address 2</th><td>'+data[i].Address2+'</td>';
               tabsCont+='<th>Channels</th><td>'+data[i].channels+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Membership umno</th><td>'+data[i].membership_umno+'</td>';
               tabsCont+='<th>Category umno</th><td>'+data[i].category_umno_text+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Occupation</th><td>'+data[i].occupation_text+'</td>';
               tabsCont+='<th>Income range</th><td>'+data[i].income_range_text+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>SPR status</th><td>'+data[i].spr_status+'</td>';
               tabsCont+='<th>Citizenship</th><td>'+data[i].citizenship+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Attitude</th><td>'+data[i].attitude_text+'</td>';
               tabsCont+='<th>Data type</th><td>'+data[i].data_type_text+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Religion</th><td>'+data[i].religion_text+'</td>';
               tabsCont+='<th>Race</th><td>'+data[i].race_text+'</td>';
               tabsCont+='</tr>';
               
               tabsCont+='<tr>';
               tabsCont+='<th>Listing date</th><td>'+data[i].listing_date+'</td>';
               tabsCont+='<th>Listing time</th><td>'+data[i].listing_time+'</td>';
               tabsCont+='</tr>';
                              
               tabsCont+='</tbody>';               
               tabsCont+='</table>';
               tabsCont+='</div>';
               tabsCont+='</div>';
           }
           tabsCont+=   '</div>';
           var tabContent='<ul class="nav nav-tabs" id="tabs">'+tabsBtns+'</ul>'+tabsCont;
            $("#viewModal .modal-body").html(tabContent);
        }
        $('#viewModal').modal('show');
        $('.modal-backdrop').hide();
    });
}*/
function drawMapPlot(dx,dy){
    var mapcnt  =   $(".mapPlot").length;
//    alert(mapcnt);
        var w = "15px";
		var h = "15px";
        var mapPlot =   '<div class="mapPlot mapPlot_'+mapcnt+'" id="mapPlot_'+mapcnt+'" data-id="'+mapcnt+'" style="top:'+dy+'px !important;left:'+dx+'px !important;" ondblclick="openModalNew('+mapcnt+');">';
        mapPlot+=   (mapcnt+1);        
        mapPlot+=   '</div>';
        mapPlot+=   '<input type="hidden" name="house_no[]" id="house_no_'+mapcnt+'" class="house_no_'+mapcnt+'" value="'+(mapcnt+1)+'">';
        mapPlot+=   '<input type="hidden" name="ref_name[]" id="ref_name_'+mapcnt+'" class="ref_name_'+mapcnt+'">';
        mapPlot+=   '<input type="hidden" name="house_phone[]" id="house_phone_'+mapcnt+'" class="house_phone_'+mapcnt+'">';
        mapPlot+=   '<input type="hidden" name="cord_x[]" id="cord_x_'+mapcnt+'" class="cord_x_'+mapcnt+'" value="'+dx+'">';
        mapPlot+=   '<input type="hidden" name="cord_y[]" id="cord_y_'+mapcnt+'" class="cord_y_'+mapcnt+'" value="'+dy+'">';
		mapPlot+=   '<input type="hidden" name="width[]" id="width_'+mapcnt+'" class="width_'+mapcnt+'" value="'+w+'">';
        mapPlot+=   '<input type="hidden" name="height[]" id="height_'+mapcnt+'" class="height_'+mapcnt+'" value="'+h+'">';

        //alert(mapPlot);
        $("#mapImgHolder").append(mapPlot);
        $('.mapPlot_'+mapcnt+'').draggable({
            stop: function(event) {            
            var offset =  $("#mapImgHolder").offset(); //$("#mapImgHolder img").offset();
            var divX    =   event.pageX - offset.left;
            var divY    =   event.pageY - offset.top;
            var idi     =   $(this).attr("data-id");
            $("#cord_x_"+idi).val(divX);
            $("#cord_y_"+idi).val(divY);            
          }
        });
		$('.mapPlot_'+mapcnt+'').resizable({
	      stop: function( event, ui ) {
		    var width = ui.size.width;
		    var height = ui.size.height;
			var idi     =   $(this).attr("data-id");
            $("#width_"+idi).val(width);
            $("#height_"+idi).val(height);            
	      }													   
		});
        //openBox =   true;
        //openModal(mapcnt);        
}
$(document).ready(function(){
    
    $('[data-toggle="tooltip"]').tooltip(); 
    $("input[name='Smssettings[smsaccount]']").on('change', function() {
        value = $(this).val();
        if(value=='Clickatell'){
            $("#WebSMS2U").slideUp('fast');
            $("#Clickatell").slideDown('slow');
            
        }
        if(value=='WebSMS2U'){
            $("#Clickatell").slideUp('fast');
            $("#WebSMS2U").slideDown('slow');
            
        }
    });
    
    
    if(document.getElementById("mapImgHolder")!=null){
        $("#mapImgHolder img").click(function(event){        
            var offset =  $(this).parent().offset(); //$(this).offset();
            //alert($(this).parent().attr('id'));
            var divX    =   event.pageX - offset.left;
            var divY    =   event.pageY - offset.top;  
            drawMapPlot(divX,divY);
        });
    }
    $('.mapPlot').draggable({
            stop: function(event) {
            var offset =  $("#mapImgHolder").offset(); //$("#mapImgHolder img").offset();
            var divX    =   event.pageX - offset.left;
            var divY    =   event.pageY - offset.top;
            var idi     =   $(this).attr("data-id");
            divY        =   $(this).css('top').replace("px","");
            divX        =   $(this).css('left').replace("px","");
            $("#cord_x_"+idi).val(divX);
            $("#cord_y_"+idi).val(divY);            
          }
    });
	$('.mapPlot').resizable({
	  stop: function( event, ui ) {
		  var width = ui.size.width;
		  var height = ui.size.height;
		  var idi = $(this).attr("data-id");
          $("#width_"+idi).val(width);
          $("#height_"+idi).val(height);            
	  }						
	});
    $("#modalButton").click(function (){
       $("#modal").modal("show")
               .find("#modalContent")
               .load($(this).attr('value'));
       $('.modal-backdrop').hide();
    });
    $(".modalButtonEdit").click(function (){
       $("#modal").modal("show")
               .find("#modalContent")
                .load($(this).attr('href'));
       $('.modal-backdrop').hide();
       return false;
    });
    $(".modalButtonImport").click(function (){
       $("#modalimport").modal("show")
               .find("#modalContent")
                .load($(this).attr('href'));
       $('.modal-backdrop').hide();
       return false;
    });
    $(".modalButtonPhone").click(function (){
       $("#modalPhno").modal("show")
               .find("#modalContent")
                .load($(this).attr('href'));
       $('.modal-backdrop').hide();
       return false;
    });
    $(".modalButtonGrpView").click(function (){
       $("#modalPhMem").modal("show")
               .find("#modalContent")
                .load($(this).attr('href'));
       $('.modal-backdrop').hide();
       return false;
    });
    $(".modalSendSMS").click(function (){
       $("#modalPhMemSMS").modal("show")
               .find("#modalContent")
                .load($(this).attr('href'));
       $('.modal-backdrop').hide();
       return false;
    });
    $(".assignJR").click(function (){
       var checkedMem     =   $('input.kcjrAssign:checked').size();
       var checkedValues = $('input.kcjrAssign:checked').map(function() {
            return this.value;
       }).get();
       //checkedValues    =   checkedValues.split(",");
       //alert(checkedValues[0]);
       if(checkedMem > 0){
           var html = '';
           for(j=0;j<checkedValues.length;j++){
               html+=checkedValues[j]+'_^^^^^_';
           }
           
            $("#modalKcjr").modal("show")
            .find("#modalContent")
                .load($(this).attr('value')+'&flds='+html);
            $('.modal-backdrop').hide();
        }
       return false;
    });
    $(".deleteGrp").click(function (){
      answer = confirm("Are you sure you want to delete this group?");
    if(answer==true){
        $.post( unescape($(this).attr('href')), function( data ) {window.location.href="index.php?r=phonegrp/index";});
    }
       return false;
    });
    
    
    var $chars = $('#char');
    var $msgs = $('#msgs');
    var $remg = $('#remg');

    $('textarea#SMS').keyup(function(evt) {
        var len = this.value.length;
        $chars.text(len);
        if(len <= 160) {
            $msgs.text(1);
            $remg.text(160 - len);
        } else {
            var multi = Math.ceil((len/153)) ;
            $msgs.text(multi);
            $remg.text((multi * 153) - len);
        }
    });
    $("div.grid-view .table-bordered").stickyTableHeaders();
});

function setPolling(obj){
    var idi     =   obj.id;
    var date    =   $("#today").val();
    var daram   =   $("#daram").val();
    $.post( unescape("index.php?r=members/add-polling"), {member:idi,date:date,daram:daram},function( data ) {
        if(data==0){
            obj.style.backgroundColor = '#C00';
        }else if(data==1){
            obj.style.backgroundColor = '#0C0';
        }
    });
}

function setPollingBulk(){
    
    var idi     =   $("#bulkPolling").val();
    
    if(idi==''){alert("Please enter the serial numbers..");return false;}
    var idis    =   idi.split(",");
    var fidi    =   0;
    for(i=0;i<idis.length;i++){
        fidi+=','+$(".link"+idis[i]).attr("id");
    }
    var date    =   $("#today").val();
    var daram   =   $("#daram").val();
    $.post( unescape("index.php?r=members/add-polling-bulk"), {member:fidi,date:date,daram:daram},function( data ) {
        for(i=0;i<idis.length;i++){
            if(data==0){ var color = '#C00';}else{var color='#0C0';}
            $(".link"+idis[i]).css("background-color",color);
        }
    });
}

