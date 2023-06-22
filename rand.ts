// ----------------------- //
// RANDOM STRING GENERATOR //
// ---   by TangLink   --- //
// ----------------------- //


// EXAMPLE SET
let exampleSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"

function randString(length : number, set : string) : string {

    let output = ''

    const setLength = set.length

    for(let i = 0; i < length; i++){
        output += set.charAt(Math.floor(Math.random()*setLength))
    }

    return output
}

// EXAMPLE OUTPUTS FOR randString(5, exampleSet)
// pWJko
// 5HMLG
// 6EV79
// TYRke
// re4kF
