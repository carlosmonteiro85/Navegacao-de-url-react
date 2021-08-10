export function Page1(props) {
    return (
        <div>
            <div
                style={{
                    height: '50vh',
                    background: 'red',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    fontSize: '1.5rem',
                }}
            >Pagina 1
            </div>

            {/*no Botão criamos no evento "onClick" um redirecionamento para uma rota específica,
            nele utilizamos o metodo "push" do history que é recebido pelas props.
            */}
            <button onClick={ () => {
                props.history.push('/page2');
            }}>next</button>

        </div>
    );
}
