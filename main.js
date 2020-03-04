const newTD = document.createElement('td');

add = (e, ev, f) => e.addEventListener(ev, f);

let chords = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];

var selectedValue = '';

const select = document.getElementById('chord--selector');
const button = document.getElementById('chord--check');

//! nodes

let chord = '';

//!

checkSelectValue = () => selectedValue = select.value;

const len = chords.length;

add(button, 'click', () => {
    clear();

    if (!selectedValue)
        alert('select a chord!');
    else {

        for (let i = 0; i < len; i++) {

            if (selectedValue === chords[i]) {
                if (i != 0) {
                    let spliced = chords.splice(0, i);
                    spliced.forEach(x => chords.push(x));
                }

                //! acorde
                chord = `${chords[0]} / ${chords[4]} / ${chords[7]}`;
                createTD1(chord);

                //! diminuto
                chord = `${chords[9]} / ${chords[0]} / ${chords[3]} / ${chords[6]}`;
                createTD1(chord);

                //! tensão
                chord = `${chords[4]}m or ${chords[0]}m`;
                createTD1(chord);

                //! clareza
                chord = `${chords[7]}`;
                createTD1(chord);

                //! medo
                chord = `${chords[4]}`;
                createTD1(chord);

                //! suspense de transição
                chord = `${chords[4]} with ${chords[8]} on the bass`;
                createTD2(chord);

                //! suspense
                chord = `${chords[6]}`;
                createTD2(chord);

                //! transição de baixo
                chord = `${chords[0]} with ${chords[4]} on the bass`;
                createTD2(chord);

                //! emoção
                chord = `${chords[9]}m7`;
                createTD2(chord);

                //! transição
                chord = `${chords[7]} with ${chords[11]} on the bass`;
                createTD2(chord);

                break;
            }
        }
    }
})

function createTD1(x) {
    const newTD = document.createElement('td');

    const firstRow = document.getElementById('first-row');

    let content = document.createTextNode(x);

    newTD.appendChild(content);
    firstRow.appendChild(newTD);
}

function createTD2(x) {
    const newTD = document.createElement('td');

    const secondRow = document.getElementById('second-row');

    let content = document.createTextNode(x);

    newTD.appendChild(content);
    secondRow.appendChild(newTD);
}

function clear() {
    let node = document.getElementById("first-row");
    let nodeDois = document.getElementById("second-row");

    while (node.hasChildNodes() && nodeDois.hasChildNodes()) {
        node.removeChild(node.lastChild);
        nodeDois.removeChild(nodeDois.lastChild);
    }
}
