//simple target is to add Event listener for keydown 
//and show the table with key pressed its keycode ,code,and ascii value.







document.body.addEventListener('keydown',function(e){
     let element = document.querySelector('.key')
     if(element){
        element.remove()
     }
     let key = e.key
   // console.log(key)
    let keycode = e.keyCode;
   // console.log(keycode)
    let code = e.code
   // console.log(code)

    document.querySelector('#insert').innerHTML=`   
     <table>
    <tr>
      <th>Key pressed</th>
      <th>Key code/Ascii</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${key === ' '? 'space': key}</td>
      <td>${keycode}</td>
      <td>${code}</td>
    </tr>
  </table>`;

  key=null;
  keycode=null;
  code=null;
;

})