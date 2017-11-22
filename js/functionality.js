/* functionality.js
   Functionality specific to the Pattern Library microsite.
   Not to be handed off to development team. */


/* Back to Top Button */
$('#btn--back-to-top').click(function() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
});

/* Make the Sidebar fixed once scrolled */
var NAVFROMTOP = $('.page__navigation').offset().top;

/* Make the Sidebar fixed once scrolled */
$(window).scroll(function(){
  var sidebarNav = $('.page__navigation');
  var isPositionFixed = (sidebarNav.css('position') == 'fixed'); /* True if fixed */

  /* If window is scrolled beyond the amount of space originally
  between the top of the page and the top of the sidebar nav,
  AND position of the sidebar nav is not yet fixed... add fixed */
  if ($(this).scrollTop() > NAVFROMTOP && !isPositionFixed){
    sidebarNav.css({'position': 'fixed', 'top': '0px'});
  }

  /* On the other hand, if the window is NOT scrolled beyond
  the amount of space originally between the top of the page
  and the top of the sidebar nav, remove position fixed */
  if ($(this).scrollTop() < NAVFROMTOP && isPositionFixed)
  {
    sidebarNav.css({'position': 'static', 'top': '0px'});
  }
});

/* For the dialog */
var dialog = new mdc.dialog.MDCDialog(document.querySelector('#mdc-dialog-example'));
document.querySelector('#default-dialog-activation').addEventListener('click', function (evt) {
  dialog.lastFocusedTarget = evt.target;
  dialog.show();
});

/* For the simple Menu */
var menu = new mdc.menu.MDCSimpleMenu(document.querySelector('.simple-menu-container'));
document.querySelector('.simple-menu-trigger').addEventListener('click', () => menu.open = !menu.open);

/* For the Snackbar */
var snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
$('.snackbar-trigger').click(function() {
  snackbar.show({
    actionOnBottom: true,
    message: 'You are the coolest!',
    actionText: 'Thanks',
    actionHandler: function() {
     console.log("Stuff is working!");
   }
  });
});
