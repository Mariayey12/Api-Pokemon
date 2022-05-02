import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { editAsync } from '../redux/actions/actionPokes';

const Editar = ({ modal, setModal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange] = useForm({
        nombre: modal.nombre,
        codigo: modal.codigo,
        descripcion: modal.descripcion,
        

    })

    const { nombre, codigo, descripcion} = values

    const handleSubmit = (e) => {
        e.preventDefault()
      
       dispatch(editAsync(codigo, values))
       console.log( values)
      handleClose()

    }
    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={()=>handleSubmit()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de la Pokemon</Form.Label>
                                <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" name="descripcion" placeholder="Enter descripcion" value={descripcion} onChange={handleInputChange} />

                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                            
                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
};

export default Editar;