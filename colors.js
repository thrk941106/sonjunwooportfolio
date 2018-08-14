var settingcolor =
{
  setLinkcolor:function(color)
  {
    $('a').css('color',color)
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length)
    // {
    //   alist[i].style.color=color;
    //   i++;
    // }
  },
  setColor:function(color)
  {
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  setBackgroundcolor:function(color)
  {
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}

function nightDatHHandler(self)
{
  var target=document.querySelector('body').style;
if(self.value==='night')
  {
    settingcolor.setBackgroundcolor('black');
    settingcolor.setColor('white');
    self.value='day';
    settingcolor.setLinkcolor('powderblue');
    alert('야간모드로 변합니다.')
  }
else
  {
    settingcolor.setBackgroundcolor('white');
    settingcolor.setColor('black');
    self.value='night';
    settingcolor.setLinkcolor('blue');
    alert('주간모드로 변합니다.')
  }
}
