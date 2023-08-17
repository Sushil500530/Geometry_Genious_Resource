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
    
        // calculate area 
        const triangleArea = 0.5 * inputBase * inputHeight ;
        // console.log(triangleArea)
        const areaResult = document.getElementById('area')
        areaResult.innerText = triangleArea
    
    }
    function calculateRactanglerArea(){
        const inputRactangleBase = document.getElementById('ractangle-base').value ;
        const base = parseFloat(inputRactangleBase) ;
        const inputRactangleHeight = document.getElementById('ractangle-height').value ;
        const height = parseFloat(inputRactangleHeight) 
        const ractangleArea = base * height ;
        const ractangle = document.getElementById('rectangle')
        ractangle.innerText = ractangleArea
    }

    function calculateParallelogramArea(){
        const base = getInputValue('parallelogram-base')
         const height = getInputValue('parallelogram-height')   
         const area = base * height ;
        //  const paralleArea = document.getElementById('parallelogram') 
        //  paralleArea.innerText = area ;
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
        const area = 3.1416 * ellipseMajor * ellipseMinor ;
        // const area = Math.PI*(ellipseMajor * ellipseMinor)
        setElementInnerText('Ellipse', area)
    }