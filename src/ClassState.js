import React from 'react';
import { Loading } from './loading';


const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false,
        }
    }

    // En las clases usamos métodos del ciclo de vida en vez de useEffect
    // este método se ejecuta antes de renderizar el componente
    /* UNSAFE_componentWillMount(){
        console.log("componentWillMount");
    } */

    /* componentDidMount(){
        console.log("componentDidMount");
    } */

    componentDidUpdate(){
        console.log("Actualizacción");

        // Si loading es true, vamos a actualizar el estado para q loading sea false
        if (!!this.state.loading){

            setTimeout(() => {
                console.log("Haciendo validación");

                if (SECURITY_CODE === this.state.value){
                    this.setState({ error: false, loading: false });
                } else{
                    this.setState({ error: true, loading: false });
                }

                console.log("Terminando validación");
            }, 2000);
        }
    }

    render(){
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: el código es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input 
                    placeholder='Código de seguridad' 
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                />
                <button
                    onClick={() => this.setState({loading: true})}
                >
                    Comprobar
                </button>
            </div>
        );
    }
}

export { ClassState };