
import React, {useState} from 'react';
import {Formulario, Label, ContenedorTermino, ContenedorBotonCentral, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';

const App = () => {
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [documento, cambiarDocumento] = useState({campo: '', valido: null});
	const [puesto, cambiarPuesto] = useState({campo: '', valido: null});
  	const [pais, cambiarPais] = useState({campo: '', valido: null});
  	const [ciudad, cambiarCiudad] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    puesto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios pueden llevar acentos.
    pais: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios pueden llevar acentos.
	documento: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			apellido.valido === 'true' &&
            nombre.valido === 'true' &&
            documento.valido === 'true' &&
            puesto.valido === 'true' &&
            ciudad.valido === 'true' &&
          	pais.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: ''});
			cambiarApellido({campo: '', valido: null});
            cambiarDocumento({campo: '', valido: null});
            cambiarPuesto({campo: '', valido: null});
			cambiarCiudad({campo: '', valido: null});
			cambiarPais({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Apellido"
					name="Apellido"
					leyendaError="El Apellido solo puede contener letras"
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Nombre"
					name="Nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={documento}
					cambiarEstado={cambiarDocumento}
					tipo="text"
					label="Documento"
					placeholder="Documento"
					name="Documento"
					leyendaError="El Documento solo puede contener numeros y letras."
					expresionRegular={expresiones.documento}
				/>
				<Input
					estado={puesto}
           			cambiarEstado={cambiarPuesto}
            		tipo="text"
            		label="Puesto"
            		placeholder="Puesto"
           			name="Puesto"
           			leyendaError="El Puesto solo puede contener letras y espacios."
            		expresionRegular={expresiones.puesto}
				/>
				<Input
					estado={ciudad}
            		cambiarEstado={cambiarCiudad}
            		tipo="text"
            		label="Ciudad"
            		placeholder="Ciudad"
            		name="Ciudad"
            		leyendaError="El nombre solo puede contener letras y espacios."
            		expresionRegular={expresiones.ciudad}
				/>
        <Input
					estado={pais}
            		cambiarEstado={cambiarPais}
            		tipo="text"
            		label="Pais"
            		placeholder="Pais"
            		name="Pais"
            		leyendaError="El nombre solo puede contener letras y espacios."
            		expresionRegular={expresiones.pais}
		/>
		<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="giuliano@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
		/>
		<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
		/>



		<ContenedorTermino>
			<Label>
				<input 
					type="checkbox"
					name="terminos"
					id="terminos"
					checked={terminos} 
					onChange={onChangeTerminos}
				/>
					Acepto los Terminos y Condiciones
			</Label>
				</ContenedorTermino>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentral>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentral>
			</Formulario>
		</main>
	);
}
 
export default App;