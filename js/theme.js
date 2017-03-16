$(function() {

  // cant't fiend a better way :( sorry)
  reattach_select2();
  function reattach_select2() {
    $('select:not(.select2-hidden-accessible, #available_columns, #selected_columns, .ui-datepicker-title select)').select2();
    setTimeout( reattach_select2, 100 );
  }

  $('#sidebar').wrapInner('<div class="innerwrap"></div>');
  $('#sidebar').prepend('<div id="sidebar-handle"></div>');
  $('#sidebar-handle').click(function() {
    $('body').toggleClass('sidebar_closed');
  });
});