CREATE TABLE guestbook (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_name TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
)

INSERT INTO guestbook (msg_name, content) VALUES ('Bhuvi','Nice guestbook idea.')