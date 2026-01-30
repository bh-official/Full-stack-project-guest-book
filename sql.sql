CREATE TABLE guestbook (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_name TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
)

INSERT INTO guestbook (msg_name, content) VALUES ('Bhuvi','Nice guestbook idea.')

ALTER TABLE guestbook
ADD COLUMN likes INTEGER DEFAULT 0;

ALTER TABLE guestbook
ALTER COLUMN likes SET DEFAULT 0;

ALTER TABLE guestbook DISABLE ROW LEVEL SECURITY;

INSERT INTO guestbook (msg_name, content, likes)
VALUES
('Oliver', 'Enjoyed stopping by and leaving a note here. Lovely experience.', 1),
('Amelia', 'Such a warm and welcoming place. Happy to sign the guestbook.', 2),
('Rahul', 'Glad I could visit and leave a message. Wishing you all the best.', 3),
('Isabella', 'Had a pleasant time here. Thanks for having this guestbook.', 1),
('Ethan', 'Just passing through and thought I’d leave a message. Cheers!', 0),
('Kavya', 'Nice to be here and write something memorable.', 2),
('Benjamin', 'A simple visit, but a nice one. Happy to leave my name.', 1),
('Nina', 'Leaving a little note to remember my visit.', 0);
