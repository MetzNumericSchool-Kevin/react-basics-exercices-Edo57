
const quandSorcierRepond = (message) => {
    alert(message);
};

function Exercice2() {
    return (
        <section id="exercice2">
            <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
            <BoutonAppelArchibald quandSorcierRepond={quandSorcierRepond} />
        </section>
    );
}

function BoutonAppelArchibald({quandSorcierRepond}) {
    return (
        <button onClick={() => quandSorcierRepond("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !")}>Appeler Archibald</button>
    );
}

export default Exercice2;
