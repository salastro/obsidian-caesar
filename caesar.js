const txt = 'hello world.'
const pass = 'salahahmed'
const alpha = "abcdefghijklmnopqrstuvwxyz"

function index_txt(txt) {
    index = []
    for (let i = 0, len = txt.length; i < len; i++) {
        index.push(alpha.indexOf(txt[i]))
    }
    return index
}

function shift_pass(pass) {
    shift = []
    for (let i = 0, len = pass.length; i < len; i++) {
        shift.push(alpha.indexOf(pass[i]))
    }
    return shift
}

function ceaser_enc(txt, pass) {
    index = index_txt(txt)
    shift = shift_pass(pass)
    index_enc = []
    enc = ""

    for (let i = 0, len = index.length; i < len; i++) {
        index_enc.push( (index[i] + shift[i%shift.length] ) % alpha.length)
    }

    for (let i = 0, len = index_enc.length; i < len; i++) {
        if (index[i] == -1) {
            enc += txt[i]
        } else {
            enc += alpha[index_enc[i]]
        }
    }

    return enc
}

function ceaser_dec(txt, pass) {
    index = index_txt(txt)
    shift = shift_pass(pass)
    index_dec = []
    dec = ""

    for (let i = 0, len = index.length; i < len; i++) {
        index_dec.push(index[i] - shift[i%shift.length])
    }

    for (let i = 0, len = index_dec.length; i < len; i++) {
        if (index[i] == -1) {
            dec += txt[i]
        } else {
            dec += alpha.at(index_dec[i])
        }
    }

    return dec
}

enc = ceaser_enc(txt, pass)
dec = ceaser_dec(enc, pass)

console.log(enc);
console.log(dec);
