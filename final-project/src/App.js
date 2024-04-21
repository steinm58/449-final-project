import { useEffect, useState } from "react";
import Header from './components/Header.js';
import FormTbr from './components/FormTbr.js';
import FormRead from './components/FormRead.js';
import './App.css';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://erkzeebproyxndkeplri.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVya3plZWJwcm95eG5ka2VwbHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTU3MjAsImV4cCI6MjAyOTIzMTcyMH0.6O7yYEACkmLdki799k1Zd-tsMhyumkp--xY4aFbkVH0'
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseUrl2 = 'https://todiopzzcesarenypjrx.supabase.co'
const supabaseKey2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZGlvcHp6Y2VzYXJlbnlwanJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NTYyNjcsImV4cCI6MjAyOTIzMjI2N30.l6Pto1jKFaCvZtKGLqyRAHEIBiR92sYAdZYHef0kilw'
const supabase2 = createClient(supabaseUrl2, supabaseKey2)

function App() {
  const [booksToRead, setBooksToRead] = useState([]);
  const [booksRead, setBooksRead] = useState([]);

  useEffect(() => {
    getBooksToRead();
  }, []);

  async function getBooksToRead() {
    const { data } = await supabase.from("books to read").select();
    setBooksToRead(data);
  }

  useEffect(() => {
    getBooksRead();
  }, []);

  async function getBooksRead() {
    const { data } = await supabase2.from("books read").select();
    setBooksRead(data);
  }

  return (
    <>
      <Header />
      <div class="container">
        <div class="tbr">
          <h3 class="mitr-regular heading">Books To Read</h3>
          <div class="tbr-content">
            <div class="tbr-title">
              <p class="subheading mitr-regular">Title</p>
              <ul class="mitr-regular">
                {booksToRead.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
            <div class="tbr-author">
              <p class="subheading mitr-regular">Author</p>
              <ul class="mitr-regular no-bullets">
                {booksToRead.map((book) => (
                  <li key={book.id}>{book.author}</li>
                ))}
              </ul>
            </div>
          </div>
          <FormTbr />
        </div>
        <div class="read">
          <h3 class="mitr-regular heading">Books Read</h3>
          <div class="read-content">
            <div class="read-title">
              <p class="subheading mitr-regular">Title</p>
              <ul class="mitr-regular">
                {booksRead.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
            <div class="read-author">
              <p class="subheading mitr-regular">Author</p>
              <ul class="mitr-regular no-bullets">
                {booksRead.map((book) => (
                  <li key={book.id}>{book.author}</li>
                ))}
              </ul>
            </div>
            <div class="read-rating">
              <p class="subheading mitr-regular">Rating</p>
              <ul class="mitr-regular no-bullets">
                {booksRead.map((book) => (
                  <li key={book.id}>{book.rating}</li>
                ))}
              </ul>
            </div>
          </div>
          <FormRead />
        </div>
      </div>
    </>
  );
}

export default App;
