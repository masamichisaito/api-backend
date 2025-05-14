const express = require('express');
const cors = require('cors'); // ← これを追加
const app = express();
const userRoutes = require('./routes/users');

// ✅ CORSを許可
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});
