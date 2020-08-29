var map={"id":"10","name":"Tony"};

var input="<tr><td>{$id}</td><td>{$name}</td></tr>";


function setData(dataObj,template){

    return template.replace(/{\$([^{}]+)}/ig,function(match,group1){

        return dataObj[group1];

    });

}

setData(map,input);