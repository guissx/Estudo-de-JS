const valor = 'Global'

function minhaf() {
    console.log(valor)
}

function exec() {
    const valor ="Local"
    minhaf()// vai achar "Global"
}

exec()