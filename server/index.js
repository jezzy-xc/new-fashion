import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 5000;

// Middlwire
app.use(cors()); //To accept requests from different origins (frontend)
app.use(express.json()); // JSON data parse 

// Supabase Connection
//  .env file e SUPABASE_URL & SUPABASE_ANON_KEY 
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
supabase.from('products').select('*', { count: 'exact', head: true })
    .then(({ count, error }) => {
        if (error) {
            console.error("Database connection failed❌:", error.message);
        } else {
            console.log(" Database connected! Total products:✅", count);
        }
    });
// Root path to check server
app.get('/', (req, res) => {
    res.send('Zentryx Backend Server is running perfectly!');
});

// orders
app.post('/api/orders', async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    const { data, error } = await supabase
        .from('orders')
        .insert([{
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        }]);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, message: "Order placed successfully!" });
});

// API to fetch products  
app.get('/api/products', async (req, res) => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

app.get('/api/stats', async (req, res) => {
    const { count: orderCount } = await supabase.from('orders').select('*', { count: 'exact', head: true });
    const { count: userCount } = await supabase.from('users').select('*', { count: 'exact', head: true });
    const { count: productCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
    res.json({ orders: orderCount, users: userCount, products: productCount });
});
//  Backend Route to post new product (To add new product)
app.post('/api/addproduct', async (req, res) => {
    const { name, new_price, old_price, image, category } = req.body;

    // Insert Database
    const { data, error } = await supabase
        .from('products')
        .insert([{
            name: name,
            new_price: new_price,
            old_price: old_price,
            image: image,
            category: category
        }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, message: "Product added successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});