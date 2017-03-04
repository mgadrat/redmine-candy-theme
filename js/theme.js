$(function() {

  // cant't fiend a better way :( sorry)
  reattach_select2();
  function reattach_select2() {
    $('select:not(.select2-hidden-accessible, #available_columns, #selected_columns)').select2();
    setTimeout( reattach_select2, 100 );
  }

});