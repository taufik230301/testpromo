1. Jalan kan db container

masuk ke folder db dan jalankan 

docker compose up -d

2. run sql untuk create table
CREATE TABLE promos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    expiry_date VARCHAR(100),
    voucher_code VARCHAR(100) UNIQUE,
    terms JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_voucher_code ON promos(voucher_code);