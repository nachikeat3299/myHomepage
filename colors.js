var Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor: function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

function LinksSetColor(color){
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'To Night Mode'){ 
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'To Day Mode';
        Links.setColor('powderblue');
    }
    else{ 
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'To Night Mode';
        Links.setColor('blue');
    }
}
