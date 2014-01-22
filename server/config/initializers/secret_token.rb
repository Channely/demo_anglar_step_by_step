# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = '67b7089d26b7156ca768988bb4bd727199fdc814bab2ec482486e3cee7e5bae52162276ba000916b0f3a47347e036749becb2199cabc25f12b0bee21efdec7a8'
