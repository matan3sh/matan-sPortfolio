const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://matanshaviro.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://matanshaviro.herokuapp.com', 
    'process.env.CLIENT_ID' : 'doC5bTxgZJwH4CbSpc40AKbxdlrgaJLz'
}