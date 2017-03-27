$(function() {

  // attach select 2
  // cant't fiend a better way :( sorry)
  reattach_select2();
  function reattach_select2() {
    $('select:not(.select2-hidden-accessible, #available_columns, #selected_columns, .ui-datepicker-title select)').select2();
    setTimeout( reattach_select2, 100 );
    
    // change select 2 to multiple select
    $('.toggle-multiselect:not(.binded)').click(function() {
      $(this).parent().find('.select2-hidden-accessible').select2("destroy"); 
    }); 
    $('.toggle-multiselect').addClass('binded');
  }

  // sidebar behavior
  $('#sidebar').wrapInner('<div class="innerwrap"></div>');
  $('#sidebar').prepend('<div id="sidebar-handle"></div>');
  $('#sidebar-handle').click(function() {
    $('body').toggleClass('sidebar_closed');
  });

  $('.filter').click(function() {
    alert('bob');
  });



});