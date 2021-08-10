export function Page2(props) {

  return (

    <div>
      <div
        style={{
          height: '50vh',
          background: 'green',
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          fontSize: '1.5rem',
        }}
      >Pagina 2
      </div>

      {/*no Botão criamos no evento "onClick" um redirecionamento para uma rota específica,
            nele utilizamos o metodo "push" do history que é recebido pelas props.
            */}
      <button onClick={() => {
        props.history.goBack();
      }}>back</button>

      <button onClick={() => {
        props.history.push('/page3');
      }}>next</button>

    </div>


  );
}
