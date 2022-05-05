
function calculateDimensionPhoto(){

    var anchoSensorTxt = parseInt(document.getElementById('anchoSensor').value);
    var altoSensorTxt = parseInt(document.getElementById('altoSensor').value);
    var dFocalTxt = parseInt(document.getElementById('dFocal').value);
    var hVueloTxt = parseInt(document.getElementById('hVuelo').value);

    var calculateDimensionPhoto1 = (anchoSensorTxt*1000*hVueloTxt)/(dFocalTxt*1000);
    document.getElementById('photoWidth').value = calculateDimensionPhoto1;

    var calculateDimensionPhoto2 = (altoSensorTxt*1000*hVueloTxt)/(dFocalTxt*1000);
    document.getElementById('photoHeight').value = calculateDimensionPhoto2;

}

function calculateResolutionPhoto(){

    var numeroPixelesAnchoTxt = parseInt(document.getElementById('pixelsWidth').value);
    var numeroPixelesAltoTxt = parseInt(document.getElementById('pixelsHeight').value);

    var calculateDimensionPhoto1 = parseInt(document.getElementById('photoWidth').value);
    var calculateDimensionPhoto2 = parseInt(document.getElementById('photoHeight').value);
    

    var calculatePixelsPhoto1 = (calculateDimensionPhoto1)/(numeroPixelesAnchoTxt);
    document.getElementById('pixelsPhotoWidth').value = calculatePixelsPhoto1;

    var calculatePixelsPhoto2 = (calculateDimensionPhoto2)/(numeroPixelesAltoTxt);
    document.getElementById('pixelsPhotoHeight').value = calculatePixelsPhoto2;

}

function calculateOverSidePhoto(){

    var overlapTxt = parseInt(document.getElementById('porcentajeOverlap').value);
    var sidelapTxt = parseInt(document.getElementById('porcentajeSidelap').value);
    var calculateWidth = parseInt(document.getElementById('photoWidth').value);
    var calculateHeight = parseInt(document.getElementById('photoHeight').value);

    var calculateOverlapPhoto = calculateHeight*(1-overlapTxt/100);
    document.getElementById('overlap').value = calculateOverlapPhoto;

    var calculateSidelapPhoto = calculateWidth*(1-sidelapTxt/100);
    document.getElementById('sidelap').value = calculateSidelapPhoto;

}

var svgNS = "http://www.w3.org/2000/svg"

let svgArea

let svgWidth 
let svgHeight 

let group1 // Las fotos
let dronePath
let photocenter
let photogram

let state = ""

let backColor = "#000000"
let strokeColor = "#FFFFFF"
let backColor2 = "#FDF05A"
let strokeColor2 = "#FF00FF"

//function fillState(_state){
//    state = _state;
//}

function fillState(_state, _stroke, _back){
    state = _state;
    strokeColor = _stroke;
    backColor = _back;
}

//const ptos = [null, null, null, null];

function getCoors(evt){
    console.log(evt);
    let xy = translateXY(evt.layerX, evt.layerY)

    //let xy = [evt.layerX, evt.layerY]

    let x = xy[0];
    let y = xy[1];

    fillinTextBox(xy)
    if(state!=='')
    {
    let circle = document.getElementById(state)
        if(circle){
            circle.setAttributeNS(null,"cx",x);
            circle.setAttributeNS(null,"cy",y);
        } else {
            let circle = document.createElementNS(svgNS,"circle");
            circle.setAttributeNS(null,"cx",x);
            circle.setAttributeNS(null,"cy",y);
            circle.setAttributeNS(null,"r",5);
            circle.setAttributeNS(null,"fill",backColor);
            circle.setAttributeNS(null,"stroke",strokeColor);
            circle.setAttributeNS(null,"id",state);
            document.getElementById("svgContainer").appendChild(circle);
            }  
        state = ''; 

        createPath();
    }
}

