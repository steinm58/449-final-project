import { useState } from "react";
import './Form.css';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://erkzeebproyxndkeplri.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVya3plZWJwcm95eG5ka2VwbHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTU3MjAsImV4cCI6MjAyOTIzMTcyMH0.6O7yYEACkmLdki799k1Zd-tsMhyumkp--xY4aFbkVH0'
const supabase = createClient(supabaseUrl, supabaseKey)

function FormTBR() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [deleteTitle, setDeleteTitle] = useState('');
    const [deleteAuthor, setDeleteAuthor] = useState('');

    const submitFormAdd  = async (event) => {
        const { data } = await supabase.from('books to read').insert([{ title, author }]);
        setTitle(data);
        setAuthor(data);  
    };

    const submitFormDelete = async (event) => {
        await supabase.from('books to read').delete().eq('title', deleteTitle).eq('author', deleteAuthor);
    }

    return (
    <div class="forms">
        <form onSubmit={submitFormAdd}>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Book Title"></input>
            <br></br>
            <br></br>
            <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Author Name"></input>
            <br></br><br></br>
            <button type="submit">Add Book</button>
        </form>
        <form onSubmit={submitFormDelete}>
            <input type="text" value={deleteTitle} onChange={(event) => setDeleteTitle(event.target.value)} placeholder="Book Title"></input>
            <br></br>
            <br></br>
            <input type="text" value={deleteAuthor} onChange={(event) => setDeleteAuthor(event.target.value)} placeholder="Author Name"></input>
            <br></br><br></br>
            <button type="submit">Delete Book</button>
        </form>
    </div>
    )

}

export default FormTBR;