$('#myform').submit(function(event){
  var values = {};
  $.each($('#myform').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  console.log(values);
  event.preventDefault();
  var tCan = $('#textCanvas')[0].getContext('2d');
  tCan.font = '23px Arial';
  var txt = values['handle'];
  var img_width = tCan.measureText(txt).width;
  tCan.canvas.width = img_width;
  tCan.font = '23px Arial';
  tCan.fillStyle = values['color'];
  tCan.fillText(txt, 0, 35);
  console.log(tCan.canvas.toDataURL());
  var img_src = tCan.canvas.toDataURL();
  var iCan = $('#imgCanvas')[0].getContext('2d');
  iCan.canvas.width = 140 + img_width;
  var img1 = new Image();
  var img2 = new Image();
  if(values['site'] == '1') img1.src = 'assets/codechef_mod.png';
  else img1.src = img1.src = 'assets/codeforces_mod.png';
  img1.onload = function() {
    iCan.drawImage(img1, 0, 0);
    img2.src = img_src;
    img2.onload = function() {
      iCan.drawImage(img2, 140, 0);
      var final_img = iCan.canvas.toDataURL();
      console.log(final_img);
      Canvas2Image.saveAsPNG(iCan.canvas);
    };
  };
});
