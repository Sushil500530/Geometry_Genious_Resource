function calculatorTriangleArea(){
    //    get base triangle value 
        const inputBaseElement = document.getElementById('input-base').value ;
        // console.log(typeof inputTriangle)
        const inputBase = parseFloat(inputBaseElement) 
        // console.log(inputBase)
        //    get height triangle value 
        const inputHeightElement = document.getElementById('input-height').value ;
        const inputHeight = parseFloat(inputHeightElement) 
        // console.log(inputHeight)
        // validation 
        if(isNaN(inputBase) || isNaN(inputHeight)){
            alert('please insert a number...!') 
            return ;
        }
    
        // calculate area 
        const triangleArea = 0.5 * inputBase * inputHeight ;
        // console.log(triangleArea)
        const areaResult = document.getElementById('area')
        areaResult.innerText = triangleArea ;

        // set entry details  output a dekha jabe(name and value ta)
        addCalculatioEntry('Triangle', triangleArea)
    
    }
    // Rhombus Area 
function calculatorRhombusArea(){
    //    get base triangle value 
        const inputD1Element = document.getElementById('input-d1').value ;
        // console.log(typeof inputTriangle)
        const inputD1 = parseFloat(inputD1Element) 
        // console.log(inputBase)
        //    get height triangle value 
        const inputD2Element = document.getElementById('input-d2').value ;
        const inputD2 = parseFloat(inputD2Element) 
        // console.log(inputHeight)
        // validation 
        if(isNaN(inputD1) || isNaN(inputD2)){
            alert('please insert a number...!') 
            return ;
        }
    
        // calculate area 
        const rhombusArea = 0.5 * inputD1 * inputD2 ;
        // console.log(triangleArea)
        const areaResult = document.getElementById('rhombus-area')
        areaResult.innerText = rhombusArea ;

        // set entry details  output a dekha jabe(name and value ta)
        addCalculatioEntry('Rhombus', rhombusArea)
    
    }
    // Ractangle Area 
    function calculateRactanglerArea(){
        const inputRactangleBase = document.getElementById('ractangle-base').value ;
        const width = parseFloat(inputRactangleBase) ;
        const inputRactangleHeight = document.getElementById('ractangle-height').value ;
        const length = parseFloat(inputRactangleHeight) 
        // valided input: width and length 
        if(isNaN(width) || isNaN(length)){
           alert('please insert a number...!')
           return ;
        }

        const ractangleArea = width * length ;
        const ractangle = document.getElementById('rectangle')
        ractangle.innerText = ractangleArea ;

        // set entry details 
        addCalculatioEntry('Rectangle', ractangleArea)
    }
    // Parallelogram Area 
    function calculateParallelogramArea(){
        const base = getInputValue('parallelogram-base')
         const height = getInputValue('parallelogram-height')
         
        //  validation 
        if(isNaN(base) || isNaN(height)){
            alert('please insert a number...!') 
            return ;
        }
        const area = base * height ;
        //  paralleArea.innerText = area ;
        //  const paralleArea = document.getElementById('parallelogram') 

        // add to calculation entry 
        addCalculatioEntry('parallelogram', area)
        // set entry details 
         setElementInnerText('parallelogram',area)
     }
     // reusable function 
     function getInputValue(fieldId){
         const inputField = document.getElementById(fieldId).value ;
         const value = parseFloat(inputField) ;
         return value ;
     }
     // reusable set span,text,p, div, etc value of function 
     function setElementInnerText(elementId, area){
         const element = document.getElementById(elementId) 
         element.innerText = area ;
     }

    //  ellipse area 
    function calculateEllipseArea(){
        const ellipseMajor = getInputValue('Ellipse-a')
        const ellipseMinor = getInputValue('Ellipse-b') 
        // validation 
        if(isNaN(ellipseMajor) || isNaN(ellipseMinor)){
            alert('please insert a number...!') 
            return ;
        }
        const area = 3.1416 * ellipseMajor * ellipseMinor ;
        const areaResult = area.toFixed(2)
        // const area = Math.PI*(ellipseMajor * ellipseMinor)
        setElementInnerText('Ellipse', areaResult)
        
        // set entry details 
        addCalculatioEntry('Ellipse', areaResult)
    }
    // pantagon area 
    function calculatorPentagonArea(){
        const pentagonP = getInputValue('input-p')
        const pentagonB = getInputValue('input-b') 
        // validation 
        if(isNaN(pentagonP) || isNaN(pentagonB)){
            alert('please insert a number...!') 
            return ;
        }
        const pentagonArea = 0.5 * pentagonP * pentagonB ;
        const areaResult = pentagonArea.toFixed(2)
        // const area = Math.PI*( pentagonP * pentagonB)
        setElementInnerText('pentagon-area', areaResult)
        
        // set entry details 
        addCalculatioEntry('Pentagon', areaResult)
    }

    // add to calculation entry 
    /*
    1.get the element where you want to added the dynamic HTML
    2.create an element you want to add 
    3.if you need some class 
    4.set inner HTML,it could be dynamic template string
    5.append the created element as a child of the parent 
    */
    function addCalculatioEntry(areaType , area){
        console.log(areaType + ' ' + area)
        const calculationEntry = document.getElementById('calculation-details')

        // koyta element ace seta dekhar jonno 
        const count = calculationEntry.childElementCount ;
        
        const p = document.createElement('p') ;
        p.classList.add('my-4')
        p.innerHTML = `${count + 1} ${areaType} ${area} cm<sup>2</sup> <button class ="btn btn-sm btn-success" id="btn-delete">Convert</button>`;
        // p.innerHTML = areaType + ' ' + area ;
        calculationEntry.appendChild(p)
        // document.getElementById('btn-delete').addEventListener('click',function(event){
        //     event.parentNode.childNodes 
        //     console.log(event)
        // })
        //const btn = document.getElementById('btn-delete')
        // btn.target.p
    }
    
    // data validation 
    /*
    1.set the proper type of the input field( number,email,data,emeil) 
    2.check type using typeof 
    3.isNaN-(Not a Number)...checking number

    */