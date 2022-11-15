var stt=0;

function getinfo() {
    let table = document.querySelector('table');
     var idipdeviceend = document.getElementById('idipdeviceend').value;
     var idportend = document.getElementById('idportend').value;
     var idipdevicesource = document.getElementById('idipdevicesource').value;
     var idportsource = document.getElementById('idportsource').value;
     var idnote = document.getElementById('idnote').value;
     stt +=1; // số sst trong hàng
     let template = `
     <tr>
        <td>${stt}</td>
        <td>${idipdeviceend}</td>
        <td>${idportend}</td>
        <td>${""}</td>
        <td>${""}</td>
        <td>${"=>"}</td>
        <td>${idipdevicesource}</td>
        <td>${idportsource}</td>
        <td>${""}</td>
        <td>${""}</td>
        <td>${idnote}</td>
     </tr>`;
     table.innerHTML += template;
      
     }
     