function createPath(){

    let xmin = parseInt(document.getElementById('xMin').value);
    let ymin = parseInt(document.getElementById('yMin').value);
    let xmax = parseInt(document.getElementById('xMax').value);
    let ymax = parseInt(document.getElementById('yMax').value);

    let _xmin = xmin;
    if(_xmin>xmax){
        xmin = xmax;
        xmax = _xmin
    }

    let _ymin = ymin;
    if(_ymin>ymax){
        ymin = ymax;
        ymax = _ymin
    }

    const data = `M${xmin},${ymin} L${xmin},${ymax} L${xmax},${ymax} L${xmax},${ymin} Z`;

    let pathId = 'AreaPath'
    let line2path = document.getElementById(pathId)
        if(line2path){
            line2path.setAttributeNS(null,"d",data);
        } else {
            let line2path = document.createElementNS(svgNS,"path");
            line2path.setAttributeNS(null,"id",pathId);
            line2path.setAttributeNS(null,"d",data);
            line2path.setAttributeNS(null,"fill","none");
            line2path.setAttributeNS(null,"stroke","red");
            document.getElementById("svgContainer").appendChild(line2path); 
        }
}

//function paintPath(){
//
//    let dronePath = document.createElementNS(svgNS,"path"); 
//    let data2 = "M50 50 L50 500 L100 500 L100 50 L150 50 L150 500 L200 500 L200 50 L250 50 L250 500 L250 500 L300 500 L300 50 L350 50 L350 500 L400 500 L400 50 L450 50 L450 500 L500 500 L500 50 L550 50 L550 500 L600 500 L600 50 L650 50 L650 500 L700 500 L700 50 L750 50 L750 500"
//    dronePath.setAttributeNS(null,"id",dronePath);
//    dronePath.setAttributeNS(null,"d",data2);
//    dronePath.setAttributeNS(null,"fill","none");
//    dronePath.setAttributeNS(null,"stroke","red");
//    document.getElementById("svgContainer").appendChild(dronePath);
//
//}

// function paintPath2(){
//    let dronePath2 = document.createElementNS(svgNS,"path2");
//    let xmin = parseInt(document.getElementById('xMin').value);
//    let ymin = parseInt(document.getElementById('yMin').value);
//    let xmax = parseInt(document.getElementById('xMax').value);
//    let ymax = parseInt(document.getElementById('yMax').value);
//
//    let _xmin = xmin;
//
//    if(_xmin>xmax){
//        xmin = xmax;
//        xmax = _xmin
//    }

//    let _ymin = ymin;
//    if(_ymin>ymax){
//        ymin = ymax;
//        ymax = _ymin
//    }

//    const data = `M${xmin},${ymin} L${xmin},${ymax} L${xmax},${ymax} L${xmax},${ymin} Z`;

//    let data3 = {aquí va el Path} 
//          for 
//             
//    dronePath.setAttributeNS(null,"id",dronePath);
//    dronePath.setAttributeNS(null,"d",data2);
//    dronePath.setAttributeNS(null,"fill","none");
//    dronePath.setAttributeNS(null,"stroke","red");
//    document.getElementById("svgContainer").appendChild(dronePath);
//}

function fillinTextBox(xy){

    if(state==="tof"){
        document.getElementById('tofx').value = xy[0];
        document.getElementById('tofy').value = xy[1];
    }

    if(state==="land"){       
    document.getElementById('landx').value = xy[0];
    document.getElementById('landy').value = xy[1];
    }

    if(state==="Min"){       
        document.getElementById('xMin').value = xy[0];
        document.getElementById('yMin').value = xy[1];
    }

    if(state==="Max"){       
        document.getElementById('xMax').value = xy[0];
        document.getElementById('yMax').value = xy[1];
    }        
}

function translateXY(x,y){
    svgArea = document.getElementById('svgContainer');
    let vbox = svgArea.getAttribute('viewBox');
    vbox = vbox.split(" ");
    vbox = vbox.map(e => parseInt(e));
    let newX = (parseFloat(vbox[2])/parseFloat(svgArea.getAttribute('width'))) * x
    let newY = (parseFloat(vbox[3])/parseFloat(svgArea.getAttribute('height'))) * y
    newX = newX + vbox[0]
    newY = newY + vbox[1]
    let xt = [newX, newY];
    return xt;
}

