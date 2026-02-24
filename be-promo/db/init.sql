-- ===================================
-- Create table promos
-- ===================================
CREATE TABLE IF NOT EXISTS promos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    expiry_date VARCHAR(100),
    voucher_code VARCHAR(100) UNIQUE,
    terms JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_voucher_code ON promos(voucher_code);

-- ===================================
-- Insert initial data
-- ===================================
INSERT INTO promos (title, description, image, expiry_date, voucher_code, terms)
VALUES
('Promo Diskon 10%', 'Diskon 10% untuk semua produk', null, '2026-12-31', 'DISKON10', '["Min purchase 100K", "Valid 1x per user"]'),
('Promo Gratis Ongkir', 'Gratis ongkir untuk pembelian di atas 200.000', null, '2026-12-31', 'ONGKIRGRATIS', '["Min purchase 100K", "Valid 1x per user"]');