import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listAsyn } from '../redux/actions/actionPokes';
import Editar from './Editar';

const Listar = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { pokes } = useSelector(store => store.pokes)

    useEffect(() => {
        dispatch(listAsyn())
    }, [])

    const editar = (codigo) => {
        //--------t=conseguir los datos de ese objeto con ese codigo--------------//
        const traerPokemon = pokes.find(t => t.codigo === codigo)

        setModal(true)
        setEnviarDatosModal(traerPokemon)


    }

    return (
        <div>
            <Table>
                <thead>
                </thead>
                <tbody>
                    {
                        pokes.map((poke, index) => (
                            <tr key={index}>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: poke.foto
                                        },
                                        largeImage: {
                                            src: poke.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </td>
                                <td>{poke.nombre}</td>
                                <td>{poke.codigo}</td>
                                <td>{poke.tipo}</td>
                                
                                <td>
                                    <Button margin={10} onClick={() => dispatch(deleteAsync(poke.codigo))}> <Image onClick={() => dispatch(deleteAsync(poke.codigo))} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png' /> </Button>

                                    <Button margin={10} onClick={() => editar(poke.codigo)}> <Image onClick={() => editar(poke.codigo)} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' /></Button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            {
                modal === true ? <Edit modal={enviarDatosModal} setModal={setModal}/> : ''
            }
        </div>
    );
};

export default Listar;