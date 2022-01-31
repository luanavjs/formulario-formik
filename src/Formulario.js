import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	
	return (
		<>
		<Formik
			initialValues={{
				nombre: '',
				correo: ''
			}}
			validate={(valores)=>{
				let errores = {}

				//Validacion nombre
				if(!valores.nombre)
					errores.nombre = 'Por favor ingrese un nombre'
				else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre sólo puede contener letras, espacios y no más de 40 caracteres.'
				}

				//Validacion Correo
				if(!valores.correo)
					errores.correo = 'Por favor ingrese un correo'
				else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El correo sólo puede contener letras, números, puntos, guiones y guion bajo.'
				}
				return errores
			}}
			onSubmit={(valores, {resetForm})=>{
				resetForm()
				console.log('Formulario enviado')
			}}
			
		>
			{({values, errors, touched, handleSubmit, handleChange, handleBlur})=>(
				<form className='formulario' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='nombre'>Nombre</label>
						<input 
							type='text' 
							id='nombre' 
							name='nombre' 
							placeholder='Luanita' 
							value={values.nombre}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
					</div>
					<div>
						<label htmlFor='correo'>Correo</label>
						<input 
							type='email'
							id='correo' 
							name='correo' 
							placeholder='lulu@gmail.com' 
							value={values.correo}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
					</div>
					<button type='submit'>Enviar</button>
				</form>
			)}
			
		</Formik>
			
		</>
	);
}
 
export default Formulario;