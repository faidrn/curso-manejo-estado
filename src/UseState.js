import React from 'react';


const SECURITY_CODE = 'paradigma';

function UseState({ name }){
    const [value, setValue] = React.useState(''); // Este estado cambia o depende de lo que los usuarios digiten
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value);

    // Usamos useEffect para eliminar el estado de carga (loading)
    React.useEffect(() => {
        console.log("Empezando el efecto");

        if (!!loading){
            setError(false); // Quitamos el mensaje de error cada vez q esta comparando los códigos
            setTimeout(() => {
                console.log("Haciendo la validacion");
                
                if (value !== SECURITY_CODE){
                    setError(true);
                }
                
                setLoading(false);

                console.log("Terminando la validacion");
            }, 3000);
        }
        

        console.log("Terminando el efecto");
    }, [loading]); // Este array vacio indica que este código solo se va a ejecutar cuando se renderice por primera vez

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>

            {error && (
                <p>Error: el código es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input 
                placeholder='Código de seguridad' 
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <button
                onClick={() => setLoading(true)}
            >
                Comprobar
            </button>
        </div>
    );
}

export { UseState };