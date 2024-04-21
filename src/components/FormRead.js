import { useState } from "react";
import './Form.css';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl2 = 'https://todiopzzcesarenypjrx.supabase.co'
const supabaseKey2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGlvcHp6Y2VzYXJlbnlwanJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTYyNjcsImV4cCI6MjAyOTIzMjI2N30.l6Pto1jKFaCvZtKGLqyRAHEIBiR92sYAdZYHef0kilw'
const supabase2 = createClient(supabaseUrl2, supabaseKey2)

function FormRead() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [deleteTitle, setDeleteTitle] = useState('');
    const [deleteAuthor, setDeleteAuthor] = useState('');
    const [deleteRating, setDeleteRating] = useState('');

    const submitFormAdd  = async (event) => {
        const { data } = await supabase2.from('books read').insert([{ title, author, rating }]);
        setTitle(data);
        setAuthor(data);
        setRating(data);  
    };
  
    const submitFormDelete = async (event) => {
        await supabase2.from('books read').delete().eq('title', deleteTitle).eq('author', deleteAuthor);
    }

    return (
        <div class="forms">
            <form onSubmit={submitFormAdd}>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Book Title"></input>
                <br></br>
                <br></br>
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Author Name"></input>
                <br></br>
                <br></br>
                <input type="text" value={rating} onChange={(event) => setRating(event.target.value)} placeholder="Rating X/5"></input>
                <br></br><br></br>
                <button type="submit">Add Book</button>
            </form>
            <form onSubmit={submitFormDelete}>
                <input type="text" value={deleteTitle} onChange={(event) => setDeleteTitle(event.target.value)} placeholder="Book Title"></input>
                <br></br>
                <br></br>
                <input type="text" value={deleteAuthor} onChange={(event) => setDeleteAuthor(event.target.value)} placeholder="Author Name"></input>
                <br></br>
                <br></br>
                <input type="text" value={deleteRating} onChange={(event) => setDeleteRating(event.target.value)} placeholder="Rating X/5"></input>
                <br></br><br></br>
                <button type="submit">Delete Book</button>
            </form>
        </div>
    )
}

export default FormRead;