



function soma(body)
{
    return (parseFloat(body.n1) + parseFloat(body.n2));

}



function subtracao(body)
{
    return (parseFloat(body.n1) - parseFloat(body.n2));

}

function multiplicação(body)
{
    return (parseFloat(body.n1) * parseFloat(body.n2));

}


function divisão(body)
{
    return (parseFloat(body.n1) / parseFloat(body.n2));

}




module.exports = {
    soma,
    subtracao,
    multiplicação,
    divisão
}