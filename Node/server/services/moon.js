const milDias = (1000 * 60 * 60 * 24);
const ciclo = 29.530588;


const getMoon = (date) => {

    if (isNaN(Date.parse(date))) {
        return JSON.parse({
            ok: false,
            err: 'Fecha no valida'
        });
    }
    let old = new Date('1923-01-17T02:41:00.000Z');
    // let old = new Date('1923-01-17');
    let dif = date.getTime() - old.getTime();

    dif = (dif / milDias);
    dif = dif / ciclo;

    let entero = Math.floor(dif);

    let day = (dif - (entero)) * ciclo;

    let moon = '';

    if (day >= 0 && day <= (ciclo / 4)) { moon = 'ln'; } else if (day >= (ciclo / 4) && day <= (ciclo / 4) * 2) { moon = 'cc'; } else if (day >= (ciclo / 4) * 2 && day <= (ciclo / 4) * 3) { moon = 'll'; } else if (day >= (ciclo / 4) * 3 && day <= (ciclo)) { moon = 'cm'; }

    return {
        ok: true,
        moon: 'luna',
        date,
        moon,
        // dif,
        day: Math.round(day),
        lunation: entero + 1
    };

};

const getLunation = (datei, datef) => {

    return {
        ok: true,
        datei,
        datef
    };

}


module.exports = {
    getMoon,
    getLunation
}