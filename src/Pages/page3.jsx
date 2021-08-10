export function Page3(props) {
  return (
    <div>
      <div
        style={{
          height: '50vh',
          background: 'yellow',
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          fontSize: '1.5rem',
        }}
      >Pagina 3
      </div>

      {/*no Botão criamos no evento "onClick" um redirecionamento para uma rota específica,
            nele utilizamos o metodo "goBack" do history que é recebido pelas props que retorna
            a pafina anterior.*/}
      <button onClick={() => {
        props.history.goBack();
      }}>back</button>

    </div>
  );
}
