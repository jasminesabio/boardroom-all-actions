fetch("https://api.boardroom.info/v1/getAllActions").then((data)=> {
    console.log(data);
    return data.json();
}).then((objectData)=> {
    console.log(objectData.data);
    let tableData="";
    objectData.data.map((values)=>{
        tableData+=`<tr>
        <td>${values.protocol}</td>
        <td>${values.action}</td>
        <td>${values.hashId}</td>
        <td>${values.proposalId}</td>
        <td>${values.timestamp}</td>
        <td>${values.userAddress}</td>
        <td>${values.identifier}</td>
        <td>${values.separatedFramework}</td>
        <td>${values.separatedAction}</tdd>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=> {
    console.log(err);
})