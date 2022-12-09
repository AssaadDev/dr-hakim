$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

   var app = $.spapp({pageNotFound : 'error_404'}); // initialize
   var app = $.spapp({
  defaultView  : "home",
  templateDir  : "./pages/",
  pageNotFound : "error_404"
});
  // define routes
  app.route({view: 'home', load: 'home.html' });
  app.route({view: 'onama', load: 'onama.html' });
  app.route({view: 'kontakt', load: 'kontakt.html' });
  app.run();

});