function changeViewBox(){
    var mapWidth = parseInt(document.getElementById('width').value);
    var mapHeight = parseInt(document.getElementById('height').value);
    var coordX = parseInt(document.getElementById('coordX').value);
    var coordY = parseInt(document.getElementById('coordY').value);

    // let vbox = `${coordX} ${coordY} ${mapWidth} ${mapHeight}`

    let vbox = coordX + " " + coordY + " " + mapWidth + " " + mapHeight;  

    var svgArea = document.getElementById('svgContainer');

    svgArea.setAttribute("viewBox",vbox);
}

function paintPath(puntos){
    
    // https://www.w3schools.com/graphics/svg_path.asp

        dronePath = document.createElementNS(svgNS,"path"); //to create a path. for rectangle use "rectangle"
        let data = `M ${puntos[0][0]},${puntos[0][1]} `; 
        for(let i=1; i<puntos.length; i++){
            data +=  ` L ${puntos[i][0]},${puntos[i][1]}`
        }

     //   {xmin},${ymin} L${xmin},${ymax} L${xmax},${ymax} L${xmax},${ymin} Z`;

        dronePath.setAttributeNS(null,"id","circle");
        dronePath.setAttributeNS(null,"d",data);
        dronePath.setAttributeNS(null,"fill","none");
        dronePath.setAttributeNS(null,"stroke","red");
        document.getElementById("svgContainer").appendChild(dronePath);
    
}

 // Clase ONLINE 

function paintCircle(x,y){

    let circle = document.createElementNS(svgNS,"circle");
    circle.setAttributeNS(null,"cx",x);
    circle.setAttributeNS(null,"cy",y);
    circle.setAttributeNS(null,"r",5);
    circle.setAttributeNS(null,"fill",backColor);
    circle.setAttributeNS(null,"stroke",strokeColor);
    circle.setAttributeNS(null,"id",state);

    // document.getElementById("svgContainer").appendChild(circle);

    return circle;
}

function paintRect(x,y){

    let xRectangle = x - parseFloat((document.getElementById('photoWidth').value)/2);
    let yRectangle = y - parseFloat((document.getElementById('photoHeight').value)/2);

    let rectWidth = parseFloat((document.getElementById('photoWidth').value));
    let rectHeight = parseFloat((document.getElementById('photoHeight').value));

    let rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",xRectangle);
    rect.setAttributeNS(null,"y",yRectangle);
    rect.setAttributeNS(null,"width",rectWidth);
    rect.setAttributeNS(null,"height",rectHeight);
    rect.setAttributeNS(null,"fill", backColor2);
    rect.setAttributeNS(null,"stroke",strokeColor2);
    rect.setAttributeNS(null,"id",state);

    //document.getElementById("svgContainer").appendChild(rect);

    return rect;
}

