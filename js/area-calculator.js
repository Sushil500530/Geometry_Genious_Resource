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