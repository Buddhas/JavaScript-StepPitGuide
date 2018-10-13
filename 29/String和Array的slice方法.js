

{
    let a = [1,2,3,4,5,6]
    let b = '123456'
    
    console.log(a.slice(1,2))
    
    console.log(b.split(""))
}


{
    let a = [1,2,3,4,5,6]
    let b = '123456'
    console.log(b.substr(1,3))
    console.log(b.substring(1,3))
}

{
    let a = [1,2,3,4,5,6]
    let b = '123456'
    a.splice(1,0,11,23)
    console.log(a)
}