function createMission(){

    photocenter = document.createElementNS(svgNS,"g");
    document.getElementById("svgContainer").appendChild(photocenter);

    let xmin = parseInt(document.getElementById('xMin').value);
    let ymin = parseInt(document.getElementById('yMin').value);
    let xmax = parseInt(document.getElementById('xMax').value);
    let ymax = parseInt(document.getElementById('yMax').value);
    let  tofx =  parseInt(document.getElementById('tofx').value);
    let  tofy =  parseInt(document.getElementById('tofy').value);
    let  landx =  parseInt(document.getElementById('landx').value);
    let  landy =  parseInt(document.getElementById('landy').value);

    let _xmin = xmin;
    if(_xmin>xmax){
        xmin = xmax;
        xmax = _xmin
    }

    let _ymin = ymin;
    if(_ymin>ymax){
        ymin = ymax;
        ymax = _ymin
    }
    
    let puntos = [];
    let x = xmin;
	let y = ymin;
    let distanciaSidelap = parseFloat(document.getElementById('sidelap').value);
    let distanciaOverlap = parseFloat(document.getElementById('overlap').value);
    let anchoFotografia =  parseFloat(document.getElementById("photoWidth").value);
    let altoFotografia = parseFloat(document.getElementById("photoHeight").value);

    let ascendente = true; 

    puntos.push([tofx, tofy]);

    stepHorizontal = distanciaSidelap;
    stepVertical = distanciaOverlap;

    let distancia1  = []; //xmin ymin
    let distancia2  = []; //xmin ymax
    let distancia3  = []; //xmax ymin
    let distancia4  = []; // xmax ymax

    distancia1 = Math.sqrt(Math.pow(xmin-tofx,2)+Math.pow(ymin-tofy,2));
    distancia2 = Math.sqrt(Math.pow(xmin-tofx,2)+Math.pow(ymax-tofy,2));
    distancia3 = Math.sqrt(Math.pow(xmax-tofx,2)+Math.pow(ymin-tofy,2));
    distancia4 = Math.sqrt(Math.pow(xmax-tofx,2)+Math.pow(ymax-tofy,2));


    if(distancia1<distancia2 && distancia1<distancia3 && distancia1<distancia4){ //xmin ymin
        puntos.push([xmin,ymin]);
        ascendente = false;
        
        for (let i=xmin ;i<xmax; i+= stepHorizontal){
            if (ascendente){
                for (let j=ymax;j>ymin; j-= stepVertical){
                    x = i;
                    y = j;
                
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                } 
            }else{
                for (let j=ymin;j<ymax; j+= stepVertical){
                    x = i;
                    y = j;
                    
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                }
        
            }
            ascendente = !ascendente;
            document.getElementById("svgContainer").appendChild(photocenter);

        }

    }else if(distancia2<distancia1 && distancia2<distancia3 && distancia2<distancia4){  //xmin ymax
        puntos.push([xmin,ymax]);
        ascendente = true;

        for (let i=xmin ;i<xmax; i+= stepHorizontal){
            if (ascendente){
                for (let j=ymax;j>ymin; j-= stepVertical){
                    x = i;
                    y = j;
                
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                } 
            }else{
                for (let j=ymin;j<ymax; j+= stepVertical){
                    x = i;
                    y = j;
                    
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                }
        
            }
            ascendente = !ascendente;
            document.getElementById("svgContainer").appendChild(photocenter);

        }

    }else if(distancia3<distancia1 && distancia3<distancia2 && distancia3<distancia4){  //xmax ymin
        puntos.push([xmax,ymin]);
        ascendente = false;

        for (let i=xmax ;i>xmin; i-= stepHorizontal){
            if (ascendente){
                for (let j=ymax;j>ymin; j-= stepVertical){
                    x = i;
                    y = j;
                
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                } 
            }else{
                for (let j=ymin;j<ymax; j+= stepVertical){
                    x = i;
                    y = j;
                    
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                }
        
            }
            ascendente = !ascendente;
            document.getElementById("svgContainer").appendChild(photocenter);
        }

    }else if(distancia4<distancia1 && distancia4<distancia2 && distancia4<distancia3){  //xmax ymax
        puntos.push([xmax,ymax]);
        ascendente = true;

        for (let i=xmax ;i>xmin; i-= stepHorizontal){
            if (ascendente){
                for (let j=ymax;j>ymin; j-= stepVertical){
                    x = i;
                    y = j;
                
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                } 
            }else{
                for (let j=ymin;j<ymax; j+= stepVertical){
                    x = i;
                    y = j;
                    
                    puntos.push([x, y]);
                    photocenter.appendChild(paintCircle(x,y));
                }
        
            }
            ascendente = !ascendente;
            document.getElementById("svgContainer").appendChild(photocenter);
        }   
    
    }
    puntos.push([landx,landy]);
    paintPath(puntos);
}

