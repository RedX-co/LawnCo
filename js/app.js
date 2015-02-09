//App.js

//Require the sweetcaptcha module and give it the credentials you were sent upon registration.
var sweetcaptcha = new require('sweetcaptcha')(233744, bd225cfb082de77292b26f25a79720c4, e512482040f81765be5463b382c27170);
// The page that your contact form is on should have a route like this
app.get('/', function(req, res){

    //get sweetcaptcha html for the contact area
        sweetcaptcha.api('get_html', function(err,html){
            //Send the guts of the captcha to your template
            res.render('main', { captcha : html });
        });

});

var swig = require('swig');

// Compile a file and store it, rendering it later
var tpl = swig.compileFile('/path/to/template.html');
console.log(tpl({ article: { title: 'Swig is fun!' }}));

// Immediately render a Swig template from a string
console.log(swig.render('{% if foo %}Hooray!{% endif %}', { locals: { foo: true }}));
