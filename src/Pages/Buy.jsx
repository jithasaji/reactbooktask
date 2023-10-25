import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './Buy.css';
import { deleteABook, getAllBooks } from '../Services/allAPI';
import { Link } from 'react-router-dom';


function Buy() {
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [allBooks, setAllBooks] = useState([])
    const getAllUploadedBooks = async () => {
        const response = await getAllBooks()
        setAllBooks(response.data)
    }

    useEffect(() => {
        getAllUploadedBooks()
        setDeleteStatus(false)
    }, [deleteStatus])
    const removeABook = async (id) => {
        await deleteABook(id)
        setDeleteStatus(true)
    }
    return (
        <>
            <div className='buy-container'>
                <div className='buy-section'>
                    <div className='buy-title'> BUY BOOKS</div>
                    <div className='card-section'>
                        {allBooks?.length > 0 ?
                            allBooks?.map(item => (

                                <div className='card-content'>

                                    <Card style={{ width: '16rem' }}>
                                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.FIwzfGoUtTCAJXGixMxoLQHaK3&pid=Api&rs=1&c=1&qlt=95&w=80&h=117" />
                                        <Card.Body>
                                            <Card.Title>{item.bookName}</Card.Title>
                                            <Card.Text>
                                                <div className='price-tag'>
                                                    <div> <i class="fa-solid fa-indian-rupee-sign"></i></div>
                                                    <div> <h4>{item.price}</h4></div>
                                                </div>
                                                <h5>{item.authorName}</h5>
                                            </Card.Text>
                                            <div className='button-content'>
                                                <Button onClick={() => removeABook(item.id)} variant="primary">Delete</Button>
                                                <Link className='link-button' to={`/edit/${item.id}`}><Button variant="primary">Edit</Button></Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )) : <p className='nothintoshow'>Nothing to show</p>

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Buy