function createMission2(){

    photocenter = document.createElementNS(svgNS,"g");
    document.getElementById("svgContainer").appendChild(photocenter);

    let xmin = parseInt(document.getElementById('xMin').value);
    let ymin = parseInt(document.getElementById('yMin').value);
    let xmax = parseInt(document.getElementById('xMax').value);
    let ymax = parseInt(document.getElementById('yMax').value);

    let _xmin = xmin;
    if(_xmin>xmax){
        xmin = xmax;
        xmax = _xmin
    }

    let _ymin = ymin;
    if(_ymin>ymax){
        ymin = ymax;
        ymax = _ymin
    }

    // var puntos = new Array; 
    
    let puntos = [];
    let x = xmin;
	let y = ymin;
    let distanciaSidelap=parseFloat(document.getElementById('sidelap').value);
    let distanciaOverlap=parseFloat(document.getElementById('overlap').value);
    let ascendente = true;
    puntos.push([x, y]);

    for (let i=xmin ;i<xmax; i+= distanciaSidelap){

        if (ascendente){
            for (let j=ymax;j>ymin; j-= distanciaOverlap){
                x = i;
                y = j;
                
                puntos.push([x, y]);

                // paintCircle(x,y)

                photocenter.appendChild(paintCircle(x,y));
            } 
        }else{
            for (let j=ymin;j<ymax; j+= distanciaOverlap){
                x = i;
                y = j;
                
                puntos.push([x, y]);

                // paintCircle(x,y)

                photocenter.appendChild(paintCircle(x,y));
            }
        
        }
        ascendente = !ascendente;
        document.getElementById("svgContainer").appendChild(photocenter);
    }
    paintPath(puntos);
}

function createPhotograms(){

    photogram = document.createElementNS(svgNS,"g");
    document.getElementById("svgContainer").appendChild(photogram);

    let xmin = parseInt(document.getElementById('xMin').value);
    let ymin = parseInt(document.getElementById('yMin').value);
    let xmax = parseInt(document.getElementById('xMax').value);
    let ymax = parseInt(document.getElementById('yMax').value);

    let _xmin = xmin;
    if(_xmin>xmax){
        xmin = xmax;
        xmax = _xmin
    }

    let _ymin = ymin;
    if(_ymin>ymax){
        ymin = ymax;
        ymax = _ymin
    }

    // var puntos = new Array; 
    
    let puntos = [];
    let x = xmin;
	let y = ymin;
    let distanciaSidelap=parseFloat(document.getElementById('sidelap').value);
    let distanciaOverlap=parseFloat(document.getElementById('overlap').value);
    let ascendente = true;
    puntos.push([x, y]);

    for (let i=xmin ;i<xmax; i+= distanciaSidelap){

        if (ascendente){
            for (let j=ymax;j>ymin; j-= distanciaOverlap){
                x = i;
                y = j;
                
                puntos.push([x, y]);

                // paintCircle(x,y)

                photogram.appendChild(paintRect(x,y));
            } 
        }else{
            for (let j=ymin;j<ymax; j+= distanciaOverlap){
                x = i;
                y = j;
                
                puntos.push([x, y]);

                // paintCircle(x,y)

                photogram.appendChild(paintRect(x,y));
            }
        
        }
        ascendente = !ascendente;
        document.getElementById("svgContainer").appendChild(photogram);
    }
    paintPath(puntos);
}

// function deletePhotocenters(){
//
//     d3.select(photocenter).remove();
//}

function hidePhotocenters(){

    let switx = document.getElementById("flexSwitchCheckDefault");
    
    if (switx.checked){
        photocenter.style.display = "block";
    } else {
        photocenter.style.display = "none";
    }

    console.log(switx);
}

function hidePhotograms(){

    let switx2 = document.getElementById("flexSwitchCheckDefault2");
    
    if (switx2.checked){
        photogram.style.display = "block";
    } else {
        photogram.style.display = "none";
    }

    console.log(switx2);
}