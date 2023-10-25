import React, { useEffect, useState } from 'react'
import './Sell.css'
import { getABook, updateABook } from '../Services/allAPI'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Editpage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [fetchABook, setFetchABook] = useState({
        id: id,
        bookImage: "",
        bookName: "",
        sellerName: "",
        authorName: "",
        year: "",
        price: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault()
        const { bookImage, bookName, sellerName, authorName, year, price} = fetchABook;

        if (bookImage && bookName && sellerName && authorName && year && price ) {
            await updateABook(id, fetchABook);  
            navigate('/Buy')
        } else {
            alert("Please fill all the fields");
        }
    }

    
    const getABookToEdit = async (id) => {
        const response = await getABook(id)
        setFetchABook(response.data)
    }

    useEffect(() => {
        getABookToEdit(id)
    }, [id])

    return (
        <>
            <div className='sell-container' >
                <div className='sell-section'>
                    <h2 className='sell-title'>sell your Books</h2>
                    <div className='sell-image'>
                        <img src="https://img.freepik.com/premium-vector/pile-student-books-icon-illustration-white-background_134830-290.jpg?size=626&ext=jpg" alt="sellimage" />
                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)} className='bookDetails'>
                            <div >
                                <input type='text' name='bookimage' value={fetchABook.bookImage} onChange={(e)=>setFetchABook({...fetchABook,bookImage:e.target.value})} placeholder=' Provide image link' />
                            </div>
                            <div >
                                <input type='text' name='bookName' value={fetchABook.bookName} onChange={(e)=>setFetchABook({...fetchABook,bookName:e.target.value})} placeholder=' Enter Book Name' />
                            </div>
                            <div >
                                <input type='text' name='sellerName' value={fetchABook.sellerName} onChange={(e)=>setFetchABook({...fetchABook,sellerName:e.target.value})} placeholder=' Enter Seller Name' />
                            </div>
                            <div>
                                <input type='text' name='authorName' value={fetchABook.authorName} onChange={(e)=>setFetchABook({...fetchABook,authorName:e.target.value})} placeholder=' Enter Author Name' />
                            </div>
                            <div>
                                <input type='number' name='year' value={fetchABook.year} onChange={(e)=>setFetchABook({...fetchABook,year:e.target.value})} placeholder='Enter Year of Publication' />
                            </div>
                            <div>
                                <input type='number' name='price' value={fetchABook.price} onChange={(e)=>setFetchABook({...fetchABook,price:e.target.value})} placeholder=' Enter price' />
                            </div>
                            <button type='submit' className='bottonSubmit'> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editpage
