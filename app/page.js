function Gato({ cor, laco }) {
  return (
    <div className={`gato ${cor}`}>
      <div className="rabo" />
      <div className="perna p1" />
      <div className="perna p2" />
      <div className="perna p3" />
      <div className="perna p4" />
      <div className="corpo" />
      <div className="orelha e1" />
      <div className="orelha e2" />
      <div className="cabeca" />
      {laco && <div className="laco" />}
      <div className="olho o1" />
      <div className="olho o2" />
      <div className="nariz" />
    </div>
  );
}

export default function Home() {
  return (
    <details className="surpresa">
      <summary>Aperte para ver...</summary>
      <div className="cena" aria-hidden="true">
        <div className="poca" />
        <Gato cor="preto" />
        <Gato cor="branco" laco />
        <div className="jato">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="gota" />
          ))}
        </div>
        <div className="grito">MIAAAU!</div>
      </div>
    </details>
  );
}
