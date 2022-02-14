DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE,
  placed BOOLEAN DEFAULT FALSE
)