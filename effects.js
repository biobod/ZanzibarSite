/**
 * Created by user on 27.04.16.
 */
window.onload = function(){
    heightCountry();
}
window.onresize = function(){
    heightCountry ();
};


// show background input form
function buttonClick (){
    var background = document.querySelector('.background-form');
    var close = document.querySelector('.close');
    var buttons = document.querySelectorAll('button' );
   for (var i =0; i<buttons.length; i++){
       buttons[i].onclick = function (event){
           background.style.display = 'block';

       }
   }
   close.onclick = function(){
       background.style.display = 'none';
   };
}

buttonClick();

// anchor function

function anchorClick (){
    var menuLi = document.querySelectorAll('a');
    for (var i=0; i<menuLi.length; i++){
        menuLi[i].onclick = function(event){
            event.preventDefault();
            var a = event.currentTarget.getAttribute('href');
            var arr = a.split('');
            var arrDel =  arr.shift();
            var arr2 = arr.join('');
            var id = document.getElementById(arr2);
            var top = getOffsetRect(id) - 80;
            window.scrollTo (0, top);

        }
    }

}
anchorClick();

function getOffsetRect(elem) {
        var box = elem.getBoundingClientRect();
    // (2)
    var body = document.body;
    var docElem = document.documentElement;
        // (3)
      var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;

     var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
       // (4)
     var clientTop = docElem.clientTop || body.clientTop || 0;
     var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    // (5)
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return  Math.round(top) ;

}

// menu show/hide

function showMenu (){
    var abc = false;
    var menu = document.querySelector('.sp-menu');
    var hideMenu = document.querySelector('.hide-menu');
    menu.onclick = function(){
        if (abc === false){
        hideMenu.classList.add('show-menu');
        abc = true;
        hideMenu.onclick =  function(){
            setTimeout( function(){
                hideMenu.classList.remove('show-menu');
                abc = false;

            }, 500);
        }
        }
        else
        {
            hideMenu.classList.remove('show-menu');
            abc = false;
        }
    }

}
showMenu ();

function heightCountry (){
    var country =  document.getElementById('aboutCounty');
    var countryBlock = country.querySelector('.county-block1');
    var height = countryBlock.offsetHeight;
    country.style.height = (height + 10) + 'px';
}

