import React from 'react';


function UseState({ name }){
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    // Usamos useEffect para eliminar el estado de carga (loading)
    React.useEffect(() => {
        console.log("Empezando el efecto");

        if (!!loading){
            setTimeout(() => {
                console.log("Haciendo la validacion");
                
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

            <input placeholder='Código de seguridad' />
            <button
                onClick={() => setLoading(true)}
            >
                Comprobar
            </button>
        </div>
    );
}

export { UseState };