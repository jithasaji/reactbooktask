import React, { useState } from 'react'
import './Sell.css'
import { uploadAllBooks } from '../Services/allAPI'
import { useNavigate } from 'react-router-dom';

function Sell() {
    const navigate = useNavigate();

    const [allBooks, setallBooks] = useState({
        bookImage: "",
        bookName: "",
        sellerName: "",
        authorName: "",
        year: "",
        price: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { bookImage, bookName, sellerName, authorName, year, price } = allBooks;
        if (!bookImage || !bookName || !sellerName || !authorName || !year || !price) {
            alert("Please fill all Fields")

        } else {
            const response = await uploadAllBooks(allBooks)
            navigate('/Buy ')

        }
    }

    console.log(allBooks);
    return (
        <>
            <div className='sell-container' >
                <div className='sell-section'>
                    <h2 className='sell-title'>sell your Books</h2>
                    <div className='sell-image'>
                        <img src="https://img.freepik.com/premium-vector/pile-student-books-icon-illustration-white-background_134830-290.jpg?size=626&ext=jpg" alt="sellimage" />
                    </div>
                    <div>
                        <form onSubmit={(e)=> handleSubmit(e)} className='bookDetails'>
                            <div >
                                <input onChange={(e) => setallBooks({ ...allBooks, bookImage: e.target.value })} type='text' name='bookImage' placeholder=' Provide image link' />
                            </div>

                            <div >
                                <input onChange={(e) => setallBooks({ ...allBooks, bookName: e.target.value })} type='text' name='bookName' placeholder=' Enter Book Name' />
                            </div>

                            <div >
                                <input onChange={(e) => setallBooks({ ...allBooks, sellerName: e.target.value })} type='text' name='sellerName' placeholder=' Enter Seller Name' />
                            </div>
                            <div>
                                <input onChange={(e) => setallBooks({ ...allBooks, authorName: e.target.value })} type='text' name='authorName' placeholder=' Enter Author Name' />
                            </div>
                            <div>
                                <input onChange={(e) => setallBooks({ ...allBooks, year: e.target.value })} type='number' name='year' placeholder=' Enter Year of Publication' />
                            </div>
                            <div>
                                <input onChange={(e) => setallBooks({ ...allBooks, price: e.target.value })} type='number' name='price' placeholder=' Enter price' />
                            </div>
                            <button type='submit' className='bottonSubmit'> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sell
